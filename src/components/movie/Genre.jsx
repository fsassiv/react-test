import React from "react";
import "./Genre.scss";

const Genre = props => {
  const { name } = props.genre;
  const genreClick = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Genre Click");
  };

  return (
    <a href="#" className="genre button button-primary" onClick={genreClick}>
      {name}
    </a>
  );
};

export default Genre;
