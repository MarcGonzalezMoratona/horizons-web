import * as Accordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

interface FAQContent {
  question: string;
  answer: string;
}

interface FAQsContent {
  content: FAQContent[];
}

const FAQ = ({ question, answer }: FAQContent) => {
  return (
    <Accordion.Item
      value={question}
      className="flex w-full flex-col gap-4 rounded border border-neutral-900 p-4 dark:border-secondary-200"
    >
      <Accordion.Header className="flex text-lg font-bold">
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 text-left">
          <span className="dark:transition-color dark:duration-300 dark:ease-in-out dark:group-data-[state=open]:text-secondary-200 ">
            {question}
          </span>
          <PlusIcon className="shrink-0 group-data-[state=open]:hidden" />
          <MinusIcon className="shrink-0 group-data-[state=closed]:hidden" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        {answer}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default function FAQs({ content }: FAQsContent) {
  return (
    <>
      <h3 className="w-full p-4 text-2xl sm:w-2/3">Preguntas frecuentes</h3>
      <Accordion.Root
        type="multiple"
        className="mx-2 my-4 flex flex-col items-center justify-center gap-4 sm:w-2/3 sm:px-4"
      >
        {content.map((content) => {
          return (
            <FAQ
              key={content.question}
              question={content.question}
              answer={content.answer}
            />
          );
        })}
      </Accordion.Root>
    </>
  );
}
