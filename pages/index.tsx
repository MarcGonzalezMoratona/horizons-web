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
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useDevice } from '../app/hooks/useDevice';
import Image from 'next/image';
import ProjectPhases from '../app/components/ProjectPhases';
import { tools } from '../app/data/tools';

export default function Home() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();
  const device = useDevice();
  const isMobile = device === 'mobile';

  useEffect(() => {
    PageHandler('landing');
  });

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
    VS1: new Date('2023-03-28'),
    VS2: new Date('2023-04-25'),
    VS3: new Date('2023-06-01'),
    Alpha: new Date('2023-06-29'),
    Beta: new Date('2023-09-13'),
    'Gold Master': new Date('2023-10-11'),
    Release: new Date('2023-11-10'),
  };
  if (date >= dates.CD && date < dates.VS1) nextMilestone = 'VS1';
  else if (date >= dates.VS1 && date < dates.VS2) nextMilestone = 'VS2';
  else if (date >= dates.VS2 && date < dates.VS3) nextMilestone = 'VS3';
  else if (date >= dates.VS3 && date < dates.Alpha) nextMilestone = 'Alpha';
  else if (date >= dates.Alpha && date < dates.Beta) nextMilestone = 'Beta';
  else if (date >= dates.Beta && date < dates['Gold Master'])
    nextMilestone = 'GM';
  else if (date >= dates['Gold Master'] && date < dates.Release)
    nextMilestone = 'Release';
  else nextMilestone = 'Published';

  const FAQsContent = [
    { title: t('FAQ_1'), description: t('FAQ_1_ANSWER') },
    {
      title: t('FAQ_2'),
      description: t('FAQ_2_ANSWER'),
      link: ' GitHub.',
      url: 'https://github.com/Horizons-Games/Axolotl-Engine/releases',
    },
    // { title: t('FAQ_3'), description: t('FAQ_3_ANSWER') },
    // { title: t('FAQ_4'), description: t('FAQ_4_ANSWER') },
    // { title: t('FAQ_5'), description: t('FAQ_5_ANSWER') },
    // { title: t('FAQ_6'), description: t('FAQ_6_ANSWER') },
    // { title: t('FAQ_7'), description: t('FAQ_7_ANSWER') },
  ];

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
        <EngineDescription />
        <GlowingButton
          mainText="Axolotl Engine 0.6.0"
          CTAText={t('SEE_NEWS')}
          icon={
            <GearIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          }
        />
        <h2 className="my-8 mx-4 text-center text-2xl sm:mx-0 sm:w-2/3 sm:text-4xl">
          {t('USED_TOOLS_AND_TECHNOLOGIES')}
        </h2>
        <div
          className="relative z-0 my-4 h-20 w-5/6 overflow-hidden before:absolute 
          before:left-0 before:z-10 before:h-full before:w-10 before:justify-self-start before:bg-gradient-to-r before:from-neutral-100 before:to-transparent after:absolute 
          after:right-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-neutral-100 after:to-transparent dark:bg-neutral-900 
          dark:before:from-neutral-900 dark:after:from-neutral-900 sm:h-32 
          sm:w-2/3 before:md:w-52 after:md:w-52"
        >
          <ul className="absolute top-0 left-0 flex w-[2184px] animate-slideLeft gap-6 sm:w-[3520px] sm:gap-10">
            {tools.map((tool, index) => {
              return (
                <li
                  className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white sm:h-32 sm:w-32"
                  key={index}
                >
                  <Image
                    className="rounded"
                    src={`/tools/${tool.src}`}
                    width={`${isMobile ? 64 : 100}`}
                    height={`${isMobile ? 64 : 100}`}
                    alt={tool.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        {/* <section className="flex w-full flex-col justify-center">
          <h2 className="mx-4 my-8 text-center text-2xl sm:mx-0 sm:text-4xl">
            {t('OUR_GAME_DEVELOPMENT_JOURNEY')}
          </h2>
          <div
            className={`flex w-full ${
              isMobile ? 'justify-center' : 'justify-evenly'
            }`}
          >
            <ProjectPhases nextMilestone={nextMilestone} />
          </div>
        </section> */}
        <FAQs content={FAQsContent} />
      </Layout>
    </>
  );
}
