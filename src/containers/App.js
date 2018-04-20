import React from 'react';

import MovieList from '../components/MovieList';

export default class App extends React.PureComponent {

  static fetchMovies() {
    return fetch('/movies.json')
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error(res.statusText);
      })
      .then(res => res.json());
  }

  state = {
    movies: []
  };

  componentDidMount() {
    App.fetchMovies().then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="app">
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              GuesttoGuest Cine Movies
            </a>
          </nav>
        </header>
        <main role="main">
          <MovieList movies={this.state.movies} />
        </main>
      </div>
    );
  }

}
