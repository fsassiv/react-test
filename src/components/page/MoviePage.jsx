import React, { Component } from "react";
import { withRouter } from "react-router";
// import lifecycle from "react-pure-lifecycle";
import "./MoviePage.scss";
import axios from "axios";

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {}
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3276fa51d16eb0a7c0fcb23665588bcd&language=pt-BR`
      )
      .then(({ data }) => this.setState({ loading: false, movie: data }))
      .catch(err => console.error(err), this.setState({ loading: true }));
  };

  render() {
    const {
      loading,
      movie: { title, overview, genres }
    } = this.state;

    if (loading) {
      return <h1 className="loading-title">Buscando informações...</h1>;
    } else {
      return (
        <div className="container">
          <div className="movie-page">
            <div className="movie-top">{title}</div>
            <p>{overview}</p>
            <hr />
            {genres.map(genre => (
              <button
                key={genre.id}
                className="genre-btn button button-primary">
                {genre.name}
              </button>
            ))}
          </div>
          <button onClick={() => this.props.history.push("/")}>Voltar</button>
        </div>
      );
    }
  }
}

export default withRouter(MoviePage);
