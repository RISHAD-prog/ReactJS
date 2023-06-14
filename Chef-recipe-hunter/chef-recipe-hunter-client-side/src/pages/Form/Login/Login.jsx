import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const { signIn, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setCurrentUser(email);


        if (password.length === 0 && password.length < 6) {
            alert("please provide a password with more than 6 input");
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })

            })
            .catch(error => {
                alert(error);
            })
    }
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                toast(`${user} has logged in`);
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
                toast(`${errorMessage}`);
            });
    }
    const handleGithubLogin = () => {
        createUserWithGithub()
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                toast(`${user} has logged in`);
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
                toast(`${errorMessage}`);
            });
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='ms-0 ' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>

            </Form>
            <div className='d-flex align-items-center' >
                <Button onClick={handleGoogleLogin} className='ms-0 mb-2 p-1 w-100' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button onClick={handleGithubLogin} className='w-100 p-1 mt-0' variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
            </div>
            <ToastContainer></ToastContainer>
        </Container>
    );
};

export default Login;