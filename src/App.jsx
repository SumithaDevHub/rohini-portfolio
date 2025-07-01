import React from "react";
import "./styles/global.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Hobbies />
      <Contact />
    </>
  );
};

export default App;
