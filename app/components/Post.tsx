import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: {
    id: number;
    title: string;
    alt?: string;
    date: string;
    author: string;
    caption?: string;
    paragraphs: {
      heading?: string;
      content: string;
      image?: string;
    }[];
  };
  locale?: string;
}

export default function Post({ data, locale }: IProps) {
  return (
    <Link href={`/blog/${data.id}`} locale={locale}>
      <article className="flex flex-col mx-4 my-4 pt-4 shadow-md overflow-hidden hover:shadow-lg rounded-md dark:bg-neutral-800">
        <div className="relative w-full h-48 sm:h-64">
          <Image
            src={`${data.caption ? `/blog/${data.caption}` : `/horizons.svg`}`}
            alt={data.alt || 'horizons logo'}
            fill
            className="object-contain"
            sizes="(min-width: 320px) 720px"
          />
        </div>
        <section className="m-8 flex flex-col justify-between sm:h-[500px] ">
          <div>
            <span className="flex justify-between my-1">
              <h2>{data.date}</h2>
              <h2>{data.author}</h2>
            </span>
            <h1 className="my-6 text-xl font-semibold">{data.title}</h1>
            <div className="my-4">
              <p>{data.paragraphs[0].content}</p>
            </div>
          </div>
          <button className="text-lg font-bold tracking-wider py-4 mx-2 my-4 rounded-md bg-primary-500 text-neutral-100 dark:bg-primary-500 dark:text-neutral-100 border-t-2 border-b-4 border-t-primary-300 border-b-primary-800">
            READ MORE
            <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
          </button>
        </section>
      </article>
    </Link>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { locale },
  };
};
