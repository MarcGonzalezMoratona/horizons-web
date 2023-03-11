import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const LanguageSelector = () => {
  const { t } = useTranslation('common');
  const currentLanguage = t('CURRENT_LANGUAGE');
  const [value, setValue] = useState(currentLanguage);
  const router = useRouter();
  const { pathname, asPath, query } = router;

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
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="flex items-center p-2 w-full">
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon className="mx-2">
          <ChevronDownIcon className="h-6 w-6" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className="bg-black w-full my-12 z-10">
        <Select.Viewport className="flex flex-col">
          {currentLanguage !== 'Català' && (
            <Select.Item
              value="Català"
              className="hover:bg-white hover:text-black pl-2 pr-8 py-1"
            >
              <Select.ItemText>Català</Select.ItemText>
            </Select.Item>
          )}
          {currentLanguage !== 'English' && (
            <Select.Item
              value="English"
              className="hover:bg-white hover:text-black pl-2 pr-8 py-1"
            >
              <Select.ItemText>English</Select.ItemText>
            </Select.Item>
          )}
          {currentLanguage !== 'Español' && (
            <Select.Item
              value="Español"
              className="hover:bg-white hover:text-black pl-2 pr-8 py-1"
            >
              <Select.ItemText>Español</Select.ItemText>
            </Select.Item>
          )}
          {currentLanguage !== 'Français' && (
            <Select.Item
              value="Français"
              className="hover:bg-white hover:text-black pl-2 pr-8 py-1"
            >
              <Select.ItemText>Français</Select.ItemText>
            </Select.Item>
          )}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default LanguageSelector;
