import React from 'react';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import TechStack from '@components/sections/TechStack';
import Projects from '@components/sections/Projects';
import Experience from '@components/sections/Experience';
import OpenSource from '@components/sections/OpenSource';
import GitHubStats from '@components/sections/GitHubStats';
import CaseStudy from '@components/sections/CaseStudy';
import Blog from '@components/sections/Blog';
import Testimonials from '@components/sections/Testimonials';
import Services from '@components/sections/Services';
import Contact from '@components/sections/Contact';

/**
 * TODO: Add scroll-spy to highlight active nav link via useActiveSection hook.
 * TODO: Wire scroll-triggered animations once animations.css is implemented.
 */
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <OpenSource />
      <GitHubStats />
      <CaseStudy />
      <Blog />
      <Testimonials />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
