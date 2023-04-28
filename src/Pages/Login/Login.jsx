import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div>
            <h2 className='text-center mb-3'>This is login</h2>
            <Container className='my-3'>
                <Card className='p-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Our Terms and Conditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Login;