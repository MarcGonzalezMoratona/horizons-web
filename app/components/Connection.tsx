import Dot from './Dot';
import VerticalLine from './VerticaLine';

type ConnectionProps = {
  animatePing?: boolean;
  animateSlide?: boolean;
};

export default function Connection({
  animatePing,
  animateSlide,
}: ConnectionProps) {
  return (
    <div className="flex flex-col items-center">
      <VerticalLine />
      <Dot animatePing={animatePing} animateSlide={animateSlide} />
    </div>
  );
}
