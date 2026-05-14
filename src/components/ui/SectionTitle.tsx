import React from 'react';

interface SectionTitleProps {
  heading: string;
  subtitle?: string;
  className?: string;
}

/**
 * TODO: Add design — heading size, orange accent underline, subtitle muted color.
 * Used at the top of every section for consistent titling.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  heading,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`section-title ${className}`}>
      <h2 className="section-title__heading">{heading}</h2>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
};
