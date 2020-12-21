import * as types from '../../utils/actionTypes'
import { POPULAR_MOVIE } from "../../utils/utils";
import { API_KEY_MOVIE } from '@env'

export const fetchMovieListLoader = () => ({
        type: types.FETCH_MOVIE_LIST_LOADER
});

export function fetchMovieList(page) {
    console.log("API_KEY", API_KEY_MOVIE)
    return dispatch => {
        const url = `${POPULAR_MOVIE}?api_key=${API_KEY_MOVIE}&language=en-US&page=${page}`;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(res => {
                dispatch({
                    type: types.FETCH_MOVIE_SUCCESS,
                    response: res,
                });
            })
            .catch(error => {
                dispatch({
                    type: types.FETCH_MOVIE_FAILURE,
                    response: error,
                });
            });
    };
}



