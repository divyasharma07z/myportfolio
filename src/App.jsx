import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';

import Projects from './components/Project';
import Myservices from './components/Myservices'
import About from './components/About';
import Contact from './components/Contact';

import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <div id="home"><HomePage /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="services"><Myservices /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
