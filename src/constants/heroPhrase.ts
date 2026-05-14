export interface HeroPhrase {
  id: number;
  label: string;
  words: string[];
  from: number;
  to: number;
}

export const HERO_PHRASES: HeroPhrase[] = [
  { id: 0, label: "Hello, I'm",          words: ['Yash', 'Bhoir'],                                 from: 0,  to: 18 },
  { id: 1, label: 'What I do',            words: ['Full‑Stack', 'Developer', '&', '3D', 'Creator'], from: 18, to: 36 },
  { id: 2, label: "Where I'm based",      words: ['Mumbai,', 'India'],                              from: 36, to: 54 },
  { id: 3, label: 'My mission',           words: ['Building', 'Immersive', 'Web', 'Experiences'],   from: 54, to: 72 },
  { id: 4, label: "Let's work together",  words: ['Open', 'to', 'Opportunities'],                   from: 72, to: 80 },
];
