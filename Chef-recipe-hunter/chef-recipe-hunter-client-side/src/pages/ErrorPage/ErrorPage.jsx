import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useRouteError } from "react-router-dom";
import warning from "../../assets/warning.png"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Image src={warning} className='mx-auto' ></Image>
            </div>
        </Container>

    );
}