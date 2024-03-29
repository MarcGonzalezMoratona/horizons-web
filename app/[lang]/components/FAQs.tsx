'use client';
import * as Accordion from '@radix-ui/react-accordion';
import AccordionItem, { AccordionContent } from './AccordionItem';
import { Locale } from '../locales/types/locales';

type FAQsContent = {
  content: AccordionContent[];
  locale: Locale;
};

export default function FAQs({ content, locale }: FAQsContent) {
  return (
    <>
      <h2 className="my-8 text-center text-2xl sm:w-2/3 sm:text-4xl">
        {locale.FREQUENTLY_ASKED_QUESTIONS}
      </h2>
      <Accordion.Root
        type="multiple"
        className="mx-2 my-4 flex w-5/6 flex-col items-center justify-center gap-4 sm:w-2/3 sm:px-4"
      >
        {content.map((content, index) => {
          return (
            <AccordionItem
              key={content.title}
              title={content.title}
              description={content.description}
              link={content.link}
              url={content.url}
            />
          );
        })}
      </Accordion.Root>
    </>
  );
}
