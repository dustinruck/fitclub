import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

function EditClassForm({ classItem, onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [trainers, setTrainers] = useState([]);
  const [trainerId, setTrainerId] = useState('');

  useEffect(() => {
    // load class data to the form
    if (classItem) {
      setName(classItem.name);
      setDescription(classItem.description);
      setStartTime(classItem.startTime);
      setEndTime(classItem.endTime);
      setTrainerId(classItem.trainer?.id || '');
    }

    // fetch trainers for  dropdown
    const fetchTrainers = async () => {
      const response = await axios.get('/api/trainers');
      setTrainers(response.data);
    };
    
    fetchTrainers();
  }, [classItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedClass = {
      name,
      description,
      startTime,
      endTime,
      trainerId
    };

    try {
      await axios.put(`/api/classes/${classItem.id}`, updatedClass);
      onClose(); // refresh class list and close form
    } catch (error) {
      console.error('Failed to update class:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Start Time</Form.Label>
        <Form.Control type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>End Time</Form.Label>
        <Form.Control type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Trainer</Form.Label>
        <Form.Control as="select" value={trainerId} onChange={(e) => setTrainerId(e.target.value)} required>
          <option value="">Select a Trainer</option>
          {trainers.map((trainer) => (
            <option key={trainer.id} value={trainer.id}>
              {trainer.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Class
      </Button>
      <Button variant="secondary" onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </Button>
    </Form>
  );
}

export default EditClassForm;
