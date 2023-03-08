import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import FullPost from '../../../app/components/FullPost';
import Layout from '../../../app/components/Layout';
import { posts } from '../../../app/data/posts';

export default function Post() {
  const router = useRouter();
  const id = Number(router.query.post) - 1;

  return (
    <>
      <Head>
        <title>{`Horizons Games | ${posts[id].title}`}</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mx-8 lg:w-2/3 lg:gap-8">
          <FullPost data={posts} />
        </div>
      </Layout>
    </>
  );
}
