import * as Accordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export type AccordionContent = {
  title: string;
  description: string;
  url?: string;
  link?: string;
};

export default function AccordionItem({
  title,
  description,
  link,
  url,
}: AccordionContent) {
  return (
    <Accordion.Item
      value={title}
      className="flex w-full flex-col gap-4 rounded border border-neutral-900 p-4 dark:border-secondary-200"
    >
      <Accordion.Header className="flex text-lg font-bold">
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 text-left">
          <span className="dark:transition-all dark:duration-300 dark:ease-in-out dark:group-data-[state=open]:text-secondary-200">
            {title}
          </span>
          <PlusIcon className="shrink-0 group-data-[state=open]:hidden" />
          <MinusIcon className="shrink-0 group-data-[state=closed]:hidden" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        {description}
        {link && url && (
          <Link
            className="font-medium text-primary-500 dark:text-secondary-300"
            href={url}
          >
            {link}
          </Link>
        )}
      </Accordion.Content>
    </Accordion.Item>
  );
}