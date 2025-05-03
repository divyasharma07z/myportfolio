import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import Projects from "./components/Project";
import Myservices from "./components/Myservices";
import Contact from "./components/Contact";
import Myskills from "./components/Myskills"; 
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <div id="home"><HomePage /></div>
      <div id="skills"><Myskills /></div>
      <div id="projects"><Projects /></div>
      <div id="services"><Myservices /></div>
      <div id="contact"><Contact /></div>
      <div id="Footer"><Footer/></div>
      
    </div>
  );
};

export default App;
