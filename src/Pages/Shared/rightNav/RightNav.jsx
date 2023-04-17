import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook , FaTwitter , FaInstagram} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const RightNav = () => {
    return (
        <div>
            <div className=''>
                <h4>Login With</h4>
                <Button className="w-100 mb-2" variant="outline-primary"> <FaGoogle/> Log In With Google</Button>
                <Button className="w-100 mb-2" variant="outline-secondary"> <FaGithub/> Log In With Github</Button>
            </div>
            <div className='my-2'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook className='text-primary'/> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='text-danger'/>  Instagram </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='text-primary'/>  Twitter</ListGroup.Item>
                </ListGroup>
            </div>
        </div>

    );
};

export default RightNav;