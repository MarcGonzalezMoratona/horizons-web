'use client';
import Image from 'next/image';
import { tools } from '../../data/tools';
import { useDevice } from '../hooks/useDevice';

export default function Tools() {
  const device = useDevice();
  const isMobile = device === 'mobile';

  return (
    <>
      {tools.map((tool, index) => {
        return (
          <li
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white sm:h-32 sm:w-32"
            key={index}
          >
            <Image
              className="select-none rounded"
              src={`/tools/${tool.src}`}
              width={`${isMobile ? 64 : 100}`}
              height={`${isMobile ? 64 : 100}`}
              alt={tool.alt}
            />
          </li>
        );
      })}
    </>
  );
}
