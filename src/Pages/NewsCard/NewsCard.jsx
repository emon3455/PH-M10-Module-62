import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const {_id, title,author,image_url,details,total_view,rating} = news;


    return (
        <Card className="mb-4">
            <Card.Header>
                <div className="">
                    <Image className='h-25 w-25' variant="top" src={author.img && author?.img} roundedCircle/>
                </div>
                <div className="">

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                   {details.length < 250 ? details : details.slice(0,250)} .... <Link to={`/news/${_id}`}>Read More</Link>
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;