import React from 'react';

function TrainerCard({ trainer }) {
  return (
    <div className="trainer-card">
      <img src={trainer.trainerImageURL} alt={trainer.name} className="trainer-image"/>
      <div className="trainer-info">
        <h3>{trainer.name}</h3>
        <p>{trainer.bio}</p>
        <p><strong>Specialty:</strong> {trainer.specialty}</p>
      </div>
    </div>
  );
}

export default TrainerCard;
