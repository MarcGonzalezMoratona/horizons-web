import Head from 'next/head';
import Layout from '../../app/components/Layout';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { usePageHandler } from '../../app/hooks/usePageInfo';
import SocialNetworks from '../../app/components/SocialNetworks';
import { socialNetworks } from '../../app/data/socialNetworks';

export default function Media() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('media');
  });

  return (
    <>
      <Head>
        <title>Horizons Games - Media</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="mt-8 mb-4 text-xl font-semibold tracking-wide sm:text-4xl">
          MEDIA
        </h1>
        <section>
            <h2 className="my-8 text-center text-2xl sm:w-2/3 sm:text-4xl">
                Trailers
            </h2>
        </section>
        <section>
            <h2 className="my-8 text-center text-2xl sm:w-2/3 sm:text-4xl">
                Screenshots
            </h2>
        </section>
        <section>
            <h2 className="my-8 text-center text-2xl sm:w-2/3 sm:text-4xl">
                Artwork
            </h2>
        </section>
        <section className='flex flex-col items-center gap-2'>
            <h3 className='text-lg'>Follow Horizons Games to stay tuned!</h3>
            <SocialNetworks networks={socialNetworks}/>
        </section>
      </Layout>
    </>
  );
}