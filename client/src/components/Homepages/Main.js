import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Achievements from "./Achievements";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Education from "./Education";

const Main = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Education/>
      <Projects />
      <Achievements />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Main;
