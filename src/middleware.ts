import { defineMiddleware } from 'astro:middleware';
import { setLocale, assertIsLocale } from './paraglide/runtime.js';

const SUPPORTED_LOCALES = ['en', 'id', 'ms'] as const;
const LOCALE_COOKIE = 'locale_preferred';

function getPreferredLocaleFromHeader(acceptLanguage: string | null): string {
  if (!acceptLanguage) return 'en';
  const parts = acceptLanguage.split(',').map((p) => {
    const [code, q = 'q=1'] = p.trim().split(';');
    const qValue = parseFloat(q.replace('q=', '').trim()) || 1;
    const lang = code.split('-')[0].toLowerCase();
    return { lang, q: qValue };
  });
  parts.sort((a, b) => b.q - a.q);
  const found = parts.find((p) => SUPPORTED_LOCALES.includes(p.lang as (typeof SUPPORTED_LOCALES)[number]));
  return found?.lang ?? 'en';
}

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  const isRoot = pathname === '/' || pathname === '';

  if (isRoot) {
    const cookie = context.request.headers.get('cookie') || '';
    const match = cookie.match(new RegExp(`${LOCALE_COOKIE}=([^;]+)`));
    const preferredFromCookie = match?.[1]?.toLowerCase();

    let targetLocale = preferredFromCookie && SUPPORTED_LOCALES.includes(preferredFromCookie as (typeof SUPPORTED_LOCALES)[number])
      ? preferredFromCookie
      : getPreferredLocaleFromHeader(context.request.headers.get('accept-language'));

    const redirectRes = context.redirect(`/${targetLocale}/`);
    redirectRes.headers.set('set-cookie', `${LOCALE_COOKIE}=${targetLocale}; path=/; max-age=31536000; samesite=lax`);
    return redirectRes;
  }

  if (context.currentLocale) {
    setLocale(assertIsLocale(context.currentLocale));
  }
  return next();
});
