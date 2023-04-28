import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <Container>
            <h2 className='text-center'>This is our Terms and condition page</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum necessitatibus sapiente nemo nobis ullam! Aliquam temporibus doloribus est, dolorum laborum maxime dicta, id quos et iste ex ea, quaerat harum quibusdam asperiores. Assumenda cumque animi nesciunt debitis eligendi obcaecati unde aliquid beatae dolores quam, perspiciatis dignissimos, eum nostrum. Corporis, illo, harum quidem officiis architecto ipsa odio illum ullam eaque, inventore rerum tempore nesciunt doloribus dignissimos. Possimus impedit culpa quam nesciunt obcaecati repudiandae est sapiente. Adipisci fugit minus mollitia vero nihil totam commodi eum minima impedit esse repellat vitae iusto dignissimos quibusdam libero ipsa nostrum, tenetur modi vel amet. Ex.
            </p>
            <p>
                Return to <Link to="/register">Register</Link>
            </p>
        </Container>
    );
};

export default TermsAndConditions;