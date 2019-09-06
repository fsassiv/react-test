import React from "react";
import "./Search.scss";

const Search = ({ handleSubmit }) => {
  const formSubmit = e => {
    e.preventDefault();
    const inputValue = document.getElementById("search-input");
    handleSubmit(inputValue.value);
    //Clear the field after submit
    inputValue.value = "";
  };

  return (
    <form onSubmit={formSubmit} id="form" className="container search-form">
      <input
        className="u-half-width search-input"
        type="search"
        name="search"
        id="search-input"
        placeholder="Digite o nome do filme e tecle ENTER"
      />
      <button type="submit" className="button-primary search-btn">
        Buscar
      </button>
    </form>
  );
};

export default Search;
