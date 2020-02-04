import * as actions from './search-actions';
import * as actionTypes from '../constants/action-types';

describe('searchActions', () => {
    it('should create an action to search by criteria', () => {
        const newValue = 'newSearchCriteria';
        const expectedAction = {
            type: actionTypes.SEARCH_CRITERIA_CHANGE,
            payload: newValue
        };

        expect(actions.changeSearchCriteria(newValue)).toEqual(expectedAction);
    });

    it('should create an action to search by string', () => {
        const newValue = 'newSearchString';
        const expectedAction = {
            type: actionTypes.SEARCH_STRING_CHANGE,
            payload: newValue
        };

        expect(actions.changeSearchInput(newValue)).toEqual(expectedAction);
    });
});
