import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import "./App.css";
import Search from "./components/Search";
import MovieList from "./components/movie/MovieList";
import Header from "./components/Header";
import MoviePage from "./components/page/MoviePage";
import axios from "axios";

const history = createBrowserHistory();

const config = {
  baseUrl: "https://api.themoviedb.org/3/search/movie",
  api_key: "api_key=3276fa51d16eb0a7c0fcb23665588bcd",
  lang: {
    pt: "pt-BR&region=BR",
    en: "en-US&region=US"
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      genres: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=3276fa51d16eb0a7c0fcb23665588bcd&language=pt-BR"
      )
      .then(({ data: { genres } }) => this.setState({ genres }))
      .catch(err => console.error(err));

    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/movie/603/videos?api_key=3276fa51d16eb0a7c0fcb23665588bcd&language=pt-BR"
    //   )
    //   .then(data => console.log(data));
  }

  handleSubmit = keyword => {
    if (keyword !== "") {
      axios
        .get(
          `${config.baseUrl}?${config.api_key}&query=${keyword}&language=${config.lang.en}&page=1`,
          { crossdomain: true }
        )
        .then(response =>
          this.setState({ movieList: response.data.results }, () => {
            // console.log(this.state.movieList);
          })
        )
        .catch(err => console.error(err));
    }
  };

  render() {
    const { movieList, genres } = this.state;
    return (
      <div className="App">
        <Header />

        <Router history={history}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Fragment>
                  <Search handleSubmit={this.handleSubmit} />
                  <MovieList movieList={movieList} genres={genres} />
                </Fragment>
              )}
            />
            <Route exact path="/movie/:id?" component={MoviePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
