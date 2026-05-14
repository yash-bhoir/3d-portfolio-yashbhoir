import React from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Card } from '@components/ui/Card';
import { ImagePlaceholder } from '@components/ui/ImagePlaceholder';
import { testimonials } from '@constants/testimonials';

/**
 * TODO: Add design — large quote mark, avatar circle, author name bold, role muted.
 * TODO: Consider a horizontal scroll carousel on mobile.
 */
const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      data-section="testimonials"
      data-animate="true"
      className="testimonials"
    >
      <SectionTitle
        heading="Testimonials"
        subtitle="What people say about working with me"
      />

      <div className="testimonials__grid">
        {testimonials.map((item) => (
          <Card key={item.id} className="testimonials__card">
            <blockquote className="testimonials__card-quote">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <div className="testimonials__card-author">
              <ImagePlaceholder
                label={item.author}
                className="testimonials__card-avatar"
              />
              <div className="testimonials__card-info">
                <p className="testimonials__card-name">{item.author}</p>
                <p className="testimonials__card-role">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
