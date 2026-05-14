export interface HeroWord {
  text: string;
  accent?: boolean; // renders in var(--orange)
}

export interface HeroPhrase {
  id: number;
  label: string;
  words: HeroWord[];
  from: number;
  to: number;
}

export const HERO_PHRASES: HeroPhrase[] = [
  {
    id: 0,
    label: "Hello, I'm",
    words: [
      { text: 'Yash' },
      { text: 'Bhoir.', accent: true },
    ],
    from: 0, to: 18,
  },
  {
    id: 1,
    label: 'What I do',
    words: [
      { text: 'Full-Stack' },
      { text: 'Developer' },
      { text: '&' },
      { text: 'AI', accent: true },
      { text: 'Engineer.' },
    ],
    from: 18, to: 36,
  },
  {
    id: 2,
    label: 'My mission',
    words: [
      { text: 'Building' },
      { text: 'Immersive', accent: true },
      { text: 'Web' },
      { text: 'Experiences.' },
    ],
    from: 36, to: 54,
  },
  {
    id: 3,
    label: "Where I'm based",
    words: [
      { text: 'Mumbai,' },
      { text: 'India.', accent: true },
    ],
    from: 54, to: 72,
  },
  {
    id: 4,
    label: "Let's work together",
    words: [
      { text: 'Open' },
      { text: 'to' },
      { text: 'Opportunities.', accent: true },
    ],
    from: 72, to: 80,
  },
];
