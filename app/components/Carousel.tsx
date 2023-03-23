import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IProps {
  images: string[];
  priority: boolean;
}

const Carousel = ({ images, priority }: IProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const previousImage = () => {
    setIsAnimating(true);
    setCurrentImage((currentImage + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setIsAnimating(true);
    setCurrentImage((currentImage + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setCurrentImage(index % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextImage(), 3000);
    return () => clearInterval(interval);
  });

  const renderImages = () => {
    return images.map(
      (image, index) =>
        currentImage === index && (
          <Image
            key={`image ${index}`}
            src={`/${image}`}
            alt={'Lego Star Wars'}
            className={`object-contain transition-opacity duration-[2000ms] ${
              isAnimating
                ? 'opacity-0 ease-in-out duration-500'
                : 'opacity-100 ease-in-out duration-[2000ms]'
            }`}
            fill
            priority={priority}
            onLoad={() => setIsAnimating(false)}
          />
        )
    );
  };

  return (
    <div className="bg-neutral-900 w-full h-[30vh] sm:h-[50vh] relative select-none">
      {renderImages()}
      <ChevronLeftIcon
        className="w-12 h-12 text-neutral-100 absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => previousImage()}
      />
      <ChevronRightIcon
        className="w-12 h-12 text-neutral-100 absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => nextImage()}
      />
      <ul className="flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <li
            onClick={() => goToSlide(index)}
            key={`image ${index}`}
            className={`h-3 w-3 rounded-full cursor-pointer bg-neutral-100 ${
              currentImage !== index && 'opacity-30'
            } hover:opacity-70`}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
