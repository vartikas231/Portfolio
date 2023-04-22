import * as React from 'react';
import {useContext} from 'react';
import './App.css'
import Navbar from "./components/Homepages/Navbar";

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



import { DataContext } from './components/context/GlobalContext';
const App = () => {

const state=useContext(DataContext);
const [isLogin,setIsLogin]=state.isLogin;


  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route
        path="/login"
        element={<Login />}
        render={() => (isLogin ? <Admin /> : <Login setIsLogin={setIsLogin} />)}
      />
      <Route
        exact
        path="/admin"
        render={() => (isLogin ? <Admin /> : <Login />)}
        element={<Admin />}
      />
      
     <Route exact path="/edit/:id" element={<EditAbout />} />

        <Route exact path="/editEducation/:id" element={<EditEducation />} />
           <Route exact path="/editProject/:id" element={<EditProjects />} />
        <Route
          exact
          path="/editAchievement/:id"
          element={<EditAchievements />}
        />
      </Routes>
       
    </>
  );
};

export default App;
