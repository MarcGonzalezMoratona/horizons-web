import { useEffect, useState } from 'react';

interface ActionsKeyboardMap {
  KeyW: string;
  KeyS: string;
  KeyA: string;
  KeyD: string;
  Space: string;
  ShiftLeft: string;
  [key: string]: string;
}

const ACTIONS_KEYBOARD_MAP: ActionsKeyboardMap = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  ShiftLeft: 'run',
};

export default function useKeyboard() {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    run: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];
      if (action) {
        setActions((prevActions) => ({ ...prevActions, [action]: true }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];
      if (action) {
        setActions((prevActions) => ({ ...prevActions, [action]: false }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return actions;
}
