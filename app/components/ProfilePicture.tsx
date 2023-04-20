import Image from 'next/image';
import SocialNetworks from './SocialNetworks';

type ProfilePictureProps = {
  partner: {
    name: string;
    image: string;
    networks?: {
      github?: string;
      linkedin?: string;
    };
  };
  index: number;
};

const ProfilePicture = ({ partner, index }: ProfilePictureProps) => {
  return (
    <li className="flex flex-col items-center">
      <div className="relative h-36 w-36 rounded-full sm:h-48 sm:w-48 md:h-60 md:w-60">
        <Image
          src={`/team/${partner.image}`}
          alt={partner.name}
          fill
          className="rounded-full object-cover"
          sizes="(min-width: 320px) 480px"
          priority={index < 12}
        />
      </div>
      <h2 className="mt-4 text-center text-lg font-medium">{partner.name}</h2>
      <SocialNetworks networks={partner.networks} />
    </li>
  );
};

export default ProfilePicture;
