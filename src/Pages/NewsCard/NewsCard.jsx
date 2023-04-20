import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark , FaShareAlt, FaStar , FaEye  , FaRegStar} from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const {_id, title,author,image_url,details,total_view,rating} = news;


    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className="h-100 d-flex align-items-center gap-2">
                    <div className="">
                        <Image style={{height: "50px"}} variant="top" src={author.img && author?.img} roundedCircle/>
                    </div>
                    <div className="mb-0 mt-2">
                        <h5>{author?.name ? author.name : "Anonymous"}</h5>
                        <p>{author?.published_date ? moment(author?.published_date).format("yyyy-mm-d") : "No Publish Date"}</p>
                    </div>
                </div>
                <div className="fs-5">
                    <FaBookmark/> <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                   {details.length < 250 ? details : details.slice(0,250)} .... <Link to={`/news/${_id}`}>Read More</Link>
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className="">
                    <span>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </span>
                    <span className='mx-2'>{rating?.number}</span>
                </div>
                <div className="">
                    <span className='mx-1'><FaEye/></span>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;