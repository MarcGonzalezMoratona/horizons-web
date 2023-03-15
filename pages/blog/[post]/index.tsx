import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { GetStaticProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import FullPost from "../../../app/components/FullPost";
import Layout from "../../../app/components/Layout";
import { posts } from "../../../app/data/posts";

export default function Post() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const id = Number(router.query.post) - 1;

  return (
    <>
      <Head>
        <title>{`Horizons Games | ${posts[id].title}`}</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mx-8 lg:w-2/3 lg:gap-8">
          <Link
            href={{
              pathname: "/blog",
              query: { page: 1 },
            }}
          >
            <div className="flex gap-2 my-4">
              <ChevronLeftIcon className="h-6 w-6" />
              {t("BACK_TO_BLOG").toUpperCase()}
            </div>
          </Link>
          <FullPost data={posts} />
        </div>
      </Layout>
    </>
  );
}

export type GetStaticPathsContext = {
  locales: string[];
};

export const getStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  const paths = locales?.map((locale) => {
    return posts.map(({ id }) => {
      return { params: { post: `${id}` }, locale };
    });
  });

  return {
    paths: paths.flat(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
