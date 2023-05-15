import React, { useEffect, useState } from "react";
import "../Style/Holiday.css";
import "../Style/Holiday_three.css";
import Navbar from "../Pages/Navbar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Holiday_three = () => {
  const [navVisible, showNavbar] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="main-content">
        <Navbar visible={navVisible} show={showNavbar} />
        <div className="inner-main-content">
          <Topbar />
          <div className="container-fluid">
            {/* &&&&&&&&&&&&&      holiday plan      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */}
            <section>
              <div className="add_hPlan">
                <h4 className="main-name">Holidays</h4>
              </div>

              <div className="eventFor">
                <h3>Event for</h3>
                <div className="eventfor_holiday">
                  <input type="checkbox" className="holiday_cBox" />
                  <label for=""> Teacher</label>
                  <input type="checkbox" />
                  <label for=""> Student</label>
                </div>
              </div>
            </section>

            {/* &&&&&&&&&&&&&      holiday timetsble      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */}

            <section>
              <div className="h_timetable">
                <div className="hTable_title">
                  <label htmlFor="">Holiday Title</label> <br />
                  <input type="text" />
                </div>
                <hr style={{ color: "rgba(40, 167, 232, 1)" }} />
                <div className="hTable_date"></div>
                <div className="hTable_note"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday_three;
