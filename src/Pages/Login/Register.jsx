import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name,email,password,photo);
    }

    return (
        <div>
            <h2 className='text-center mb-3'>This is register</h2>
            <Container className='my-3'>
                <Card className='p-5'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPicture">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control type="text" placeholder="Your Photo URL" name="photo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Register;