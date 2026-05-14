export interface OpenSourceContribution {
  id: string;
  repo: string;
  description: string;
  prLink: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: '1',
    repo: 'org/repo-one',
    description: 'TODO: Describe the contribution and its impact.',
    prLink: 'https://github.com',
  },
  {
    id: '2',
    repo: 'org/repo-two',
    description: 'TODO: Describe the contribution and its impact.',
    prLink: 'https://github.com',
  },
  {
    id: '3',
    repo: 'org/repo-three',
    description: 'TODO: Describe the contribution and its impact.',
    prLink: 'https://github.com',
  },
];
