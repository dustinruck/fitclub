import React, { useState } from 'react';
import axios from 'axios';

const AddClassForm = ({ onClassAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [trainerId, setTrainerId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // class object
      const classData = {
        name,
        description,
        startTime,
        endTime,
        trainerId,
      };
      // post data to the backend
      await axios.post('/api/classes', classData);
      // call onClassAdded to refresh class list
      if (onClassAdded) {
        onClassAdded();
      }
      // reset form 
      setName('');
      setDescription('');
      setStartTime('');
      setEndTime('');
      setTrainerId('');
    } catch (error) {
      console.error("Failed to add class", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="trainerId">Trainer ID:</label>
        <input
          type="number"
          id="trainerId"
          value={trainerId}
          onChange={(e) => setTrainerId(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Class</button>
    </form>
  );
};

export default AddClassForm;
