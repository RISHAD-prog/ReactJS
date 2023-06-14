import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { AiTwotonePhone } from "react-icons/ai";
import "./Contact.css"

const Contact = () => {
    return (
        <Container className='contact' >
            <h3 className='motivation-text' >“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”</h3>
            <Button className=' p-2 fs-5'  > <AiTwotonePhone></AiTwotonePhone>Contact Us </Button>
        </Container>
    );
};

export default Contact;