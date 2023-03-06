import Head from 'next/head';
import ComingSoon from '../app/components/ComingSoon';
import Layout from '../app/components/Layout';
import SocialNetworks from '../app/components/SocialNetworks';
import { socialNetworks } from '../app/data/socialNetworks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Horizons Games</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ComingSoon />
        <SocialNetworks networks={socialNetworks}/>
      </Layout>
    </>
  );
}
