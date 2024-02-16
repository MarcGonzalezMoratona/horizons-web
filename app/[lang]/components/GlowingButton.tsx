import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type ButtonProps = {
  mainText: string;
  CTAText: string;
  icon: JSX.Element;
  url: string;
};

export const GlowingButton = ({
  mainText,
  CTAText,
  icon,
  url,
}: ButtonProps) => {
  return (
    <div className="m-6 flex flex-col items-start justify-center gap-8">
      <div className="group relative">
        <div
          className="absolute -inset-0.5 animate-pulse rounded-lg bg-gradient-to-r from-secondary-600 to-primary-600 opacity-75 blur 
        transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
        />
        <Link
          target="_blank"
          rel="noopener"
          href={url}
          className="relative flex items-center gap-4 rounded-lg bg-neutral-900 px-4 py-4 sm:gap-8"
        >
          <span className="flex items-center gap-2 text-neutral-100 sm:gap-4">
            {icon}
            {mainText}
          </span>
          <span className="flex items-center gap-2 text-primary-300 transition duration-200 sm:group-hover:text-neutral-100">
            {CTAText} <ArrowRightIcon className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </div>
  );
};
