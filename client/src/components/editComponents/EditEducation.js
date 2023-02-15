import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditEducation = (props) => {
  const [education, setEducation] = useState("");
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState("");
const navigate = useNavigate();
// props.match.params.id

const {id}=useParams();
    useEffect(() => {
      axios
        .get(`http://localhost:5000/education/${props.id}`)
        .then((res) => {
          setEducation(res.data.education);
        })
        .catch((err) => console.log(err));
    }, [])


     const onchangeEducation = (e) => {
       setEducation(e.target.value);
       console.log(education);
     };


     const updateEducation = (e) => {
       e.preventDefault();
       const postEducation = {
         education,
       };
       axios
         .put(`http://localhost:5000/about/update/${props.id}`, postEducation)
         .then((res) => {
           setMessage(res.data.msg);
         })
         .catch((err) => console.log(err));

       setEducation("");

       setTimeout(() => {
         navigate("/admin");
       }, 2000);
     };

  
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={updateEducation}>  
              <h3 className="updated">{message}</h3>
              <h4>Education component</h4>
              <label htmlFor="text">Education</label>
              <input type="text" value={education} onChange={onchangeEducation} />
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
export default EditEducation;
