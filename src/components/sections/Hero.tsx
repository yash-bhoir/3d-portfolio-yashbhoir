import React, { useRef } from 'react';
import '@styles/hero.css';
import { useHeroScroll } from '@hooks/useHeroScroll';
import { HERO_PHRASES } from '@constants/heroPhrase';
import HeroNav from './HeroNav';
import HeroPhrases from './HeroPhrases';
import HeroCanvas from './HeroCanvas';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    activePhrase, pastPhrases,
    giantOpacity, giantTranslateY,
    badgeOpacity, scrollHintOpacity,
  } = useHeroScroll(containerRef, HERO_PHRASES);

  return (
    <div className="hero__scroll-container" ref={containerRef}>
      <div className="hero__stage">

        <div className="hero__frame" />

        <div className="hero__media-layer">
          <HeroCanvas containerRef={containerRef} />
        </div>

        <HeroNav />

        {/* Available badge */}
        <div className="hero__avail-badge" style={{ opacity: badgeOpacity }}>
          <div className="hero__avail-dot" />
          Available for Work · 2026
        </div>

        <HeroPhrases activePhrase={activePhrase} pastPhrases={pastPhrases} />

        {/* Meta stats + CTA — bottom right */}
        <div className="hero__br-stack">
          <a href="#projects" className="hero__cta-br">
            <div className="hero__cta-arrow">→</div>
            See my works
          </a>
          <div className="hero__meta-row">
            <div className="hero__meta-item">
              <span className="k">Exp</span>
              <span className="v"><span className="acc">3+</span></span>
            </div>
            <div className="hero__meta-item">
              <span className="k">Projects</span>
              <span className="v">20+</span>
            </div>
            <div className="hero__meta-item">
              <span className="k">Location</span>
              <span className="v">Mumbai</span>
            </div>
          </div>
        </div>

        {/* Giant name */}
        <div
          className="hero__giant-name"
          style={{ opacity: giantOpacity, transform: `translateX(-50%) translateY(${giantTranslateY}px)` }}
        >
          Yash
        </div>
        <div
          className="hero__giant-name-stroke"
          style={{ opacity: giantOpacity * 0.7, transform: `translateX(-50%)` }}
        >
          Yash
        </div>

        {/* Progress dots */}
        <div className="hero__progress-bar">
          {HERO_PHRASES.map((_, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="hero__prog-track" />}
              <div className={`hero__prog-dot${i === activePhrase ? ' hero__prog-dot--active' : ''}`} />
            </React.Fragment>
          ))}
        </div>

        {/* Corner tag */}
        <div className="hero__corner-tag">
          <div className="hero__corner-dot" />
          Full-Stack Developer · 3D Creator
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll-hint" style={{ opacity: scrollHintOpacity }}>
          <div className="hero__scroll-arrow">↓</div>
          Scroll
        </div>

      </div>
    </div>
  );
};

export default Hero;
