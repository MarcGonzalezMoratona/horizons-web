import React, { useRef } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

interface CubeProps {
  position: Vector3 | undefined;
}

export default function Cube(props: CubeProps) {
  const mesh = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[50, 0.01, 50]} />
      <meshStandardMaterial color={'green'} />
    </mesh>
  );
}
