import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

/**
 * Tracks the mouse cursor position for the custom cursor overlay.
 * TODO: implement mousemove listener; animate cursor-ring with delay.
 */
export function useCursor(): CursorPosition {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    // TODO: const handler = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    // TODO: document.addEventListener('mousemove', handler);
    // TODO: return () => document.removeEventListener('mousemove', handler);
    setPosition({ x: 0, y: 0 }); // placeholder call to satisfy noUnusedLocals
  }, []);

  return position;
}
