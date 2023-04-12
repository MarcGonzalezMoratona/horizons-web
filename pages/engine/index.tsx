import Head from 'next/head';
import Layout from '../../app/components/Layout';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { usePageHandler } from '../../app/hooks/usePageInfo';
import Feature from '../../app/components/Feature';

export default function Team() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('engine');
  });

  return (
    <>
      <Head>
        <title>{`Horizons Games - Axolotl Engine`}</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="mt-8 mb-4 text-xl font-semibold tracking-wide sm:text-4xl">
          AXOLOTL ENGINE
        </h1>
        <h2 className="my-4 text-xl tracking-wide sm:text-3xl">
          Características
        </h2>
        <p className="w-1/3 text-center text-lg leading-8">
          Axolotl Engine ofrece una amplia gama de funcionalidades para
          potenciar la creatividad y la eficiencia en la creación de
          videojuegos. El motor posee un conjunto de herramientas fáciles de
          usar que permiten a los desarrolladores crear y diseñar niveles,
          personajes, objetos y más, de forma rápida y eficiente.
        </p>
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
        <Feature
          title="placeholder"
          description="esta es una descripcion de prueba"
        />
      </Layout>
    </>
  );
}
