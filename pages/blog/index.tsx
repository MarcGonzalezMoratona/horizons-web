import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Layout from '../../app/components/Layout';
import Post from '../../app/components/Post';
import { posts } from '../../app/data/posts';

export default function Blog() {
  const { t } = useTranslation('common');

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
        <h1 className="text-xl sm:text-2xl mt-2">{t('BLOG').toUpperCase()}</h1>
        <hr className="bg-black w-9/12 lg:w-7/12 h-0.5" />
        <section className="flex flex-col sm:grid sm:grid-cols-2 lg:w-2/3 gap-8">
          {posts.map((post) => {
            return <Post data={post} key={post.id} />;
          })}
        </section>
      </Layout>
    </>
  );
}
