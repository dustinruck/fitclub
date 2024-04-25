// Classes.jsx // src/component/Classes.jsx //

import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
import Header from './Header';
import Footer from './Footer';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        axiosInstance.get('/classes')
        .then(response => {
            setClasses(response.data);
        })
        .catch(error => console.error('Error fetching classes:', error));
    }, []);

    const toggleAccordion = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            <Header/>
            <div className="container">
            <div className="columns is-multiline is-centered">
                {classes.map((classItem, index) => (
                <div key={classItem.id} className="column is-10">
                    <div className={`card ${activeIndex === index ? 'is-active' : ''}`} onClick={() => toggleAccordion(index)}>
                    <header className="card-header">
                        <p className="card-header-title">
                        {classItem.name}
                        </p>
                    </header>
                    {activeIndex === index && (
                        <div className="card-content">
                        <div className="content">
                            <p>{classItem.description}</p>
                            <p>Time: {classItem.startTime} - {classItem.endTime}</p>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
            <p>This is the Classes Page</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Classes;