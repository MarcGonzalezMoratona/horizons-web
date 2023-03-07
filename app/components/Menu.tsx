import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from './LanguageSelector';

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, toggleMenu }: IProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="bg-black text-white w-full py-3 flex flex-col">
            <ul>
              <Link href="/">
                <li className="p-3 rounded bg-blue-900 my-3 w-full">
                  {t('HOME')}
                </li>
              </Link>
              <Link href="/team">
                <li className="p-3 rounded bg-blue-900 my-3 w-full">
                  {t('TEAM')}
                </li>
              </Link>
            </ul>
          </nav>
          <LanguageSelector />
        </div>
      )}
    </>
  );
};

export default Menu;
