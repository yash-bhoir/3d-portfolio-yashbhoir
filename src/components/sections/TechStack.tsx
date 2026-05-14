import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Tag } from '@components/ui/Tag';
import { skills } from '@constants/skills';

/**
 * TODO: Add design — category heading, icon grid with hover tooltips.
 * TODO: Replace icon string with actual SVG icon component.
 */
const TechStack: React.FC = () => {
  return (
    <section
      id="techstack"
      data-section="techstack"
      data-animate="true"
      className="tech-stack"
    >
      <SectionTitle
        heading="Tech Stack"
        subtitle="Technologies I work with"
      />

      <div className="tech-stack__categories">
        {skills.map((group) => (
          <div key={group.category} className="tech-stack__category">
            <h3 className="tech-stack__category-name">{group.category}</h3>
            <div className="tech-stack__skills">
              {group.skills.map((skill) => (
                <div key={skill.name} className="tech-stack__skill">
                  <span className="tech-stack__skill-icon">
                    {/* TODO: Render SVG icon via skill.icon */}
                  </span>
                  <Tag label={skill.name} className="tech-stack__skill-tag" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
