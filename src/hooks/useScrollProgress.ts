import { useState, useEffect } from 'react';

/**
 * Tracks the current vertical scroll progress as a percentage (0–100).
 * TODO: implement scroll event listener with throttling.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // TODO: compute progress = (scrollY / (docHeight - viewportHeight)) * 100
    // TODO: throttle the handler and add/remove the event listener
    setProgress(0); // placeholder call to satisfy noUnusedLocals
  }, []);

  return progress;
}
