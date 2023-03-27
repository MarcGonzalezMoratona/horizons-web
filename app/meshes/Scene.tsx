import { KeyboardEvent, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import FPV from './FPV';
import Ground from './Ground';
import Player from './Player';
import Cube from './Cube';

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

  return (
    <div
      className="flex h-screen w-full items-center"
      onKeyDown={handleInput}
      tabIndex={0}
    >
      <Canvas className="min-w-screen min-h-screen">
        <Sky />
        <ambientLight intensity={0.7} />
        <FPV />
        <Physics>
          <Player />
          <Cube position={[-5, 0, 0]} size={[0.1, 6, 10]} color="turquoise" />
          <Cube position={[0, 0, 5]} size={[10, 6, 0.1]} color="pink" />
          <Cube position={[5, 0, 0]} size={[0.1, 6, 10]} color="turquoise" />
          <Cube position={[-3.15, 0, -5]} size={[3.75, 3, 0.1]} color="pink" />
          <Cube position={[3.15, 0, -5]} size={[3.75, 3, 0.1]} color="pink" />
          <Cube position={[0, 2.25, -5]} size={[10, 1.5, 0.1]} color="pink" />
          <Cube position={[0, 3, 0]} size={[10, 0.1, 10]} />
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
}
