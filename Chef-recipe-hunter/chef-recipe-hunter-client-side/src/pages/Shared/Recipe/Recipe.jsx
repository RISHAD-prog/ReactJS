import React from 'react';
import { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Recipe = ({ allrecipe }) => {
    const [fav, setFav] = useState(true)
    const { name, ingredients, cooking_method, ratings } = allrecipe;
    const handleBtn = event => {
        setFav(event.target.clicked);
        toast(`${name} is my favourite`);
    }
    return (
        <Col className='mb-5 mt-5'  >
            <Card className='position-relative' >
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> Ingredients : {ingredients}</Card.Text>
                    <Card.Text> Cooking Method : {cooking_method}</Card.Text>

                </Card.Body>
                <Button disabled={!fav} onClick={handleBtn} className='btn btn-outline-dark bg-light border border-0 position-absolute top-0 end-0' ><AiOutlineStar></AiOutlineStar></Button>
                <Card.Footer className="text-muted d-flex">
                    <Rating
                        className='text-warning'
                        placeholderRating={ratings}
                        emptySymbol={<BsStar></BsStar>}
                        placeholderSymbol={<BsFillStarFill></BsFillStarFill>}
                        fullSymbol={<BsFillStarFill></BsFillStarFill>} />
                    <span className='ms-2'> {ratings}</span>
                </Card.Footer>
            </Card>
            <ToastContainer></ToastContainer>
        </Col>
    );
};

export default Recipe;