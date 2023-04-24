import React from 'react';
import Bot from '../components/Bot';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Hireme from '../components/Hireme';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
