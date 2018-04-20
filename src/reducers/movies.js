import { FETCH_MOVIES_SUCCESS } from '../actions/movies';

const movies = (store = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.movies;
    default:
      return store;
  }
};

export default movies;
