import React from 'react';
import { Button } from '@components/ui/Button';

/**
 * TODO: Add design — large 404 number, short message, back-home button.
 * TODO: Add animated illustration or glitch text effect.
 */
const NotFound: React.FC = () => {
  return (
    <main className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">
        Oops — this page does not exist.
      </p>
      <Button variant="primary" className="not-found__cta">
        <a href="/">Back to Home</a>
      </Button>
    </main>
  );
};

export default NotFound;
