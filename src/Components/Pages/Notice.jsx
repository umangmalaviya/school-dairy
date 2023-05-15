import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../Style/Notice.css"
import Navbar from "../Pages/Navbar"
import Topbar from './Topbar';
import { DropzoneArea } from 'material-ui-dropzone';
import img from '../Images/hday.svg'
import im2 from '../Images/ed.svg'


const Notice = () => {
  const [navVisible, showNavbar] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <div className="main-content">
        <Navbar visible={navVisible} show={showNavbar} />
        <div className="inner-main-content"  >
          <Topbar />
          <div className="container-fluid">
            <h4 className='main-name'>Notice Board</h4>
            {/* notice board - section */}
            <section>
              <div className='inner-send'>
                {/* first-sec */}
                <div className="first-part">
                  <p className='send'>Send Notification</p>
                  <div className="tb1">
                    <label className='.amt' htmlFor="tname" name='tname'>Title</label><br />
                    <input className='linput' type="text" id='tname' />

                    <label className='amt' name='aname'>Attachment</label><br />
                    <DropzoneArea
                      onChange={(files) => console.log('Files:', files)}
                    />
                    <label className='amt' htmlFor="">Message</label>
                    <input className='msg' type="text" name="" id="" />
                  </div>
                </div>
                {/* second-sec */}
                <div className="second-part">
                  <p className='send'>Massage To</p>
                  <div className="tb2">
                    <div className='sright'>
                      <input className='chbtn' type="checkbox" id="student" name="student" value="Bike" />
                      <label className='chstudent' for="student">Student</label><br />
                    </div>
                    <div className='tright'>
                      <input className='chbtn' type="checkbox" id="student" name="student" value="Bike" />
                      <label className='chstudent' for="student">Teacher</label><br />
                    </div>
                    <div className='aright'>
                      <input className='chbtn' type="checkbox" id="student" name="student" value="Bike" />
                      <label className='chstudent' for="student">All</label><br />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* btn-link -section */}
            <section>
              <div className="btn-link-inner">
                <button className='s-btn'>SAVE</button>
                <Link to={"/"} className='view' >View all notice</Link>
              </div>
              <table className='tab' style={{ marginBottom: "99px" }} >
                <tr className='tbl-tr'>
                  <th>Title</th>
                  <th> <div className='des'>Description</div></th>
                  <th>Date</th>
                  <th>Students</th>
                  <th>Teacher</th>
                  <th>All</th>
                  <th>Attachment</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Fees notification</td>
                  <td> <p className='des'>The fee notification is sent electronically to the main contact stated in the ear-portal. Depending on which method of communication this person chose the notification is sent by email or fax.</p></td>


                  <td> <div className="d-t"> <h3 className='fd2'>02/08/2023 <br /> 01:02 pm</h3></div></td>
                  <td> <input className='c1' type="checkbox" id="ch1" name="ch1" value="ch1" /></td>
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> <div className='edit'> <button><img src={im2} alt="" /></button></div></td>
                </tr>

                <tr>
                  <td>Sports day events</td>
                  <td> <p className='des' >Games that are played on school sports days can be wide and varied. They can include straightforward sprints and longer races for all age groups as well as egg and spoon races.</p></td>


                  <td> <div className="d-t"> <h3 className='fd2'>02/08/2023 <br /> 01:02 pm</h3></div></td>
                  <td> </td>
                  <td><input className='c2' type="checkbox" id="ch2" name="ch2" value="ch2" /></td>
                  <td></td>
                  <td>  </td>
                  <td> <div className='edit'> <button><img src={im2} alt="" /></button></div></td>
                </tr>
                <tr className='abc'>
                  <td>Annual day celebration</td>
                  <td> <p className='des'>A day in School – In this theme the program can showcase, what all goes in school. The ringing of bell, the class, the love of teachers, happy-go-lucky punishments, all pranks, PTM, sports etc.</p></td>

                  <td> <div className="d-t"> <h3 className='fd2'>02/08/2023 <br /> 01:02 pm</h3></div></td>
                  <td> </td>
                  <td></td>
                  <td><input className='c3' type="checkbox" id="ch3" name="ch3" value="ch3" /></td>
                  <td>  <div className="himg"><img src={img} alt="" /></div></td>
                  <td> <div className='edit'> <button><img src={im2} alt="" /></button></div></td>
                </tr>
              </table>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notice