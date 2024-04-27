// src/components/Classes.jsx
import React from 'react';

const classesData = [
  { name: 'Yoga', description: 'Improve flexibility and calm your mind.', trainer: 'Louis', times: 'Wed & Fri at 7 AM', imageUrl: 'https://imagez.tmz.com/image/89/4by3/2022/01/11/891df807b3be4aedb37b5a2280bfa863_xl.jpg' },
  { name: 'Weightlifting', description: 'Gain strength and build muscle.', trainer: 'Gabriela', times: 'Mon & Thu at 6 PM', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtue2vPTGTkQ5iiZYnJOHpmJmqpgitQyzUJnnybMPD_A&s' },
  { name: 'Cardio', description: 'Boost your heart health.', trainer: 'Samantha', times: 'Tue & Sat at 8 AM', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQYZdrG3jFHmubpOEYaIYiaTnQGy1-4K7fgYQerTGrQ&s' }
];

const Classes = () => {
  return (
    <div className="columns is-multiline">
      {classesData.map(classItem => (
        <div className="column is-one-third" key={classItem.name}>
          <div className="card" id='classes'>
            <div className="card-image">
              <figure className="image is-6by5">
                <img src={classItem.imageUrl} alt={classItem.name} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-4 has-text-weight-bold has-text-black">{classItem.name}</p>
              <div></div>
              <p className="subtitle is-6">
                Trainer: <a href="#trainers">{classItem.trainer}</a>
              </p>
              <div className="content">
                {classItem.description}
                <br/>
                <small>{classItem.times}</small>
              </div>
              <a href="/pricing" className="button is-primary">Sign Up</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;




// // Classes.jsx // src/component/Classes.jsx //

// import React, { useState, useEffect } from 'react';
// import axios from '../api/axiosConfig';
// import Header from './Header';
// import Footer from './Footer';
// import { Container, Card } from 'react-bootstrap';

// const Classes = () => {
//     const [classes, setClasses] = useState([]);
//     const [activeIndex, setActiveIndex] = useState(null);

//     useEffect(() => {
//         axios.get('/classes/')
//         .then(response => {
//             setClasses(response.data);
//         })
//         .catch(error => console.error('Error fetching classes:', error));
//     }, []);

//     const toggleAccordion = index => {
//         setActiveIndex(index === activeIndex ? null : index);
//     };

//     return (
//         <div>
//             <Header/>
//             <div className="container">
//             <div className="columns is-multiline is-centered">
//                 {classes.map((classItem, index) => (
//                 <div key={classItem.id} className="column is-10">
//                     <div className={`card ${activeIndex === index ? 'is-active' : ''}`} onClick={() => toggleAccordion(index)}>
//                     <header className="card-header">
//                         <p className="card-header-title">
//                         {classItem.name}
//                         </p>
//                     </header>
//                     {activeIndex === index && (
//                         <div className="card-content">
//                         <div className="content">
//                             <p>{classItem.description}</p>
//                             <p>Time: {classItem.startTime} - {classItem.endTime}</p>
//                         </div>
//                         </div>
//                     )}
//                     </div>
//                 </div>
//                 ))}
//             </div>
//             <p>This is the Classes Page</p>
//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default Classes;