import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Card } from '@components/ui/Card';
import { services } from '@constants/services';

/**
 * TODO: Add design — icon in orange circle, title, description, bulleted includes list.
 * TODO: Replace icon string with actual SVG icon component.
 */
const Services: React.FC = () => {
  return (
    <section
      id="services"
      data-section="services"
      data-animate="true"
      className="services"
    >
      <SectionTitle
        heading="Services"
        subtitle="What I can do for you"
      />

      <div className="services__grid">
        {services.map((service) => (
          <Card key={service.id} className="services__card">
            <div className="services__card-icon">
              {/* TODO: Render SVG icon via service.icon */}
            </div>
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-description">{service.description}</p>
            <ul className="services__card-includes">
              {service.includes.map((item, idx) => (
                <li key={idx} className="services__card-include-item">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
