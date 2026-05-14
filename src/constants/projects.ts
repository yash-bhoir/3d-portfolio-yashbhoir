import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'TODO: Add project description and details',
    image: 'project-1.png',
    tags: ['React', 'TypeScript', 'Tailwind'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project-one',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'TODO: Add project description and details',
    image: 'project-2.png',
    tags: ['Next.js', 'PostgreSQL', 'Node.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project-two',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'TODO: Add project description and details',
    image: 'project-3.png',
    tags: ['Vue', 'Firebase', 'Vite'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project-three',
  },
];
