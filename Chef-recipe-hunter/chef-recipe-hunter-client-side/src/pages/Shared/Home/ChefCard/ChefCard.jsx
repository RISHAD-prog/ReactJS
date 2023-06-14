import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ChefCard = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, totalRecipes, likes } = chef;
    return (


        <Col className='mb-3' style={{ marginTop: "150px" }} >
            <Card >
                <Card.Img variant="top" style={{ objectFit: "cover", height: "25rem" }} src={chefPicture} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text> Experience : {yearsOfExperience}</Card.Text>
                    <Card.Text> Number of Recipes : {totalRecipes}</Card.Text>
                    <Card.Text><AiFillLike></AiFillLike> {likes}</Card.Text>
                    <Link to={`/chef/${id}`} ><Button className='p-3 fs-5 ms-0' variant="primary">View Recipes <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill> </Button></Link>

                </Card.Body>
            </Card>
        </Col>



    );
};

export default ChefCard;