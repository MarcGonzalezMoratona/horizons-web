import { GearIcon } from '@radix-ui/react-icons';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import Carousel from '../app/components/Carousel';
import { GlowingButton } from '../app/components/GlowingButton';
import Layout from '../app/components/Layout';
import { usePageHandler } from '../app/hooks/usePageInfo';
import EngineDescription from '../app/components/EngineDescription';
import FAQs from '../app/components/FAQs';
import { FAQsContent } from '../app/data/FAQs';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('landing');
  });

  const images = [
    'blog/bix.png',
    'drones.png',
    'hangar.png',
    'skybox.png',
    'turret.png',
  ];

  const text: BannerLayer = {
    scale: [0.01, 1, 'easeInOutCirc'],
    opacity: [0.01, 1, 'easeInOutCirc'],
    children: (
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className=" select-none text-4xl font-bold sm:text-8xl">
          HORIZONS GAMES
        </h1>
      </div>
    ),
    expanded: false,
  };

  const video: BannerLayer = {
    children: (
      <video
        className="min-h-full w-auto min-w-full max-w-none"
        autoPlay
        muted
        loop
      >
        <source src="/cosmos.mp4" type="video/mp4" />
      </video>
    ),
    expanded: false,
  };

  return (
    <>
      <Head>
        <title>Horizons Games</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="author" content="Horizons Games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="video games, game engine, Horizons Games, Axolotl Engine, lego"
        />
        <meta
          name="google-site-verification"
          content="rXKwXvp4XkJ34NRVZ0HkNfRoylLC7zR_IyROC-FhIPg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[video, text]}
            className="min-w-screen min-h-screen w-auto max-w-none"
          />
        </ParallaxProvider>
        <Carousel images={images} priority />
        <EngineDescription />
        <GlowingButton
          mainText="Axolotl Engine 0.3.0"
          CTAText={t('SEE_NEWS')}
          icon={
            <GearIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          }
        />
        <FAQs content={FAQsContent} />
      </Layout>
    </>
  );
}
