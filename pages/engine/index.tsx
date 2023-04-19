import Head from 'next/head';
import Layout from '../../app/components/Layout';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { usePageHandler } from '../../app/hooks/usePageInfo';
import Feature from '../../app/components/Feature';

export default function Engine() {
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
          {t('FEATURES')}
        </h2>
        <p className="m-4 text-center text-sm leading-8 sm:w-1/3 sm:text-lg">
          {t('FEATURES_DESCRIPTION')}
        </p>
        <Feature
          title={t('ANIMATION')}
          description={t('ANIMATION_DESCRIPTION')}
        />
        <Feature
          title={t('SCRIPTING')}
          description={t('SCRIPTING_DESCRIPTION')}
        />
        <Feature
          title={t('LIGHTNING')}
          description={t('LIGHTNING_DESCRIPTION')}
        />
        <Feature
          title={t('MATERIALS')}
          description={t('MATERIALS_DESCRIPTION')}
        />
        <Feature
          title={t('RAYCASTING')}
          description={t('RAYCASTING_DESCRIPTION')}
        />
        <Feature
          title={t('PARTICLE_SYSTEMS')}
          description={t('PARTICLE_SYSTEMS_DESCRIPTION')}
        />
        <Feature title={t('PHYSICS')} description={t('PHYSICS_DESCRIPTION')} />{' '}
        <Feature title={t('SOUND')} description={t('SOUND_DESCRIPTION')} />
      </Layout>
    </>
  );
}
