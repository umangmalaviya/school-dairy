import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import { useState } from "react";
function App() {
  const [navVisible, showNavbar] = useState(true);
  return (
    <BrowserRouter>
      <Navbar visible={navVisible} show={showNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
