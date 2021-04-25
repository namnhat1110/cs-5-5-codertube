import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TMDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/movie/upcoming">
              Upcoming
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/movie/popular">
                Popular
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/movie/top_rated">
                Top Rated
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
