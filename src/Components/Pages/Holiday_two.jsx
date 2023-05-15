import React, { useEffect, useState } from "react";
import "../Style/Holiday_two.css";
import "../Style/Holiday.css";
import Navbar from "../Pages/Navbar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Holiday_two = () => {
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

            {/* &&&&&&&&&&&&&      selectHoliday      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */}

            <section>
              <div className="selectHoliday">
                <div className="selectHoliday_list">
                  <div>
                    <input
                      type="text"
                      placeholder="Holidays Title"
                      className="dropeDown_holiday"
                    />
                  </div>

                  <div>
                    <select className="dropeDown_holiday">
                      <option>Select Class</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                </div>

                <div className="selectHoliday_btn">
                  <Link to="/holiday_three">
                    <input
                      type="submit"
                      className="h-selet_button"
                      value="Submit"
                    />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday_two;
