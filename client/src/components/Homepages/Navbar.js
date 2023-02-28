import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { scroller } from "react-scroll";
// import { Element } from "react-scroll";
import { DataContext } from "../context/GlobalContext";
const Navbar = () => {

const state=useContext(DataContext);
const [isLogin,setIsLogin]=state.isLogin;

  const [toggle, setToggle] = useState(false);


  // navbar scrolling
 const scrollToElement = (element) => {
   scroller.scrollTo =
     (element,
     {
       duration:800,
       delay:50,
       smooth:true,
       offset:-80
     })
 }


//  toggle 
  const actToggle = () => {
    setToggle(!toggle);
  };


  // close navbar
  const closeNavbar = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };

   


  // clear localstorage i.e enable login

  const logOutSubmit=()=>{
    localStorage.clear();
  }

  return (
    <div className="nav-container">
      <nav>
        <div className="logoBtn">
          <Link to="/" onClick={() => scrollToElement('Home')}>
            <img src={Logo} alt="" />
          </Link>

          <div className="btn" onClick={actToggle}>
            <div className={toggle ? "bar1 animateBar" : "bar bar1"}></div>
            <div className={toggle ? "bar2 animateBar" : "bar bar2"}></div>
            <div className={toggle ? "bar3 animateBar" : "bar3"}></div>
          </div>
        </div>

        <div className="links-container">
          <ul
            className={toggle ? "new-links links" : "links"}
            onClick={closeNavbar}
          >
            <li onClick={() => scrollToElement('Home')}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => scrollToElement('About')}>
              <Link to="/">About</Link>
            </li>
            <li onClick={() => scrollToElement('Education')}>
              <Link to="/">Education</Link>
            </li>
            <li onClick={() => scrollToElement('Achievements')}>
              <Link to="/">Achievements</Link>
            </li>
            <li onClick={() => scrollToElement('Projects')}>
              <Link to="/">Projects</Link>
            </li>
            <li onClick={() => scrollToElement('Contact')}>
              <Link to="/">Contact</Link>
            </li>
            <li className="admin">
              <Link to="/admin">Admin</Link>
            </li>
            <li onClick={logOutSubmit}><Link to ={isLogin? '/':'/login'}>{isLogin?"Logout":"login"}</Link></li>

          </ul>
        </div>
      </nav>
      <div id="About"></div>
    </div>
  );
};

export default Navbar;
