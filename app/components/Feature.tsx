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
        className="my-4 flex w-2/3 cursor-pointer flex-col border-b pb-4 select-none"
        onClick={() => toggleOpen(!isOpen)}
      >
        <div className="flex justify-between">
          <p className="text-xl">{title}</p>
          {isOpen ? (
            <MinusIcon className="h-5 w-5 text-secondary-600" />
            ) : (
              <PlusIcon className="h-5 w-5 text-secondary-600" />
              )}
        </div>
        <p className={`my-4 ${!isOpen && "hidden"}`}>{description}</p>        
      </div>
    </>
  );
}
