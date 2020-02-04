import { SORT_OPTIONS } from '../constants';
import { SORT_CRITERIA_CHANGE } from '../constants/action-types';

const initialState = {
    sortCriteria: SORT_OPTIONS.RELEASE_DATE
};

export default function sort(state = initialState, action) {
    switch (action.type) {
        case SORT_CRITERIA_CHANGE:
            return {
                ...state,
                sortCriteria: action.payload
            };
        default:
            return state;
    }
}
