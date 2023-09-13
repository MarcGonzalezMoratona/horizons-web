import { supportedLocales } from '../middleware';
import { posts } from './data/posts';

const URL = 'https://horizons-games.vercel.app';

export default async function sitemap() {
  const postRoutes = [];
  const blogRoutes = [];
  const routes = [];

  supportedLocales.forEach((locale) => {
    const localizedRoutes = ['', '/team', '/blog', '/engine'].map((route) => ({
      url: `${URL}/${locale}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }));
    routes.push(...localizedRoutes);

    const pages = Math.ceil(posts.length / 4);
    [...Array(pages).keys()].forEach((page) => {
      const blogRoute = {
        url: `${URL}/${locale}/blog?page=${page + 1}`,
        lastModified: new Date().toISOString().split('T')[0],
      };
      blogRoutes.push(blogRoute);
    });

    posts.forEach(({ slug }) => {
      const postRoute = {
        url: `${URL}/${locale}/blog/${slug}`,
        lastModified: new Date().toISOString().split('T')[0],
      };
      postRoutes.push(postRoute);
    });
  });

  return [...routes, ...blogRoutes, ...postRoutes];
}
