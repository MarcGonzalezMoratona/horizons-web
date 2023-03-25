import Image from 'next/image';
import Link from 'next/link';

interface RelatedPostProps {
  data: {
    id: number;
    title: string;
    profile: string;
    caption?: string;
    alt?: string;
    author: string;
  };
}

const RelatedPost = ({ data }: RelatedPostProps) => {
  return (
    <div className="w-full">
      <Link href={`/blog/${data.id}`}>
        <article className="my-2 border-b border-gray-200">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
            <div className="flex items-center gap-2 col-span-2 my-2">
              <div className="rounded-full relative w-8 h-8">
                <Image
                  src={`/team/${data.profile}`}
                  alt={data.author}
                  fill
                  className="object-cover rounded-full"
                  sizes="(min-width: 320px) 320px"
                />
              </div>
              <p className="text-sm">{data.author}</p>
            </div>
            <div className="relative row-span-2 ">
              <Image
                src={`${
                  data.caption ? `/blog/${data.caption}` : `/horizons.svg`
                }`}
                alt={data.alt || 'horizons logo'}
                fill
                className="object-contain"
                sizes="(min-width: 320px) 320px"
              />
            </div>
            <p className="font-medium col-span-2">{data.title}</p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default RelatedPost;
