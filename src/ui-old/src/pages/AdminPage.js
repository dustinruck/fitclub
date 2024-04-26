// Admin //

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddClassForm from '../components/AddClassForm';

const ClassesAdmin = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    const response = await axios.get('/api/classes');
    setClasses(response.data);
  };

  const handleDelete = async (classId) => {
    await axios.delete(`/api/classes/${classId}`);
    fetchClasses(); // Refresh data
  };

  return (
    <div>
      <h2>Classes Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td>{classItem.name}</td>
              <td>{classItem.description}</td>
              <td>
                <button onClick={() => {/* handle edit */}}>Edit</button>
                <button onClick={() => handleDelete(classItem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddClassForm onClassAdded={fetchClasses} />
    </div>
  );
};

export default ClassesAdmin;
