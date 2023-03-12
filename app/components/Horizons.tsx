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
      sizes="(min-width: 320px) 320px"
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
      sizes="(min-width: 320px) 320px"
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
      sizes="(min-width: 320px) 320px"
    />
  );
};
