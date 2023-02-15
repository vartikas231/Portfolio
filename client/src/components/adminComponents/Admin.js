import React from 'react'
import './admin.css'
import { Link } from 'react-router-dom'
import AboutAdmin from './AboutAdmin'
import AchievementsAdmin from "./AchievementsAdmin";
import ProjectsAdmin from "./ProjectsAdmin";
import EducationAdmin from "./EducationAdmin";



const Admin = () => {
  return (
    <div className="main-container">
    <br/>
      <h2 className="title">Admin forms</h2>
      <div className="admin-center">
        
        
        {/* about component */}
        <h4 className="admin-title">About Component</h4>
        <AboutAdmin />
        
        {/* end of about component */}
        <br />
        <br />
        
        
        <hr style={{ border: "1px solid lightgray" }} />
        <br />

        {/* education componets */}

        <h4 className="admin-title">Education Component</h4>
        <EducationAdmin />

        {/* end of education componets */}

        <br />
        <br />
        <hr style={{ border: "1px solid lightgray" }} />
        <br />

        {/* project components */}

        <h4 className="admin-title">Project Component</h4>
        <ProjectsAdmin />

        {/* end of project components */}

        <br />
        <br />
        <hr style={{ border: "1px solid lightgray" }} />
        <br />

        {/* achievement components */}

        <h4 className="admin-title">Achievement Component</h4>
        <AchievementsAdmin />
        <br/>
        {/* end of achievement components */}
      </div>
    </div>
  );
}

export default Admin