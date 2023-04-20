import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsides from '../EditorsInside/EditorsInsides';

const News = () => {

    const news = useLoaderData();
    const {title,image_url,details,category_id} = news;

    return (
        <div >

            <h5 className='text-secondary'>Dragon News</h5 >

            <Card className='my-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}> 
                        <Button variant="danger"> 
                            <FaArrowLeft/> All News From Same Category   
                        </Button>
                    </Link>
                </Card.Body>
            </Card>

            <EditorsInsides></EditorsInsides>
        </div>
    );
};

export default News;