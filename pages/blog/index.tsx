import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Layout from '../../app/components/Layout';
import Pagination from '../../app/components/Pagination';
import Post from '../../app/components/Post';
import { posts } from '../../app/data/posts';
import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { usePageHandler } from '../../app/hooks/usePageInfo';

export default function Blog({ query }: { query: ParsedUrlQuery }) {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();
  const { page } = query;
  const currentPage = Number(page);
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  useEffect(() => {
    PageHandler('blog');
  });

  return (
    <>
      <Head>
        <title>Horizons Games - Blog</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="my-8 text-xl font-semibold tracking-wide sm:text-4xl">
          {t('BLOG').toUpperCase()}
        </h1>
        <section className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:w-2/3">
          {sortedPosts.map((post) => {
            return (
              <React.Fragment key={post.id}>
                {post.id > posts.length - currentPage * 4 &&
                  post.id <= posts.length - (currentPage - 1) * 4 && (
                    <Post data={post} />
                  )}
              </React.Fragment>
            );
          })}
        </section>
        <Pagination pages={Math.ceil(posts.length / 4)} page={currentPage} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  {
    const { query } = context;

    if (!query.page || Number(query.page) > Math.ceil(posts.length / 4))
      return {
        notFound: true,
      };

    return {
      props: {
        query,
      },
    };
  }
};
