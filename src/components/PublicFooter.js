import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "../App.css";

const PublicFooter = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col>
              <Navbar.Brand as={Link} to="/">
                <img
                  alt=""
                  src={logo}
                  width="100"
                  height="70"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </Col>
            <Col sm>
              <h4>THE BASICS</h4>
              <p>About</p>
              <p>Contact us</p>
              <p>Support</p>
              <p>SystemStatus</p>
            </Col>
            <Col sm>
              <h4>GET INVOLVED</h4>
              <p>Contribute Bible</p>
              <p>3rd Party Application</p>
              <p>Add New Movie</p>
              <p>Add New TV Show</p>
            </Col>
            <Col sm>
              <h4>COMMUNITY</h4>
              <p>Guildlines</p>
              <p>Discussions</p>
              <p>Leaderboard</p>
              <p>Twitter</p>
            </Col>
            <Col sm>
              <h4>LEGAL</h4>
              <p>Terms of Use</p>
              <p>API Terms of Use</p>
              <p>Privacy Policy</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default PublicFooter;
