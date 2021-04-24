import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const URL_BACKEND = process.env.REACT_APP_BACKEND_MOVIE;
const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const fetchData = async () => {
    const response = await fetch(
      `${URL_BACKEND}movie/${id}?api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log({ json });
    setMovie(json.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {movie.map((m) => {
        return <div> {m.title}</div>;
      })}
    </div>
  );
};

export default MovieDetail;
