import React from 'react';
import { HERO_PHRASES } from '@constants/heroPhrase';

interface Props {
  activePhrase: number;
  pastPhrases: boolean[];
}

const HeroPhrases: React.FC<Props> = ({ activePhrase, pastPhrases }) => (
  <div className="hero__text-stage">
    {HERO_PHRASES.map((phrase, i) => (
      <div
        key={phrase.id}
        className={[
          'hero__phrase',
          i === activePhrase ? 'hero__phrase--enter' : '',
          pastPhrases[i]    ? 'hero__phrase--exit'  : '',
        ].filter(Boolean).join(' ')}
      >
        <span className="hero__phrase-label">{phrase.label}</span>
        <div className="hero__phrase-headline">
          {phrase.words.map((word, wi) => (
            <div key={wi} className="hero__word">
              <span>{word}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default HeroPhrases;
