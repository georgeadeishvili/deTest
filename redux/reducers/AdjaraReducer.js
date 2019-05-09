import { RETRIEVE_SERIES_SUCCESS, RETRIEVE_POPULAR_MOVIES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    movies: {
        details: {},
        genres: [],
		list: {},
		nowPlayingMovies: {},
		popularMovies: [],
		searchResults: {}
    }
}

export default function (state = INITIAL_STATE.movies, action) {
    switch (action.type) {
        case RETRIEVE_SERIES_SUCCESS:
            return { ...state, Series: action.Series };
        case RETRIEVE_POPULAR_MOVIES_SUCCESS:
            return { ...state, popularMovies: action.popularMovies };
        default:
            return state;
    }
}