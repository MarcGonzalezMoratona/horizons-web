import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross1Icon,
} from '@radix-ui/react-icons';
import { featureImage } from './AccordionItem';

type SliderProps = {
  images: featureImage[];
  isSliderOpen: boolean;
  closeSlider: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
  sizes: string;
};

const FullScreenSlider = ({
  images,
  setCurrentImageIndex,
  isSliderOpen,
  closeSlider,
  currentImageIndex,
  sizes,
}: SliderProps) => {
  useEffect(() => {
    if (isSliderOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isSliderOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {isSliderOpen && (
        <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 bg-opacity-80">
          <Cross1Icon
            className="absolute top-8 right-4 z-20 h-10 w-10 
            cursor-pointer rounded-full border-b-4 border-b-primary-700 bg-primary-500 p-2 text-3xl text-neutral-100 
            dark:border-b-neutral-700 dark:bg-neutral-600 sm:right-8 sm:transition-transform sm:duration-300 sm:hover:translate-y-1"
            onClick={closeSlider}
          />
          <div className={`relative ${sizes}`}>
            <Image
              className="select-none"
              src={`/features/${images[currentImageIndex].src}`}
              alt={images[currentImageIndex].alt}
              sizes="(min-width: 320px) 640px, (min-width: 640px) 720px (min-width: 768px) 1080px"
              fill
            />
          </div>
          <ChevronLeftIcon
            className="absolute left-2 top-1/2 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-b-4 border-b-primary-700 
        bg-primary-500 p-2 text-neutral-100 dark:border-b-neutral-700 dark:bg-neutral-600 
        sm:left-16 sm:transition-transform sm:duration-300 sm:hover:translate-y-[calc(-50%+4px)]"
            onClick={() => prevImage()}
          />
          <ChevronRightIcon
            className="absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-b-4 border-b-primary-700 
        bg-primary-500 p-2 text-neutral-100 dark:border-b-neutral-700 dark:bg-neutral-600 
        sm:right-16 sm:transition-transform sm:duration-300 sm:hover:translate-y-[calc(-50%+4px)]"
            onClick={() => nextImage()}
          />
        </div>
      )}
    </div>
  );
};

export default FullScreenSlider;
