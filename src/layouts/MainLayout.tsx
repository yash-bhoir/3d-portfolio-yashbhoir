import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '@components/common/Navigation';
import Footer from '@components/common/Footer';
import './MainLayout.css';

const MainLayout: React.FC = () => {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
