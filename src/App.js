import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import { useState } from "react";
import Demo from "./Components/Pages/Demo";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
