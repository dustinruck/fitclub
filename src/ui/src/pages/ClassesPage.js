// Classes //
  
import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClassesData().then(data => setClasses(data));
  }, []);

  async function fetchClassesData() {
    const response = await fetch('/sport-classes'); // Spring Boot backend endpoint
    const data = await response.json();
    return data;
  }

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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default ClassesPage;
