import React from 'react';
import { navLinks } from '@constants/nav';
import { socials } from '@constants/socials';

/**
 * TODO: Add design — dark background, three-column layout (logo | links | socials).
 * TODO: Replace text logo with SVG logo component.
 * TODO: Replace social label text with icon components.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#home" className="footer__logo">
          {/* TODO: Replace with SVG logo */}
          YB
        </a>

        <nav className="footer__nav">
          <ul className="footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="footer__nav-item">
                <a href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {/* TODO: Render icon via social.icon */}
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <p className="footer__copyright">
        &copy; {currentYear} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
