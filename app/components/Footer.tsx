import SocialNetworks from './SocialNetworks';
import { socialNetworks } from '../data/socialNetworks';
import { Horizons, HorizonsWhite } from './Horizons';
import { useIsDarkMode } from '../hooks/useTheme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isDarkMode = useIsDarkMode();

  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t-2 border-neutral-200 bg-neutral-100 p-6 text-lg text-neutral-800 dark:border-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 sm:flex-row">
      <div className="sm:text-md flex items-center gap-2 font-ethnocentric text-sm sm:gap-4">
        {isDarkMode ? (
          <HorizonsWhite className="h-8 w-8 select-none" priority />
        ) : (
          <Horizons className="h-8 w-8 select-none" priority />
        )}
        {`Horizons Games © ${currentYear}`}
      </div>
      <SocialNetworks networks={socialNetworks} className="text-3xl" />
    </footer>
  );
};

export default Footer;
