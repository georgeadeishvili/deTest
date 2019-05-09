import axios from 'axios';
import { RETRIEVE_POPULAR_MOVIES_SUCCESS, RETRIEVE_SERIES_SUCCESS } from './types';
axios.defaults.headers['Referer'] = 'http://net.adjara.com/Search';

export function retrievePopularMoviesSuccess(res) {
	return {
		type: RETRIEVE_POPULAR_MOVIES_SUCCESS,
		popularMovies: res.data
	};
}

export function retrievePopularMovies(page,cb) {
	return function (dispatch) {
		return axios.get("http://net.adjara.com/cache/cached_home_premiere.php?type=premiere&order=new&period=week&limit=25")
		.then(res => {
			cb(res.data)
			dispatch(retrievePopularMoviesSuccess(res));
		})
		.catch(errr => {
		//	alert(JSON.stringify(errr))
			//console.log('Popular', error); //eslint-disable-line
		//	alert(error)
		});
	};
}

export function retrieveSeriesSuccess(res) {
	return {
		type: RETRIEVE_SERIES_SUCCESS,
		Series: res.data
	};
}

export function retrieveSeries(cb) {
	return function (dispatch) {
		return axios.get(`http://net.adjara.com/Search/SearchResults?ajax=1&display=16&startYear=1900&endYear=2018&offset=0&isnew=0&needtags=0&orderBy=date&order%5Border%5D=data&order%5Bdata%5D=published&language=false&country=false&game=0&softs=0&episode=1&trailers=0&tvshow=0&videos=0&xvideos=0&vvideos=0&dvideos=0&xphotos=0&vphotos=0&dphotos=0&flashgames=0`)
		.then(res => {
			cb()
			dispatch(retrieveSeriesSuccess(res.data));
		})
		.catch(error => {
	 	//alert(error)
		});
	};
}
