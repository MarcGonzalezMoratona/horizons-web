import * as Accordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import FullScreenSlider from './FullScreenSlider';
import { useState } from 'react';

export type featureImage = {
  name: string;
  src: string;
  alt: string;
};

export type featureVideo = {
  name: string;
  src: string;
  thumbnail: string;
};

export type AccordionContent = {
  title: string;
  description: string;
  url?: string;
  link?: string;
  featureImages?: featureImage[];
  featureVideos?: featureVideo[];
};

export default function AccordionItem({
  title,
  description,
  link,
  url,
  featureImages,
  featureVideos,
}: AccordionContent) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(-1);

  const openSlider = (index: any, slider: number) => {
    setCurrentImageIndex(index);
    setCurrentSlider(slider);
  };

  const closeSlider = () => {
    setCurrentSlider(-1);
  };

  return (
    <Accordion.Item
      value={title}
      className="flex w-full flex-col gap-4 rounded border border-neutral-900 p-4 dark:border-secondary-200"
    >
      <Accordion.Header className="flex text-xl font-bold">
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 text-left">
          <span className="dark:transition-all dark:duration-300 dark:ease-in-out dark:group-data-[state=open]:text-secondary-200">
            {title}
          </span>
          <PlusIcon className="shrink-0 group-data-[state=open]:hidden" />
          <MinusIcon className="shrink-0 group-data-[state=closed]:hidden" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-4 text-lg data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <p className="inline">{description}</p>
        {link && url && (
          <Link
            target="_blank"
            rel="noopener"
            className="font-medium text-primary-500 dark:text-secondary-300"
            href={url}
          >
            {link}
          </Link>
        )}
        <div className="flex flex-col items-center">
          {featureImages?.map((image, index) => {
            return (
              <Image
                onClick={() => openSlider(index, 0)}
                key={`${title} ${image.name}`}
                src={`/features/${image.src}`}
                className="my-4 cursor-pointer select-none sm:my-8 sm:w-3/4"
                alt={`${image.alt}`}
                height={1080}
                width={1920}
              />
            );
          })}
          {featureImages && (
            <FullScreenSlider
              sizes="h-[180px] w-[320px] sm:h-[270px] sm:w-[480px] md:h-[360px] md:w-[640px] lg:h-[540px] lg:w-[960px] xl:h-[720px] xl:w-[1280px]"
              images={featureImages}
              isSliderOpen={currentSlider === 0}
              closeSlider={closeSlider}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          )}
          {featureVideos?.map((video) => {
            return (
              <video
                key={`${title} ${video.name}`}
                className="h-full w-full"
                poster={`/features/${video.thumbnail}.png`}
                controls
              >
                <source src={`/features/${video.src}.mp4`} type="video/mp4" />
              </video>
            );
          })}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
