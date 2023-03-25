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
      className={`flex flex-col text-lg p-6 sm:flex-row text-neutral-800 bg-neutral-100
       dark:text-neutral-100 dark:bg-neutral-800 ${
         pageType != 'landing' &&
         'border-b-primary-500 dark:border-b-primary-300 border-b-4'
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
        <nav className="hidden sm:block sm:mx-12">
          <ul className="flex">
            <Link href="/team">
              <li
                className={`mx-4 hover:text-primary-500 dark:hover:text-primary-300 ${
                  pageType === 'team' &&
                  'text-primary-500 dark:text-primary-300'
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
                className={`mx-4 hover:text-primary-500 dark:hover:text-primary-300
                ${
                  pageType === 'blog' &&
                  'text-primary-500 dark:text-primary-300'
                }`}
              >
                {t('BLOG')}
              </li>
            </Link>
            {/* <Link
              href={{
                pathname: "/blog",
              }}
            >
              <li className="mx-4">{t("BLOG")}</li>
            </Link> */}
          </ul>
        </nav>
        <div
          onClick={toggleThemeHandler}
          className="absolute right-20 sm:right-40 cursor-pointer"
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5 text-xl text-neutral-100" />
          ) : (
            <MoonIcon className="h-5 w-5 text-xl text-primary-500" />
          )}
        </div>
        <div className="hidden sm:block absolute right-4">
          <LanguageSelector />
        </div>
        <div
          className="flex sm:hidden absolute right-8"
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
