import React from 'react';
import { navLinks } from '@constants/nav';
import { Button } from '@components/ui/Button';

/**
 * TODO: Add design — sticky position, blur backdrop, logo font, active link indicator.
 * TODO: Add mobile hamburger menu and drawer.
 * TODO: Wire resume download href to actual PDF asset.
 */
const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {/* TODO: Replace text with SVG logo */}
          YB
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href} className="navbar__item">
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="outline" className="navbar__resume">
          {/* TODO: Set href to public/resume.pdf */}
          Resume
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
