import { BufferGeometry, Material, Mesh, Euler } from 'three';
import { useBox, Triplet } from '@react-three/cannon';
interface CubeProps {
  position?: Triplet;
  size?: Triplet;
  color?: string;
}

export default function Cube({
  position = [0, 0, 0],
  size = [1, 1, 1],
  color = 'white',
}: CubeProps) {
  const [ref] = useBox<Mesh<BufferGeometry, Material | Material[]>>(() => ({
    type: 'Static',
    position,
    args: size,
  }));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshStandardMaterial color={color} attach="material" />
    </mesh>
  );
}
