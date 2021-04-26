import React from "react";

import { Carousel, Card, Button, Row, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import ModalBox from "../components/ModalBox";

const URL_BACKEND = process.env.REACT_APP_BACKEND_MOVIE;
const API_KEY = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trendingM, setTrendingM] = useState([]);
  const [trailerKey, setTrailerKey] = useState(``)
  const [modalOpen, setModalOpen] = useState(false)

  const fetchGenres = async () => {
    const response = await fetch(
      `${URL_BACKEND}genre/movie/list?api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    console.log(genres)
    setGenres(json);
  };
  const fetchTrendingM = async () => {
    const response = await fetch(
      `${URL_BACKEND}trending/movie/week?api_key=${API_KEY}`
    );
    const json = await response.json();
    setTrendingM(json.results);
  };
  const fetchData = async () => {
    const response = await fetch(
      `${URL_BACKEND}movie/now_playing?api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log(json.results);
    setMovies(json.results);
  };

  useEffect(() => {
    fetchGenres();
    fetchTrendingM();
    // eslint-disable-next-line 
    fetchData();
    // eslint-disable-next-line 
  }, []);

  const onFetchYoutubeVideoId = async (id) => {
    const resp = await fetch(`${URL_BACKEND}movie/${id}/videos?api_key=${API_KEY}`)
    const json = await resp.json()
    console.log({ json })
    if (json.results.length > 0) {
      setTrailerKey(json.results[0])
      setModalOpen(!modalOpen)
    }
  }

  return (
    <div className="mt-3 ">
      <h3 className="container" style={{ color: "grey", textAlign: "left" }}>
        Trending
      </h3>

      {trendingM.slice(0, 1).map(() => {
        return (
          <Carousel fade className="container">
            <Carousel.Item>
              <Nav.Link as={Link} to={"movie/" + trendingM[0].id}>
                <img
                  className="d-block w-100 "
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    trendingM[0].backdrop_path
                  }
                  alt="First slide"
                />
              </Nav.Link>
              <Carousel.Caption>
                <h3>{trendingM[0].title}</h3>
                <p className="small-text">{trendingM[0].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Nav.Link as={Link} to={"movie/" + trendingM[1].id}>
                <img
                  className="d-block w-100 "
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    trendingM[1].backdrop_path
                  }
                  alt="Second slide"
                />
              </Nav.Link>

              <Carousel.Caption>
                <h3>{trendingM[1].title}</h3>
                <p className="small-text">{trendingM[1].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Nav.Link as={Link} to={"movie/" + trendingM[2].id}>
                <img
                  className="d-block w-100 "
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    trendingM[2].backdrop_path
                  }
                  alt="Third slide"
                />
              </Nav.Link>

              <Carousel.Caption>
                <h3>{trendingM[2].title}</h3>
                <p className="small-text">{trendingM[2].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Nav.Link as={Link} to={"movie/" + trendingM[3].id}>
                <img
                  className="d-block w-100 "
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    trendingM[3].backdrop_path
                  }
                  alt="Third slide"
                />
              </Nav.Link>

              <Carousel.Caption>
                <h3>{trendingM[3].title}</h3>
                <p className="small-text">{trendingM[3].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Nav.Link as={Link} to={"movie/" + trendingM[4].id}>
                <img
                  className="d-block w-100 "
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    trendingM[4].backdrop_path
                  }
                  alt="Third slide"
                />
              </Nav.Link>

              <Carousel.Caption>
                <h3>{trendingM[4].title}</h3>
                <p className="small-text">{trendingM[4].overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      })}
      <div className="container">
        <hr style={{ background: "grey" }} />
        <h3 style={{ color: "grey", textAlign: "left" }}>Now-Playing</h3>
        <Container>
          <ModalBox
            trailerKey={trailerKey}
            setTrailerKey={setTrailerKey}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
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
                    <Button onClick={() => onFetchYoutubeVideoId(m.id)}>Trailer</Button>
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

export default HomePage;
