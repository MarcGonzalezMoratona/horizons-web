import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

type IProps = {
  size: string;
};

const SocialNetworks = (props: IProps) => {
  const { size } = props;

  return (
    <div className={`flex items-center gap-4 text-${size}`}>
      <Link href="https://twitter.com/horizons_games">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href="https://instagram.com/horizons.games">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link href="https://twitter.com/horizons_games">
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
      <Link href="https://tiktok.com/@horizonsgames">
        <FontAwesomeIcon icon={faTiktok} />
      </Link>
      <Link href="https://twitter.com/horizons_games">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
};

export default SocialNetworks;
