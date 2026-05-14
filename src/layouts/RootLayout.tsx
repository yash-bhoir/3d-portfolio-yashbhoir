import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import Cursor from '@components/common/Cursor';
import AnimatedBackground from '@components/common/AnimatedBackground';

const RootLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      {/* Fixed topo background — z-index -1, shows through transparent sections */}
      <AnimatedBackground />

      {/* Grain overlay — fixed, decorative only */}
      <div className="grain" aria-hidden="true" />

      {/* WebGL fluid cursor */}
      <Cursor />

      {/* Navbar hidden on home — Hero renders its own pill navbar inside sticky stage */}
      {!isHome && <Navbar />}

      <main className="root-layout__main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
