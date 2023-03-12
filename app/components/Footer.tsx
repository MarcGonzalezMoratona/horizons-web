import SocialNetworks from './SocialNetworks';
import { socialNetworks } from '../data/socialNetworks';
import { HorizonsWhite } from './Horizons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-between bg-black text-white text-lg p-6 sm:flex-row gap-2">
      <div className="flex items-center gap-2 sm:gap-4">
        <HorizonsWhite className="w-8 h-8" />
        {`Horizons Games © ${currentYear}`}
      </div>
      <SocialNetworks networks={socialNetworks} className={'text-3xl'} />
    </footer>
  );
};

export default Footer;
