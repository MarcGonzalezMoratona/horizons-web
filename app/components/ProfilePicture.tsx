import Image from 'next/image';
import SocialNetworks from './SocialNetworks';

interface IProps {
  partner: {
    name: string;
    image: string;
    role: string;
    networks?: {
      github?: string;
      linkedin?: string;
    };
  };
}

const ProfilePicture = ({ partner }: IProps) => {
  return (
    <li className="flex flex-col items-center">
      <div className="rounded-full relative w-60 h-60">
        <Image
          src={`/${partner.image}`}
          alt={partner.name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="mt-4 text-lg">{partner.name}</h2>
      <p className="text-md">{partner.role}</p>
      <SocialNetworks networks={partner.networks} />
    </li>
  );
};

export default ProfilePicture;
