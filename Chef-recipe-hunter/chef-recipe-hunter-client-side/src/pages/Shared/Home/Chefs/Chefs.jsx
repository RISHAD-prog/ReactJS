import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Container, Row } from 'react-bootstrap';
import Home from '../Home/Home';
import Contact from '../../Contact/Contact';

const Chefs = () => {
    const chefs = useLoaderData()
    return (
        <Container>
            <Home></Home>
            <Container className='mt-5' >
                <Row xs={1} md={2} lg={3} style={{ flexWrap: "wrap" }} >
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        >

                        </ChefCard>)
                    }
                </Row>
            </Container>
            <Contact></Contact>
        </Container>


    );
};

export default Chefs;