import fetch from 'node-fetch';

import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR
} from '../constants/action-types';
import { RESPONSE_MOCK_DATA } from '../constants';

const API_URL = 'https://reactjs-cdp.herokuapp.com/movies/?limit=200';

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response;
};

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = (movies) => ({
    type: FETCH_DATA_SUCCESS,
    payload: { movies }
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_ERROR,
    payload: { error }
});

const getData = (apiUrl) =>
    fetch(apiUrl)
        .then(handleErrors)
        .then((res) => res.json());

/* eslint-disable */
export const fakeGetData = () =>
    new Promise((resolve) => {
        setTimeout(
            () =>
                resolve({
                    data: RESPONSE_MOCK_DATA.data
                }),
            2500
        );
    });
/* eslint-enable */

export function fetchData() {
    return async (dispatch) => {
        dispatch(fetchDataBegin());
        return await getData(API_URL)
            .then((json) => {
                dispatch(fetchDataSuccess(json.data));
                return json.data;
            })
            .catch((error) => dispatch(fetchDataFailure(error)));
    };
}
