import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Card } from '@components/ui/Card';
import { Tag } from '@components/ui/Tag';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';
import { projects } from '@constants/projects';

/**
 * TODO: Add design — 3-column card grid, image on top, tags row, icon links.
 * TODO: Add hover lift effect on cards.
 */
const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      data-section="projects"
      data-animate="true"
      className="projects"
    >
      <SectionTitle
        heading="Projects"
        subtitle="Things I've built"
      />

      <div className="projects__grid">
        {projects.map((project) => (
          <Card key={project.id} className="projects__card">
            <ImagePlaceholder
              label={project.title}
              className="projects__card-image"
            />
            <div className="projects__card-body">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>
              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="projects__card-links">
                <a href={project.liveLink} className="projects__card-link" target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.githubLink} className="projects__card-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
