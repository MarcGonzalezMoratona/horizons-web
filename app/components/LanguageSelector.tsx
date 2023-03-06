import * as Select from '@radix-ui/react-select';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';


const LanguageSelector = () => {
    const { t } = useTranslation('common');
    const [value, setValue] = useState(t('CURRENT_LANGUAGE'));

return (
    <Select.Root value={value} onValueChange={setValue} >
        <Select.Trigger className="flex items-center px-2">
            <Select.Value aria-label={value}>
            {value}
            </Select.Value>
            <Select.Icon className="mx-2">
                <ChevronDownIcon className='h-4 w-4'/>
            </Select.Icon>
        </Select.Trigger>
        <Select.Content position="popper" className="bg-black rounded-lg">
            <Select.Viewport>
                <Link href="/ca" locale="ca">Catalan
                    <Select.Item value="Catalan" className="px-2 m-3 hover:bg-white hover:text-black">
                        <Select.ItemText></Select.ItemText>
                    </Select.Item>
                </Link>
                <Link href="/en" locale="en">English
                    <Select.Item value="English" className="px-2 m-3 hover:bg-white hover:text-black">
                        <Select.ItemText></Select.ItemText>
                    </Select.Item>
                </Link>
                <Link href="/fr" locale="fr">French
                    <Select.Item value="French" className="px-2 m-3 hover:bg-white hover:text-black">
                        <Select.ItemText></Select.ItemText>
                    </Select.Item>
                </Link>
                <Link href="/es" locale="es">Spanish
                    <Select.Item value="Spanish" className="px-2 m-3 hover:bg-white hover:text-black">
                        <Select.ItemText></Select.ItemText>
                    </Select.Item>
                </Link>
            </Select.Viewport>
        </Select.Content>
    </Select.Root>
)
}

export default LanguageSelector;
