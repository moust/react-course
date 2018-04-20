export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const fetchMovies = () => dispatch => {
  dispatch({ type: FETCH_MOVIES });
  return fetch('/movies.json')
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw new Error(res.statusText);
    })
    .then(res => res.json())
    .then(res => dispatch(fetchMoviesSuccess(res)));
};
