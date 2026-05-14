import { useState, useEffect, type RefObject } from 'react';
import type { HeroPhrase } from '@constants/heroPhrase';

export interface HeroScrollState {
  pct: number;
  activePhrase: number;
  pastPhrases: boolean[];
  giantOpacity: number;
  giantTranslateY: number;
  badgeOpacity: number;
  scrollHintOpacity: number;
}

export function useHeroScroll(
  containerRef: RefObject<HTMLDivElement | null>,
  phrases: HeroPhrase[],
): HeroScrollState {
  const [state, setState] = useState<HeroScrollState>({
    pct: 0,
    activePhrase: 0,
    pastPhrases: phrases.map(() => false),
    giantOpacity: 0,
    giantTranslateY: 30,
    badgeOpacity: 1,
    scrollHintOpacity: 1,
  });

  useEffect(() => {
    const handle = () => {
      const el = containerRef.current;
      if (!el) return;
      const sh = el.scrollHeight - window.innerHeight;
      const pct = sh > 0 ? Math.min(Math.max((window.scrollY / sh) * 100, 0), 100) : 0;

      let activePhrase = 0;
      for (let i = 0; i < phrases.length; i++) {
        if (pct >= phrases[i].from && pct < phrases[i].to) { activePhrase = i; break; }
        if (pct >= phrases[phrases.length - 1].to) { activePhrase = -1; break; }
      }

      const pastPhrases      = phrases.map((p) => pct >= p.to && pct > 0);
      const giantT           = pct >= 82 ? Math.min((pct - 82) / 10, 1) : 0;
      const badgeOpacity     = pct < 15 ? 1 : Math.max(0, 1 - (pct - 15) / 10);
      const scrollHintOpacity = pct < 8 ? 1 : Math.max(0, 1 - (pct - 8) / 6);

      setState({
        pct,
        activePhrase,
        pastPhrases,
        giantOpacity: giantT,
        giantTranslateY: (1 - giantT) * 30,
        badgeOpacity,
        scrollHintOpacity,
      });
    };

    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return state;
}
