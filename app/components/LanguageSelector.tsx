import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

type SelectorProps = {
  isLanding?: boolean;
};

const LanguageSelector = ({ isLanding }: SelectorProps) => {
  const { t } = useTranslation('common');
  const currentLanguage = t('CURRENT_LANGUAGE');
  const [value, setValue] = useState(currentLanguage);
  const [isSelectorOpen, toggleSelector] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const languages = ['Català', 'English', 'Español', 'Français'];

  useEffect(() => {
    if (value === 'Català')
      router.push({ pathname, query }, asPath, { locale: 'ca' });
    else if (value === 'English')
      router.push({ pathname, query }, asPath, { locale: 'en' });
    else if (value === 'Español')
      router.push({ pathname, query }, asPath, { locale: 'es' });
    else if (value === 'Français')
      router.push({ pathname, query }, asPath, { locale: 'fr' });
  }, [value]);

  return (
    <Select.Root
      value={value}
      onValueChange={setValue}
      onOpenChange={(open) => toggleSelector(open)}
    >
      <Select.Trigger className="flex w-full items-center p-2">
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon className="mx-2">
          {isSelectorOpen ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </Select.Icon>
      </Select.Trigger>
      <Select.Content
        className={`z-10 my-12 w-full cursor-pointer ${
          isLanding ? 'bg-transparent' : 'bg-neutral-100 dark:bg-neutral-700'
        }`}
      >
        <Select.Viewport className="flex flex-col border border-primary-200 dark:border-none">
          {languages.map(
            (language) =>
              language !== currentLanguage && (
                <Select.Item
                  key={language}
                  value={language}
                  className={`py-2 pl-2 pr-8 outline-none ${
                    !isLanding &&
                    'hover:text-primary-500 dark:hover:text-primary-300'
                  } hover:outline-none`}
                >
                  <Select.ItemText>{language}</Select.ItemText>
                </Select.Item>
              )
          )}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default LanguageSelector;
