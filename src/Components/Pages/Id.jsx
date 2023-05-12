import React, { useEffect, useState } from 'react'
import "../Style/Id.css"
import Navbar from "../Pages/Navbar"
import Topbar from './Topbar';
import optionsData from "../Json/options"
import { ReactSession } from 'react-client-session';
import { Link } from 'react-router-dom';
import Edit from "../Images/edit.svg"
import Delete from "../Images/delete.svg"
import TeacherId from "../Json/TeacherData"


const Id = () => {
  ReactSession.setStoreType("localStorage");
  const [navVisible, showNavbar] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(true);
  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
    setCheckbox2Checked(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked);
    setCheckbox1Checked(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value
  //   console.log(value)
  //   // window.location.href = "/Dashboard";
  // }

  const onChange = (event) => {
    const value = event.target.value;
    ReactSession.set("username", value);
    window.location.href = `/StudentData`;
  };

  // const options01 = optionsData.options01
  const options1 = optionsData[0]
  const options2 = optionsData[1]
  const options3 = optionsData[2]
  const options4 = optionsData[3]
  const options5 = optionsData[4]
  const options6 = optionsData[5]
  const options7 = optionsData[6]
  const options8 = optionsData[7]
  const options9 = optionsData[8]
  const options10 = optionsData[9]
  const options11 = optionsData[10]
  const options12 = optionsData[11]

  return (
    <>
      <div className="main-content">
        <Navbar visible={navVisible} show={showNavbar} />
        <div className="inner-main-content"  >
          <Topbar />
          <div className="container-fluid">
            <h4 className='main-name'>Generate ID</h4>
            <div className='ganerate_id_part'>
              <div className='ganerate_id_check'>
                <h3>Generate ID for</h3>
                <label className='ganerateid_opt'>
                  <input type="checkbox" checked={checkbox1Checked} onChange={handleCheckbox1Change} />
                  Teacher
                </label>
                <label>
                  <input type="checkbox" checked={checkbox2Checked} onChange={handleCheckbox2Change} />
                  Students
                </label>
              </div>
              <div className='ganerateid_cnt'>
                <div className='ganerateid_cnt_inn'>
                  {checkbox1Checked && (
                    <div className='teacherid_check'>
                      <button className='teacherid_create'>+ Generate ID</button>
                      <div className='teacherid_detail'>{
                        TeacherId.map((d, i) => (
                          <button className='studentid_btn' key={i}>{d}<Link className="edit_btn" to="#"><img src={Edit} alt="edit" /></Link><Link className='delete_btn' to="#"><img src={Delete} alt="delete" /></Link></button>
                        ))}
                      </div>
                    </div>
                  )}
                  {checkbox2Checked && (
                    <>
                      <select className="student_class" onChange={onChange} >
                        <option value="DEFAULT" disabled selected>Class 01</option>{
                          options1.map((d, i) => (
                            <option value={'01' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 02</option>{
                          options2.map((d, i) => (
                            <option value={'02' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 03</option>{
                          options3.map((d, i) => (
                            <option value={'03' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 04</option>{
                          options4.map((d, i) => (
                            <option value={'04' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 05</option>{
                          options5.map((d, i) => (
                            <option value={'05' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 06</option>{
                          options6.map((d, i) => (
                            <option value={'06' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 07</option>{
                          options7.map((d, i) => (
                            <option value={'07' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 08</option>{
                          options8.map((d, i) => (
                            <option value={'08' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 09</option>{
                          options9.map((d, i) => (
                            <option value={'09' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 10</option>{
                          options10.map((d, i) => (
                            <option value={'10' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 11</option>{
                          options11.map((d, i) => (
                            <option value={'11' + d} key={i}>{d}</option>
                          ))}
                      </select>
                      <select className="student_class" onChange={onChange}>
                        <option value="DEFAULT" disabled selected>Class 12</option>{
                          options12.map((d, i) => (
                            <option value={'12' + d} key={i}>{d}</option>
                          ))}
                      </select>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Id