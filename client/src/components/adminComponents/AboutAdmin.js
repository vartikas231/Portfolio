import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import axios from "axios";
const AboutAdmin = () => {
  const [about, setAbout] = useState('');
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCond, setMessageCond] = useState(false);



 useEffect(() => {
   const fetchData = async () => {
     try {
       const res = await axios.get(`http://localhost:5000/about`);
       // console.log(res.data);
       setAboutData(res.data);
     } catch (error) {
       console.log(error);
     }
   }
   fetchData();
 }, []);

  // onchange

  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    // console.log(about);
  };

  // submit about
  const handleSubmit = (e) => {
    e.preventDefault();
    
 const postAbout = {
   about,
 };
    setAbout('');

    axios
      .post(`http://localhost:5000/about`, postAbout)
      .then((res) => {
       
      })
      .catch((err) => console.log(err));
  };

  // delete about
  const deleteAbout = (id) => {
    axios
      .delete(`http://localhost:5000/about/${id}`)
      .then((res) => {
        setMessageCond(true);
        setMessage(`${res.data.msg}`);
        
        setTimeout(() => {
          setMessage('')
          setMessageCond(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
    // delete from UI

    const aboutFilterDel = aboutData.filter((item) => item._id !== id);
    setAboutData(aboutFilterDel);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>About Component</h4>

          <label htmlFor="text">About</label>
          <textarea
            // value={about}
            onChange={() => onchangeAbout}
            name="textarea"
            cols="30"
            rows="3"
          />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="same-item">
        {aboutData.map((item) => (
          <div className="about-info" key={item._id}>
            <div className="icons">
              <Link to={`/edit/${item._id}`}>
                <i className="fas fa-edit"></i>
              </Link>

              <i
                className="fas fa-trash"
                onClick={() => deleteAbout(item._id)}
              ></i>
            </div>

            <p>{item.about}</p>
          </div>
        ))}
      </div>
      <h3
        className={
          setMessageCond ? "new-delete item-delete-tab " : "item-delete-tab"
        }
      >
        {message}
      </h3>
    </div>
  );
};

export default AboutAdmin;
