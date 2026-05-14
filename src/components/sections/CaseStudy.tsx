import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';

/**
 * TODO: Move case study data to src/constants/caseStudy.ts when ready.
 * TODO: Add design — full-width banner image, 2-col layout for subsections.
 * TODO: Add architecture diagram slot (SVG or image).
 */
const CaseStudy: React.FC = () => {
  return (
    <section
      id="case-study"
      data-section="case-study"
      data-animate="true"
      className="case-study"
    >
      <SectionTitle
        heading="Case Study"
        subtitle="A deep dive into one project"
      />

      <div className="case-study__body">
        <div className="case-study__subsection">
          <h3 className="case-study__subsection-heading">Problem</h3>
          <p className="case-study__subsection-text">
            {/* TODO: Describe the problem statement */}
          </p>
        </div>

        <div className="case-study__subsection">
          <h3 className="case-study__subsection-heading">Approach</h3>
          <p className="case-study__subsection-text">
            {/* TODO: Describe the solution approach */}
          </p>
        </div>

        <div className="case-study__subsection">
          <h3 className="case-study__subsection-heading">Architecture</h3>
          <ImagePlaceholder
            label="Architecture diagram"
            className="case-study__diagram"
          />
        </div>

        <div className="case-study__subsection">
          <h3 className="case-study__subsection-heading">Outcome</h3>
          <p className="case-study__subsection-text">
            {/* TODO: Describe measurable results and outcomes */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
