import type { APIRoute } from 'astro';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

const fetchFont = async () => {
  const response = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff');
  return await response.arrayBuffer();
};

const fetchRegularFont = async () => {
  const response = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
  return await response.arrayBuffer();
};

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get('title') || 'Kodibot';
    // The query string may contain encoded entities like &amp;, so we decode them:
    const desc = (url.searchParams.get('desc') || 'Learn Coding & STEM Platform for Kids')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

    const [fontBold, fontRegular] = await Promise.all([fetchFont(), fetchRegularFont()]);

    // Construct the absolute path correctly for Astro's environment.
    // process.cwd() may refer to the project root, but during build or server runtime, it might point elsewhere.
    // To be safer, we resolve the path directly relative to the project structure where this file is run.
    const imagePath = path.resolve('./src/assets/mascot/profile-kodibot.png');
    const imageBase64 = fs.readFileSync(imagePath).toString('base64');
    const imageSrc = `data:image/png;base64,${imageBase64}`;

    // Construct the HTML string as a standard template string, bypassing satori-html's auto-escaping,
    // so characters like "&" in title/desc don't get converted to "&amp;"
    const markupString = `
      <div
        style="
          height: 100%;
          width: 100%;
          display: flex;
          background-image: linear-gradient(135deg, #111111 0%, #1f1f1f 100%);
          font-family: 'Inter';
          padding: 60px;
          flex-direction: column;
        "
      >
        <div
          style="
            display: flex;
            height: 100%;
            width: 100%;
            border-radius: 32px;
            background: rgba(45, 45, 45, 0.6);
            border: 2px solid rgba(249, 219, 43, 0.2);
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            position: relative;
          "
        >
          <!-- Decorative Yellow Accent at the top -->
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 8px; background-color: #F9DB2B; display: flex;"></div>

          <div style="display: flex; flex-direction: row; width: 100%; height: 100%; padding: 60px;">
            <!-- Left Content -->
            <div style="display: flex; flex-direction: column; justify-content: center; width: 62%;">
              <div style="display: flex; align-items: center; margin-bottom: 24px;">
                <div style="background-color: #F9DB2B; padding: 12px 24px; border-radius: 100px; display: flex; align-items: center; justify-content: center;">
                   <span style="color: #111111; font-weight: 700; font-size: 24px; letter-spacing: 1.5px;">KODIBOT</span>
                </div>
              </div>
              
              <h1 style="font-size: 64px; font-weight: 700; color: #FFFFFF; max-width: 900px; line-height: 1.15; margin: 0 0 24px 0;">
                ${title}
              </h1>
              
              <p style="font-size: 32px; font-weight: 400; color: #A1A1AA; max-width: 800px; line-height: 1.4; margin: 0;">
                ${desc}
              </p>
            </div>

            <!-- Right Profile Image -->
            <div style="display: flex; align-items: center; justify-content: flex-end; width: 38%; padding-left: 20px;">
              <div style="display: flex; width: 320px; height: 320px; border-radius: 160px; background-color: #F9DB2B; background-image: url('${imageSrc}'); background-repeat: no-repeat; background-position: center; background-size: 320px 320px; flex-shrink: 0; border: 8px solid #3f3f3f;">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const markup = html(markupString);

    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
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
