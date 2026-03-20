import type { APIRoute } from 'astro';
import { ImageResponse } from '@vercel/og';
import { html } from 'satori-html';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    
    // Blog-specific params
    const title = url.searchParams.get('title') || 'Blog Post';
    const desc = url.searchParams.get('desc') || 'Kodibot Blog';
    const author = url.searchParams.get('author') || 'Kodibot';
    const category = url.searchParams.get('category') || '';
    const readTime = url.searchParams.get('readTime') || '';
    const date = url.searchParams.get('date') || '';
    const lang = url.searchParams.get('lang') === 'id' ? 'id' : 'en';

    const fontBold = fs.readFileSync(
      path.resolve('./src/assets/fonts/inter-latin-ext-700-normal.woff')
    );
    const fontRegular = fs.readFileSync(
      path.resolve('./src/assets/fonts/inter-latin-ext-400-normal.woff')
    );

    const PROFILE_LOGO_SRC = `data:image/png;base64,${fs
      .readFileSync(path.resolve('./src/assets/mascot/profile-kodibot.png'))
      .toString('base64')}`;

    // Color palette
    const orange  = '#E18914';
    const orangeL = '#F5A830';
    const green   = '#1D8536';
    const greenL  = '#28A847';
    const yellow  = '#F9DB2B';
    const white   = '#FFFFFF';
    const nearW   = '#FFFDF7';
    const dark    = '#1A1A1A';
    const gray    = '#52525B';
    const lightG  = '#E4E4E7';

    // i18n labels
    const minRead = lang === 'id' ? 'menit baca' : 'min read';
    const blogLabel = lang === 'id' ? 'Blog' : 'Blog';

    // Dot pattern
    const dotsO = Array.from({ length: 45 })
      .map(() => `<div style="width:5px;height:5px;border-radius:50%;background:${orange};display:flex;"></div>`)
      .join('');

    const markupString = `
      <div style="height:100%;width:100%;display:flex;background-color:${nearW};font-family:'Plus Jakarta Sans';position:relative;overflow:hidden;">

        <!-- Subtle background elements -->
        <div style="position:absolute;top:-80px;right:-80px;width:400px;height:400px;border-radius:50%;background:rgba(225,137,20,0.06);display:flex;"></div>
        <div style="position:absolute;bottom:-60px;left:-60px;width:300px;height:300px;border-radius:50%;background:rgba(29,133,54,0.04);display:flex;"></div>

        <!-- Left accent bar -->
        <div style="position:absolute;top:0;left:0;width:6px;height:100%;background:linear-gradient(180deg,${orange} 0%,${green} 60%,${yellow} 100%);display:flex;"></div>

        <!-- Top accent line -->
        <div style="position:absolute;top:0;left:6px;right:0;height:4px;background:linear-gradient(90deg,${orange} 0%,${orangeL} 40%,${yellow} 70%,rgba(249,219,43,0) 100%);display:flex;"></div>

        <!-- Dot grid top-right -->
        <div style="position:absolute;top:24px;right:24px;width:140px;height:125px;display:flex;flex-wrap:wrap;gap:10px;opacity:0.08;">${dotsO}</div>

        <!-- Main content -->
        <div style="display:flex;flex-direction:column;width:100%;height:100%;padding:42px 48px 42px 56px;position:relative;z-index:1;">

          <!-- Header -->
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(145deg,#FFF9F0,#FFF3DC);border:3px solid ${orange};display:flex;align-items:center;justify-content:center;overflow:hidden;">
                <img src="${PROFILE_LOGO_SRC}" width="36" height="36" style="border-radius:9999px;object-fit:cover;display:block;" />
              </div>
              <div style="display:flex;flex-direction:column;">
                <span style="color:${dark};font-weight:700;font-size:16px;letter-spacing:2px;">KODIBOT</span>
                <span style="color:${gray};font-weight:600;font-size:12px;">${blogLabel}</span>
              </div>
            </div>
            ${category ? `
            <div style="display:flex;align-items:center;background:#EDFBF2;border:2px solid rgba(29,133,54,0.3);border-radius:100px;padding:8px 18px;">
              <div style="width:6px;height:6px;border-radius:50%;background:${greenL};display:flex;margin-right:8px;"></div>
              <span style="color:${green};font-weight:700;font-size:14px;">${category}</span>
            </div>
            ` : ''}
          </div>

          <!-- Title area -->
          <div style="display:flex;flex-direction:column;flex:1;justify-content:center;max-width:880px;">
            
            <!-- Title -->
            <div style="font-size:52px;font-weight:700;color:${dark};line-height:1.15;margin:0 0 16px;letter-spacing:-1px;display:flex;">
              ${title.length > 80 ? title.substring(0, 80) + '...' : title}
            </div>

            <!-- Colorful divider -->
            <div style="display:flex;align-items:center;margin:0 0 20px;gap:6px;">
              <div style="width:40px;height:4px;background:${orange};border-radius:2px;display:flex;"></div>
              <div style="width:14px;height:4px;background:${yellow};border-radius:2px;display:flex;"></div>
              <div style="width:8px;height:4px;background:${green};border-radius:2px;display:flex;"></div>
            </div>

            <!-- Description -->
            <div style="font-size:20px;font-weight:400;color:${gray};line-height:1.5;margin:0 0 32px;max-width:720px;display:flex;">
              ${desc.length > 140 ? desc.substring(0, 140) + '...' : desc}
            </div>

            <!-- Meta info -->
            <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
              ${author !== 'Kodibot' ? `
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:32px;height:32px;border-radius:50%;background:${lightG};display:flex;align-items:center;justify-content:center;">
                  <span style="color:${gray};font-weight:700;font-size:14px;">${author.charAt(0).toUpperCase()}</span>
                </div>
                <span style="color:${dark};font-weight:600;font-size:15px;">${author}</span>
              </div>
              <div style="width:1px;height:20px;background:${lightG};display:flex;"></div>
              ` : ''}
              ${readTime ? `
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="color:${gray};font-size:14px;">⏱</span>
                <span style="color:${gray};font-weight:500;font-size:14px;">${readTime} ${minRead}</span>
              </div>
              ` : ''}
              ${date ? `
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="color:${gray};font-size:14px;">📅</span>
                <span style="color:${gray};font-weight:500;font-size:14px;">${date}</span>
              </div>
              ` : ''}
            </div>

          </div>

          <!-- Footer -->
          <div style="display:flex;align-items:center;justify-content:space-between;padding-top:20px;border-top:1px solid rgba(0,0,0,0.06);">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:6px;height:6px;border-radius:50%;background:${orange};display:flex;"></div>
              <span style="color:rgba(0,0,0,0.4);font-size:13px;font-weight:600;">kodibot.id/blog</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="background:#FFF7ED;border:1.5px solid rgba(225,137,20,0.25);border-radius:100px;padding:6px 14px;display:flex;align-items:center;gap:5px;">
                <span style="color:${orange};font-weight:600;font-size:12px;">Scratch</span>
              </div>
              <div style="background:#EDFBF2;border:1.5px solid rgba(29,133,54,0.25);border-radius:100px;padding:6px 14px;display:flex;align-items:center;gap:5px;">
                <span style="color:${green};font-weight:600;font-size:12px;">STEM</span>
              </div>
              <div style="background:#FEFCE8;border:1.5px solid rgba(234,179,8,0.35);border-radius:100px;padding:6px 14px;display:flex;align-items:center;gap:5px;">
                <span style="color:#854D0E;font-weight:600;font-size:12px;">Robotics</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    `;

    const markup = html(markupString);

    const image = new ImageResponse(markup as any, {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Plus Jakarta Sans', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: fontBold,    weight: 700, style: 'normal' },
      ],
    });

    image.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return image as any;

  } catch (e: any) {
    console.error('Error generating blog OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
};
