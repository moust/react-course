import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions/movies';

import MovieList from '../components/MovieList';

class App extends React.PureComponent {

  static propTypes = {
    movies: PropTypes.array,
    fetchMovies: PropTypes.func.isRequired
  };

  static defaultProps = {
    movies: []
  };

  componentDidMount() {
    this.props.fetchMovies();
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
          <MovieList movies={this.props.movies} />
        </main>
      </div>
    );
  }

}


const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
