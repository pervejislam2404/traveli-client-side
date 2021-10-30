import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import myLogo from './logo.png';
import UseAuth from '../../Context/UseAuth';

const Header = () => {

    const {user,logOut} = UseAuth()
    // console.log(user);
    return (
        
        <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><img src={myLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                         <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/placeOrder">Place Order</Nav.Link> */}
                         <Nav.Link as={HashLink} to="/myOrder">My Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageAll">Manage All Orders</Nav.Link>
                         <Nav.Link as={HashLink} to="/newService">Add New Service</Nav.Link>
                   
                    </Nav>
                    <Nav>
                    {user?.email && <Nav.Link className="fw-bold text-primary"><img height="30" className="rounded-pill mx-1" width="30" src={user?.photoURL} alt="" />{user.email}</Nav.Link>}
                        {!user.email? <Nav.Link as={HashLink} className="bg-danger border-0 text-white mx-2 px-3 rounded" to="/login">Login</Nav.Link>:
                        <button className="bg-danger border-0 text-white mx-2 px-3 rounded" onClick={logOut}>Logout</button>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>



            {/* <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><img src={myLogo} alt="" /></Navbar.Brand>
                <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/placeOrder">Place Order</Nav.Link>
                        <Nav.Link as={HashLink} to="/myOrder">My Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageAll">Manage All Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/newService">Add New Service</Nav.Link>
                        {user?.email && <Nav.Link className="fw-bold text-primary"><img height="30" className="rounded-pill mx-1" width="30" src={user.photoURL} alt="" />{user.email}</Nav.Link>}
                        {!user.email? <Nav.Link as={HashLink} className="bg-danger border-0 text-white mx-2 px-3 rounded" to="/login">Login</Nav.Link>:
                        <button className="bg-danger border-0 text-white mx-2 px-3 rounded" onClick={logOut}>Logout</button>
                        }
                </Nav>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;