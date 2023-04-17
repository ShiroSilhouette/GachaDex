import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar() {
  return (

    <Navbar className="my-nav sticky-top">
      <Navbar.Brand href="#">GachaDex</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
      <Form inline className="d-flex">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info" className="ml-2 space">Search</Button>
      </Form>

    </Navbar>
  );
}

export default NavigationBar;
