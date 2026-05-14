import React, { useEffect, useRef } from 'react';
import { drawTopoFrame } from '@utils/topoBackground';

/**
 * Full-viewport fixed canvas — topographic contour lines (marching squares).
 * Rendered at z-index -1 so it underlays every section continuously.
 * The Hero section hides it with a solid background via the .hero CSS rule.
 */
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const loop = () => {
      drawTopoFrame(ctx, canvas.width, canvas.height, t);
      t += 0.005; // slightly faster than original 0.003
      rafId = requestAnimationFrame(loop);
    };

    resize();
    loop();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
