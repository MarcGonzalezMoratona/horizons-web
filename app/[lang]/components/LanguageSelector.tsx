'use client';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '../locales/types/locales';
import path from 'path';

type SelectorProps = {
  isLanding?: boolean;
  locale: Locale;
};

const LanguageSelector = ({ isLanding, locale }: SelectorProps) => {
  const currentLanguage = locale.CURRENT_LANGUAGE;
  const [value, setValue] = useState(currentLanguage);
  const [isSelectorOpen, toggleSelector] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const languages = ['Català', 'English', 'Español', 'Français'];

  useEffect(() => {
    const pathnameSegments = pathname.split('/');

    if (value === 'Català') {
      pathnameSegments[1] = 'ca';
    } else if (value === 'English') {
      pathnameSegments[1] = 'en';
    } else if (value === 'Español') {
      pathnameSegments[1] = 'es';
    } else if (value === 'Français') {
      pathnameSegments[1] = 'fr';
    }

    router.replace(pathnameSegments.join('/'));
  }, [value, pathname, router]);

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
