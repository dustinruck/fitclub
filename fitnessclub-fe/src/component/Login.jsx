import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

function Login(props) {
    const [unmountOnClose] = useState(true);

    const toggle = () => {
        if (props.toggle) {
            props.toggle(); // Ensuring props.toggle is a function before calling it
        }
    }

    const onLoginFormSubmit = (success, msg, email) => {
        if (success && props.toggle) {
            props.toggle(); // Calling toggle to close modal on successful login
        }
        // Assuming there is a prop function to handle login results, make sure to check its existence
        if (props.onSubmitProp) {
            props.onSubmitProp(success, msg, email);
        }
    }

    return (
        <>
            <Modal isOpen={props.showModal} toggle={toggle} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Log In</ModalHeader>
                <ModalBody>
                    {/* Ensuring correct props are passed to LoginForm */}
                    <LoginForm onSubmitProp={onLoginFormSubmit} email={props.givenEmail} />
                </ModalBody>
            </Modal>
        </>
    );
}

export default Login;
