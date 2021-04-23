import React from "react";
import { Navbar } from "react-bootstrap";
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
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
