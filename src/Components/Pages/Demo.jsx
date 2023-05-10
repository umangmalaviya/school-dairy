import React, { useEffect, useState } from 'react'
import "../Style/Demo.css"
import Navbar from "../Pages/Navbar"
import Topbar from "../Pages/Topbar"

const Demo = () => {
    const [navVisible, showNavbar] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className="main-content">
                <Navbar visible={navVisible} show={showNavbar} />
                <div className="inner-main-content">
                    <Topbar />
                    <h4>Demo</h4>
                </div>
            </div>
        </>
    )
}

export default Demo