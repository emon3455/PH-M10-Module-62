import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';

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

            <div className="">
                
            </div>

        </div>
    );
};

export default Header;