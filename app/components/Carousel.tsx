import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useDevice } from '../hooks/useDevice';

interface CarouselProps {
  images: string[];
  priority: boolean;
}

const Carousel = ({ images, priority }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const device = useDevice();

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
    if (device === 'desktop') {
      const interval = setInterval(() => nextImage(), 3000);
      return () => clearInterval(interval);
    }
  });

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Left') nextImage();
      else if (eventData.dir === 'Right') previousImage();
    },
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
                ? 'opacity-0 duration-500 ease-in-out'
                : 'opacity-100 duration-[2000ms] ease-in-out'
            }`}
            fill
            priority={priority}
            onLoad={() => setIsAnimating(false)}
          />
        )
    );
  };

  return (
    <div
      className="relative my-20 h-[30vh] w-full select-none sm:h-[50vh]"
      {...handlers}
    >
      {renderImages()}
      <ChevronLeftIcon
        className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-b-4 border-b-primary-700 
        bg-primary-500 p-2 text-neutral-100 dark:border-b-neutral-700 dark:bg-neutral-600 
        sm:left-16 sm:transition-transform sm:duration-300 sm:hover:translate-y-[calc(-50%+4px)]"
        onClick={() => previousImage()}
      />
      <ChevronRightIcon
        className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-b-4 border-b-primary-700 
        bg-primary-500 p-2 text-neutral-100 dark:border-b-neutral-700 dark:bg-neutral-600 
        sm:right-16 sm:transition-transform sm:duration-300 sm:hover:translate-y-[calc(-50%+4px)]"
        onClick={() => nextImage()}
      />
      <ul className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <li
            onClick={() => goToSlide(index)}
            key={`image ${index}`}
            className={`h-3 w-3 cursor-pointer rounded-full bg-neutral-100 ${
              currentImage !== index && 'opacity-30'
            } hover:opacity-70`}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
