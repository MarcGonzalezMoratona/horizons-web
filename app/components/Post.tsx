import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
interface PostProps {
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

export default function Post({ data, locale }: PostProps) {
  const { t } = useTranslation('common');

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
        <section
          className="m-8 pt-4 flex flex-col justify-between 
        sm:h-[700px] md:h-[800px] xl:h-[600px] 
        border-t-4 border-primary-400 dark:border-primary-300"
        >
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
          <Button
            icon={<FontAwesomeIcon icon={faArrowRight} className="ml-3" />}
          >
            {t('READ MORE').toUpperCase()}
          </Button>
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
