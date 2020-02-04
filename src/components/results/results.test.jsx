import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Results from '.';
import ResultsCount from '../results-count';
import ResultsSort from '../results-sort';
import ResultsBody from '../results-body';
import { RESPONSE_MOCK_DATA, SORT_OPTIONS } from '../../constants';

const mockStore = configureMockStore();
const mockStoreData = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    navigation: {
        openedFilmId: 337167
    },
    sort: {
        sortCriteria: SORT_OPTIONS.RELEASE_DATE
    }
};

describe('Results component', () => {
    let store;
    let films;
    let fetchData;
    let filmClickHandler;
    let element;

    beforeAll(() => {
        store = mockStore(mockStoreData);
        films = RESPONSE_MOCK_DATA.data;
        fetchData = jest.fn();
        filmClickHandler = jest.fn();

        element = (<Provider store={store}><Results
            results={films}
            fetchData={fetchData}
            openFilmHandler={filmClickHandler}
        /></Provider>);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly on loading', () => {
        const component = mount(<Provider store={store}><Results
            loading={true}
            fetchData={fetchData}
        /></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly on error', () => {
        const error = { message: 'Error message' };
        const component = mount(<Provider store={store}><Results
            error={error}
            fetchData={fetchData}
        /></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should contain ResultsCount', () => {
        const component = mount(element);
        expect(component.find(ResultsCount).exists()).toBe(true);
    });

    it('should contain ResultsSort', () => {
        const component = mount(element);
        expect(component.find(ResultsSort).exists()).toBe(true);
    });

    it('should contain ResultsBody', () => {
        const component = mount(element);
        expect(component.find(ResultsBody).exists()).toBe(true);
    });

    it('should return alert if results are empty', () => {
        const component = mount(<Results results={[]} fetchData={fetchData} />);
        expect(component.find(ResultsCount).exists()).toBe(false);
        expect(component.find(ResultsSort).exists()).toBe(false);
        expect(component.find(ResultsBody).exists()).toBe(false);
        expect(component.text()).toEqual('No films found');
    });
});
