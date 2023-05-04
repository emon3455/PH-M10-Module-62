import React, { useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const Register = () => {

    const [error, setError] = useState("");
    const [accepted , setAccepted] = useState(false);

    const {createUser} = useContext(AuthContext);

    useTitle("Register");

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email,password)
        .then(res=>{
            const regUser= res.user;

            updateProfile(regUser, {
                displayName: name,
                photoURL: photo,
              })
              .then(() => {
                
              })
              .catch((err) => {
                setError(err.message)
              });

        })
        .catch(er=>{
            setError(er.message);
        })

        alert("user Successfully created");
        form.reset();
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

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={()=>setAccepted(true)} type="checkbox" label={<>Accept Our <Link to="/terms">Terms and Conditions</Link></>} />
                        </Form.Group>

                        <Button disabled={!accepted} variant="primary" type="submit">
                            Register
                        </Button>

                        <p className='text-center'> 
                            Already have an Account? <Link to="/login">Login</Link>
                        </p> 

                        <p className='text-danger'>{error}</p>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Register;