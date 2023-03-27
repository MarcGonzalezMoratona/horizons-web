import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../../app/components/Layout';
import { usePageHandler } from '../../app/hooks/usePageInfo';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../../app/meshes/Scene'), {
  ssr: false,
});

export default function Home() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('landing');
  });

  return (
    <>
      <Head>
        <title>Horizons Games | Game</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Scene />
        <div className="absolute bottom-8 right-8 bg-black p-8 opacity-80">
          <ul className=" hidden flex-col gap-4 lg:flex">
            Controls:
            <li>- W: Move forward </li>
            <li>- S: Move backward </li>
            <li>- A: Move left</li>
            <li>- D: Move right</li>
            <li>- SHIFT: Run</li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
