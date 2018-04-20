import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.PureComponent {

  static propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      year: PropTypes.number,
      duration: PropTypes.number,
      categories: PropTypes.arrayOf(PropTypes.string),
      images: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
      review: PropTypes.shape({
        rating: PropTypes.number
      })
    }).isRequired
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="card mb-4 box-shadow">
        <img src={movie.images[0]} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <div className="card-text text-muted">{movie.year} | {movie.duration} min | {movie.categories.join(', ')}</div>
          <p className="card-text">
            {movie.summary}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <a href={`https://www.imdb.com/title/${movie.id}`} className="btn btn-warning">
              <i className="fab fa-imdb align-middle mr-2" aria-hidden="true" />
              <span className="align-middle">IMDb</span>
            </a>
            <div className="text-muted review">
              <i className="fa fa-star text-warning" /> {movie.review.rating}/10
            </div>
          </div>
        </div>
      </div>
    );
  }

}
