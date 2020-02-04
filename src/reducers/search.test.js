import { SEARCH_OPTIONS } from '../constants';
import reducer from './search';
import * as types from '../constants/action-types';

describe('searchReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            searchCriteria: SEARCH_OPTIONS.TITLE,
            searchString: ''
        });
    });

    it('should handle SEARCH_CRITERIA_CHANGE', () => {
        const newSearchCriteria = 'newSearchCriteria';

        expect(reducer({}, {
            type: types.SEARCH_CRITERIA_CHANGE,
            payload: newSearchCriteria
        })).toEqual({
            searchCriteria: newSearchCriteria
        });
    });

    it('should handle SEARCH_STRING_CHANGE', () => {
        const newSearchString = 'newSearchString';

        expect(reducer({}, {
            type: types.SEARCH_STRING_CHANGE,
            payload: newSearchString
        })).toEqual({
            searchString: newSearchString
        });
    });
});
