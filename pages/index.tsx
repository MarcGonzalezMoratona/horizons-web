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
import Connection from '../app/components/Connection';
import { useDevice } from '../app/hooks/useDevice';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();
  const device = useDevice();
  const isMobile = device === 'mobile';

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

  const tools = [
    'C++.png',
    'renderDoc.png',
    'maya.png',
    'blender.png',
    'substancePainter.png',
    'visualStudio.png',
    'discord.png',
    'C++.png',
    'renderDoc.png',
    'maya.png',
    'blender.png',
    'substancePainter.png',
    'visualStudio.png',
    'discord.png',
    'C++.png',
    'renderDoc.png',
    'maya.png',
    'blender.png',
    'substancePainter.png',
    'visualStudio.png',
    'discord.png',
  ];

  const text: BannerLayer = {
    scale: [0.01, 1, 'easeInOutCirc'],
    opacity: [0.01, 1, 'easeInOutCirc'],
    children: (
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className=" select-none text-3xl font-bold text-neutral-100 sm:text-6xl lg:text-8xl">
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

  const date = new Date(Date.now());
  let nextMilestone = 'VS1';
  const dates = {
    CD: new Date('2023-03-14'),
    VS1: new Date('2023-03-20'),
    VS2: new Date('2023-04-23'),
    VS3: new Date('2023-06-01'),
    Alpha: new Date('2023-06-29'),
    Beta: new Date('2023-09-13'),
    'Gold Master': new Date('2023-10-11'),
    Release: new Date('2023-11-10'),
  };
  if (date >= dates.CD && date <= dates.VS1) nextMilestone = 'VS1';
  else if (date > dates.VS1 && date <= dates.VS2) nextMilestone = 'VS2';
  else if (date > dates.VS2 && date <= dates.VS3) nextMilestone = 'VS3';
  else if (date > dates.VS3 && date <= dates.Alpha) nextMilestone = 'Alpha';
  else if (date > dates.Alpha && date <= dates.Beta) nextMilestone = 'Beta';
  else if (date > dates.Beta && date <= dates['Gold Master'])
    nextMilestone = 'GM';
  else if (date > dates['Gold Master'] && date <= dates.Release)
    nextMilestone = 'Release';
  else nextMilestone = 'Published';

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
        <section className="flex w-full flex-col justify-center">
          <h2 className="my-8 text-center text-2xl sm:text-4xl">
            Our game development journey
          </h2>
          <div className="items flex w-full justify-center gap-8">
            {!isMobile && (
              <div>
                <Connection animateSlide={nextMilestone === 'VS1'} />
                <Connection
                  animatePing={nextMilestone === 'VS1'}
                  animateSlide={nextMilestone === 'VS2'}
                />
                <Connection
                  animatePing={nextMilestone === 'VS2'}
                  animateSlide={nextMilestone === 'VS3'}
                />
                <Connection
                  animatePing={nextMilestone === 'VS3'}
                  animateSlide={nextMilestone === 'Alpha'}
                />
                <Connection
                  animatePing={nextMilestone === 'Alpha'}
                  animateSlide={nextMilestone === 'Beta'}
                />
                <Connection
                  animatePing={nextMilestone === 'Beta'}
                  animateSlide={nextMilestone === 'GM'}
                />
                <Connection
                  animatePing={nextMilestone === 'GM'}
                  animateSlide={nextMilestone === 'Release'}
                />
                <Connection animatePing={nextMilestone === 'Published'} />
              </div>
            )}
            <ol className="flex flex-col justify-center">
              <li
                className={`mt-[60px] h-20 text-xl ${
                  nextMilestone === 'CD' && 'font-bold'
                }`}
              >
                Concept Discovery
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'VS1' && 'font-bold'
                }`}
              >
                Vertical Slice 1
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'VS2' && 'font-bold'
                }`}
              >
                Vertical Slice 2
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'VS3' && 'font-bold'
                }`}
              >
                Vertical Slice 3
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'Alpha' && 'font-bold'
                }`}
              >
                Alpha
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'Beta' && 'font-bold'
                }`}
              >
                Beta
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'GM' && 'font-bold'
                }`}
              >
                Gold Master
              </li>
              <li
                className={`h-20 text-xl ${
                  nextMilestone === 'Release' && 'font-bold'
                }`}
              >
                Release
              </li>
            </ol>
            {!isMobile && (
              <div className="ml-20 h-3/4 w-2/3 self-center rounded-xl bg-neutral-900 dark:bg-neutral-800" />
            )}
          </div>
        </section>
        <Carousel images={images} priority />
        <GlowingButton
          mainText="Axolotl Engine 0.3.0"
          CTAText={t('SEE_NEWS')}
          icon={
            <GearIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          }
        />
        <EngineDescription />
        <h2 className="my-8 text-center text-2xl sm:w-2/3 sm:text-4xl">
          Herramientas y tecnologías utilizadas
        </h2>
        <div
          className="relative z-0 my-4 h-20 w-5/6 overflow-hidden before:absolute 
          before:left-0 before:z-10 before:h-full before:w-10 before:justify-self-start before:bg-gradient-to-r before:from-neutral-100 before:to-transparent after:absolute 
          after:right-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-neutral-100 after:to-transparent dark:bg-neutral-900 
          dark:before:from-neutral-900 dark:after:from-neutral-900 sm:h-32 
          sm:w-2/3 before:md:w-52 after:md:w-52"
        >
          <ul
            className={`absolute top-0 left-0 flex w-[2184px] animate-slideLeft gap-6 sm:w-[3520px] sm:gap-10`}
          >
            {tools.map((tool, index) => {
              return (
                <li
                  className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white sm:h-32 sm:w-32"
                  key={index}
                >
                  <Image
                    className="rounded"
                    src={`/tools/${tool}`}
                    width={`${isMobile ? 64 : 100}`}
                    height={`${isMobile ? 64 : 100}`}
                    alt={'C++ logo'}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <FAQs content={FAQsContent} />
      </Layout>
    </>
  );
}
