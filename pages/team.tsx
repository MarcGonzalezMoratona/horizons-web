import Head from "next/head";
import Layout from "../app/components/Layout";
import ProfilePicture from "../app/components/ProfilePicture";
import { team } from "../app/data/team"

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
            <h1 className="text-2xl mt-8">THE TEAM</h1>
            <ul className="grid grid-cols-4 gap-12 my-8">
                {team.partners.map((partner) => {
                    return (
                        <ProfilePicture partner={partner}/>
                    )
                })}
            </ul>
        </Layout>
      </>
    )
}