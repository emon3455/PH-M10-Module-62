import React, { useContext } from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='container mb-4 p-2'>

            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'>
                    Journalism Without Fear or Favour
                </p>
                <p className='text-secondary'>
                    {moment().format("dddd, MMMM Do, YYYY")}
                </p>
            </div>

            <div className="d-flex g-4 mb-4">
                <Button variant="danger">Latest</Button>
                <Marquee speed={60} pauseOnHover="No" className='text-secondary fs-4 fw-semibold'>
                    I can be a React component, multiple React components, or just some text......   I can be a React component, multiple React components, or just some text......
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fs-4'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-5">
                        <Link className='text-decoration-none text-secondary me-2' to="/">Home</Link>
                        <Link className='text-decoration-none text-secondary me-2' to="/">About</Link>
                        <Link className='text-decoration-none text-secondary me-2' to="/">Career</Link>
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
                                <Link className='btn btn-secondary text-decoration-none'  to="/login">
                                Log In
                                </Link>
                            }
                        </p>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;