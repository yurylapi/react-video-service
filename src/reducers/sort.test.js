import { SORT_OPTIONS } from '../constants';
import reducer from './sort';
import * as types from '../constants/action-types';

describe('sortReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            sortCriteria: SORT_OPTIONS.RELEASE_DATE
        });
    });

    it('should handle SORT_CRITERIA_CHANGE', () => {
        const newSortCriteria = 'newSortCriteria';

        expect(reducer({}, {
            type: types.SORT_CRITERIA_CHANGE,
            payload: newSortCriteria
        })).toEqual({
            sortCriteria: newSortCriteria
        });
    });
});
