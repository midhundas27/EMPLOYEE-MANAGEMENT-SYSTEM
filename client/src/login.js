import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import './login.css'
const Login = () => {
        //const [loginAs, setLoginAs] = useState("admin")
        const [username,setUsername] = useState(null)
        const [password,setPassword] = useState(null)
        const navigate = useNavigate();

        const handleLoginFormSubmit = (event) => {     // Handle sign-in logic
          event.preventDefault()
          if(username==="employee" && password==="12345"){
            navigate("/department")
          }
          console.log('Sign In Form Submitted')
          // console.log('Sign In As:', loginAs)
        }

  return (
    <div className='login-background'>
      
    <div class="login-container">
      <p className="login-text">Sign In</p><br></br>
      <form onSubmit={handleLoginFormSubmit} class="login-form">
        <input type="text" required placeholder="Username"
          id='username' onChange={(e)=>setUsername(e.target.value)} className="login-username"/><br></br>
        <input type="text" required placeholder="Password" id='password' onChange={(e)=>setPassword(e.target.value)}
          className="login-password"/><br></br>
        <input type="submit" value="Sign In" className="login-button"/>
      </form>
    </div>
    </div>)}
export default Login