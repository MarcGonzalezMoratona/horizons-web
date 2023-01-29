import SocialNetworks from './SocialNetworks';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-black text-white text-lg p-6 sm:flex-row gap-2">
      Horizons Games © 2023
      <SocialNetworks />
    </footer>
  );
};

export default Footer;
