import React, { useEffect, useState } from 'react'
import "../Style/Dashboard.css"
import Navbar from "../Pages/Navbar"
import Topbar from "../Pages/Topbar"
import {
    CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Demo from './Demo';

const Dashboard = () => {
    const [navVisible, showNavbar] = useState(true);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const percentage = 834;
    const percentage1 = 50;
    const percentage2 = 35;

    function Example(props) {
        return (
            <div>
                <div className='example'>{props.children}</div>
            </div>
        );
    }
    return (
        <>
            <div className="main-content">
                <Navbar visible={navVisible} show={showNavbar} />
                <div className="inner-main-content"  >
                    <Topbar />
                    <div className="container-fluid">
                        <h4 className='main-name'>Dashboard</h4>
                        <div className="main-upper-dashboard">
                            <div className="first-student">
                                <div className="first-left-side">
                                    <img src={require("../Images/student.png")} alt="" />
                                    <div className="bvf">
                                        <p>Total Students</p>
                                        <span>836 Students</span>
                                    </div>
                                </div>
                                <div className="first-right-side">
                                    <div className="first">
                                        <Example>
                                            <CircularProgressbar value={percentage} maxValue={1000} text={`${percentage}`} />
                                        </Example>
                                    </div>
                                </div>
                            </div>
                            <div className="second-student">
                                <div className="second-left-side">
                                    <img src={require("../Images/teacher.png")} alt="" />
                                    <div className="bvf">
                                        <p>Total Teacher</p>
                                        <span>50 Teacher</span>
                                    </div>
                                </div>
                                <div className="second-right-side">
                                    <div className="first">
                                        <Example>
                                            <CircularProgressbar value={percentage1} maxValue={100} text={`${percentage1}`} />
                                        </Example>
                                    </div>
                                </div>
                            </div>
                            <div className="second-student">
                                <div className="second-left-side">
                                    <img src={require("../Images/classroom.png")} alt="" />
                                    <div className="bvf">
                                        <p>Total Classroom</p>
                                        <span>35 Classroom</span>
                                    </div>
                                </div>
                                <div className="second-right-side">
                                    <div className="first">
                                        <Example>
                                            <CircularProgressbar value={percentage2} maxValue={100} text={`${percentage2}`} />
                                        </Example>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aandn">
                            <Demo />
                            <div className="noticeboard">
                                <p>Noticeboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard