import React from 'react';
import PropTypes from 'prop-types';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Filters from './Filters';
import MovieCard from './MovieCard';

export default class MovieList extends React.PureComponent {

  static propTypes = {
    movies: PropTypes.array
  };

  static defaultProps = {
    movies: []
  };

  state = {
    categoryFilter: 'all'
  };

  getCategories() {
    const categories = this.props.movies
      .map(movie => movie.categories.map(category => category.toLowerCase()))
      .reduce((prev, current) => prev.concat(current), [])
      .filter((value, index, self) => self.indexOf(value) === index);
    categories.unshift('all');
    return categories;
  }

  getFilteredMovies() {
    return this.props.movies
      .filter(movie => (
        this.state.categoryFilter === 'all' ||
        movie.categories.map(category => category.toLowerCase())
          .includes(this.state.categoryFilter)
      ));
  }

  filterByCategory = (category) => {
    this.setState({ categoryFilter: category });
  }

  render() {
    const categories = this.getCategories();
    const movies = this.getFilteredMovies();
    return (
      <div className="container py-5">
        <Filters
          categories={categories}
          categoryFilter={this.state.categoryFilter}
          filterByCategory={this.filterByCategory}
        />
        <TransitionGroup className="row">
          {movies.map(movie => (
            <CSSTransition
              key={movie.id}
              timeout={300}
              classNames="fade"
            >
              <div className="col-md-3">
                <MovieCard movie={movie} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }

}
