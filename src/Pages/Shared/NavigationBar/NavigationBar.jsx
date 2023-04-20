import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const {user} = useContext(AuthContext);

    return (
        <Container className='my-4'>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fs-4'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-5">
                            <Link className='text-decoration-none text-secondary me-2' to="/">Home</Link>
                            <Link className='text-decoration-none text-secondary me-2' to="/">About</Link>
                            <Link className='text-decoration-none text-secondary me-2' to="/register">Register</Link>
                        </Nav>
                        <Nav className=' d-flex align-items-center '>

                            <p className='mx-2 '>
                                <FaUserCircle className='fs-2'></FaUserCircle>
                            </p>
                            <p>
                                {
                                    user ?
                                        <button className='btn btn-secondary'>
                                            Log Out
                                        </button>
                                        :
                                        <Link className='btn btn-secondary text-decoration-none' to="/login">
                                            Log In
                                        </Link>
                                }
                            </p>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;