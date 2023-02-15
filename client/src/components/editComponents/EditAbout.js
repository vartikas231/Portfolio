import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import "./edit.css";
import axios from 'axios';

const EditAbout = (props) => {
  
  
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

// params.math.props.id
  let { id } = useParams();
  // getting the specific id
  useEffect(() => {
    axios
      .get(`http://localhost:5000/about/${`props.match.${id}`}`)
      .then((res) => {
        setAbout(res.data.about);
      })
      .catch((err) => console.log(err));
  }, [])

  // // onchange
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  // update about

  const updateAbout = (e) => {
    e.preventDefault();
    const postAbout={
      about
    }
    axios.put(`http://localhost:5000/about/update/${props.id}`, postAbout)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err))

    setAbout('');

    setTimeout(() => {
      navigate("/admin");
    }, 2000)
  }

  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={updateAbout}>
              <h3 className="updated">{message}</h3>
              <label htmlFor="text">About</label>
              <textarea
                value={about}
                onChange={onchangeAbout}
                name="textarea"
                id=""
                cols="30"
                rows="3"
              />
              <div className="btns">
                <button type="submit">Update Item</button>
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

export default EditAbout;
