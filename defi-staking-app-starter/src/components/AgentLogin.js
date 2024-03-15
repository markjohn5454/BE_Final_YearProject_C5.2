import React, { Component, useState} from "react"
import { Link, Redirect } from "react-router-dom";
export default function AgentLogin(){
  //   const [mobile, setMobile] = useState("");
  // const [password, setPassword] =useState("");

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
      // Hardcoded username and password
      const hardcodedUsername = "Agent1";
      const hardcodedPassword = "agent@1234";

      // Check if entered username and password match the hardcoded values
      if (username === hardcodedUsername && password === hardcodedPassword) {
          // If matched, navigate to the main landing page
          setLoggedIn(true);
      } else {
          // If not matched, display an error message or handle it accordingly
          console.log("Incorrect username or password");
      }
  };
    
    return(
    
      <div className="auth-wrapper">
        
        <div className="auth-inner">
          <form >
            <h3>Agent Sign In</h3>

            <div className="mb-3">
            <label>Institute Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
        <Link to="/Certificate">
            <button type="submit" className="button" >
              Submit
            </button>
            </Link>
        </div>     
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </div>
  </div>

    )
}
