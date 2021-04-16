import React from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/home"><img style={{ width : "100px", height : "40px"}} src="https://www.capturethemoment4.me/wp-content/uploads/2017/10/Framed-Capture-the-Moment-Logo.png" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-3 font-weight-bold">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home">Services</Nav.Link>
      <Nav.Link as={Link} to="/home">Review</Nav.Link>
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/home">About</Nav.Link>
      <Button as={Link} to="/login" variant="outline-success btn-sm">Log In</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navbars;