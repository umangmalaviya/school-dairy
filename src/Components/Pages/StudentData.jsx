import React, { useEffect, useState } from 'react'
import Navbar from "../Pages/Navbar"
import Topbar from './Topbar';
import { ReactSession } from 'react-client-session';
import "../Style/StudentData.css";
import Edit from "../Images/edit.svg"
import Delete from "../Images/delete.svg"
import { Link } from "react-router-dom";
import StudentId from "../Json/StudentData.js"

const StudentData = () => {
    const [navVisible, showNavbar] = useState(true);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    ReactSession.setStoreType("localStorage");
    const Data = ReactSession.get("username");
    const DataStudent = Data.substring(0, 2);
    const DataStudClass = Data.substring(2);
    const DataClass = DataStudent + '/' + DataStudClass

    return (
        <>
            <div className="main-content">
                <Navbar visible={navVisible} show={showNavbar} />
                <div className="inner-main-content"  >
                    <Topbar />
                    <div className="container-fluid">
                        <div className='studentid_cnt'>
                            <h3>Generate ID / <span>{DataClass}</span></h3>
                            <button className='studentid_create'>+ Generate ID</button>
                        </div>
                        <div className='studentid_detail'>{
                            StudentId.map((d, i) => (
                                <button className='studentid_btn' key={i}>{d}<Link className="edit_btn" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src={Edit} alt="edit" /></Link><Link className='delete_btn' to="#"><img src={Delete} alt="delete" /></Link></button>
                            ))}
                        </div>
                        <div className="modal fade sp_model_1" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 my_model_1" id="staticBackdropLabel">Selling information</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentData;