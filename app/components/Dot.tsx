type DotProps = {
  animateSlide?: boolean;
  animatePing?: boolean;
  className?: string;
};

export default function Dot({
  animateSlide,
  animatePing,
  className,
}: DotProps) {
  return (
    <div
      className={`h-4 w-4 ${animatePing && 'animate-dotPing'} ${
        animateSlide && 'animate-dotSlideDown'
      } rounded-full bg-secondary-600 dark:bg-secondary-500 ${className}`}
    />
  );
}
