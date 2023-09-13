import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { posts } from '../../../data/posts';
import { notFound } from 'next/navigation';
import Button from '../../components/Button';
import FullPost from '../../components/FullPost';
import { getLocale } from '../../locales';

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const post = posts.find((post) => post.slug === slug);
  const locale = await getLocale(lang);
  if (!post)
    return {
      title: `Horizons Games -  ${locale.Blog}`,
    };

  return {
    title: `${post?.title} - Horizons Games`,
  };
}

export default async function Post({
  params,
}: {
  params: { slug: string; lang: any };
}) {
  const lang = params.lang;
  const locale = await getLocale(lang);

  const post = posts.find((post) => {
    return post.slug === params.slug;
  });

  if (!post) return notFound();

  return (
    <main className="flex flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="mx-8 lg:w-2/3 lg:gap-8">
        <Link
          href={{
            pathname: `/${lang}/blog`,
            query: { page: 1 },
          }}
        >
          <Button
            className="my-8 flex flex-row-reverse gap-2"
            icon={<ChevronLeftIcon className="h-6 w-6" />}
          >
            {locale.BACK_TO_BLOG.toUpperCase()}
          </Button>
        </Link>
        <FullPost
          post={post}
          relatedPosts={posts}
          locale={locale}
          lang={lang}
        />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}
