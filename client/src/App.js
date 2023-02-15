import Header from "./components/Homepages/Header";
import Footer from "./components/Homepages/Footer";
import Navbar from "./components/Homepages/Navbar";
import About from "./components/Homepages/About";
import Education from "./components/Homepages/Education";
import Achievements from "./components/Homepages/Achievements";
import Projects from "./components/Homepages/Projects";
import Contact from "./components/Homepages/Contact";
import Login from "./components/Homepages/Login";
import Main from "./components/Homepages/Main";
// admin components
import Admin from "./components/adminComponents/Admin";
// edit components
import EditAbout from "./components/editComponents/EditAbout";
import EditEducation from "./components/editComponents/EditEducation";

import EditProjects from "./components/editComponents/EditProjects";
import EditAchievements from "./components/editComponents/EditAchievement";

import { Route, Routes } from "react-router-dom";

// import Element from "react-scroll";
const App = () => {
  return (
    
    <Routes>
    
      <Route
        path="/"
        element={
          <div>
          <Main/>
          </div>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/edit/:id" element={<EditAbout />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/editEducation/:id" element={<EditEducation />} />
      <Route path="/editProject" element={<EditProjects />} />
      <Route path="/editAchievement" element={<EditAchievements />} />
      
    </Routes>
  );
};

export default App;
