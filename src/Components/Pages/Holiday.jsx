import React, { useEffect, useState } from "react";
import "../Style/Holiday.css";
import Navbar from "../Pages/Navbar";
import Topbar from "./Topbar";
import im2 from "../Images/ed.svg";

const Holiday = () => {
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
            <div className="add_hPlan">
              <h4 className="main-name">Holidays</h4>
              <button>+ Add a Holidays Plan</button>
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
            <div className="selectHoliday">
              <div className="selectHoliday_list">
                <div>
                  <select className="dropeDown_holiday">
                    <option>Holidays Title</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                <div>
                  <select className="dropeDown_holiday">
                    <option>Select Class</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>

              <div className="selectHoliday_btn">
                <input
                  type="submit"
                  className="h-selet_button"
                  value="Submit"
                />
              </div>
            </div>

            <section>
              <table className="tab" style={{ marginBottom: "99px" }}>
                <tr className="tbl-tr">
                  <th>Time</th>
                  <th>Holiday from date</th>
                  <th>Holiday to date</th>
                  <th>Note</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Fees notification</td>
                  <td>02/08/2023 </td>
                  <td>03/08/2023 </td>
                  <td>
                    {" "}
                    <p className="des">
                      The fee notification is sent electronically to the main
                      contact stated in the ear-portal. Depending on which
                      method of communication this person chose the notification
                      is sent by email or fax.
                    </p>
                  </td>
                  <td> <div className='edit'> <button><img src={im2} alt="" /></button></div></td>
                </tr>

                <tr>
                  <td>Fees notification</td>
                  <td>02/08/2023 </td>
                  <td>03/08/2023 </td>
                  <td>
                    {" "}
                    <p className="des">
                      The fee notification is sent electronically to the main
                      contact stated in the ear-portal. Depending on which
                      method of communication this person chose the notification
                      is sent by email or fax.
                    </p>
                  </td>
                  <td> <div className='edit'> <button><img src={im2} alt="" /></button></div></td>

                </tr>
                <tr className="abc">
                  <td>Fees notification</td>
                  <td>02/08/2023 </td>
                  <td>03/08/2023 </td>
                  <td>
                    {" "}
                    <p className="des">
                      The fee notification is sent electronically to the main
                      contact stated in the ear-portal. Depending on which
                      method of communication this person chose the notification
                      is sent by email or fax.
                    </p>
                  </td>
                  <td> <div className='edit'> <button><img src={im2} alt="" /></button></div></td>
                </tr>
              </table>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
