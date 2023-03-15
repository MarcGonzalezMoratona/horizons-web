import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

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
      <article className="flex flex-col mx-4 my-4 shadow-md overflow-hidden hover:shadow-lg rounded-md ">
        <div className="relative w-full h-48 sm:h-64">
          <Image
            src={`${data.caption ? `/blog/${data.caption}` : `/horizons.svg`}`}
            alt={data.alt || "horizons logo"}
            fill
            className="object-contain"
            sizes="(min-width: 320px) 720px"
          />
        </div>
        <section className="m-4 flex flex-col justify-between sm:h-[500px]">
          <div>
            <span className="flex justify-between my-1">
              <h2>{data.date}</h2>
              <h2>{data.author}</h2>
            </span>
            <h1 className="text-xl font-medium">{data.title}</h1>
            <div className="my-4">
              <p>{data.paragraphs[0].content}</p>
            </div>
          </div>
          <button className="py-3 my-1 rounded-sm bg-black text-white">
            READ MORE
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
