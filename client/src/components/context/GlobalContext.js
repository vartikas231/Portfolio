import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
const [projects ,setProjects]=useState([]);

  const [about, setAbout] = useState([]);

const [education,setEducation]=useState([]);

const [achievement,setAchievement]=useState([]);

  const fetchData = async () => {
    // for fetching about
    const res1 = await axios.get(`http://localhost:5000/about`);
    //  console.log(res1.data);
    setAbout(res1.data);

    // for fetching education
    const  res2 = await axios.get(`http://localhost:5000/education`);
    //  console.log(res2.data);
    setEducation(res2.data);



    // for fetching projects
    const res4 = await axios.get(`http://localhost:5000/project`);
// setProjects(res)
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
  education:[education,setEducation],
  achievement:[achievement,setAchievement]
};

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
