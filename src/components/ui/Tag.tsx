import React from 'react';

interface TagProps {
  label: string;
  className?: string;
}

/**
 * TODO: Add tag styling (pill shape with background)
 * Used for tech stack and project tags
 */
export const Tag: React.FC<TagProps> = ({ label, className = '' }) => {
  return <span className={`tag ${className}`}>{label}</span>;
};
