import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaKissWinkHeart } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import "../App.css";

const URL_BACKEND = process.env.REACT_APP_BACKEND_MOVIE;
const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const { id } = useParams();
  // const { name } = useParams();
  const [movie, setMovie] = useState({});
  // const [person, setPerson] = useState([]);
  // const [video, setVideo] = useState({});
  // console.log({ video });
  // const fetchVideo = async () => {
  //   const response = await fetch(
  //     `${URL_BACKEND}movie/${id}/videos?api_key=${API_KEY}`
  //   );
  //   const json = await response.json();
  //   console.log(json);
  //   setVideo(json.results[0]);
  // };
  // const fetchPerson = async () => {
  //   const response = await fetch(
  //     `${URL_BACKEND}person/popular?api_key=${API_KEY}`
  //   );
  //   const json = await response.json();
  //   console.log({ json });
  // };


  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(
        `${URL_BACKEND}movie/${id}?api_key=${API_KEY}`
      );
      const json = await response.json();
      console.log({ json });
      setMovie(json);
    };


    fetchData();
  }, [id]);

  if (!movie.id) return <h1>Loading</h1>;
  return (
    <div>
      <div className="container">
        <Card className="bg-dark text-white">
          <Card.Img
            className="blur-img"
            src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          />
          <Card.ImgOverlay>
            <div className="detail-content">
              <img alt="posterimage"
                className="detail-image"
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              />

              <section className="detail-text">
                <Card.Title style={{ fontSize: 35 }}>{movie.title}</Card.Title>
                <Card.Text>
                  {movie.release_date} <GoPrimitiveDot /> {movie.runtime}{" "}
                  minutes
                </Card.Text>
                <Card.Text>
                  <FaKissWinkHeart /> User Score: {movie.vote_average}
                </Card.Text>
                <Card.Text style={{ fontStyle: "italic", fontWeight: "light" }}>
                  {movie.tagline}
                </Card.Text>
                <h3>Over View</h3>
                <Card.Text>{movie.overview}</Card.Text>
              </section>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default MovieDetail;
