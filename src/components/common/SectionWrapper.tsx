import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * HOC wrapper that ensures every section gets a consistent outer container
 * with id, data-section, and data-animate attributes for scroll-based animations.
 * TODO: integrate with IntersectionObserver to toggle animation classes.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
}) => {
  return (
    <div
      id={id}
      data-section={id}
      data-animate="true"
      className={`section-wrapper ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Higher-order component variant — wraps a component in SectionWrapper.
 * Usage: export default withSection(MySection, 'my-section');
 */
export function withSection<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  sectionId: string,
): React.FC<P> {
  return function WithSection(props: P) {
    return (
      <SectionWrapper id={sectionId}>
        <WrappedComponent {...props} />
      </SectionWrapper>
    );
  };
}
