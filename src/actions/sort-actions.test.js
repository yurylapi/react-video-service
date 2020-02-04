import * as actions from './sort-actions';
import * as actionTypes from '../constants/action-types';

describe('sortActions', () => {
    it('should create an action to sort', () => {
        const newValue = 'newSortCriteria';
        const expectedAction = {
            type: actionTypes.SORT_CRITERIA_CHANGE,
            payload: newValue
        };

        expect(actions.changeSort(newValue)).toEqual(expectedAction);
    });
});
