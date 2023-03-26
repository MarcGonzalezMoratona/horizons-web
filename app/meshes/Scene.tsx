import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Lego from './Lego';
import Cube from './Cube';

export default function Scene() {
  const [position, setPosition] = useState([0, 0, 0]);

  const handleInput = (event) => {
    if (event.key === 'a')
      setPosition([position[0] + 0.01, position[1], position[2]]);
    if (event.key === 'd')
      setPosition([position[0] - 0.01, position[1], position[2]]);
    if (event.key === 'w')
      setPosition([position[0], position[1], position[2] + 0.01]);
    if (event.key === 's')
      setPosition([position[0], position[1], position[2] - 0.01]);
  };

  return (
    <div
      className="flex h-screen w-full items-center"
      onClick={handleInput}
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
          <Cube position={[0, 0, 0]} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
