import Image from 'next/image';
import React from 'react';

interface IProps {
  className?: string;
}

export const Horizons = ({ className }: IProps) => {
  return (
    <Image
      className={className}
      src="/horizons.svg"
      alt="logo"
      height={48}
      width={48}
    />
  );
};

export const HorizonsWhite = ({ className }: IProps) => {
  return (
    <Image
      className={className}
      src="/horizonsWhite.svg"
      alt="logo"
      height={48}
      width={48}
    />
  );
};

export const HorizonsWithText = ({ className }: IProps) => {
  return (
    <Image
      className={className}
      src="/horizonsText.svg"
      alt="logo"
      height={48}
      width={48}
    />
  );
};
