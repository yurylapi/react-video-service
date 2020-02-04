import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { RESPONSE_MOCK_DATA, SEARCH_OPTIONS, SORT_OPTIONS } from '../../constants';
import App from '.';

const mockStore = configureMockStore();
const mockStoreData = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    search: {
        searchCriteria: SEARCH_OPTIONS.TITLE
    },
    sort: {
        sortCriteria: SORT_OPTIONS.RELEASE_DATE
    }
};

describe('App component', () => {
    let store;
    let element;

    beforeAll(() => {
        store = mockStore(mockStoreData);
        element = (<Provider store={store}><App /></Provider>);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });
});
