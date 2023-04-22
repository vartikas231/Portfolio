import React ,{useContext,useState} from 'react';
import {Link ,useNavigate} from "react-router-dom"
import Register from "./Register";
import axios from 'axios';
import './login.css';
import { DataContext } from '../context/GlobalContext';



const Login = () => {
  
const navigate=useNavigate();
const [user ,setUser]= useState({name:'',email :'',password:''});
const [err,setErr]=useState('');
const state=useContext(DataContext);
const [isLogin,setIsLogin]=state.isLogin;

// onchange inputs

const onChangeInput=(e)=>{
  const {name ,value} =e.target;
  setUser({...user,[name]:value})
  setErr('');

}


// login submit
const loginSubmit =async (e)=>{
  e.preventDefault();
  try{
    const res = await axios.post(`http://localhost:5000/user/login`, {
      email: user.email,
      password: user.password,
    });
    setUser({name:'',email:'',password:''});
localStorage.setItem('tokenStore',res.data.token);
setIsLogin(true);

    setErr(res.data.msg);
   

navigate("/admin");
  }catch(err){
err.response.data.msg && setErr(err.response.data.msg)
  }
}




    return (
      <>
        <div className="login">
          <div className="main-container">
            <h3 className="title">Login for admin</h3>
            <div className="login-center">
              <form onSubmit={loginSubmit}>
                <p>{err}</p>

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="input email...."
                  name="email"
                  value={user.email}
                  onChange={onChangeInput}
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="input password...."
                  name="password"
                  value={user.password}
                  onChange={onChangeInput}
                  required
                />

                <div className="login-btn">
                  <button type="submit">Login</button>
                  <Link to="/">
                    <button> Home</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Register */}

        {/* <Register /> */}
      </>
    );
};

export default Login;
