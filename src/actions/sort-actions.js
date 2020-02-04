import { SORT_CRITERIA_CHANGE } from '../constants/action-types';

export const changeSort = (sortCriteria) => ({
    type: SORT_CRITERIA_CHANGE,
    payload: sortCriteria
});
