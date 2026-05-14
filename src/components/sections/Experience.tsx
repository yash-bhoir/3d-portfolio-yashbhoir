import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { experience } from '@constants/experience';

/**
 * TODO: Add design — vertical timeline with connector line, dot indicator per item.
 * TODO: Animate items sliding in from left on scroll.
 */
const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      data-section="experience"
      data-animate="true"
      className="experience"
    >
      <SectionTitle
        heading="Experience"
        subtitle="Where I've worked"
      />

      <ol className="experience__timeline">
        {experience.map((item) => (
          <li key={item.id} className="experience__item">
            <div className="experience__item-dot" />

            <div className="experience__item-content">
              <span className="experience__item-dates">
                {item.startDate} — {item.endDate}
              </span>
              <h3 className="experience__item-role">{item.role}</h3>
              <p className="experience__item-company">{item.company}</p>

              <ul className="experience__item-bullets">
                {item.description.map((point, idx) => (
                  <li key={idx} className="experience__item-bullet">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
