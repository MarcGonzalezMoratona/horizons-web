import * as Accordion from '@radix-ui/react-accordion';

interface FAQContent {
  question: string;
  answer: string;
}

interface FAQsContent {
  content: FAQContent[];
}

const FAQ = ({ question, answer }: FAQContent) => {
  return (
    <Accordion.Item value={question}>
      <Accordion.Header>
        <Accordion.Trigger>{question}</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>{answer}</Accordion.Content>
    </Accordion.Item>
  );
};

export default function FAQs({ content }: FAQsContent) {
  return (
    <Accordion.Root type="multiple">
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
  );
}
