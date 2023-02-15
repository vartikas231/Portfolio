import React from 'react'
import {Link} from 'react-router-dom'
import {scroller} from 'react-scroll'
import About from './About';


const Footer = () => {


const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 800,
    delay: 50,
    smooth: true,
    offset: -80,
  });
};


  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title contact-title">
          Contact
        </h2>
      </div>

      <div className="main-contact">
        <div className="contact">
          <div className="contact-center">
            {/* links */}
            <div className="contact-center-links">
              <h3>Links</h3>
              <div className="contact-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={About}>About</Link>
                </li>
                <li>
                  <Link to="/">Education</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Achievements</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>

                <li className="admin">
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/">Login</Link>
                </li>
              </div>
            </div>
            {/* media */}

            <div className="contact-center-media">
              <h3>Media</h3>
              <div className="contact-media">
                <li>
                  <a href="/#">
                    <i className="fab fa-youtube-square"></i>Youtube
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-linkedin"></i>LinkedIn
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Created by Vartika Sharma in 2022 </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer