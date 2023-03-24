import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Layout from "../app/components/Layout";
import PageContext from "../store/PageContext";

export default function Home() {
  const { t } = useTranslation("common");
  const { PageHandler } = useContext(PageContext);

  useEffect(() => {
    PageHandler("404");
  });

  return (
    <>
      <Head>
        <title>Horizons Games | 404 Not Found</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
          <div className="relative w-[250px] h-[300px] sm:w-[450px] sm:h-[550px] lg:w-[500px] lg:h-[600px] my-8 sm:my-0">
            <Image
              src="/darthVader.png"
              alt="LEGO darth vader"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start text-center sm:text-left mx-8 h-64 sm:h-96 lg:w-1/2">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-6xl">
              OOPS! PAGE NOT FOUND.
            </h1>
            <h2 className="text-lg lg:text-2xl my-8">
              {
                "This is a 404 page. Looks like you're aiming to join on the dark side."
              }
            </h2>
            <Link href="/">
              <button
                className="bg-red-700 font-semibold p-4 w-48 sm:w-96 text-neutral-100 rounded-md 
              border-b-4 border-t-2 border-t-red-500 border-b-red-900"
              >
                GO HOME
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
