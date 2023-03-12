import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Layout from '../../app/components/Layout';
import Pagination from '../../app/components/Pagination';
import Post from '../../app/components/Post';
import { posts } from '../../app/data/posts';
import React from 'react';
import { GetServerSideProps } from 'next/types';
import { ParsedUrlQuery } from 'querystring';

export default function Blog({ query }: { query: ParsedUrlQuery }) {
  const { t } = useTranslation('common');
  const { page } = query;
  const currentPage = Number(page);

  return (
    <>
      <Head>
        <title>Horizons Games | Blog</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-xl sm:text-2xl mt-4">{t('BLOG').toUpperCase()}</h1>
        <hr className="bg-black w-9/12 lg:w-7/12 h-0.5 my-4" />
        <section className="flex flex-col sm:grid sm:grid-cols-2 lg:w-2/3 gap-8">
          {posts.map((post) => {
            return (
              <React.Fragment key={post.id}>
                {post.id <= currentPage * 4 &&
                  post.id > (currentPage - 1) * 4 && <Post data={post} />}
              </React.Fragment>
            );
          })}
        </section>
        <Pagination pages={Math.round(posts.length / 4)} page={currentPage} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  {
    const { query } = context;

    if (!query.page || Number(query.page) > Math.round(posts.length / 4))
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
