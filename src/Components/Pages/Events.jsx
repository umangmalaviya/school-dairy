import React, { useState } from 'react'
import "../Style/Events.css"
import Navbar from "../Pages/Navbar"

const Events = () => {
  const [navVisible, showNavbar] = useState(true);
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

export default Events