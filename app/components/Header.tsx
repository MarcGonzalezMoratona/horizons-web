import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector';
import useTranslation from 'next-translate/useTranslation';
import { Horizons, HorizonsWhite } from './Horizons';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { usePageType } from '../hooks/usePageInfo';
import { useIsDarkMode, useToggleThemeHandler } from '../hooks/useTheme';

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const toggleThemeHandler = useToggleThemeHandler();
  const isDarkMode = useIsDarkMode();

  const { t } = useTranslation('common');
  const pageType = usePageType();

  return (
    <header
      className={`flex flex-col bg-neutral-100 p-6 text-lg text-neutral-800 dark:bg-neutral-800
       dark:text-neutral-100 sm:flex-row ${
         pageType != 'landing' &&
         'border-b-4 border-b-primary-500 dark:border-b-primary-300'
       } ${className}`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          {isDarkMode ? (
            <HorizonsWhite className="ml-4 h-12 w-12" priority />
          ) : (
            <Horizons className="ml-4 h-12 w-12" priority />
          )}
        </Link>
        <nav className="hidden sm:mx-12 sm:block">
          <ul className="flex">
            <Link href="/team">
              <li
                className={`mx-4 py-0.5 hover:text-primary-500 dark:hover:text-primary-300 ${
                  pageType === 'team' &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                {t('TEAM')}
              </li>
            </Link>
            <Link
              href={{
                pathname: '/blog',
                query: { page: 1 },
              }}
            >
              <li
                className={`mx-4 py-0.5 hover:text-primary-500 dark:hover:text-primary-300
                ${
                  pageType === 'blog' &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                {t('BLOG')}
              </li>
            </Link>
            <Link href="/engine">
              <li
                className={`mx-4 py-0.5 hover:text-primary-500 dark:hover:text-primary-300 ${
                  pageType === 'engine' &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                Axolotl Engine
              </li>
            </Link>
            <Link href="/media">
              <li
                className={`mx-4 py-0.5 hover:text-primary-500 dark:hover:text-primary-300 ${
                  pageType === 'media' &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                Media
              </li>
            </Link>
          </ul>
        </nav>
        <div
          onClick={toggleThemeHandler}
          className="absolute right-20 cursor-pointer sm:right-40"
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5 text-xl text-neutral-100" />
          ) : (
            <MoonIcon className="h-5 w-5 text-xl text-primary-500" />
          )}
        </div>
        <div className="absolute right-4 hidden sm:block">
          <LanguageSelector />
        </div>
        <div
          className="absolute right-8 flex sm:hidden"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
