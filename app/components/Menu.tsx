import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from './LanguageSelector';

type MenuProps = {
  isMenuOpen: boolean;
  isLanding: boolean;
};

const Menu = ({ isMenuOpen, isLanding }: MenuProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav
            className={`flex w-full flex-col ${
              isLanding
                ? 'border bg-transparent'
                : 'bg-neutral-100 py-3 dark:bg-neutral-800'
            } my-4 text-neutral-100 `}
          >
            <ul>
              <Link href="/team">
                <li
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400'
                  } p-3 text-neutral-100  dark:text-neutral-100`}
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
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400 '
                  } p-3 text-neutral-100  dark:text-neutral-100`}
                >
                  {t('BLOG')}
                </li>
              </Link>
              <Link href="/engine">
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
              <Link href="/media">
                <li
                  className={`my-3 w-full rounded ${
                    isLanding
                      ? 'bg-transparent'
                      : 'bg-primary-500 dark:bg-primary-400'
                  } p-3 text-neutral-100  dark:text-neutral-100`}
                >
                  Media
                </li>
              </Link>
            </ul>
          </nav>
          <LanguageSelector isLanding={isLanding} />
        </div>
      )}
    </>
  );
};

export default Menu;
