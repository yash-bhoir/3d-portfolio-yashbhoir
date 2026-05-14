import React from 'react';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';
import { SectionTitle } from '@components/ui/SectionTitle';

/**
 * TODO: Add design — two-column layout (image left, text right).
 * TODO: Animate stat numbers counting up on scroll entry.
 */
const About: React.FC = () => {
  return (
    <section
      id="about"
      data-section="about"
      data-animate="true"
      className="about"
    >
      <SectionTitle
        heading="About Me"
        subtitle="A bit about who I am and what I do"
      />

      <div className="about__body">
        <div className="about__image-col">
          <ImagePlaceholder
            label="Profile photo"
            className="about__photo"
          />
        </div>

        <div className="about__text-col">
          <p className="about__bio">
            {/* TODO: First bio paragraph */}
          </p>
          <p className="about__bio">
            {/* TODO: Second bio paragraph */}
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-value">3+</span>
              <span className="about__stat-label">Years Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">20+</span>
              <span className="about__stat-label">Projects Shipped</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">50+</span>
              <span className="about__stat-label">Contributions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
