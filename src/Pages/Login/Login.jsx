import React, { useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);


    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(res=>{
            const logedUser = res.user;
            alert("Log in successfully done!");
            form.reset();
            navigate("/")
        })
        .catch(er=>{
            setError(er.message);
        })

    }

    return (
        <div>
            <h2 className='text-center mb-3'>This is login</h2>
            <Container className='my-3'>
                <Card className='p-5'>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Our Terms and Conditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Log In
                        </Button>

                        <p className='text-center'> 
                            Don't have any Account? <Link to="/register">Register</Link>
                        </p> 

                        <p className='text-danger'>{error}</p>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Login;