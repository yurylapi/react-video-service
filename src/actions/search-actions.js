import {
    SEARCH_CRITERIA_CHANGE,
    SEARCH_STRING_CHANGE
} from '../constants/action-types';

export const changeSearchCriteria = (searchCriteria) => ({
    type: SEARCH_CRITERIA_CHANGE,
    payload: searchCriteria
});

export const changeSearchInput = (searchInput) => ({
    type: SEARCH_STRING_CHANGE,
    payload: searchInput
});
