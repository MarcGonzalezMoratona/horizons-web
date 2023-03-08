import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: {
    id: number;
    title: string;
    profile: string;
    image: string;
    alt: string;
    author: string;
  };
}

const RelatedPost = ({ data }: IProps) => {
  return (
    <Link href={`/blog/${data.id}`}>
      <article className="my-2">
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <div className="flex items-center gap-2 col-span-2">
            <div className="rounded-full relative w-8 h-8 ">
              <Image
                src={`/team/${data.profile}`}
                alt={data.author}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p className="text-sm">{data.author}</p>
          </div>
          <div className="relative row-span-2 ">
            <Image
              src={`/blog/${data.image}`}
              alt={data.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="font-medium col-span-2">{data.title}</p>
        </div>
      </article>
    </Link>
  );
};

export default RelatedPost;
