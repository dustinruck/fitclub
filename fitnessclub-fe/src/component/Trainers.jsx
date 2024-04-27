// src/components/Trainers.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const trainersData = [
  { name: 'Louis', specialty: 'Yoga', bio: 'Experienced Yoga instructor...', imageUrl: 'path_to_image' },
  { name: 'Gabriela', specialty: 'Weightlifting', bio: 'Passionate about strength training...', imageUrl: 'path_to_image' },
  { name: 'Samantha', specialty: 'Cardio', bio: 'Cardio enthusiast and coach...', imageUrl: 'path_to_image' }
];

const Trainers = () => {
  return (
    <div className="columns is-multiline">
      {trainersData.map(trainer => (
        <div className="column is-one-third" key={trainer.name}>
          <div className="card" id='trainers'>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={trainer.imageUrl} alt={trainer.name} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-4">{trainer.name}</p>
              <p className="subtitle is-6">
                <NavLink to={`#classes`}>{trainer.specialty}</NavLink>
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
