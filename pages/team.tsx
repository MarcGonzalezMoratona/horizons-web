import Head from 'next/head';
import Layout from '../app/components/Layout';
import ProfilePicture from '../app/components/ProfilePicture';
import { team } from '../app/data/team';

export default function Team() {
  return (
    <>
      <Head>
        <title>Horizons Games | The team</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-xl mt-2">THE TEAM</h1>
        <hr className="bg-black w-9/12 lg:w-7/12 h-0.5" />
        <ul className="grid grid-cols-2 mx-2 sm:mx-8 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-8">
          {team.partners.map((partner) => {
            return <ProfilePicture partner={partner} key={partner.name} />;
          })}
        </ul>
      </Layout>
    </>
  );
}
