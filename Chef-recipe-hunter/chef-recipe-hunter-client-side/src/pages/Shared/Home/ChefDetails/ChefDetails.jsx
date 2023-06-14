import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { AiFillLike } from 'react-icons/ai';
import { BsFillArrowLeftSquareFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "./ChefDetails.css";
import Recipe from '../../Recipe/Recipe';
const ChefDetails = () => {
    const id = useParams();
    const chef = useLoaderData();
    const { chefPicture, chefName, yearsOfExperience, totalRecipes, likes, recipe, description } = chef;
    return (
        <Container>
            <Container>
                <Row className='details' >
                    <Col className='mb-3 mt-5'  >
                        <Card >
                            <Image className='details-img' variant="top" src={chefPicture} roundedCircle />
                            <Card.Body>
                                <Card.Title>{chefName}</Card.Title>
                                <Card.Text> <span className='fw-bold' >Description :</span>  {description}</Card.Text>
                                <Card.Text> <span className='fw-bold' > Experience :</span> {yearsOfExperience}</Card.Text>
                                <Card.Text> <span className='fw-bold' >Number of Recipes :</span> {totalRecipes}</Card.Text>
                                <Card.Text><AiFillLike></AiFillLike> {likes}</Card.Text>
                                <Link to="/" ><Button className='btn btn-danger p-3 ms-0 ' ><BsFillArrowLeftSquareFill className='me-2' ></BsFillArrowLeftSquareFill> Go Back to Homepage</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Row xs={1} md={2} lg={2} style={{ flexWrap: "wrap" }} >
                {
                    recipe.map(allrecipe => <Recipe
                        key={allrecipe.id}
                        allrecipe={allrecipe}
                    >

                    </Recipe>)
                }
            </Row>


        </Container>
    );
};

export default ChefDetails;