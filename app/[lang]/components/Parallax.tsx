'use client';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

const text: BannerLayer = {
  scale: [0.01, 1, 'easeInOutCirc'],
  opacity: [0.01, 1, 'easeInOutCirc'],
  children: (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className=" select-none text-3xl font-bold text-neutral-100 sm:text-6xl lg:text-8xl">
        HORIZONS GAMES
      </h1>
    </div>
  ),
  expanded: false,
};

const video: BannerLayer = {
  children: (
    <video
      className="min-h-full w-auto min-w-full max-w-none"
      autoPlay
      muted
      loop
    >
      <source src="/cosmos.mp4" type="video/mp4" />
    </video>
  ),
  expanded: false,
};

export default function Parallax() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[video, text]}
        className="min-w-screen min-h-screen w-auto max-w-none"
      />
    </ParallaxProvider>
  );
}
