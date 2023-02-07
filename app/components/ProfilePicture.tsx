import Image from 'next/image';
import SocialNetworks from './SocialNetworks';

interface IProps {
  partner: {
    name: string;
    image: string;
    networks?: {
      github?: string;
      linkedin?: string;
    };
  };
}

const ProfilePicture = ({ partner }: IProps) => {
  return (
    <li className="flex flex-col items-center">
      <div className="rounded-full relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60">
        <Image
          src={`/team/${partner.image}`}
          alt={partner.name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="mt-4 text-lg text-center font-medium">{partner.name}</h2>
      <SocialNetworks networks={partner.networks} />
    </li>
  );
};

export default ProfilePicture;
