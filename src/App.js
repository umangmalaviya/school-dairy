import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./Components/Pages/Demo";
import Demoo from "./Components/Pages/Demoo";
import Login from "./Components/Pages/Login";
import Class from "./Components/Pages/Class";
import Complain from "./Components/Pages/Complain";
import Exam from "./Components/Pages/Exam";
import Fees from "./Components/Pages/Fees";
import Holiday from "./Components/Pages/Holiday";
import Id from "./Components/Pages/Id";
import Notice from "./Components/Pages/Notice";
import Result from "./Components/Pages/Result";
import Time from "./Components/Pages/Time";
import Events from "./Components/Pages/Events";
import Dashboard from "./Components/Pages/Dashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demoo" element={<Demoo />} />
        <Route path="/Class" element={<Class />} />
        <Route path="/Complain" element={<Complain />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Exam" element={<Exam />} />
        <Route path="/Fees" element={<Fees />} />
        <Route path="/Holiday" element={<Holiday />} />
        <Route path="/Id" element={<Id />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
