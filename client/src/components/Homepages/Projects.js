import React from 'react'
import tablet from '../../images/stopwatch.jpg'
import aruino1 from '../../images/download.jpg'

// import panel from "../../images/iinfogs.jpg";
// import aruino1 from "../../images/download.jpg";
const Projects = () => {
  return (
    <div className="main-container">
      <div className="projects" id='projects'>
        <h2 className="title">Projects</h2>

        <div className="projects-center">
          {/* single projects */}
          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>
            <div className="single-project-info">
              <h3>Lorem ipsom</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </div>

          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>
            <div className="single-project-info">
              <h3>Lorem ipsom</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </div>
          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>
            <div className="single-project-info">
              <h3>Lorem ipsom</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </div>
          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>
            <div className="single-project-info">
              <h3>Lorem ipsom</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects