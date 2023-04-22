import React from "react";
import profile from "../../images/vartika.jpg";
import "../../App.css";
import Typewritter from "typewriter-effect";
// import Particles from "react-tsparticles";

import ParticleEffect from "./ParticleEffect";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="particle">
        
          {/* <ParticleEffect/> */}

          <div className="fullname">
            <h1>
              <Typewritter
                options={{
                  strings: [
                    "Vartika Sharma",
                    "Software Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="cv">
            <span>
              <b>Cv:</b>
              <a href="/#" target="_blank" rel="noreferrer">
                <i className="fas fa-file-pdf"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="personalInfo">
        <div className="personalInfo-center">
          <div className="personalInfo-details">
            {/* Single Info */}
            <div className="info">
              <label htmlFor="name">Fullname:</label>
              <label>
                <h4>Vartika Sharma</h4>
              </label>
            </div>

            <div className="info">
              <label htmlFor="name">Occupation:</label>
              <label>
                <h4>Student/Software Developer</h4>
              </label>
            </div>

            <div className="info">
              <label htmlFor="name">Email:</label>
              <label>
                <h4>vartikas231@gmail.com</h4>
              </label>
            </div>
          </div>

          <div className="personalInfo-img">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
