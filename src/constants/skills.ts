import type { SkillCategory } from '@/types/skill';

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'js-icon' },
      { name: 'TypeScript', icon: 'ts-icon' },
      { name: 'Python', icon: 'python-icon' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', icon: 'react-icon' },
      { name: 'Next.js', icon: 'nextjs-icon' },
      { name: 'Vue.js', icon: 'vue-icon' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgres-icon' },
      { name: 'MongoDB', icon: 'mongodb-icon' },
      { name: 'Firebase', icon: 'firebase-icon' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', icon: 'docker-icon' },
      { name: 'AWS', icon: 'aws-icon' },
      { name: 'GitHub Actions', icon: 'github-icon' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: 'git-icon' },
      { name: 'VS Code', icon: 'vscode-icon' },
      { name: 'Figma', icon: 'figma-icon' },
    ],
  },
];
