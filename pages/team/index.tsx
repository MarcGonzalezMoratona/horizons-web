import Head from 'next/head';
import Layout from '../../app/components/Layout';
import ProfilePicture from '../../app/components/ProfilePicture';
import { team } from '../../app/data/team';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { usePageHandler } from '../../app/hooks/usePageInfo';

export default function Team() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('team');
  });

  return (
    <>
      <Head>
        <title>{`Horizons Games | ${t('THE_TEAM')}`}</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-xl tracking-wider font-semibold sm:text-2xl my-8">
          {t('THE_TEAM').toUpperCase()}
        </h1>
        <ul className="grid grid-cols-2 mx-2 sm:mx-8 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-8">
          {team.partners.map((partner, index) => {
            return (
              <ProfilePicture
                partner={partner}
                index={index}
                key={partner.name}
              />
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
