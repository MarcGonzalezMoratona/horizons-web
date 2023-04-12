import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from './LanguageSelector';

interface MenuProps {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: MenuProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="flex w-full flex-col bg-neutral-100 py-3 text-neutral-100 dark:bg-neutral-800">
            <ul>
              <Link href="/team">
                <li className="my-3 w-full  rounded bg-primary-500 p-3 text-neutral-100 dark:bg-primary-400 dark:text-neutral-100">
                  {t('TEAM')}
                </li>
              </Link>
              <Link
                href={{
                  pathname: '/blog',
                  query: { page: 1 },
                }}
              >
                <li className="my-3 w-full rounded bg-primary-500 p-3 text-neutral-100 dark:bg-primary-400 dark:text-neutral-100">
                  {t('BLOG')}
                </li>
              </Link>
              <Link href="/engine">
                <li className="my-3 w-full rounded bg-primary-500 p-3 text-neutral-100 dark:bg-primary-400 dark:text-neutral-100">
                  Axolotl Engine
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
