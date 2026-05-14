import React from 'react';

interface ImagePlaceholderProps {
  /** Forwarded to className; use CSS to control dimensions per usage context. */
  className?: string;
  label?: string;
}

/**
 * TODO: Replace with actual <img> or lazy-loaded image component once assets are ready.
 * Renders a labelled placeholder block; size is controlled by the parent via CSS.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'Image',
  className = '',
}) => {
  return (
    <div
      className={`image-placeholder ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="image-placeholder__label">{label}</span>
    </div>
  );
};
