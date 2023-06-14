import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import "./Home.css"
import { FaUtensilSpoon } from 'react-icons/fa';
import Chefs from '../Chefs/Chefs';
import ResInfo from '../../ResInfo/ResInfo';
const Home = () => {
    return (
        <Container>
            <Container className='position-relative mt-5' style={{ marginBottom: "120px" }} >
                <Carousel variant="dark">
                    <Carousel.Item >
                        <img
                            className="d-block banner-img rounded"
                            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RE9TQXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="First slide"
                            style={{ objectFit: "cover" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner-img rounded"
                            src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Second slide"
                            style={{ objectFit: "cover" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner-img rounded"
                            src="https://images.pexels.com/photos/12737801/pexels-photo-12737801.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Third slide"
                            style={{ objectFit: "cover" }}
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='position-absolute top-50 start-50 translate-middle text-white px-5 text-center' >
                    <h1 className='fs-1 text-warning fw-bolder' >WELCOME!!!</h1>
                    <h1 className='fs-2  text-warning px-2 fw-bolder' >no matter how you cook nadu_foodverse has many type of recipes</h1>
                    <p className='fs-5' >consectetur debitis, eius ea? Tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam placeat dolorum blanditiis quia eligendi deleniti perferendis ullam iusto explicabo.</p>
                    <Button className='p-3' variant="danger">Explore Recipes <FaUtensilSpoon></FaUtensilSpoon></Button>
                </div>

            </Container>
            <ResInfo></ResInfo>
        </Container>


    );
};

export default Home;