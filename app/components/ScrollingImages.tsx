import React, { useRef, useEffect, useState } from 'react';

const ScrollingImages = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageIndex, setImageIndex] = useState<number>(1);

  useEffect(() => {
    const drawImage = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      if (ctx && canvas) {
        const image = new Image();
        image.src = `/animation/${imageIndex}.png`;
        image.onload = () => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
      }
    };

    drawImage();
  }, [imageIndex]);

  const handleScroll = () => {
    const scrollY = window.scrollY - 88;
    if (scrollY / 14 < 0) setImageIndex(1);
    else if (scrollY / 14 > 61) setImageIndex(61);
    else setImageIndex(Math.floor(scrollY / 14));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative h-screen w-full overflow-hidden`}>
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className={`h-full w-full object-cover ${
          imageIndex === 61
            ? 'translate-y-[100%]'
            : imageIndex > 1 && 'fixed top-0'
        }`}
      />
    </div>
  );
};

export default ScrollingImages;
