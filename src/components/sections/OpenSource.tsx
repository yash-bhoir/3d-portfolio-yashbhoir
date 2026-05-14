import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Card } from '@components/ui/Card';
import { openSourceContributions } from '@constants/openSource';

/**
 * TODO: Add design — repo name with GitHub icon, PR badge, description text.
 * TODO: Optionally fetch live contribution data from GitHub API.
 */
const OpenSource: React.FC = () => {
  return (
    <section
      id="opensource"
      data-section="opensource"
      data-animate="true"
      className="open-source"
    >
      <SectionTitle
        heading="Open Source"
        subtitle="Contributions to the community"
      />

      <div className="open-source__grid">
        {openSourceContributions.map((item) => (
          <Card key={item.id} className="open-source__card">
            <h3 className="open-source__card-repo">{item.repo}</h3>
            <p className="open-source__card-description">{item.description}</p>
            <a
              href={item.prLink}
              className="open-source__card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PR
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
