import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';
import useKeyboard from '../hooks/useKeyboard';

const WALKING_SPEED = 2;
const RUNNING_SPEED = 4;

export default function Player() {
  const { moveForward, moveBackward, moveLeft, moveRight, run } = useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere<Mesh<BufferGeometry, Material | Material[]>>(
    () => ({
      mass: 1,
      type: 'Dynamic',
      position: [0, 0.5, 0],
    })
  );

  const position = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => {
      position.current = p;
    });
  }, [api.position]);

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => {
      velocity.current = v;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(position.current[0], position.current[1], position.current[2])
    );
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(run ? RUNNING_SPEED : WALKING_SPEED)
      .applyEuler(camera.rotation);
    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return <mesh ref={ref} />;
}
