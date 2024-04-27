// src/components/Trainers.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const trainersData = [
  { name: 'Louis', specialty: 'Yoga', bio: 'Experienced Yoga instructor...', imageUrl: 'https://people.com/thmb/E7s57vN2kIGZibed7YNsMUkXxMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1059x318:1061x320)/Chris-Hemsworth-and-trainer-Luke-Zocchi-071822-04-6aba1627f5424ec4bf9df3387fe7d220.jpg' },
  { name: 'Gabriela', specialty: 'Weightlifting', bio: 'Passionate about strength training...', imageUrl: 'https://www.wellintra.com/wp-content/uploads/2019/07/personal-fitness-trainer-female-Juhu-Andheri-West-570x570.jpg' },
  { name: 'Samantha', specialty: 'Cardio', bio: 'Cardio enthusiast and coach...', imageUrl: 'https://media.licdn.com/dms/image/C4D03AQGVh3M7SWTB2Q/profile-displayphoto-shrink_800_800/0/1516824270237?e=2147483647&v=beta&t=1x7X5tnd4pWrdAdTHt9OyHsM-Lqb2i39pgz3bDTdzI4' }
];

const Trainers = () => {
  return (
    <div className="columns is-multiline">
      {trainersData.map(trainer => (
        <div className="column is-one-third" key={trainer.name}>
          <div className="card" id='trainers'>
            <div className="card-image">
              <figure className="image is-6by5">
                <img src={trainer.imageUrl} alt={trainer.name} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-4">{trainer.name}</p>
              <p className="subtitle is-6">
                <NavLink to={`/classes`}>{trainer.specialty}</NavLink>
              </p>
              <div className="content">
                {trainer.bio}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trainers;
