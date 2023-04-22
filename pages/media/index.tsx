import Head from 'next/head';
import Layout from '../../app/components/Layout';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { usePageHandler } from '../../app/hooks/usePageInfo';
import SocialNetworks from '../../app/components/SocialNetworks';
import { socialNetworks } from '../../app/data/socialNetworks';
import Image from 'next/image';
import { conceptArt } from '../../app/data/conceptArt';
import FullScreenSlider from '../../app/components/FullScreenSlider';
import ScrollingImages from '../../app/components/ScrollingImages';

export default function Media() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openSlider = (index: any) => {
    setCurrentImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  useEffect(() => {
    PageHandler('media');
  });

  return (
    <>
      <Head>
        <title>{`Horizons Games - ${t('MEDIA')}`}</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ScrollingImages />
        <h1 className="mt-8 mb-4 text-xl font-semibold tracking-wide sm:text-4xl">
          {t('MEDIA').toUpperCase()}
        </h1>
        <section className="flex w-full justify-center">
          <h2 className="my-4 text-center text-2xl sm:w-2/3 sm:text-4xl">
            {t('TRAILERS')}
          </h2>
        </section>
        <section className="flex w-full justify-center">
          <h2 className="my-4 text-center text-2xl sm:w-2/3 sm:text-4xl">
            {t('SCREENSHOTS')}
          </h2>
        </section>
        <section className="flex w-full justify-center">
          <h2 className="my-4 text-center text-2xl sm:w-2/3 sm:text-4xl">
            {t('WALLPAPERS')}
          </h2>
        </section>
        <section className="flex w-full flex-col items-center justify-center">
          <h2 className="my-4 text-center text-2xl sm:w-2/3 sm:text-4xl">
            {t('CONCEPT_ART')}
          </h2>
          <div className="my-8 mx-8 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 md:w-2/3 xl:grid-cols-3">
            {conceptArt.map((image, index) => (
              <span key={image.url.split('.')[0]}>
                <div className="my-4">
                  <Image
                    onClick={() => openSlider(index)}
                    className="cursor-pointer"
                    src={image.url}
                    width={1920}
                    height={1080}
                    alt={image.description}
                  />
                </div>
                <p className="text-center">{image.description}</p>
              </span>
            ))}
            <FullScreenSlider
              images={conceptArt}
              isSliderOpen={isSliderOpen}
              closeSlider={closeSlider}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          </div>
        </section>
        {/* <section className="my-4 flex flex-col items-center gap-2">
          <h3 className="text-lg">Follow Horizons Games to stay tuned!</h3>
          <SocialNetworks networks={socialNetworks} />
        </section> */}
      </Layout>
    </>
  );
}
