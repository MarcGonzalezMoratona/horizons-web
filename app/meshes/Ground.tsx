import { usePlane } from '@react-three/cannon';
import { BufferGeometry, Material, Mesh } from 'three';

export default function Ground() {
  const [ref] = usePlane<Mesh<BufferGeometry, Material | Material[]>>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
}
