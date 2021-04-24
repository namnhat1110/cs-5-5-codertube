import React from "react";
import { Carousel, Card, Button, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const URL_BACKEND = process.env.REACT_APP_BACKEND_MOVIE;
const API_KEY = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${URL_BACKEND}movie/now_playing?api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log({ json });
    setMovies(json.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-3 ">
      <h3 style={{ color: "grey", textAlign: "left" }}>Trending</h3>

      {movies.slice(0, 1).map((m) => {
        return (
          <Carousel fade className="container">
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={
                  "https://image.tmdb.org/t/p/w500/" + movies[0].backdrop_path
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{movies[0].title}</h3>
                <p className="small-text">{movies[0].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={
                  "https://image.tmdb.org/t/p/w500/" + movies[1].backdrop_path
                }
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>{movies[1].title}</h3>
                <p className="small-text">{movies[1].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={
                  "https://image.tmdb.org/t/p/w500/" + movies[2].backdrop_path
                }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>{movies[2].title}</h3>
                <p className="small-text">{movies[2].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      })}
      <div>
        <hr style={{ background: "grey" }} />
        <h3 style={{ color: "grey", textAlign: "left" }}>Now-Playing</h3>
        <Container>
          <Row className="pl-3 m-3">
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
                    <Button variant="primary">Details</Button>
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

export default HomePage;
