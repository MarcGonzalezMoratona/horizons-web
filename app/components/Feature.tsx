import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

export default function Feature({ title, description }: FeatureProps) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <div
        className="my-4 flex w-2/3 cursor-pointer flex-col"
        onClick={() => toggleOpen(!isOpen)}
      >
        <div className="flex justify-between">
          <p className="text-xl">{title}</p>
          {isOpen ? (
            <MinusIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          ) : (
            <PlusIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          )}
        </div>
        {isOpen && <p className="text-lg">{description}</p>}
        <hr />
      </div>
    </>
  );
}
