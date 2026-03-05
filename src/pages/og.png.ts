import type { APIRoute } from 'astro';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

// Logomark pre-rasterized dari Logomark.svg → PNG 512px
// Tidak perlu baca file saat runtime — bebas masalah path Astro
// Untuk update: node scripts/generate-logomark.mjs
const LOGOMARK_SRC = `data:image/png;base64,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`;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get('title') || 'Kodibot';
    const desc = (url.searchParams.get('desc') || 'Platform Coding & STEM Robotic for Kids')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    const tag = url.searchParams.get('tag') || '';

    const fontBold = fs.readFileSync(
      path.resolve('./src/assets/fonts/inter-latin-ext-700-normal.woff')
    );
    const fontRegular = fs.readFileSync(
      path.resolve('./src/assets/fonts/inter-latin-ext-400-normal.woff')
    );

    // Colors
    const orange = '#E18914';
    const green = '#1D8536';
    const yellow = '#F9DB2B';
    const dark = '#2D2D2D';
    const white = '#FFFFFF';
    const gray = '#6B7280';

    const markupString = `
      <div
        style="
          height: 100%;
          width: 100%;
          display: flex;
          background-color: ${white};
          font-family: 'Plus Jakarta Sans';
          position: relative;
          overflow: hidden;
        "
      >
        <!-- Background pattern dots top-right -->
        <div style="position: absolute; top: -30px; right: -30px; width: 320px; height: 320px; display: flex; flex-wrap: wrap; gap: 18px; opacity: 0.12;">
          ${Array.from({ length: 64 }).map(() => `<div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${orange}; display: flex;"></div>`).join('')}
        </div>

        <!-- Background circle accent bottom-left -->
        <div style="position: absolute; bottom: -80px; left: -80px; width: 320px; height: 320px; border-radius: 50%; background-color: ${yellow}; opacity: 0.18; display: flex;"></div>

        <!-- Green bar left -->
        <div style="position: absolute; top: 0; left: 0; width: 12px; height: 100%; background-color: ${green}; display: flex;"></div>

        <!-- Orange top bar -->
        <div style="position: absolute; top: 0; left: 12px; right: 0; height: 10px; background-color: ${orange}; display: flex;"></div>

        <!-- Main content -->
        <div style="display: flex; flex-direction: row; width: 100%; height: 100%; padding: 60px 64px 60px 72px; position: relative; z-index: 1;">

          <!-- LEFT -->
          <div style="display: flex; flex-direction: column; justify-content: center; width: 64%; padding-right: 48px;">

            <!-- Badge -->
            <div style="display: flex; align-items: center; margin-bottom: 28px; gap: 12px;">
              <div style="display: flex; align-items: center; justify-content: center; background-color: ${orange}; border-radius: 12px; padding: 8px 20px;">
                <span style="color: ${white}; font-weight: 700; font-size: 20px; letter-spacing: 2px;">KODIBOT</span>
              </div>
              ${tag ? `<div style="display: flex; align-items: center; justify-content: center; background-color: ${yellow}; border-radius: 8px; padding: 6px 14px;"><span style="color: ${dark}; font-weight: 700; font-size: 16px;">${tag}</span></div>` : ''}
            </div>

            <!-- Title -->
            <h1 style="font-size: 62px; font-weight: 700; color: ${dark}; line-height: 1.15; margin: 0 0 20px 0; max-width: 700px;">
              ${title}
            </h1>

            <!-- Divider -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
              <div style="width: 48px; height: 5px; background-color: ${orange}; border-radius: 4px; display: flex;"></div>
              <div style="width: 16px; height: 5px; background-color: ${yellow}; border-radius: 4px; display: flex;"></div>
              <div style="width: 8px; height: 5px; background-color: ${green}; border-radius: 4px; display: flex;"></div>
            </div>

            <!-- Description -->
            <p style="font-size: 28px; font-weight: 400; color: ${gray}; line-height: 1.5; margin: 0 0 32px 0; max-width: 660px;">
              ${desc}
            </p>

            <!-- Chips -->
            <div style="display: flex; flex-direction: row; gap: 12px; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 8px; background-color: #FFF7E6; border: 2px solid ${orange}; border-radius: 100px; padding: 8px 20px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${orange}; display: flex;"></div>
                <span style="color: ${orange}; font-weight: 700; font-size: 18px;">Scratch & MakeCode</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; background-color: #EDFBF2; border: 2px solid ${green}; border-radius: 100px; padding: 8px 20px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${green}; display: flex;"></div>
                <span style="color: ${green}; font-weight: 700; font-size: 18px;">Age 6-15</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; background-color: #FFFBEA; border: 2px solid ${yellow}; border-radius: 100px; padding: 8px 20px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${yellow}; display: flex;"></div>
                <span style="color: ${dark}; font-weight: 700; font-size: 18px;">Interactive & Fun</span>
              </div>
            </div>
          </div>

          <!-- RIGHT: Mascot -->
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 36%;">
            <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 300px; height: 300px;">
              <div style="position: absolute; width: 300px; height: 300px; border-radius: 50%; border: 6px solid ${yellow}; display: flex;"></div>
              <div style="position: absolute; width: 280px; height: 280px; border-radius: 50%; border: 3px dashed ${orange}; opacity: 0.5; display: flex;"></div>
              <img src="${LOGOMARK_SRC}" width="258" height="258" style="border-radius: 9999px; border: 6px solid ${white}; box-shadow: 0 8px 32px rgba(225,137,20,0.18);" />
            </div>
            <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px; background-color: ${green}; border-radius: 100px; padding: 10px 24px;">
              <span style="color: ${white}; font-weight: 700; font-size: 20px;">Learn Coding Now!</span>
            </div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div style="position: absolute; bottom: 0; left: 12px; right: 0; height: 40px; background-color: ${dark}; display: flex; align-items: center; padding: 0 64px;">
          <span style="color: rgba(255,255,255,0.5); font-size: 16px; font-weight: 400; letter-spacing: 1px;">kodibot.id</span>
          <div style="flex: 1; display: flex;"></div>
          <span style="color: rgba(255,255,255,0.3); font-size: 16px;">Platform STEM Robotic & Coding for Kids</span>
        </div>

      </div>
    `;

    const markup = html(markupString);

    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Plus Jakarta Sans', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: fontBold, weight: 700, style: 'normal' },
      ],
    });

    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: 1200 },
    });

    const imageData = resvg.render();
    const pngBuffer = imageData.asPng();

    return new Response(pngBuffer as any, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (e: any) {
    console.error('Error generating OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
};