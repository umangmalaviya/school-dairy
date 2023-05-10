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
        <Route path="/" element={<Home />}>
          <Route path='/dashboard' element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <h1>Dashboard</h1>
            </div>
          } />
          <Route path='/analytics' element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <h1>Analystics</h1>
            </div>
          } />
          <Route path='/orders' element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <h1>Orders</h1>
            </div>
          } />
          <Route path='/settings' element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <h1>Settings</h1>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
