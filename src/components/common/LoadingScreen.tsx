import { useEffect, useRef, useState } from 'react';
import '@styles/loader.css';

const WORDS  = ['Booting','Loading','Compiling','Rendering','Hydrating','Ready'];
const TASKS  = ['Compiling shaders…','Streaming video frames…','Initializing scroll engine…','Warming up Three.js…','Hydrating React tree…','Calibrating cursor…','Tuning easing curves…','Finalizing handshake…'];
const MARQUEE_ITEMS = ['Full-Stack Developer','3D Web Creator','AI Engineer','UI / UX','React · Node · Three.js','Mumbai · India'];

export default function LoadingScreen() {
  const [wipe,    setWipe]    = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [gone,    setGone]    = useState(false);

  const numRef  = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const taskRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const ldRef   = useRef<HTMLSpanElement>(null);

  // UTC clock
  useEffect(() => {
    const tick = () => {
      const d = new Date(), z = (n: number) => String(n).padStart(2,'0');
      if (timeRef.current)
        timeRef.current.textContent = `${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())} UTC`;
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Counter — cancelled flag protects against StrictMode double-invoke
  useEffect(() => {
    let cancelled = false;
    let raf: number;
    const DURATION = 2600;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let lastWord = '', lastTask = '';

    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min((now - start) / DURATION, 1);
      const p = ease(t) * 100;

      if (numRef.current)  numRef.current.textContent  = String(Math.floor(p)).padStart(3, '0');
      if (fillRef.current) fillRef.current.style.width = `${p.toFixed(1)}%`;
      if (ldRef.current)   ldRef.current.textContent   = String(Math.min(24, Math.floor(p / 100 * 24)));

      const w = WORDS[Math.min(WORDS.length - 1, Math.floor(p / 20))];
      if (wordRef.current && lastWord !== w) {
        lastWord = w;
        wordRef.current.style.opacity = '0';
        setTimeout(() => {
          if (!cancelled && wordRef.current) { wordRef.current.textContent = w; wordRef.current.style.opacity = '1'; }
        }, 120);
      }
      const tk = TASKS[Math.min(TASKS.length - 1, Math.floor((p / 100) * TASKS.length))];
      if (taskRef.current && lastTask !== tk) { lastTask = tk; taskRef.current.textContent = tk; }

      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        finish();
      }
    };

    const finish = () => {
      if (cancelled) return;
      setTimeout(() => { if (!cancelled) setWipe(true);    }, 280);
      setTimeout(() => { if (!cancelled) setSlideUp(true); }, 280 + 520);
      setTimeout(() => { if (!cancelled) setGone(true);    }, 280 + 520 + 1200);
    };

    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, []);

  const skip = () => { setWipe(true); setTimeout(() => setSlideUp(true), 500); setTimeout(() => setGone(true), 1600); };

  if (gone) return null;

  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={`loader${slideUp ? ' loader--done' : ''}`} onClick={skip}>
      <div className="ldr-glow" /><div className="ldr-grid" /><div className="ldr-frame" />
      <span className="ldr-corner tl" /><span className="ldr-corner tr" />
      <span className="ldr-corner bl" /><span className="ldr-corner br" />
      <div className={`ldr-wipe${wipe ? ' ldr-wipe--go' : ''}`} />

      {/* Top bar */}
      <div className="ldr-topbar">
        <div className="side">
          <span className="ldr-tag"><span className="ldr-tag-dot" /><span><span className="acc">YB</span> · Portfolio v3.0</span></span>
          <span>Mumbai, IN</span>
        </div>
        <div className="side">
          <span ref={timeRef}>00:00:00 UTC</span>
          <span className="ldr-tag"><span>Build <span className="acc">#0421</span></span></span>
        </div>
      </div>

      {/* Center */}
      <div className="ldr-center">
        <span className="ldr-eyebrow">Initializing experience</span>
        <div className="ldr-counter">
          <span ref={numRef} className="num">000</span>
          <span className="pct">%</span>
        </div>
        <div className="ldr-status">
          <span className="bracket">[</span>
          <span ref={wordRef} className="word">Booting</span>
          <span className="bracket">]</span>
        </div>
        <div className="ldr-rail-wrap">
          <div className="ldr-rail"><div ref={fillRef} className="ldr-fill" /></div>
          <div className="ldr-rail-meta">
            <span>Loading assets</span>
            <span><span ref={ldRef} className="acc">0</span> / 24 modules</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="ldr-marquee">
        <div className="ldr-marquee-track">
          {track.map((label, i) => (
            <span key={i} className={/3D|React/.test(label) ? 'acc' : undefined}>{label}</span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ldr-botbar">
        <div className="side"><span className="file">/<span className="acc">yash-bhoir</span>/portfolio/<span className="acc">v3</span>/index</span></div>
        <div className="side"><span ref={taskRef}>Compiling shaders…</span></div>
      </div>
    </div>
  );
}
