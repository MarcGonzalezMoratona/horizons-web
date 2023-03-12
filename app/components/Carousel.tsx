import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IProps {
  images: string[];
  priority: boolean;
}

export const Carousel = ({ images, priority }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((currentSlide + images.length - 1) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  });

  const renderSlides = () => {
    return images.map(
      (image, index) =>
        currentSlide === index && (
          <Image
            key={`image ${index}`}
            src={`/${image}`}
            alt={'Lego Star Wars'}
            className="object-contain"
            fill
            priority={priority}
          />
        )
    );
  };

  return (
    <div className="bg-black w-full h-[30vh] sm:h-[50vh] relative select-none">
      {renderSlides()}
      <ChevronLeftIcon
        className="w-12 h-12 text-white absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => previousSlide()}
      />
      <ChevronRightIcon
        className="w-12 h-12 text-white absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => nextSlide()}
      />
      <ul className="flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <li
            onClick={() => setCurrentSlide(index)}
            key={`slide ${index}`}
            className={`h-3 w-3 rounded-full cursor-pointer bg-white ${
              currentSlide !== index && 'opacity-30'
            } hover:opacity-70`}
          />
        ))}
      </ul>
    </div>
  );
};
