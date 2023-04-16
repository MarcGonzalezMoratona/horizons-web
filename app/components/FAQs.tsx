import * as Accordion from '@radix-ui/react-accordion';
import AccordionItem, { AccordionContent } from './AccordionItem';
interface FAQsContent {
  content: AccordionContent[];
}

export default function FAQs({ content }: FAQsContent) {
  return (
    <>
      <h2 className="my-8 text-center text-2xl sm:w-2/3 sm:text-4xl">
        Preguntas frecuentes
      </h2>
      <Accordion.Root
        type="multiple"
        className="mx-2 my-4 flex w-5/6 flex-col items-center justify-center gap-4 sm:w-2/3 sm:px-4"
      >
        {content.map((content) => {
          return (
            <AccordionItem
              key={content.title}
              title={content.title}
              description={content.description}
            />
          );
        })}
      </Accordion.Root>
    </>
  );
}
