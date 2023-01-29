import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const SocialNetworks = () => {
  return (
    <div className={`flex items-center gap-4 text-2xl`}>
      <Link href="https://twitter.com/horizons_games" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href="https://instagram.com/horizons.games" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link href="https://youtube.com/@horizonsgames" target="_blank">
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
      <Link href="https://tiktok.com/@horizonsgames" target="_blank">
        <FontAwesomeIcon icon={faTiktok} />
      </Link>
      {/* This link should be updated when our company is created in LinkedIn */}
      <Link href="https://www.linkedin.com/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
};

export default SocialNetworks;
