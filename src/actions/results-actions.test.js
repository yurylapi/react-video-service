import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './results-actions';
import * as actionTypes from '../constants/action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('resultsActions', () => {
    it('should create an action to begin fetch', () => {
        const expectedAction = {
            type: actionTypes.FETCH_DATA_BEGIN
        };

        expect(actions.fetchDataBegin()).toEqual(expectedAction);
    });

    it('should create an action to success fetch', () => {
        const mockMovies = [{ id: 1 }, { id: 2 }];
        const expectedAction = {
            type: actionTypes.FETCH_DATA_SUCCESS,
            payload: { movies: mockMovies }
        };

        expect(actions.fetchDataSuccess(mockMovies)).toEqual(expectedAction);
    });

    it('should create an action to fail fetch', () => {
        const mockError = { error: 'SomeError' };
        const expectedAction = {
            type: actionTypes.FETCH_DATA_ERROR,
            payload: { error: mockError }
        };

        expect(actions.fetchDataFailure(mockError)).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should create FETCH_DATA_SUCCESS when fetching data has been done', () => {
        const API_URL = 'https://reactjs-cdp.herokuapp.com/movies/?limit=200';

        fetchMock.getOnce(API_URL, {
            body: { data: [{ id: 1 }, { id: 2 }] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: actionTypes.FETCH_DATA_BEGIN },
            { type: actionTypes.FETCH_DATA_SUCCESS, payload: { movies: [{ id: 1 }, { id: 2 }] } }
        ];
        const store = mockStore({ movies: [] });

        return store.dispatch(actions.fetchData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create FETCH_DATA_ERROR when fetching data was failed', () => {
        const API_URL = 'https://reactjs-cdp.herokuapp.com/movies/?limit=200';

        const store = mockStore({ movies: [] });

        fetchMock.mock(API_URL, { throws: { message: 'Network error' } });

        const expectedActions = [
            { type: actionTypes.FETCH_DATA_BEGIN },
            { type: actionTypes.FETCH_DATA_ERROR, payload: { error: { message: 'Network error' } } }
        ];

        return store.dispatch(actions.fetchData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
