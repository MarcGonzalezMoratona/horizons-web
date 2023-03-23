import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from './LanguageSelector';

interface IProps {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: IProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="bg-neutral-900 text-neutral-100 w-full py-3 flex flex-col">
            <ul>
              <Link href="/team">
                <li className="p-3 rounded bg-neutral-100 text-neutral-900 my-3 w-full">
                  {t('TEAM')}
                </li>
              </Link>
              <Link
                href={{
                  pathname: '/blog',
                  query: { page: 1 },
                }}
              >
                <li className="p-3 rounded bg-neutral-100 text-neutral-900 my-3 w-full">
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
