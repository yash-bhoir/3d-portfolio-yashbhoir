import { useState, useEffect } from 'react';

/**
 * Returns the id of the section currently visible in the viewport.
 * TODO: implement IntersectionObserver against all [data-section] elements.
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // TODO: create IntersectionObserver watching all [data-section] elements
    // TODO: call setActiveSection with the intersecting entry's id
    setActiveSection('home'); // placeholder call to satisfy noUnusedLocals
  }, []);

  return activeSection;
}
