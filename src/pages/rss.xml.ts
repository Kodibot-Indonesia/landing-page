import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const site = context.site?.toString().replace(/\/$/, '') || 'https://kodibot.id';
  
  // Only include English posts in main RSS feed
  const englishPosts = posts
    .filter((post) => post.id.startsWith('en/'))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  
  return rss({
    title: 'Kodibot Blog - Coding & STEM for Kids',
    description: 'Articles about coding education, Arduino, and STEM for kids aged 8-15. Parenting tips and programming tutorials.',
    site: site,
    items: englishPosts.map((post) => {
      const slug = post.id.replace('en/', '').replace('.md', '');
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${slug}/`,
        categories: [post.data.category, ...(post.data.tags || [])],
        author: post.data.author,
      };
    }),
    customData: `<language>en</language>
<copyright>Copyright ${new Date().getFullYear()} Kodibot</copyright>
<webMaster>hello@kodibot.id</webMaster>
<managingEditor>hello@kodibot.id (Kodibot Team)</managingEditor>`,
  });
}
