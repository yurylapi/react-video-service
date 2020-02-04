import reducer from './results';
import * as types from '../constants/action-types';

describe('resultsReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            movies: [],
            loading: false,
            error: null
        });
    });

    it('should handle FETCH_DATA_BEGIN', () => {
        expect(reducer({}, {
            type: types.FETCH_DATA_BEGIN
        })).toEqual({
            loading: true,
            error: null
        });
    });

    it('should handle FETCH_DATA_SUCCESS', () => {
        const mockMovies = [{ id: 1 }, { id: 2 }];

        expect(reducer({}, {
            type: types.FETCH_DATA_SUCCESS,
            payload: { movies: mockMovies }
        })).toEqual({
            loading: false,
            movies: mockMovies
        });
    });

    it('should handle FETCH_DATA_ERROR', () => {
        const mockError = { error: 'SomeError' };

        expect(reducer({}, {
            type: types.FETCH_DATA_ERROR,
            payload: { error: mockError }
        })).toEqual({
            loading: false,
            error: mockError,
            movies: []
        });
    });
});
