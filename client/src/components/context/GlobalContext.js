import axios from "axios";
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  
const [isLogin,setIsLogin]=useState(false);
const [projects ,setProjects]=useState([]);
const [about, setAbout] = useState([]);
const [education,setEducation]=useState([]);
const [achievement,setAchievement]=useState([]);


// checking token login
const checkLogin=async ()=>{
  const token=localStorage.getItem('tokenStore');
  if (token) {
    const verified = await axios.get(`/user/verify`, {
      headers: { Authorization:token}})
    console.log(verified);
    setIsLogin(verified.data);
    if (verified.data === false) {
      return localStorage.clear();
    }
  } else {
    setIsLogin(false);
  }
}


useEffect(()=>{
  try{
    checkLogin();
    // fetchData();

  }catch(err){
    console.log(err);
  }
},[])



  const fetchData = async () => {

    const res1 = await axios.get(`http://localhost:5000/about`);
    setAbout(res1.data);

    // for fetching education
    const  res2 = await axios.get(`http://localhost:5000/education`);
    //  console.log(res2.data);
    setEducation(res2.data);



    // for fetching projects
    const res4 = await axios.get(`http://localhost:5000/project`);
    setProjects(res4.data);
    // console.log(res4.data);

    // for fetching achievements
    const res3 = await axios.get(`http://localhost:5000/achievement`);
    //  console.log(res3.data);
    setAchievement(res3.data);
  }
   


  useEffect(() => {
    try {
      
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [])

  
 

const state = {
  about: [about, setAbout],
  education: [education, setEducation],
  achievement: [achievement, setAchievement],
  isLogin: [isLogin, setIsLogin],
  projects:[projects,setProjects]
};

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
