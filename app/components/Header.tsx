import Link from 'next/link';

import { useState } from 'react';
 import Menu from './Menu';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faBars } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector';

const Header = () => {

  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <header className="flex flex-col bg-black text-white text-lg p-6">
      <div className="flex items-center justify-between">
      <Link href="/">HORIZONS GAMES</Link>
      <LanguageSelector/>
      <div className="flex" onClick={()=>toggleMenu(!isMenuOpen)}>
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </header>
  );
};

export default Header;
