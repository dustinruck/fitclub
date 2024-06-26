import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainersPage = () => {
    const [trainers, setTrainers] = useState([]);
    const [newTrainer, setNewTrainer] = useState({ name: '', specialty: '', bio: '' });
    const [editingId, setEditingId] = useState(null);

    // Fetch all trainers
    useEffect(() => {
        getAllTrainers();
    }, []);

    const getAllTrainers = async () => {
        const response = await axios.get('/api/trainers');
        setTrainers(response.data);
    };

    // Add or update trainer
    const createTrainer = async () => {
        if (editingId) {
            await axios.put(`/api/trainers/${editingId}`, newTrainer);
        } else {
            await axios.post('/api/trainers', newTrainer);
        }
        getAllTrainers(); // Refresh the list
        setNewTrainer({ name: '', specialty: '', bio: '' }); // Reset form
        setEditingId(null); // Reset editing state
    };

    // Start editing a trainer
    const updateTrainer = (trainer) => {
        setEditingId(trainer.id);
        setNewTrainer({ name: trainer.name, specialty: trainer.specialty, bio: trainer.bio });
    };

    // Delete a trainer
    const deleteTrainer = async (id) => {
        await axios.delete(`/api/trainers/${id}`);
        getAllTrainers(); // Refresh the list
    };

    return (
        <div>
            <h2>Trainers</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={newTrainer.name}
                    onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Specialty"
                    value={newTrainer.specialty}
                    onChange={(e) => setNewTrainer({ ...newTrainer, specialty: e.target.value })}
                />
                <textarea
                    placeholder="Bio"
                    value={newTrainer.bio}
                    onChange={(e) => setNewTrainer({ ...newTrainer, bio: e.target.value })}
                />
                <button onClick={createTrainer}>{editingId ? 'Update' : 'Add'}</button>
            </div>
            <ul>
                {trainers.map((trainer) => (
                    <li key={trainer.id}>
                        {trainer.name} - {trainer.specialty}
                        <button onClick={() => updateTrainer(trainer)}>Edit</button>
                        <button onClick={() => deleteTrainer(trainer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainersPage;
