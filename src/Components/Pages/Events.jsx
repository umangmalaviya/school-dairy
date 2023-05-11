import React, { useEffect, useState } from 'react'
import "../Style/Events.css"
import Navbar from "../Pages/Navbar"
import Topbar from './Topbar';

const Events = () => {
  const [navVisible, showNavbar] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <div className="main-content">
        <Navbar visible={navVisible} show={showNavbar} />
        <div className="inner-main-content"  >
          <Topbar />
          <div className="container-fluid">
            <h4 className='main-name'>Events</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events