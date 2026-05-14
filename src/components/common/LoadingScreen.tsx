import { useEffect, useRef, useState } from 'react';
import '@styles/loader.css';

const WORDS = ['Booting', 'Loading', 'Compiling', 'Rendering', 'Ready'];

export default function LoadingScreen() {
  const [wipe,    setWipe]    = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [gone,    setGone]    = useState(false);

  const numRef  = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const ldRef   = useRef<HTMLSpanElement>(null);

  // Local clock
  useEffect(() => {
    const tick = () => {
      const d = new Date(), z = (n: number) => String(n).padStart(2, '0');
      if (timeRef.current)
        timeRef.current.textContent = `${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`;
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Counter — 2400ms ease-out-cubic, cancelled flag for StrictMode
  useEffect(() => {
    let cancelled = false;
    let raf: number;
    const DURATION = 2400;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let lastWord = '';

    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min((now - start) / DURATION, 1);
      const p = ease(t) * 100;

      if (numRef.current)  numRef.current.textContent  = String(Math.floor(p)).padStart(3, '0');
      if (fillRef.current) fillRef.current.style.width = `${p.toFixed(1)}%`;
      if (ldRef.current)   ldRef.current.textContent   = String(Math.min(24, Math.floor((p / 100) * 24)));

      const w = WORDS[Math.min(WORDS.length - 1, Math.floor(p / (100 / WORDS.length)))];
      if (wordRef.current && lastWord !== w) {
        lastWord = w;
        wordRef.current.style.opacity = '0';
        setTimeout(() => {
          if (!cancelled && wordRef.current) { wordRef.current.textContent = w; wordRef.current.style.opacity = '1'; }
        }, 120);
      }

      if (t < 1) { raf = requestAnimationFrame(step); }
      else { finish(); }
    };

    const finish = () => {
      if (cancelled) return;
      setTimeout(() => { if (!cancelled) setWipe(true);    }, 260);
      setTimeout(() => { if (!cancelled) setSlideUp(true); }, 260 + 520);
      setTimeout(() => { if (!cancelled) setGone(true);    }, 260 + 520 + 1200);
    };

    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, []);

  const skip = () => {
    if (numRef.current)  numRef.current.textContent  = '100';
    if (fillRef.current) fillRef.current.style.width = '100%';
    setWipe(true);
    setTimeout(() => setSlideUp(true), 500);
    setTimeout(() => setGone(true),    1700);
  };

  if (gone) return null;

  return (
    <div className={`loader${slideUp ? ' loader--done' : ''}`} onClick={skip}>
      <div className="ldr-glow" />

      {/* Top strip */}
      <div className="ldr-top">
        <span className="mark">
          <span className="d" />
          Yash Bhoir
        </span>
        <span ref={timeRef} className="ldr-fade">00:00:00</span>
      </div>

      {/* Centre */}
      <div className="ldr-center">
        <span className="ldr-eyebrow">Initializing portfolio</span>
        <div className="ldr-counter">
          <span ref={numRef} className="num">000</span>
          <span className="pct">%</span>
        </div>
        <div className="ldr-rail-wrap">
          <div className="ldr-rail">
            <div ref={fillRef} className="ldr-fill" />
          </div>
          <div className="ldr-rail-meta">
            <span ref={wordRef} className="word">Booting</span>
            <span><span ref={ldRef}>0</span> / 24</span>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="ldr-bot">
        <span className="ldr-fade role">Full-Stack Developer · 3D Web Creator</span>
        <span className="ldr-fade">Mumbai, IN · 2026</span>
      </div>

      <div className={`ldr-wipe${wipe ? ' ldr-wipe--go' : ''}`} />
    </div>
  );
}
