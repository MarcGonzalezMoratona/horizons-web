import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

interface IProps {
  networks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    linkedin?: string | undefined;
    github?: string | undefined;
  };
  className?: string;
}

const SocialNetworks = ({ networks, className }: IProps) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-4 text-2xl ${className}`}>
      {networks?.twitter && (
        <Link href={networks.twitter} target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="hover:text-indigo-600" />
        </Link>
      )}
      {networks?.instagram && (
        <Link href={networks.instagram} target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-indigo-600"
          />
        </Link>
      )}
      {networks?.youtube && (
        <Link href={networks.youtube} target="_blank">
          <FontAwesomeIcon icon={faYoutube} className="hover:text-indigo-600" />
        </Link>
      )}
      {networks?.tiktok && (
        <Link href={networks.tiktok} target="_blank">
          <FontAwesomeIcon icon={faTiktok} className="hover:text-indigo-600" />
        </Link>
      )}
      {networks?.linkedin && (
        <Link href={networks.linkedin} target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-indigo-600"
          />
        </Link>
      )}
      {networks?.github && (
        <Link href={networks.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} className="hover:text-indigo-600" />
        </Link>
      )}
    </div>
  );
};

export default SocialNetworks;
