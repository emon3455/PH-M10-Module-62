import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftnav from '../Pages/Shared/leftNav/Leftnav';
import RightNav from '../Pages/Shared/rightNav/RightNav';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet/>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;