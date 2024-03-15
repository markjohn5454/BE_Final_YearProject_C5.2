import React, { Component, useState} from "react"

export default function StudentLogin(){
    const [mobile, setMobile] = useState("");
  const [password, setPassword] =useState("");
    
    return(
        <div className="auth-wrapper">
      <div className="auth-inner">
        <form >
          <h3> Student Sign In</h3>

          <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => setMobile(e.target.value)}
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
        <button type="submit" className="button">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        <a href="/sign-up">Sign Up</a>
      </p>
    </form>
  </div>
</div>
    )
}
