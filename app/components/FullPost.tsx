import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import RelatedPost from './RelatedPost';

interface IProps {
  data: {
    id: number;
    title: string;
    subtitle: string;
    profile: string;
    caption: string;
    alt: string;
    date: string;
    author: string;
    paragraphs: {
      heading?: string;
      content: string;
      image?: string;
    }[];
  }[];
}

const FullPost = ({ data }: IProps) => {
  const router = useRouter();
  const id = Number(router.query.post) - 1;

  return (
    <section className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-8 my-8">
      <article className="col-span-2">
        <div className="grid grid-rows-2 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 p-4 border-b border-gray-200 items-center justify-center">
          <div className="rounded-full relative w-16 h-16 row-span-2">
            <Image
              src={`/team/${data[id].profile}`}
              alt={data[id].author}
              fill
              className="object-cover rounded-full"
              sizes="(min-width: 320px) 320px"
            />
          </div>
          <p className="text-lg col-span-2 sm:col-span-4 md:col-span-5 lg:col-span-6 xl:col-span-7 ">
            {data[id].author}
          </p>
          <p>{data[id].date}</p>
        </div>
        <h1 className="text-2xl font-medium my-4">{data[id].title}</h1>
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
              {paragraph.image && (
                <div className="flex justify-center relative h-96 lg:my-8">
                  <Image
                    src={`/blog/${paragraph.image}`}
                    alt={data[id].alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 320px) 640px, (min-width: 640px) 720px (min-width: 768px) 1080px"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </article>
      <aside className="flex flex-col items-center xl:items-start xl:border-l border-gray-200 p-2 xl:p-8">
        <div className="rounded-full relative w-28 h-28">
          <Image
            src={`/team/${data[id].profile}`}
            alt={data[id].author}
            fill
            className="object-cover rounded-full"
            sizes="(min-width: 320px) 320px"
          />
        </div>
        <p className="my-2 font-medium text-lg">{data[id].author}</p>
        <h3 className="font-medium mt-8 mb-2">MORE POSTS</h3>
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
