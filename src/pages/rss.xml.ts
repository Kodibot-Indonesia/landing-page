import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  
  return rss({
    title: 'Kodibot Blog - Coding & STEM for Kids',
    description: 'Articles about coding education, Arduino, and STEM for kids aged 8-15. Parenting tips and programming tutorials.',
    site: context.site?.toString() || 'https://kodibot.id',
    items: posts
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => {
        const locale = post.id.split('/')[0];
        const url = locale === 'en' 
          ? `/blog/${post.slug}/` 
          : `/${locale}/blog/${post.slug}/`;
        
        return {
          title: post.data.title,
          pubDate: post.data.pubDate,
          description: post.data.description,
          link: url,
          categories: [post.data.category, ...post.data.tags],
          author: post.data.author,
        };
      }),
    customData: `<language>en</language>
<copyright>Copyright ${new Date().getFullYear()} Kodibot</copyright>
<webMaster>hello@kodibot.id</webMaster>
<managingEditor>hello@kodibot.id (Kodibot Team)</managingEditor>`,
  });
}
