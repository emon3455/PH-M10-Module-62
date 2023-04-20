import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import first from "../../../assets/1.png"
import second from "../../../assets/2.png"
import third from "../../../assets/3.png"

const Leftnav = () => {

    const [catagories, setCatgories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/catagories")
            .then(res => res.json())
            .then(data => setCatgories(data))
            .catch(er => console.log(er.message))
    }, [])

    return (
        <div>
            <h4>All Catagories</h4>
            <div className="ps-3">
                {
                    catagories.map(catagory =>
                        <p key={catagory.id}> <Link to={`/catagory/${catagory.id}`} className='text-black fw-semibold text-decoration-none'> {catagory.name} </Link> </p>)
                }
            </div>
            <div className="">
                <Row xs={1} className="p-1 gap-2">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>

                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>

                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Leftnav;