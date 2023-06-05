import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type PaginationProps = {
  pages: number;
  page: number;
};

const Pagination = ({ pages, page }: PaginationProps) => {
  const renderItems = () => {
    let items = [];
    for (let i = 1; i <= pages; ++i) {
      items.push(
        <Link
          href={{
            pathname: '/blog',
            query: { page: i },
          }}
          className={`my-4 flex h-10 w-10 cursor-pointer items-center justify-center
          border border-r-0 border-neutral-300 text-lg ${
            Number(page) === i
              ? 'bg-primary-100 text-primary-600 hover:bg-primary-100 hover:text-primary-600'
              : 'hover:bg-neutral-100 dark:hover:bg-primary-100 dark:hover:text-primary-600'
          } ${pages === i && 'border-r'}`}
          key={`page ${i}`}
        >
          {i}
        </Link>
      );
    }
    return items;
  };

  return (
    <div className="flex items-center">
      {page > 1 && (
        <Link
          href={{
            pathname: '/blog',
            query: { page: page - 1 },
          }}
        >
          <div className="my-4 flex h-10 w-12 cursor-pointer items-center justify-center rounded-l-lg border border-r-0 border-neutral-300 hover:bg-neutral-100 dark:hover:bg-primary-100 dark:hover:text-primary-600">
            <ChevronLeftIcon className="h-5 w-5" />
          </div>
        </Link>
      )}
      {renderItems()}
      {page < pages && (
        <Link
          href={{
            pathname: '/blog',
            query: { page: page + 1 },
          }}
        >
          <div className="my-4 flex h-10 w-12 cursor-pointer items-center justify-center rounded-r-lg border border-l-0 border-neutral-300 hover:bg-neutral-100 dark:hover:bg-primary-100 dark:hover:text-primary-600">
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
