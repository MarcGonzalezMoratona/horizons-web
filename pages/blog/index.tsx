import Head from 'next/head';
import Layout from '../../app/components/Layout';
import { post1 } from '../../app/data/post1';

export default function Blog() {
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
        <h1>Post de prueba</h1>
        <h2></h2>
        <h2></h2>
        <p></p>
        <p></p>
        <p></p>
      </Layout>
    </>
  );
}
