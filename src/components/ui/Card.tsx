import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TODO: Add card styling
 * Generic card wrapper for projects, testimonials, blog posts, etc.
 */
export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`card ${className}`}>{children}</div>;
};
