import React, { useEffect, useRef } from 'react';
import SplashCursor from '@components/ui/SplashCursor';

/**
 * Renders:
 *  1. A dot  — follows mouse exactly (direct DOM, no re-render)
 *  2. A ring — lerps after the dot at 0.1 speed (RAF loop, direct DOM)
 *  3. SplashCursor WebGL fluid trail
 */
const Cursor: React.FC = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const dot  = dotRef.current;
    const ring_ = ringRef.current;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dot) { dot.style.left = `${e.clientX}px`; dot.style.top = `${e.clientY}px`; }
    };

    // Hover: shrink dot, expand ring on interactive elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      const isHover = !!el.closest('a, button, [role="button"]');
      dot?.classList.toggle('cursor__dot--hover', isHover);
      ring_?.classList.toggle('cursor__ring--hover', isHover);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    let raf: number;
    const lerp = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ring_) { ring_.style.left = `${ring.current.x}px`; ring_.style.top = `${ring.current.y}px`; }
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor__dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
      <SplashCursor
        DENSITY_DISSIPATION={7}
        VELOCITY_DISSIPATION={1.5}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#773100"
      />
    </>
  );
};

export default Cursor;
