import Image from 'next/image';
import Link from 'next/link';

type RelatedPostProps = {
  data: {
    id: number;
    title: string;
    profile: string;
    caption?: string;
    alt?: string;
    author: string;
  };
};

const RelatedPost = ({ data }: RelatedPostProps) => {
  return (
    <div className="w-full">
      <Link href={`/blog/${data.id}`}>
        <article className="my-2 border-b border-neutral-200 pb-4 dark:border-neutral-100">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
            <div className="col-span-2 my-2 flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full">
                <Image
                  src={`/team/${data.profile}`}
                  alt={data.author}
                  fill
                  className="select-none rounded-full object-cover"
                  sizes="(min-width: 320px) 320px"
                />
              </div>
              <p className="text-sm">{data.author}</p>
            </div>
            <div className="relative row-span-2 ">
              <Image
                src={`${
                  data.caption ? `/blog/${data.caption}` : '/horizons.svg'
                }`}
                alt={data.alt || 'horizons logo'}
                fill
                className="select-none object-contain"
                sizes="(min-width: 320px) 320px"
              />
            </div>
            <p className="col-span-2 text-lg font-medium">{data.title}</p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default RelatedPost;
