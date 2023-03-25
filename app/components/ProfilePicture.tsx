import Image from 'next/image';
import SocialNetworks from './SocialNetworks';

interface ProfilePictureProps {
  partner: {
    name: string;
    image: string;
    networks?: {
      github?: string;
      linkedin?: string;
    };
  };
  index: number;
}

const ProfilePicture = ({ partner, index }: ProfilePictureProps) => {
  return (
    <li className="flex flex-col items-center">
      <div className="rounded-full relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60">
        <Image
          src={`/team/${partner.image}`}
          alt={partner.name}
          fill
          className="object-cover rounded-full"
          sizes="(min-width: 320px) 480px"
          priority={index < 12}
        />
      </div>
      <h2 className="mt-4 text-lg text-center font-medium">{partner.name}</h2>
      <SocialNetworks networks={partner.networks} />
    </li>
  );
};

export default ProfilePicture;
