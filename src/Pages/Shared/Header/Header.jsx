import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
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
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link href="#deets">profile</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Log In</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;