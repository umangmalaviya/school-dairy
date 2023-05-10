import React, { useState } from 'react'
import "../Style/Login.css"
import logo from "../Images/blue-loogo.svg"

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailOrMobile === "" || password === "") {
      setError("Email/Mobile and password are required");
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
      const isMobile = /^\d{10}$/.test(emailOrMobile);
      if (isEmail || isMobile) {
        window.location.href = "/Dashboard";
      } else {
        setError("Please enter a valid email or mobile number");
      }
    }
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmailOrMobile(value);
    setError("");
  };
  return (
    <>
      <div id="modal_overlay">
        <div className="cell">
          <div className="modal">
            <img src={logo} alt="logo" />
            <div className='login_modal'>
              <h2>LOG IN</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" value={emailOrMobile} onChange={handleInputChange} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <div className="loginbtn-part">
                  <button className="loginbtn lrBtn" type="submit">SUBMIT</button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login