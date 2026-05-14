import React, { useEffect, useRef, type RefObject } from 'react';
import { useFrameLoader } from '@hooks/useFrameLoader';

const TOTAL = 121;

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
}

const HeroCanvas: React.FC<Props> = ({ containerRef }) => {
  const { images, loadedPercent, isReady } = useFrameLoader(TOTAL);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const ctxRef     = useRef<CanvasRenderingContext2D | null>(null);
  const sizeRef    = useRef({ w: 0, h: 0 });
  const lastIdx    = useRef(-1);
  const ticking    = useRef(false);
  const readyRef   = useRef(false);

  useEffect(() => { readyRef.current = isReady; }, [isReady]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = (img: HTMLImageElement) => {
      const ctx = ctxRef.current;
      if (!ctx || !img?.complete || !img.naturalWidth) return;
      const { w, h } = sizeRef.current;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw: number, dh: number, dx: number, dy: number;
      if (ir > cr) { dh = h; dw = img.naturalWidth * h / img.naturalHeight; dx = (w - dw) / 2; dy = 0; }
      else          { dw = w; dh = img.naturalHeight * w / img.naturalWidth; dx = 0; dy = (h - dh) / 2; }
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const render = () => {
      ticking.current = false;
      const el = containerRef.current;
      if (!el || !readyRef.current) return;
      const max = el.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(p * (TOTAL - 1))));
      if (idx !== lastIdx.current) { draw(images.current[idx]); lastIdx.current = idx; }
    };

    const schedule = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(render);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      const w = window.innerWidth, h = window.innerHeight;
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext('2d')!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxRef.current  = ctx;
      sizeRef.current = { w, h };
      lastIdx.current = -1;
    };

    const onResize = () => { resize(); schedule(); };

    resize();
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize,  { passive: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
    };
  }, [images, containerRef]);

  useEffect(() => {
    if (!isReady) return;
    lastIdx.current = -1;
    window.dispatchEvent(new Event('scroll'));
  }, [isReady]);

  return (
    <>
      {!isReady && (
        <div className="hero__loading">
          <div className="hero__loading-bar" style={{ width: `${loadedPercent}%` }} />
          <span className="hero__loading-pct">{loadedPercent}%</span>
        </div>
      )}
      <canvas ref={canvasRef} className="hero__frame-canvas" />
    </>
  );
};

export default HeroCanvas;
