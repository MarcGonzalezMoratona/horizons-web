import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from './LanguageSelector';
import PageContext from '../../store/PageContext';
import { useContext } from 'react';

interface IProps {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: IProps) => {
  const { t } = useTranslation('common');
  const { pageType } = useContext(PageContext);

  return (
    <>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="bg-neutral-100 dark:bg-neutral-800 text-neutral-100 w-full py-3 flex flex-col">
            <ul>
              <Link href="/team">
                <li className="p-3 rounded  text-neutral-100 bg-primary-500 dark:bg-primary-400 dark:text-neutral-100 my-3 w-full">
                  {t('TEAM')}
                </li>
              </Link>
              <Link
                href={{
                  pathname: '/blog',
                  query: { page: 1 },
                }}
              >
                <li className="p-3 rounded text-neutral-100 bg-primary-500 dark:bg-primary-400 dark:text-neutral-100 my-3 w-full">
                  {t('BLOG')}
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
