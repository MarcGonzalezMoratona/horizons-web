import React, { useRef } from 'react';

interface CubeProps {
  position: number[];
}

export default function Cube(props: CubeProps) {
  const mesh = useRef();
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[50, 0.01, 50]} />
      <meshStandardMaterial color={'green'} />
    </mesh>
  );
}
