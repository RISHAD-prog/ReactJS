import React from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <Container className='bg-light' style={{ opacity: "0.8" }} >
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <h2>NADU_FOODVERSE</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto  " variant="pills" defaultActiveKey="/">
                            <Nav.Item>
                                <Link className='me-5 text-decoration-none' to="/" active>Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="text-decoration-none" eventKey="link-1" to='/blog' >Blog</Link>
                            </Nav.Item>

                        </Nav>
                        <Nav>
                            {
                                user ? <>
                                    {['bottom'].map((placement) => (
                                        <OverlayTrigger
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${placement}`}>
                                                    Tooltip on <strong>{placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button className=' bg-dark' >  <BiUserCircle className='fs-1' >  </BiUserCircle></Button>
                                        </OverlayTrigger>
                                    ))}
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> </> : <Link to="/login" > <Button className='btn btn-dark' >Login</Button> </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;