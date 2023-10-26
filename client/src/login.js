import React, { useState } from 'react';
import './login.css';

const Login = () => {
        const [signInAs, setSignInAs] = useState("admin");
        
        const handleSignInAsChange = (event) => {
          setSignInAs(event.target.value);
        };
      
        const handleSignInFormSubmit = (event) => {
          event.preventDefault();
          // Handle sign-in logic
          
          console.log('Sign In Form Submitted');
          console.log('Sign In As:', signInAs);
          
        };

  return (
    <div className="login-container">
      <div className="login-login">
        <div className="login-group">
          <div className="login-frame">
          </div>
          <div className="login-contents">
            <div className="login-signin">
              <div className="login-signincontents">
                <div className="login-container1">
                <form onSubmit={handleSignInFormSubmit}> 
                <div className="form-group">
                  <div className="login-help">
                  </div>
                  <span className="login-text1">
                    <span>Sign In</span>
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    id='username'
                    onChange={handleSignInAsChange}
                    className="login-textinput input"
                  />
                  <input
                    type="text"
                    
                    required
                    placeholder="Password"
                    id='password'
                    onChange={handleSignInAsChange}
                    className="login-textinput1 input"
                  />
                  <button
                    type="button"
                    className="login-button"
                  >
                    Sign In
                  </button>
                </div>
                </form>
          
              </div>
             
            </div>
            
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login