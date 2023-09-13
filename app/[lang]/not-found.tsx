import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from './locales';

export async function generateMetadata() {
  return {
    title: 'Horizons Games - 404 Not Found',
  };
}

export default async function NotFound() {
  const locale = await getLocale('en');

  return (
    <main className="flex flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex min-h-screen flex-col items-center justify-center lg:flex-row">
        <div className="relative my-8 h-[300px] w-[250px] sm:my-0 sm:h-[550px] sm:w-[450px] lg:h-[600px] lg:w-[500px]">
          <Image
            src="/darthVader.png"
            alt="LEGO darth vader"
            fill
            className="select-none object-contain"
          />
        </div>
        <div className="mx-8 flex h-64 flex-col items-center justify-center text-center sm:h-96 sm:text-left lg:w-1/2 lg:items-start">
          <h1 className="text-2xl font-bold sm:text-4xl lg:text-6xl">
            {locale.NOT_FOUND.toUpperCase()}
          </h1>
          <h2 className="my-8 text-lg lg:text-2xl">
            {locale.NOT_FOUND_MESSAGE.toUpperCase()}
          </h2>
          <Link href="/en">
            <button
              className="w-48 rounded-md border-b-4 border-t-2 border-t-red-500 border-b-red-900 bg-red-700 
              p-4 font-semibold text-neutral-100 sm:w-96 sm:transition-transform sm:duration-300 sm:hover:translate-y-0.5"
            >
              {locale.GO_HOME.toUpperCase()}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
