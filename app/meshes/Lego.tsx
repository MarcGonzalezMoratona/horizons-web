import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';

interface LegoProps {
  position: number[];
}
const Lego = ({ position }: LegoProps) => {
  const lego = useLoader(FBXLoader, '/models/lego.fbx');

  return (
    <>
      <primitive object={lego} scale={0.2} position={position} />
    </>
  );
};

export default Lego;
