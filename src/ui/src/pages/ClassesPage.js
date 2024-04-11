// Classes //

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, Card, Button } from 'react-bootstrap';
import EditClassForm from '../components/EditClassForm';

function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);

  useEffect(() => {
    fetchClassesData();
  }, []);

  const fetchClassesData = async () => {
    try {
      const response = await axios.get('/api/sport-classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    }
  };

  const handleDeleteClass = async (classId) => {
    try {
      await axios.delete(`/api/sport-classes/${classId}`);
      fetchClassesData(); // refresh list after deleting
    } catch (error) {
      console.error('Failed to delete class:', error);
    }
  };

  const handleEditClass = (classItem) => {
    setCurrentClass(classItem);
    setShowEditForm(true); // show the edit form
  };

  // close the edit form and refresh the classes list
  const closeEditForm = () => {
    setShowEditForm(false);
    fetchClassesData();
  };

  return (
    <div>
      <h2>Our Classes</h2>
      <Accordion>
        {classes.map((classItem, index) => (
          <Card key={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                {classItem.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                <strong>Description:</strong> {classItem.description}<br/>
                <strong>Start Time:</strong> {classItem.startTime}<br/>
                <strong>End Time:</strong> {classItem.endTime}<br/>
                <strong>Trainer:</strong> {classItem.trainer?.name || 'N/A'}
                <div>
                  <Button variant="primary" onClick={() => handleEditClass(classItem)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteClass(classItem.id)}>Delete</Button>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      {showEditForm && currentClass && (
        <EditClassForm classItem={currentClass} onClose={closeEditForm} />
      )}
    </div>
  );
}

export default ClassesPage;






  
// import React, { useState, useEffect } from 'react';
// import { Accordion, Card, Button } from 'react-bootstrap';

// function ClassesPage() {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetchClassesData().then(data => setClasses(data));
//   }, []);

//   async function fetchClassesData() {
//     const response = await fetch('/sport-classes'); // Spring Boot backend endpoint
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
