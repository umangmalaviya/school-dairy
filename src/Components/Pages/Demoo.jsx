import React, { useState } from 'react'
import Navbar from './Navbar'

const Demoo = () => {

  const [navVisible, showNavbar] = useState(true);

  return (
    <Navbar visible={navVisible} show={showNavbar} />
  )
}

export default Demoo