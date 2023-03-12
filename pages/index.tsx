import { GearIcon } from '@radix-ui/react-icons';
import Head from 'next/head';
import ComingSoon from '../app/components/ComingSoon';
import { GlowingButton } from '../app/components/GlowingButton';
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
        <SocialNetworks networks={socialNetworks} className="my-4" />
        <GlowingButton
          mainText="Axolotl Engine 2.0.0"
          CTAText="Ver novedades"
          icon={
            <GearIcon className="h-5 w-5 text-emerald-600 animate-spin sm:animate-none sm:group-hover:animate-spin transition duration-200" />
          }
        />
      </Layout>
    </>
  );
}
