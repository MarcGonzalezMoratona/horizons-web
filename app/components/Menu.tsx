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
          <nav className="bg-black text-white w-full py-3 flex flex-col">
            <ul>
              <Link href="/">
                <li className="p-3 rounded bg-white text-black my-3 w-full">
                  {t('HOME')}
                </li>
              </Link>
              <Link href="/team">
                <li className="p-3 rounded bg-white text-black my-3 w-full">
                  {t('TEAM')}
                </li>
              </Link>
              <Link href="/blog">
                <li className="p-3 rounded bg-white text-black my-3 w-full">
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
