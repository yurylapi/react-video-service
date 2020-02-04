import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR
} from '../constants/action-types';

const initialState = {
    movies: [],
    loading: false,
    error: null
};

export default function results(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.movies
            };

        case FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                movies: []
            };

        default:
            return state;
    }
}
