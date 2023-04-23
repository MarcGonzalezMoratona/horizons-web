import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from './Button';
import RelatedPost from './RelatedPost';
import CopyToClipboardButton from './CopyToClipboard';

export type language =
  | 'C++'
  | 'C#'
  | 'javascript'
  | 'typescript'
  | 'HTML'
  | 'CSS';

type FullPostProps = {
  data: {
    id: number;
    title: string;
    subtitle: string;
    profile: string;
    caption?: string;
    alt?: string;
    date: string;
    author: string;
    paragraphs: {
      heading?: string;
      content: string;
      image?: string;
      document?: string;
      documentCTA?: string;
      video?: string;
      link?: string;
      linkCaption?: string;
      code?: string;
      language?: language;
    }[];
  }[];
};

const FullPost = ({ data }: FullPostProps) => {
  const router = useRouter();
  const id = Number(router.query.post) - 1;
  const { t } = useTranslation('common');

  return (
    <section className="my-8 flex flex-col xl:grid xl:grid-cols-3 xl:gap-8">
      <article className="col-span-2">
        <div
          className="grid grid-cols-3 grid-rows-2 items-center justify-center border-b border-neutral-200 
        p-4 dark:border-neutral-100 sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-7 xl:grid-cols-8"
        >
          <div className="relative row-span-2 h-16 w-16 rounded-full">
            <Image
              src={`/team/${data[id].profile}`}
              alt={data[id].author}
              fill
              className="rounded-full object-cover"
              sizes="(min-width: 320px) 320px"
            />
          </div>
          <p className="col-span-2 text-lg sm:col-span-4 md:col-span-5 lg:col-span-6 xl:col-span-7 ">
            {data[id].author}
          </p>
          <p>{data[id].date}</p>
        </div>
        <h1 className="my-4 text-2xl font-semibold">{data[id].title}</h1>
        <h2 className="text-xl">{data[id].subtitle}</h2>
        {data[id].paragraphs.map((paragraph, index) => {
          return (
            <React.Fragment key={`paragraph ${index}`}>
              {paragraph.heading && (
                <div className="my-4 text-lg font-medium">
                  {paragraph.heading}
                </div>
              )}
              <p className="my-4">{paragraph.content}</p>
              {paragraph.link && (
                <span className="my-4">
                  <Link
                    href={paragraph.link}
                    className="text-primary-400 dark:text-secondary-400"
                  >
                    {paragraph.linkCaption || paragraph.link}
                  </Link>
                </span>
              )}
              {paragraph.code && (
                <div className="flex w-full flex-col rounded-xl border-b-2 border-l-2 border-r-2 border-neutral-800 bg-neutral-900 pb-8">
                  <CopyToClipboardButton
                    language={paragraph.language}
                    content={paragraph.code}
                  />
                  <pre>
                    <code className="text-neutral-100">{paragraph.code}</code>
                  </pre>
                </div>
              )}
              {paragraph.image && (
                <div className="relative flex h-96 justify-center lg:my-8">
                  <Image
                    src={`/blog/${paragraph.image}`}
                    alt={data[id].alt || 'horizons logo'}
                    fill
                    className="object-contain"
                    sizes="(min-width: 320px) 640px, (min-width: 640px) 720px (min-width: 768px) 1080px"
                  />
                </div>
              )}
              {paragraph.video && (
                <div className="relative my-6 w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src={paragraph.video}
                    allowFullScreen
                  />
                </div>
              )}
              {paragraph.document && (
                <>
                  <div className="hidden h-screen sm:block">
                    <embed
                      className="h-full w-full"
                      src={`/documents/${paragraph.document}`}
                      type="application/pdf"
                    />
                  </div>
                  <div className="my-4 flex justify-center rounded-sm py-3 text-neutral-100 dark:bg-neutral-900 sm:hidden lg:mx-40">
                    <Link
                      href={`/documents/${paragraph.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        icon={
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            className="ml-3"
                          />
                        }
                      >
                        {paragraph.documentCTA}
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </article>
      <aside className="flex flex-col items-center border-neutral-200 p-2 dark:border-neutral-100 xl:items-start  xl:border-l xl:p-8">
        <div className="my-4 flex flex-col items-center xl:items-start">
          <div className="relative h-28 w-28 rounded-full">
            <Image
              src={`/team/${data[id].profile}`}
              alt={data[id].author}
              fill
              className="rounded-full object-cover"
              sizes="(min-width: 320px) 320px"
            />
          </div>
          <p className="my-2 text-lg font-medium">{data[id].author}</p>
        </div>
        {data.length > 1 && (
          <h3 className="mt-4 font-medium">{t('MORE_POSTS').toUpperCase()}</h3>
        )}
        {data[id + 1] ? (
          <RelatedPost data={data[id + 1]} />
        ) : (
          data[id - 3] && <RelatedPost data={data[id - 3]} />
        )}
        {data[id + 2] ? (
          <RelatedPost data={data[id + 2]} />
        ) : (
          data[id - 2] && <RelatedPost data={data[id - 2]} />
        )}
        {data[id + 3] ? (
          <RelatedPost data={data[id + 3]} />
        ) : (
          data[id - 1] && <RelatedPost data={data[id - 1]} />
        )}
      </aside>
    </section>
  );
};

export default FullPost;
