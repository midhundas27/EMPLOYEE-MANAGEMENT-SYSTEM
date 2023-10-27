import React, { useState } from 'react'
import './login.css'
const Login = () => {
        const [loginAs, setLoginAs] = useState("admin")

        const handleLoginAsChange = (event) => {
          setLoginAs(event.target.value)}

        const handleLoginFormSubmit = (event) => {     // Handle sign-in logic
          event.preventDefault()
          console.log('Sign In Form Submitted')
          console.log('Sign In As:', loginAs)}

  return (
    <div class="login-container">
      <p className="login-text">Sign In</p><br></br>
      <form onSubmit={handleLoginFormSubmit} class="login-form">
        <input type="text" required placeholder="Username"
          id='username' onChange={handleLoginAsChange} className="login-username"/><br></br>
        <input type="text" required placeholder="Password" id='password' onChange={handleLoginAsChange}
          className="login-password"/><br></br>
        <input type="submit" value="Sign In" className="login-button"/>
      </form>
    </div>)}
export default Login