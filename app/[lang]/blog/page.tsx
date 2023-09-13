import { posts } from '../../data/posts';
import React from 'react';
import Pagination from '../components/Pagination';
import { getLocale } from '../locales';
import Posts from '../components/Posts';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locale = await getLocale(lang);
  return {
    title: `Horizons Games - ${locale.BLOG}`,
  };
}

export default async function Blog({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locale = await getLocale(lang);

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
        <h1 className="my-8 text-xl font-semibold tracking-wide sm:text-4xl">
          {locale.BLOG.toUpperCase()}
        </h1>
        <section className="flex flex-col sm:grid sm:grid-cols-2 md:w-11/12 lg:gap-8 xl:w-2/3">
          <Posts locale={locale} lang={lang} />
        </section>
        <Pagination pages={Math.ceil(posts.length / 4)} lang={lang} />
      </main>
    </>
  );
}
