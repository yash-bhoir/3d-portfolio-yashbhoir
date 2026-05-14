/**
 * Smoothly scrolls the page to the element with the given section id.
 * TODO: add offset parameter to account for fixed navbar height.
 */
export function scrollToSection(sectionId: string): void {
  // TODO: implement smooth scroll with navbar offset
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
