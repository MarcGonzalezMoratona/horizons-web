import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React /* ,{ useEffect } */ from 'react';
// import CopyToClipboardButton from './CopyToClipboard';
import Button from './Button';
import RelatedPost from './RelatedPost';
import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import markdownToHtml from '../lib/markdownToHtml';
import { Locale } from '../locales/types/locales';

// import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/components/prism-csharp';
// import 'prismjs/components/prism-markup';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-jsx';
// import 'prismjs/components/prism-tsx';
// import 'prismjs/components/prism-json';
// import 'prismjs/components/prism-markdown';
// import 'prismjs/components/prism-bash';

type Post = {
  slug: string;
  id: number;
  title: string;
  subtitle: string;
  profile: string;
  caption?: string;
  alt?: string;
  date: string;
  author: string;
  paragraphs?: {
    document?: string;
    documentCTA?: string;
    video?: string;
  }[];
};

type FullPostProps = {
  post: Post;
  relatedPosts: Post[];
  locale: Locale;
  lang: string;
};

export default async function FullPost({
  post,
  relatedPosts,
  locale,
  lang,
}: FullPostProps) {
  const postsDirectory = join(process.cwd(), `app/data/${post.slug}.md`);
  const fileContents = fs.readFileSync(postsDirectory, 'utf8');
  const { data, content } = matter(fileContents);
  const postContent = await markdownToHtml(content);

  // useEffect(() => {
  //   const highlight = async () => {
  //     await Prism.highlightAll();
  //   };
  //   highlight();
  // }, [post]);

  return (
    <section className="my-8 flex flex-col xl:grid xl:grid-cols-3 xl:gap-8">
      <article className="col-span-2">
        <div
          className="grid grid-cols-3 grid-rows-2 items-center justify-center border-b border-neutral-200 
        p-4 dark:border-neutral-100 sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-7 xl:grid-cols-8"
        >
          <div className="relative row-span-2 h-16 w-16 rounded-full">
            <Image
              src={`/team/${post.profile}`}
              alt={post.author}
              fill
              className="select-none rounded-full object-cover"
              sizes="(min-width: 320px) 320px"
            />
          </div>
          <p className="col-span-2 text-lg sm:col-span-4 md:col-span-5 lg:col-span-6 xl:col-span-7 ">
            {post.author}
          </p>
          <p>{post.date}</p>
        </div>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: postContent }}
        />
        {post.paragraphs?.map((paragraph, index) => {
          return (
            <React.Fragment key={`paragraph ${index}`}>
              {/* {paragraph.code && (
                <div className="flex max-w-[85vw] flex-col justify-self-center rounded-xl border-b-2 border-l-2 border-r-2 border-neutral-800 bg-[#2d2d2d] sm:max-w-none">
                  <CopyToClipboardButton
                    language={paragraph.language}
                    content={paragraph.code}
                  />
                  <pre className="overflow-x-auto">
                    <code className="language-csharp w-full">
                      {paragraph.code}
                    </code>
                  </pre>
                </div>
              )} */}
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
                      rel="noopener"
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
              src={`/team/${post.profile}`}
              alt={post.author}
              fill
              className="select-none rounded-full object-cover"
              sizes="(min-width: 320px) 320px"
            />
          </div>
          <p className="my-2 text-lg font-medium">{post.author}</p>
        </div>
        {relatedPosts.length > 1 && (
          <h3 className="mt-4 font-medium">
            {locale.MORE_POSTS.toUpperCase()}
          </h3>
        )}
        {relatedPosts[post.id] ? (
          <RelatedPost data={relatedPosts[post.id]} lang={lang} />
        ) : (
          relatedPosts[post.id - 4] && (
            <RelatedPost data={relatedPosts[post.id - 4]} lang={lang} />
          )
        )}
        {relatedPosts[post.id + 1] ? (
          <RelatedPost data={relatedPosts[post.id + 1]} lang={lang} />
        ) : (
          relatedPosts[post.id - 3] && (
            <RelatedPost data={relatedPosts[post.id - 3]} lang={lang} />
          )
        )}
        {relatedPosts[post.id + 2] ? (
          <RelatedPost data={relatedPosts[post.id + 2]} lang={lang} />
        ) : (
          relatedPosts[post.id - 2] && (
            <RelatedPost data={relatedPosts[post.id - 2]} lang={lang} />
          )
        )}
      </aside>
    </section>
  );
}
