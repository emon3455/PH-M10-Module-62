import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftnav from '../Pages/Shared/leftNav/Leftnav';
import RightNav from '../Pages/Shared/rightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={3}>
                        <Leftnav></Leftnav>
                    </Col>
                    <Col lg={6}>
                        main content is comming
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

export default Main;