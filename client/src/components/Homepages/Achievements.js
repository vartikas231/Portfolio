import React,{useContext} from 'react'
import { DataContext } from "../context/GlobalContext";
const Achievement = () => {
  const state = useContext(DataContext);
  const [achievement] = state.achievement;
  
  return (
    <div className="main-container">
      <h2 className="title">Achievements</h2>
      <div className="experience">
        <div className="experience-center">
          {achievement.map((item) => (
            <div className="single-experience" key={item._id}>
              <p>{item.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement