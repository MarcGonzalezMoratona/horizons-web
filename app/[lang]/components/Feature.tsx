'use client';
import * as Accordion from '@radix-ui/react-accordion';
import AccordionItem, { featureImage, featureVideo } from './AccordionItem';

type FeatureProps = {
  title: string;
  description: string;
  featureImages: featureImage[];
  featureVideos: featureVideo[];
};

export default function Feature({
  title,
  description,
  featureImages,
  featureVideos,
}: FeatureProps) {
  return (
    <Accordion.Root
      type="multiple"
      className="mx-2 my-4 flex w-5/6 flex-col items-center justify-center gap-4 sm:w-2/3 sm:px-4"
    >
      <AccordionItem
        title={title}
        description={description}
        featureImages={featureImages}
        featureVideos={featureVideos}
      />
    </Accordion.Root>
  );
}
