import React, { useEffect, useState } from 'react'
import "../Style/Complain.css"
import Navbar from "../Pages/Navbar"

const Complain = () => {
  const [navVisible, showNavbar] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <div className="main-content">
        <Navbar visible={navVisible} show={showNavbar} />
        <div className="inner-main-content" style={{ marginLeft: navVisible ? "50px" : "70px" }}>
          <h4>Demo</h4>
        </div>
      </div>
    </>
  )
}

export default Complain