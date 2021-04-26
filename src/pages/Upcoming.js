import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Row, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import PublicNavbar from "../components/PublicNavbar";

const URL_BACKEND = process.env.REACT_APP_BACKEND_MOVIE;
const API_KEY = process.env.REACT_APP_API_KEY;

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  const FetchMovies = async () => {
    const response = await fetch(
      `${URL_BACKEND}movie/upcoming?api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    setMovies(json.results);
  };

  useEffect(() => {
    FetchMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      <PublicNavbar />
      <div className="container">
        <hr style={{ background: "grey" }} />
        <h3 style={{ color: "grey", textAlign: "left" }}>Upcoming</h3>
        <Container>
          <Row className="pl-3 m-2">
            {movies.map((m) => {
              return (
                <Card
                  style={{
                    width: "15rem",
                    background: "black",
                    color: "white",
                  }}
                  className="m-2"
                >
                  <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w500/" + m.backdrop_path}
                  />
                  <Card.Body>
                    <Card.Title>{m.title}</Card.Title>
                    <Card.Text
                      style={{
                        overflow: "hidden",
                        overflowY: "auto",
                      }}
                    >
                      Release date: {m.release_date}
                    </Card.Text>
                    <Card.Text
                      style={{
                        overflow: "hidden",
                        overflowY: "auto",
                      }}
                    >
                      <AiOutlineStar /> {m.vote_average}
                    </Card.Text>
                    {m.adult === true && (
                      <Card.Text
                        style={{
                          color: "red",
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        18+
                      </Card.Text>
                    )}
                    <Nav.Link as={Link} to={"movie/" + m.id}>
                      <Button variant="primary">Details</Button>
                    </Nav.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Upcoming;
