import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchFilter from '.';
import Button from '../button';
import SearchCriteriaList from '../search-criteria-list';
import { SEARCH_OPTIONS } from '../../constants';

describe('SearchFilter component', () => {
    let mockSearchOptions;
    let currentOption;
    let clickHandler;
    let element;

    beforeAll(() => {
        mockSearchOptions = SEARCH_OPTIONS;
        currentOption = SEARCH_OPTIONS.TITLE;
        clickHandler = jest.fn();
        element = (<SearchFilter
            options={mockSearchOptions}
            currentOption={currentOption}
            changeHandler={clickHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should contain span with proper wording', () => {
        const component = mount(element);
        expect(component.find('span').text()).toEqual('Search by ');
    });

    it('should contain Button', () => {
        const component = mount(element);
        expect(component.find(Button).exists()).toBe(true);
    });

    it('should contain SearchCriteriaList', () => {
        const component = mount(element);
        expect(component.find(SearchCriteriaList).exists()).toBe(true);
    });
});
