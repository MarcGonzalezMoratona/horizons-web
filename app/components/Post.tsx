import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: {
    id: number;
    title: string;
    alt: string;
    date: string;
    author: string;
    caption: string;
    paragraphs: {
      heading?: string;
      content: string;
      image?: string;
    }[];
  };
}

const Post = ({ data }: IProps) => {
  return (
    <article className="flex flex-col mx-4 my-4 shadow-md overflow-hidden hover:shadow-lg rounded-md max-h-[800px]">
      <div className="relative w-full h-96 sm:h-64">
        <Image
          src={`/blog/${data.caption}`}
          alt={data.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="m-4">
        <div className="flex justify-between my-1">
          <h2>{data.date}</h2>
          <h2>{data.author}</h2>
        </div>
        <h1 className="text-xl font-medium">{data.title}</h1>
        <div className="my-4">
          <p>{data.paragraphs[0].content}</p>
        </div>
        <Link href={`/blog/${data.id}`}>
          <button className="py-3 px-8 my-1 rounded-sm bg-black text-white">
            READ MORE
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Post;
