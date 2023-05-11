
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import "../Style/Chart.css"
Chart.register(CategoryScale);

const Demo = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // Generate random data for demonstration
    const generateData = () => {
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 20));
    };

    const data = {
        labels: ['10A', '10B', '10C', '10D', '10E'],
        datasets: [
            {
                label: 'Absent',
                backgroundColor: '#E10C0C',
                borderColor: '#E10C0C',
                borderWidth: 1,
                data: generateData(),
                outerWidth: "10px"
            },
            {
                label: 'Present',
                backgroundColor: '#038400',
                borderColor: '#038400',
                borderWidth: 1,
                data: generateData()
            },
        ],
    };

    return (
        <div className="select-side">
            <div className="inner-flex">
                <p>Attendance</p>
                <select onChange={handleDropdownChange}>
                    <option value="" disabled>Select Option</option>
                    <option value="option1">Class 01</option>
                    <option value="option2">Class 02</option>
                    <option value="option3">Class 03</option>
                </select>
            </div>
            <Bar data={data} />
        </div>
    );
};

export default Demo;
