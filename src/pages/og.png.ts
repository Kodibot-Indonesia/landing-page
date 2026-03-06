import type { APIRoute } from 'astro';
import { ImageResponse } from '@vercel/og';
import { html } from 'satori-html';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get('title') || 'Kodibot';

    const langParam = url.searchParams.get('lang');
    const lang = langParam === 'id' ? 'id' : 'en';

    const descDefaultEn = 'Coding & STEM Robotics platform for kids';
    const descDefaultId = 'Platform Coding & STEM Robotic untuk Anak Indonesia';
    const tagDefaultEn = 'Try for Free!';
    const tagDefaultId = 'Coba Gratis!';

    const rawDesc = url.searchParams.get('desc');
    const desc = (rawDesc || (lang === 'id' ? descDefaultId : descDefaultEn))
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    const tag = url.searchParams.get('tag') || (lang === 'id' ? tagDefaultId : tagDefaultEn);

    const fontBold = fs.readFileSync(
      path.resolve('./src/assets/fonts/inter-latin-ext-700-normal.woff')
    );
    const fontRegular = fs.readFileSync(
      path.resolve('./src/assets/fonts/inter-latin-ext-400-normal.woff')
    );

    const PROFILE_LOGO_SRC = `data:image/png;base64,${fs
      .readFileSync(path.resolve('./src/assets/mascot/profile-kodibot.png'))
      .toString('base64')}`;

    const orange  = '#E18914';
    const orangeL = '#F5A830';
    const green   = '#1D8536';
    const greenL  = '#28A847';
    const yellow  = '#F9DB2B';
    const white   = '#FFFFFF';
    const nearW   = '#FFFDF7';   // warm off-white background
    const dark    = '#1A1A1A';
    const gray    = '#52525B';

    const badgePlatformLabel =
      lang === 'id' ? 'Platform STEM Simulator #1 Indonesia' : 'Indonesia #1 STEM Simulator Platform';
    const chipAgeLabel = lang === 'id' ? 'Usia 6-15 Tahun' : 'Age 6-15';
    const chipArduinoLabel = lang === 'id' ? 'Arduino & Robot' : 'Arduino & Robotics';
    const ctaLabel = lang === 'id' ? 'Mulai Belajar Gratis' : 'Start Learning Free';
    const microCopyLabel =
      lang === 'id'
        ? 'Langsung Akses'
        : 'Instant Access';
    const studentsLabel = lang === 'id' ? '5000+ Siswa' : '5000+ Students';
    const bottomTaglineLabel =
      lang === 'id'
        ? 'Platform STEM Robotic & Coding untuk Anak Indonesia'
        : 'STEM Robotics & Coding Platform for Kids';

    const dotsO = Array.from({ length: 63 })
      .map(() => `<div style="width:6px;height:6px;border-radius:50%;background:${orange};display:flex;"></div>`)
      .join('');
    const dotsG = Array.from({ length: 20 })
      .map(() => `<div style="width:6px;height:6px;border-radius:50%;background:${green};display:flex;"></div>`)
      .join('');

    const markupString = `
      <div style="height:100%;width:100%;display:flex;background-color:${nearW};font-family:'Plus Jakarta Sans';position:relative;overflow:hidden;">

        <!-- Warm radial tint top-right -->
        <div style="position:absolute;top:-100px;right:-100px;width:600px;height:500px;border-radius:50%;background:rgba(225,137,20,0.07);display:flex;"></div>
        <!-- Green radial tint bottom-left -->
        <div style="position:absolute;bottom:-120px;left:-80px;width:420px;height:420px;border-radius:50%;background:rgba(29,133,54,0.05);display:flex;"></div>
        <!-- Yellow soft blob bottom-left -->
        <div style="position:absolute;bottom:-80px;left:-80px;width:340px;height:340px;border-radius:50%;background:rgba(249,219,43,0.2);display:flex;"></div>

        <!-- Left accent bar -->
        <div style="position:absolute;top:0;left:0;width:8px;height:100%;background:linear-gradient(180deg,${orange} 0%,${green} 55%,${yellow} 100%);display:flex;"></div>
        <!-- Top accent line -->
        <div style="position:absolute;top:0;left:8px;right:0;height:6px;background:linear-gradient(90deg,${orange} 0%,${orangeL} 35%,${yellow} 65%,rgba(249,219,43,0) 100%);display:flex;"></div>

        <!-- Dot grid top-right -->
        <div style="position:absolute;top:28px;right:28px;width:200px;height:180px;display:flex;flex-wrap:wrap;gap:13px;opacity:0.1;">${dotsO}</div>
        <!-- Dot grid bottom-left -->
        <div style="position:absolute;bottom:52px;left:24px;width:110px;height:88px;display:flex;flex-wrap:wrap;gap:13px;opacity:0.12;">${dotsG}</div>

        <!-- Main layout -->
        <div style="display:flex;flex-direction:row;width:100%;height:100%;padding:50px 48px 50px 60px;position:relative;z-index:1;align-items:center;">

          <!-- ── LEFT ── -->
          <div style="display:flex;flex-direction:column;justify-content:center;width:57%;padding-right:32px;">

            <!-- Top badges -->
            <div style="display:flex;align-items:center;margin-bottom:20px;gap:10px;">
              <div style="display:flex;align-items:center;background:${orange};border-radius:8px;padding:7px 18px;">
                <span style="color:${white};font-weight:700;font-size:13px;letter-spacing:3px;">KODIBOT</span>
              </div>
              <div style="display:flex;align-items:center;gap:6px;background:#EDFBF2;border:1.5px solid rgba(29,133,54,0.3);border-radius:100px;padding:6px 14px;">
                <div style="width:7px;height:7px;border-radius:50%;background:${greenL};display:flex;"></div>
                <span style="color:${green};font-weight:700;font-size:13px;">${badgePlatformLabel}</span>
              </div>
              ${tag ? `<div style="display:flex;align-items:center;background:#FFF3CC;border:1.5px solid rgba(234,179,8,0.4);border-radius:8px;padding:7px 14px;"><span style="color:#B45309;font-weight:700;font-size:13px;">${tag}</span></div>` : ''}
            </div>

            <!-- Headline -->
            <div style="font-size:64px;font-weight:700;color:${dark};line-height:1.1;margin:0 0 6px;letter-spacing:-1.5px;display:flex;">
              ${title}
            </div>

            <!-- Colorful divider -->
            <div style="display:flex;align-items:center;margin:16px 0 18px;gap:8px;">
              <div style="width:52px;height:5px;background:${orange};border-radius:3px;display:flex;"></div>
              <div style="width:18px;height:5px;background:${yellow};border-radius:3px;display:flex;"></div>
              <div style="width:10px;height:5px;background:${green};border-radius:3px;display:flex;"></div>
            </div>

            <!-- Description -->
            <div style="font-size:22px;font-weight:400;color:${gray};line-height:1.55;margin:0 0 26px;max-width:560px;display:flex;">
              ${desc}
            </div>

            <!-- Feature chips -->
            <div style="display:flex;flex-direction:row;gap:10px;flex-wrap:wrap;">
              <div style="display:flex;align-items:center;gap:7px;background:#FFF7ED;border:2px solid rgba(225,137,20,0.35);border-radius:100px;padding:9px 18px;">
                <div style="width:8px;height:8px;border-radius:50%;background:${orange};display:flex;"></div>
                <span style="color:#C2700A;font-weight:700;font-size:15px;">Scratch & MakeCode</span>
              </div>
              <div style="display:flex;align-items:center;gap:7px;background:#EDFBF2;border:2px solid rgba(29,133,54,0.35);border-radius:100px;padding:9px 18px;">
                <div style="width:8px;height:8px;border-radius:50%;background:${green};display:flex;"></div>
                <span style="color:${green};font-weight:700;font-size:15px;">${chipAgeLabel}</span>
              </div>
              <div style="display:flex;align-items:center;gap:7px;background:#FEFCE8;border:2px solid rgba(234,179,8,0.4);border-radius:100px;padding:9px 18px;">
                <div style="width:8px;height:8px;border-radius:50%;background:${yellow};display:flex;"></div>
                <span style="color:#854D0E;font-weight:700;font-size:15px;">${chipArduinoLabel}</span>
              </div>
            </div>

          </div>

          <!-- ── RIGHT ── -->
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:43%;">

            <!-- Mascot ring stack -->
            <div style="position:relative;display:flex;align-items:center;justify-content:center;width:310px;height:310px;">

              <!-- Mascot circle — warm cream background -->
              <div style="width:238px;height:238px;border-radius:50%;background:linear-gradient(145deg,#FFF9F0,#FFF3DC);border:6px solid ${orange};display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;">
                <img src="${PROFILE_LOGO_SRC}" width="210" height="210" style="border-radius:9999px;object-fit:cover;display:block;" />
              </div>

              <!-- Floating badge — top right (white card) -->
              <div style="position:absolute;top:8px;right:-18px;background:${white};border:2px solid rgba(225,137,20,0.2);border-radius:14px;padding:9px 16px;display:flex;align-items:center;gap:6px;">
                <span style="color:#F59E0B;font-size:16px;">⭐</span>
                <span style="color:${dark};font-weight:700;font-size:14px;">4.9/5 Rating</span>
              </div>

              <!-- Floating badge — bottom left (white card) -->
              <div style="position:absolute;bottom:10px;left:-22px;background:${white};border:2px solid rgba(29,133,54,0.2);border-radius:14px;padding:9px 16px;display:flex;align-items:center;gap:6px;">
                <span style="font-size:16px;">🎓</span>
                <span style="color:${dark};font-weight:700;font-size:14px;">${studentsLabel}</span>
              </div>

            </div>

            <!-- CTA button + micro-copy -->
            <div style="margin-top:20px;display:flex;flex-direction:column;align-items:center;gap:8px;">
              <div style="background:linear-gradient(135deg,${orange},${orangeL});border-radius:100px;padding:14px 34px;display:flex;align-items:center;gap:8px;">
                <span style="color:${white};font-weight:700;font-size:19px;">${ctaLabel}</span>
                <span style="color:rgba(255,255,255,0.85);font-weight:700;font-size:19px;">→</span>
              </div>
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="color:#A1A1AA;font-size:13px;font-weight:600;">${microCopyLabel}</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Bottom bar -->
        <div style="position:absolute;bottom:0;left:8px;right:0;height:44px;background:rgba(0,0,0,0.04);border-top:1px solid rgba(0,0,0,0.07);display:flex;align-items:center;padding:0 60px;">
          <div style="display:flex;align-items:center;gap:8px;display:flex;">
            <div style="width:8px;height:8px;border-radius:50%;background:${orange};display:flex;"></div>
            <span style="color:rgba(0,0,0,0.4);font-size:14px;font-weight:700;letter-spacing:1px;">kodibot.id</span>
          </div>
          <div style="flex:1;display:flex;"></div>
          <span style="color:rgba(0,0,0,0.25);font-size:14px;">${bottomTaglineLabel}</span>
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
    console.error('Error generating OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
};