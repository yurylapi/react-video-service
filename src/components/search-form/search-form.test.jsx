import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './search-form';
import SearchFilter from '../search-filter';
import SearchField from '../search-field';
import { SEARCH_OPTIONS } from '../../constants';

describe('SearchForm component', () => {
    let searchString;
    let searchCriteria;
    let submitHandler;
    let changeSearchCriteriaHandler;
    let element;

    beforeAll(() => {
        searchString = 'someSearch';
        searchCriteria = SEARCH_OPTIONS.TITLE;
        submitHandler = jest.fn();
        changeSearchCriteriaHandler = jest.fn();

        element = (<SearchForm
            searchString={searchString}
            searchCriteria={searchCriteria}
            submitHandler={submitHandler}
            changeSearchCriteriaHandler={changeSearchCriteriaHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should contain header with proper wording', () => {
        const component = mount(element);
        expect(component.find('h1').text()).toEqual('Find your movie');
    });

    it('should contain SearchField', () => {
        const component = mount(element);
        expect(component.find(SearchField).exists()).toBe(true);
    });

    it('should contain SearchFilter', () => {
        const component = mount(element);
        expect(component.find(SearchFilter).exists()).toBe(true);
    });

    it('should trigger submitHandler handler on changes', () => {
        const component = mount(element);
        component.find('input[type="text"]').simulate('change', { target: { value: 'someString' } });
        expect(submitHandler).toHaveBeenCalled();
    });
});
