import React from 'react';

const META = [
  { k: 'Exp',      v: '3+',    acc: true  },
  { k: 'Projects', v: '20+',   acc: false },
  { k: 'Location', v: 'Mumbai',acc: false },
];

const HeroRightPanel: React.FC = () => (
  <div className="hero__right-panel">
    <p className="hero__right-bio">
      Hi, I'm <strong>Yash Bhoir</strong> — a full-stack developer &amp;{' '}
      <span className="acc">3D web creator</span> passionate about building
      seamless, immersive digital experiences that connect and convert.
    </p>

    <a href="#projects" className="hero__cta-btn">
      <div className="hero__cta-arrow">→</div>
      See my works
    </a>

    <div className="hero__meta-row">
      {META.map(({ k, v, acc }) => (
        <div key={k} className="hero__meta-item">
          <span className="k">{k}</span>
          <span className="v">
            {acc ? <span className="acc">{v}</span> : v}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default HeroRightPanel;
