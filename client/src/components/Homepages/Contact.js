import React, { useState } from 'react'
import './contact.css'
import BackIng from '../../images/im4.jpg'
import axios from 'axios'
import load1  from '../../images/download.jpg'
// import load2 from "../../images/load2.gif";


const Contact = () => {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [banner,setBanner]=useState('');
const [bool, setBool] = useState(false);


// handle inputs

const handleNameChange=(e)=>{
  setName(e.target.value);
  console.log(name);
}


const handleEmailChange=(e)=>{
  setEmail(e.target.value);
   console.log(email);
}

const handleMessageChange = (e) => {
  setMessage(e.target.value);
   console.log(message);
}



// submitform


const formSubmit=(e)=>{
  e.preventDefault();
  let data={
    name:name,
    email:email,
    message:message
  }


  setBool(true);
  axios.post(`http://localhost:5000/contact`,data)
  .then(res=>{
    setBanner(res.data.msg);
    setBool(false);
    setTimeout(()=>{
      setBanner('');
    },2000)
    setName('');
    setEmail('');
    setMessage('');
  }).catch((err)=>console.log(err))
}

  return (
    <div className="main-container">
      <div className="contactForm">
        <h2 className="title">Contact Form</h2>
        <div className="contactForm-center">
          <div className="contact-form">
            <form onSubmit={formSubmit}>
              <p>{banner}</p>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="input name...."
                required
                value={name}
                onChange={handleNameChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="input email...."
                required
                value={email}
                onChange={handleEmailChange}
              />

              <label htmlFor="message">Message</label>

              <textarea
                type="text"
                name="message"
                id=""
                placeholder="input contact reason..."
                value={message}
                onChange={handleMessageChange}
              />
{/* put image name inside img src */}
              <div className="send-btn">
                <button type="submit">
                  Send
                  {bool ? (
                    <b className="load">
                      <img
                        src=""
                        alt=""
                      />
                    </b>
                  ) : 
                    ""
                  }
                </button>
              </div>
            </form>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <h4>Send your message</h4>
            <img src={BackIng} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact


// https://tenor.com/view/loading-fast-gif-14829442