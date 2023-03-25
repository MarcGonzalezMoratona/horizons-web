import Image from 'next/image';
import React from 'react';

interface ImageProps {
  className?: string;
  priority?: boolean;
}

export const Horizons = ({ className, priority }: ImageProps) => {
  return (
    <Image
      className={className}
      src="/horizons.svg"
      alt="logo"
      height={48}
      width={48}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};

export const HorizonsWhite = ({ className, priority }: ImageProps) => {
  return (
    <Image
      className={className}
      src="/horizonsWhite.svg"
      alt="logo"
      height={48}
      width={48}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};

export const HorizonsWithText = ({ className, priority }: ImageProps) => {
  return (
    <Image
      className={className}
      src="/horizonsText.svg"
      alt="logo"
      height={48}
      width={48}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};
