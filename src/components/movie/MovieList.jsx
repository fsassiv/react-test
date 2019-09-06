import React from "react";
import "./MovieList.scss";
import MovieItem from "./MovieItem";

const MovieList = ({ movieList, genres }) => {
  return (
    <div className="container movies-list">
      {movieList.map((movie, id) => (
        <MovieItem key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default MovieList;
