import * as types from '../../utils/actionTypes'

const initialState = {
    isLoading: false,
    movieArr: [],
    fetchMovieStatsus: undefined
};

export default reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_MOVIE_LIST_LOADER:
            return {
                ...state,
                isLoading: true,
            }
        
        case types.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movieArr: action.response && [...state.movieArr, ...action.response.results],
                fetchMovieStatsus: 'success'
            }
        
        case types.FETCH_MOVIE_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    movieArr: [],
                    fetchMovieStatsus: 'fail'
                }
        default:
            return state;
    }
};
