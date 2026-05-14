import React, { useState } from 'react';

const NAV_LINKS = ['Works', 'About', 'Contact'];

const HeroNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="hero__navbar">
      <div className="hero__nav-pill">
        <div className="hero__nav-logo-icon" />
        <span className="hero__nav-logo-text">Yash</span>
        <button
          className={`hero__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span />
        </button>
      </div>

      <div className="hero__nav-right">
        {NAV_LINKS.map(label => (
          <a key={label} href={`#${label.toLowerCase()}`} className="hero__nav-link">
            {label}
          </a>
        ))}
        <a href="#contact" className="hero__nav-cta">
          <div className="hero__nav-cta-arr">↗</div>
          Hire me
        </a>
      </div>
    </nav>
  );
};

export default HeroNav;
