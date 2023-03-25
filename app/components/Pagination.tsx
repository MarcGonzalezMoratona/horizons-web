import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface PaginationProps {
  pages: number;
  page: number;
}

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
          className={`flex items-center justify-center my-4 border border-r-0 text-lg
          border-gray-300 w-10 h-10 cursor-pointer ${
            Number(page) === i
              ? `text-primary-600 bg-primary-100 hover:bg-primary-100 hover:text-primary-600`
              : `hover:bg-neutral-100 dark:hover:bg-primary-100 dark:hover:text-primary-600`
          } ${pages === i && `border-r`}`}
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
          <div className="flex items-center justify-center my-4 border border-r-0 rounded-l-lg border-gray-300 w-12 h-10 hover:bg-gray-100 dark:hover:bg-primary-100 dark:hover:text-primary-600 cursor-pointer">
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
          <div className="flex items-center justify-center my-4 border border-l-0 rounded-r-lg border-gray-300 w-12 h-10 hover:bg-gray-100 dark:hover:bg-primary-100 dark:hover:text-primary-600 cursor-pointer">
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
