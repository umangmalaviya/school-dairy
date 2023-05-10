import React, { useState } from 'react'
import "../Style/Demo.css"
import Navbar from "../Pages/Navbar"

const Demo = () => {
    const [navVisible, showNavbar] = useState(true);
    return (
        <>
            <div className="main-content" style={{ width: navVisible ? "70%" : "20px" }}>
                <Navbar visible={navVisible} show={showNavbar} />
                <div className="inner-main-content">
                    <h4>Demo</h4>
                </div>
            </div>
        </>
    )
}

export default Demo