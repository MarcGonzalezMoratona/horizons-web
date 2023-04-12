import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../app/components/Layout';
import { usePageHandler } from '../app/hooks/usePageInfo';

export default function Home() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('404');
  });

  return (
    <>
      <Head>
        <title>Horizons Games - 404 Not Found</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-center lg:flex-row">
          <div className="relative my-8 h-[300px] w-[250px] sm:my-0 sm:h-[550px] sm:w-[450px] lg:h-[600px] lg:w-[500px]">
            <Image
              src="/darthVader.png"
              alt="LEGO darth vader"
              fill
              className="object-contain"
            />
          </div>
          <div className="mx-8 flex h-64 flex-col items-center justify-center text-center sm:h-96 sm:text-left lg:w-1/2 lg:items-start">
            <h1 className="text-2xl font-bold sm:text-4xl lg:text-6xl">
              {t('NOT_FOUND').toUpperCase()}
            </h1>
            <h2 className="my-8 text-lg lg:text-2xl">
              {t('404_MESSAGE').toUpperCase()}
            </h2>
            <Link href="/">
              <button
                className="w-48 rounded-md border-b-4 border-t-2 border-t-red-500 border-b-red-900 bg-red-700 
              p-4 font-semibold text-neutral-100 sm:w-96 sm:transition-transform sm:duration-300 sm:hover:translate-y-0.5"
              >
                {t('GO_HOME').toUpperCase()}
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
