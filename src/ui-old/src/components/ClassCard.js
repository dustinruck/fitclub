// ClassCard.js //

import React from 'react';
import { Card } from 'react-bootstrap';

function ClassCard({ classData }) {
    return (
        <Card>
            <Card.Img variant="top" src={classData.image} />
            <Card.Body>
                <Card.Title>{classData.name}</Card.Title>
                <Card.Text>{classData.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ClassCard;

