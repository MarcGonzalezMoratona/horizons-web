import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
type PostProps = {
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
};

export default function Post({ data, locale }: PostProps) {
  const { t } = useTranslation('common');

  return (
    <Link href={`/blog/${data.id}`} locale={locale}>
      <article className="mx-4 my-4 flex flex-col overflow-hidden rounded-md pt-4 shadow-md hover:shadow-lg dark:bg-neutral-800">
        <div className="relative h-48 w-full sm:h-64">
          <Image
            src={`${data.caption ? `/blog/${data.caption}` : '/horizons.svg'}`}
            alt={data.alt || 'horizons logo'}
            fill
            className="object-contain"
            sizes="(min-width: 320px) 720px"
          />
        </div>
        <section
          className="m-8 flex flex-col justify-between border-t-4 
        border-primary-400 pt-4 dark:border-primary-300 
        sm:h-[700px] md:h-[800px] xl:h-[600px]"
        >
          <div>
            <span className="my-1 flex justify-between">
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
