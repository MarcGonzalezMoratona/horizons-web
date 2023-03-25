import { GearIcon } from '@radix-ui/react-icons';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import Carousel from '../app/components/Carousel';
import ComingSoon from '../app/components/ComingSoon';
import { GlowingButton } from '../app/components/GlowingButton';
import Layout from '../app/components/Layout';
import SocialNetworks from '../app/components/SocialNetworks';
import { socialNetworks } from '../app/data/socialNetworks';
import { usePageHandler } from '../app/hooks/usePageInfo';

export default function Home() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('landing');
  });

  const images = [
    'legoStarWarsPlanet.jpg',
    'darthVader.jpg',
    'ahsokaTano.jpg',
    'stormTroopers.jpg',
    'battle.jpg',
  ];

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
        <Carousel images={images} priority />
        <ComingSoon />
        <SocialNetworks networks={socialNetworks} className="my-4" />
        <GlowingButton
          mainText="Axolotl Engine 2.0.0"
          CTAText={t('SEE_NEWS')}
          icon={
            <GearIcon className="h-5 w-5 text-secondary-600 animate-spin sm:animate-none sm:group-hover:animate-spin transition duration-200" />
          }
        />
      </Layout>
    </>
  );
}
