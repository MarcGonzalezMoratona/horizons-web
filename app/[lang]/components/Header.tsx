'use client';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector';
import { Horizons, HorizonsWhite } from './Horizons';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useIsDarkMode, useToggleThemeHandler } from '../hooks/useTheme';
import { usePathname } from 'next/navigation';
import { Locale } from '../locales/types/locales';

type HeaderProps = {
  className: string;
  locale: Locale;
  lang: string;
};

const Header = ({ className, locale, lang }: HeaderProps) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const toggleThemeHandler = useToggleThemeHandler();
  const isDarkMode = useIsDarkMode();

  const pathname = usePathname();
  const isLanding = pathname === `/${lang}`;
  const isTeamPage = pathname === `/${lang}/team`;
  const isBlogPage = pathname.startsWith(`/${lang}/blog`);
  const isEnginePage = pathname === `/${lang}/engine`;

  return (
    <header
      className={`flex flex-col p-6 text-lg lg:flex-row ${
        isLanding
          ? 'absolute z-10 w-full bg-transparent text-neutral-100'
          : 'border-b-4 border-b-primary-500 bg-neutral-100 text-neutral-800 dark:border-b-primary-300 dark:bg-neutral-800 dark:text-neutral-100'
      } ${className}`}
    >
      <div className="flex items-center justify-between">
        <Link href={`/${lang}`}>
          {isDarkMode || isLanding ? (
            <HorizonsWhite className="ml-4 h-12 w-12 select-none" priority />
          ) : (
            <Horizons className="ml-4 h-12 w-12 select-none" priority />
          )}
        </Link>
        <nav className="hidden lg:mx-12 lg:block">
          <ul className="flex">
            <Link href={`/${lang}/team`}>
              <li
                className={`mx-4 py-0.5 ${
                  !isLanding &&
                  'hover:text-primary-500 dark:hover:text-primary-300'
                } ${
                  isTeamPage &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                {locale.TEAM}
              </li>
            </Link>
            <Link
              href={{
                pathname: `/${lang}/blog`,
                query: { page: 1 },
              }}
            >
              <li
                className={`mx-4 py-0.5 ${
                  !isLanding &&
                  'hover:text-primary-500 dark:hover:text-primary-300'
                }
                ${
                  isBlogPage &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                {locale.BLOG}
              </li>
            </Link>
            <Link href={`/${lang}/engine`}>
              <li
                className={`mx-4 py-0.5 ${
                  !isLanding &&
                  'hover:text-primary-500 dark:hover:text-primary-300'
                } ${
                  isEnginePage &&
                  'border-b-2 border-b-primary-300 text-primary-500 dark:text-primary-300'
                }`}
              >
                Axolotl Engine
              </li>
            </Link>
            <Link href="https://starfall-rebellion.vercel.app" target="_blank">
              <li
                className={`mx-4 py-0.5 ${
                  !isLanding &&
                  'hover:text-primary-500 dark:hover:text-primary-300'
                } `}
              >
                Starfall Rebellion
              </li>
            </Link>
          </ul>
        </nav>
        {!isLanding && (
          <div
            onClick={toggleThemeHandler}
            className="absolute right-20 cursor-pointer lg:right-40"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 text-xl text-neutral-100" />
            ) : (
              <MoonIcon className="h-5 w-5 text-xl text-primary-500" />
            )}
          </div>
        )}
        <div className="absolute right-4 hidden lg:block">
          <LanguageSelector isLanding={isLanding} locale={locale} />
        </div>
        <div
          className="absolute right-8 flex lg:hidden"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </div>
      </div>
      <Menu
        isMenuOpen={isMenuOpen}
        isLanding={isLanding}
        locale={locale}
        lang={lang}
      />
    </header>
  );
};

export default Header;
