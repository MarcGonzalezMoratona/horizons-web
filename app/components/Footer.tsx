import SocialNetworks from './SocialNetworks';
import { socialNetworks } from '../data/socialNetworks';
import { Horizons, HorizonsWhite } from './Horizons';
import { useContext } from 'react';
import ThemeContext from '../../store/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className="flex flex-col items-center justify-between bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 text-lg p-6 sm:flex-row gap-2 border-t-2 dark:border-neutral-100 border-neutral-200">
      <div className="flex items-center gap-2 sm:gap-4 font-ethnocentric text-sm sm:text-md">
        {isDarkMode ? (
          <HorizonsWhite className="w-8 h-8" priority />
        ) : (
          <Horizons className="w-8 h-8" priority />
        )}
        {`Horizons Games © ${currentYear}`}
      </div>
      <SocialNetworks networks={socialNetworks} className="text-3xl" />
    </footer>
  );
};

export default Footer;
