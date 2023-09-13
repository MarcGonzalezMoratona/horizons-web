import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Locale } from '../locales/types/locales';

type PostProps = {
  data: {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    alt?: string;
    date: string;
    author: string;
    caption?: string;
  };
  locale: Locale;
  lang: string;
};

export default function Post({ data, locale, lang }: PostProps) {
  return (
    <Link href={`/${lang}/blog/${data.slug}`}>
      <article className="mx-4 my-4 flex flex-col overflow-hidden rounded-md pt-4 shadow-md hover:shadow-lg dark:bg-neutral-800">
        <div className="relative h-48 w-full sm:h-64">
          <Image
            src={`${data.caption ? `/blog/${data.caption}` : '/horizons.svg'}`}
            alt={data.alt || 'horizons logo'}
            fill
            className="select-none object-contain"
            sizes="(min-width: 320px) 720px"
          />
        </div>
        <section
          className="m-8 flex flex-col justify-between border-t-4 
        border-primary-400 pt-4 dark:border-primary-300 
        sm:h-[400px] xl:h-[300px]"
        >
          <div>
            <span className="my-1 flex justify-between">
              <h2>{data.date}</h2>
              <h2>{data.author}</h2>
            </span>
            <h1 className="my-4 text-xl font-semibold">{data.title}</h1>
            <h2 className="text-lg">{data.subtitle}</h2>
          </div>
          <Button
            icon={<FontAwesomeIcon icon={faArrowRight} className="ml-3" />}
          >
            {locale.READ_MORE.toUpperCase()}
          </Button>
        </section>
      </article>
    </Link>
  );
}
