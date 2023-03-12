import Link from 'next/link';

import { useState } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector';
import useTranslation from 'next-translate/useTranslation';
import { HorizonsWhite } from './Horizons';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const { t } = useTranslation('common');

  return (
    <header className="flex flex-col bg-black text-white text-lg p-6 sm:flex-row">
      <div className="flex items-center justify-between">
        <Link href="/">
          <HorizonsWhite className="ml-4 h-12 w-12" />
        </Link>
        <nav className="hidden sm:block sm:mx-12">
          <ul className="flex">
            <Link href="/team">
              <li className="mx-4">{t('TEAM')}</li>
            </Link>
            <Link href="/blog">
              <li className="mx-4">{t('BLOG')}</li>
            </Link>
          </ul>
        </nav>
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
