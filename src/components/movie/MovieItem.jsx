import React from "react";
import "./MovieItem.scss";
// import Genre from "./Genre";
import { withRouter } from "react-router";

const MovieItem = props => {
  const { id, backdrop_path, genre_ids, title } = props.movie;
  const { genres } = props;
  const theGenres = () => {
    let newList = [];
    genre_ids.map(id => {
      newList = [...newList, genres.filter(genre => genre.id === id)];
    });
    return newList;
  };
  // theGenres();
  // cosnt getGenres(genre_ids);
  return (
    <div
      className="movie-item row"
      onClick={() => props.history.push(`/movie/${id}`)}>
      <div className="two columns">
        <img
          src={"https://image.tmdb.org/t/p/w200" + backdrop_path}
          className="banner"
          alt=""
        />
      </div>
      <div className="ten columns details">
        <div className="details-top">
          <h3 className="title">{title}</h3>
          <div className="rate">10</div>
          <div className="date">01/01/2019</div>
        </div>
        <div className="sinopse">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cum
          esse reiciendis consequatur neque. Magnam dicta nesciunt voluptas
          repudiandae facilis.
        </div>
        <div className="genre-list">
          {theGenres().map(genre => (
            <span
              style={{ display: "inline-block", marginRight: "5px" }}
              key={genre[0].id}
              className="button button-primary">
              {genre[0].name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieItem);
