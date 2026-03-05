import type { APIRoute } from 'astro';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

const fetchFont = async (url: string) => {
  const response = await fetch(url);
  return await response.arrayBuffer();
};

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

    const imagePath = path.resolve('./src/assets/mascot/profile-kodibot.svg');
    // Falls back to PNG if SVG not found
    const imagePathFallback = path.resolve('./src/assets/mascot/profile-kodibot.png');

    let imageSrc = '';
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      const ext = imagePath.endsWith('.svg') ? 'svg+xml' : 'png';
      imageSrc = `data:image/${ext};base64,${imageBuffer.toString('base64')}`;
    } catch {
      try {
        const imageBuffer = fs.readFileSync(imagePathFallback);
        imageSrc = `data:image/png;base64,${imageBuffer.toString('base64')}`;
      } catch {
        imageSrc = '';
      }
    }

    // Colors
    const orange = '#E18914';
    const green = '#1D8536';
    const yellow = '#F9DB2B';
    const dark = '#2D2D2D';
    const white = '#FFFFFF';
    const lightGray = '#F3F4F6';
    const gray = '#6B7280';

    const markupString = `
      <div
        style="
          height: 100%;
          width: 100%;
          display: flex;
          background-color: ${white};
          font-family: 'Inter';
          position: relative;
          overflow: hidden;
        "
      >
        <!-- Background pattern dots (top-right) -->
        <div style="position: absolute; top: -30px; right: -30px; width: 320px; height: 320px; display: flex; flex-wrap: wrap; gap: 18px; opacity: 0.12;">
          ${Array.from({ length: 64 }).map(() => `<div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${orange}; display: flex;"></div>`).join('')}
        </div>

        <!-- Background circle accent bottom-left -->
        <div style="position: absolute; bottom: -80px; left: -80px; width: 320px; height: 320px; border-radius: 50%; background-color: ${yellow}; opacity: 0.18; display: flex;"></div>

        <!-- Green arc top-left decoration -->
        <div style="position: absolute; top: 0; left: 0; width: 12px; height: 100%; background-color: ${green}; display: flex;"></div>

        <!-- Orange top bar -->
        <div style="position: absolute; top: 0; left: 12px; right: 0; height: 10px; background-color: ${orange}; display: flex;"></div>

        <!-- Main content area -->
        <div style="display: flex; flex-direction: row; width: 100%; height: 100%; padding: 60px 64px 60px 72px; position: relative; z-index: 1;">

          <!-- LEFT: Text content -->
          <div style="display: flex; flex-direction: column; justify-content: center; width: 64%; padding-right: 48px;">

            <!-- Logo badge -->
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

            <!-- Divider line -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
              <div style="width: 48px; height: 5px; background-color: ${orange}; border-radius: 4px; display: flex;"></div>
              <div style="width: 16px; height: 5px; background-color: ${yellow}; border-radius: 4px; display: flex;"></div>
              <div style="width: 8px; height: 5px; background-color: ${green}; border-radius: 4px; display: flex;"></div>
            </div>

            <!-- Description -->
            <p style="font-size: 28px; font-weight: 400; color: ${gray}; line-height: 1.5; margin: 0 0 32px 0; max-width: 660px;">
              ${desc}
            </p>

            <!-- Feature chips -->
            <div style="display: flex; flex-direction: row; gap: 12px; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 8px; background-color: #FFF7E6; border: 2px solid ${orange}; border-radius: 100px; padding: 8px 20px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${orange}; display: flex;"></div>
                <span style="color: ${orange}; font-weight: 700; font-size: 18px;">Scratch & Blockly</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; background-color: #EDFBF2; border: 2px solid ${green}; border-radius: 100px; padding: 8px 20px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${green}; display: flex;"></div>
                <span style="color: ${green}; font-weight: 700; font-size: 18px;">Age 6–15</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; background-color: #FFFBEA; border: 2px solid ${yellow}; border-radius: 100px; padding: 8px 20px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${yellow}; display: flex;"></div>
                <span style="color: ${dark}; font-weight: 700; font-size: 18px;">Interactive & Fun</span>
              </div>
            </div>
          </div>

          <!-- RIGHT: Mascot area -->
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 36%;">
            <!-- Mascot container with colored ring -->
            <div style="
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 300px;
              height: 300px;
            ">
              <!-- Outer ring yellow -->
              <div style="
                position: absolute;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                border: 6px solid ${yellow};
                display: flex;
              "></div>
              <!-- Inner ring orange dashed effect - simulated via rotated squares -->
              <div style="
                position: absolute;
                width: 280px;
                height: 280px;
                border-radius: 50%;
                border: 3px dashed ${orange};
                opacity: 0.5;
                display: flex;
              "></div>
              <!-- Image circle -->
              <div style="
                width: 258px;
                height: 258px;
                border-radius: 50%;
                background-color: ${lightGray};
                background-image: url('${imageSrc}');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                display: flex;
                overflow: hidden;
                border: 6px solid ${white};
                box-shadow: 0 8px 32px rgba(225,137,20,0.18);
              ">
              </div>
            </div>

            <!-- Star/badge decoration below mascot -->
            <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px; background-color: ${green}; border-radius: 100px; padding: 10px 24px;">
              <span style="color: ${white}; font-weight: 700; font-size: 20px;">🚀 Learn Coding Now!</span>
            </div>
          </div>

        </div>

        <!-- Bottom URL bar -->
        <div style="position: absolute; bottom: 0; left: 12px; right: 0; height: 40px; background-color: ${dark}; display: flex; align-items: center; padding: 0 64px;">
          <span style="color: rgba(255,255,255,0.5); font-size: 16px; font-weight: 400; letter-spacing: 1px;">kodibot.id</span>
          <div style="flex: 1; display: flex;"></div>
          <span style="color: rgba(255,255,255,0.3); font-size: 16px;">Platform STEM & Coding for Kids</span>
        </div>

      </div>
    `;

    const markup = html(markupString);

    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
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