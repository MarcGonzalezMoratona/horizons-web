import { KeyboardEvent, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Lego from './Lego';
import Cube from './Cube';
import { Vector3 } from 'three';

export default function Scene() {
  const [position, setPosition] = useState([0, 0, 0]);

  const handleInput = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'a')
      setPosition([position[0] + 0.01, position[1], position[2]]);
    if (event.key === 'd')
      setPosition([position[0] - 0.01, position[1], position[2]]);
    if (event.key === 'w')
      setPosition([position[0], position[1], position[2] + 0.01]);
    if (event.key === 's')
      setPosition([position[0], position[1], position[2] - 0.01]);
  };

  const floorPosition = new Vector3(0, 0, 0);

  return (
    <div
      className="flex h-screen w-full items-center"
      onKeyDown={handleInput}
      tabIndex={0}
    >
      <Canvas
        className="min-w-screen min-h-screen"
        shadows
        dpr={[1, 2]}
        camera={{
          position: [position[0], position[1] + 2, position[2] - 3],
          fov: 60,
        }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Lego position={position} />
          <Cube position={floorPosition} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
