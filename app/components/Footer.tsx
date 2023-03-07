import SocialNetworks from './SocialNetworks';
import {socialNetworks} from "../data/socialNetworks"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flex flex-col items-center justify-between bg-black text-white text-lg p-6 sm:flex-row gap-2">
      {`Horizons Games © ${currentYear}`}
      <SocialNetworks networks={socialNetworks}/>
    </footer>
  );
};

export default Footer;
