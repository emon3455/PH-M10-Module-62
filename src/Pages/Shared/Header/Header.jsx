import React, { useContext } from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';


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

           
        </div>
    );
};

export default Header;