import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftnav from '../Pages/Shared/leftNav/Leftnav';
import RightNav from '../Pages/Shared/rightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { useTitle } from '../hooks/useTitle';

const Main = () => {
    
    useTitle("Dragon News");

    return (
        <div>
            <Header></Header>

            <NavigationBar></NavigationBar>

            <Container>
                <Row>
                    <Col lg={3}>
                        <Leftnav></Leftnav>
                    </Col>
                    <Col lg={6}>
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

export default Main;