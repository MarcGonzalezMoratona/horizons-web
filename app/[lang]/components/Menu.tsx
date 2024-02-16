import Link from 'next/link';
import { Locale } from '../locales/types/locales';
import LanguageSelector from './LanguageSelector';

type MenuProps = {
  isMenuOpen: boolean;
  isLanding: boolean;
  locale: Locale;
  lang: string;
};

const Menu = ({ isMenuOpen, isLanding, locale, lang }: MenuProps) => {
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav
            className={`flex w-full flex-col ${
              isLanding
                ? 'border bg-transparent'
                : 'bg-neutral-100 py-3 dark:bg-neutral-800'
            } my-4 text-neutral-100 `}
          >
            <ul>
              <Link href={`/${lang}/team`}>
                <li
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400'
                  } p-3 text-neutral-100  dark:text-neutral-100`}
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
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400 '
                  } p-3 text-neutral-100  dark:text-neutral-100`}
                >
                  {locale.BLOG}
                </li>
              </Link>
              <Link href={`/${lang}/engine`}>
                <li
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400'
                  } p-3 text-neutral-100  dark:text-neutral-100`}
                >
                  Axolotl Engine
                </li>
              </Link>
              <Link
                href="https://starfall-rebellion.vercel.app"
                target="_blank"
                rel="noopener"
              >
                <li
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400'
                  } p-3 text-neutral-100  dark:text-neutral-100`}
                >
                  Starfall Rebellion
                </li>
              </Link>
              <Link
                href="https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v1.0/AxolotlEngine.1.0.zip"
                target="_blank"
                rel="noopener"
              >
                <li
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400'
                  } p-3 text-neutral-100  dark:text-neutral-100`}
                >
                  {locale.DOWNLOAD}
                </li>
              </Link>
            </ul>
          </nav>
          <LanguageSelector isLanding={isLanding} locale={locale} />
        </div>
      )}
    </>
  );
};

export default Menu;
