import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="gradient-text">Welcome to My 3D Portfolio</h1>
          <p>
            Showcase your projects and skills with stunning 3D visualizations and
            interactive experiences.
          </p>
          <button className="cta-button">Explore My Work</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
