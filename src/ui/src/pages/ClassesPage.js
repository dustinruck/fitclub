// Classes //

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, Card, Button, Form } from 'react-bootstrap';

function ClassesPage() {
    const [classes, setClasses] = useState([]);
    const [editingClass, setEditingClass] = useState(null); // for adding and editing classes
    const [showForm, setShowForm] = useState(false); // to show/hide the form

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const response = await axios.get('/api/classes');
            setClasses(response.data);
        } catch (error) {
            console.error('Failed to fetch classes:', error);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingClass.id) {
                await axios.put(`/api/classes/${editingClass.id}`, editingClass);
            } else {
                await axios.post('/api/classes', editingClass);
            }
            setShowForm(false);
            setEditingClass(null); // clear form
            fetchClasses(); // refresh list
        } catch (error) {
            console.error('Failed to save class:', error);
        }
    };

    const handleDelete = async (classId) => {
        try {
            await axios.delete(`/api/classes/${classId}`);
            fetchClasses(); // refresh list
        } catch (error) {
            console.error('Failed to delete class:', error);
        }
    };

    return (
        <div>
            <h2>Our Classes</h2>
            {showForm ? (
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={editingClass?.name || ''}
                            onChange={(e) => setEditingClass({ ...editingClass, name: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={editingClass?.description || ''}
                            onChange={(e) => setEditingClass({ ...editingClass, description: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Save</Button>
                    <Button variant="secondary" onClick={() => setShowForm(false)} style={{ marginLeft: '10px' }}>Cancel</Button>
                </Form>
            ) : (
                <Button variant="primary" onClick={() => { setEditingClass({}); setShowForm(true); }}>Add New Class</Button>
            )}
            <Accordion>
                {classes.map((classItem, index) => (
                    <Card key={classItem.id}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                                {classItem.name}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index.toString()}>
                            <Card.Body>
                                <strong>Description:</strong> {classItem.description}<br />
                                <Button variant="primary" onClick={() => { setEditingClass(classItem); setShowForm(true); }}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(classItem.id)} style={{ marginLeft: '10px' }}>Delete</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    );
}

export default ClassesPage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Accordion, Card, Button } from 'react-bootstrap';
// import EditClassForm from '../components/EditClassForm';

// function ClassesPage() {
//   const [classes, setClasses] = useState([]);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [currentClass, setCurrentClass] = useState(null);

//   useEffect(() => {
//     fetchClassesData();
//   }, []);

//   const fetchClassesData = async () => {
//     try {
//       const response = await axios.get('/api/classes');
//       setClasses(response.data);
//     } catch (error) {
//       console.error('Failed to fetch classes:', error);
//     }
//   };

//   const handleDeleteClass = async (classId) => {
//     try {
//       await axios.delete(`/api/classes/${classId}`);
//       fetchClassesData(); // refresh list after deleting
//     } catch (error) {
//       console.error('Failed to delete class:', error);
//     }
//   };

//   const handleEditClass = (classItem) => {
//     setCurrentClass(classItem);
//     setShowEditForm(true); // show the edit form
//   };

//   // close the edit form and refresh the classes list
//   const closeEditForm = () => {
//     setShowEditForm(false);
//     fetchClassesData();
//   };

//   return (
//     <div>
//       <h2>Our Classes</h2>
//       <Accordion>

//         {classes.map((classItem, index) => (
//           <Card key={index}>

//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
//                 {classItem.name}
//               </Accordion.Toggle>
//             </Card.Header>

//             <Accordion.Collapse eventKey={index.toString()}>

//               <Card.Body>
//                 <strong>Description:</strong> {classItem.description}<br/>
//                 <strong>Start Time:</strong> {classItem.startTime}<br/>
//                 <strong>End Time:</strong> {classItem.endTime}<br/>
//                 <strong>Trainer:</strong> {classItem.trainer?.name || 'N/A'}
                
//                 {<div>
//                   <Button variant="primary" onClick={() => handleEditClass(classItem)}>Edit</Button>
//                   <Button variant="danger" onClick={() => handleDeleteClass(classItem.id)}>Delete</Button>
//                 </div>}

//               </Card.Body>

//             </Accordion.Collapse>

//           </Card>
//         ))}
//       </Accordion>

//       {showEditForm && currentClass && (
//         <EditClassForm classItem={currentClass} onClose={closeEditForm} />
//       )}
//     </div>

//   );
// }

// export default ClassesPage;






  
// import React, { useState, useEffect } from 'react';
// import { Accordion, Card, Button } from 'react-bootstrap';

// function ClassesPage() {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetchClassesData().then(data => setClasses(data));
//   }, []);

//   async function fetchClassesData() {
//     const response = await fetch('/classes'); // Spring Boot backend endpoint
//     const data = await response.json();
//     return data;
//   }

//   return (
//     <div>
//       <h2>Our Classes</h2>
//       <Accordion>
//         {classes.map((classItem, index) => (
//           <Card key={index}>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
//                 {classItem.name}
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey={index.toString()}>
//               <Card.Body>
//                 <strong>Description:</strong> {classItem.description}<br/>
//                 <strong>Start Time:</strong> {classItem.startTime}<br/>
//                 <strong>End Time:</strong> {classItem.endTime}<br/>
//                 <strong>Trainer:</strong> {classItem.trainer?.name || 'N/A'}
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         ))}
//       </Accordion>
//     </div>
//   );
// }

// export default ClassesPage;
