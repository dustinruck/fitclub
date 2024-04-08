// Classes //

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClassCard from '../components/ClassCard';
import classes from './classes.json';

class ClassesPage extends Component {
    state = {
        classes
    };

    render() {
        return (
            <Container>
                <Row>
                    {this.state.classes.map(classData => (
                        <Col key={classData.id} sm={12} md={6} lg={4} xl={3}>
                            <ClassCard classData={classData} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ClassesPage;

