import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface ButtonProps {
  mainText: string;
  CTAText: string;
  icon: JSX.Element;
}

export const GlowingButton = ({ mainText, CTAText, icon }: ButtonProps) => {
  return (
    <div className="flex flex-col gap-8 items-start justify-center mx-4 my-8">
      <div className="relative group">
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg blur opacity-75 group-hover:opacity-100 
        transition duration-1000 group-hover:duration-200 animate-pulse"
        />
        <Link
          href="https://github.com/Horizons-Games/Axolotl-Engine/releases"
          className="relative px-4 py-4 bg-neutral-900 rounded-lg flex items-center gap-4 sm:gap-8"
        >
          <span className="text-gray-100 flex items-center gap-2 sm:gap-4">
            {icon}
            {mainText}
          </span>
          <span className="text-primary-300 flex items-center gap-2 sm:group-hover:text-neutral-100 transition duration-200">
            {CTAText} <ArrowRightIcon className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </div>
  );
};
