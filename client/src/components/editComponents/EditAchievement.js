import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import "./edit.css";
import axios from "axios";
const EditAchievement = (props) => {
  const [achievement, setAchievement] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/achievement/${`props.match.${id}`}`)
      .then((res) => {
        setAchievement(res.data.achievement);
      })
      .catch((err) => console.log(err));
  }, []);

  // // onchange
  const onchangeAchievement = (e) => {
    setAchievement(e.target.value);
    console.log(achievement);
  };

  // update about

  const updateAchievement = (e) => {
    e.preventDefault();
    const postAchievement = {
      achievement
    }
    axios
      .put(`http://localhost:5000/achievement/update/${props.id}`, postAchievement)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err));

    setAchievement("");

    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };

  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={updateAchievement}>
              <h3 className="updated">{message}</h3>
              <h4>Achievement Component</h4>
              <label htmlFor="text">Achievement</label>
              <input type="text" value={achievement} onChange={onchangeAchievement}/>
              <div className="btns">
                <button type="submit">Update item</button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAchievement;
