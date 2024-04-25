import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import TrainerCard from './TrainerCard';
import Header from './Header';
import Footer from './Footer';

function TrainersPage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axiosInstance.get('/trainers')
      .then(response => {
        console.log("Trainers data:", response.data);
        setTrainers(response.data);
      })
      .catch(error => console.error('Error fetching trainers:', error));
  }, []);

  console.log("Loaded trainers:", trainers);


  return (
    <div>
      <Header />
      <div className="trainers-container">
        {trainers.map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
      <Footer />
    </div>
  );
  
}

export default TrainersPage;
