import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchCriteriaList from '.';
import Button from '../button';
import { SEARCH_OPTIONS } from '../../constants';

describe('SearchCriteriaList component', () => {
    let mockSearchOptions;
    let clickHandler;
    let currentOption;
    let element;

    beforeAll(() => {
        mockSearchOptions = SEARCH_OPTIONS;
        clickHandler = jest.fn();
        currentOption = SEARCH_OPTIONS.TITLE;
        element = (<SearchCriteriaList
            options={mockSearchOptions}
            onResultsSortChange={clickHandler}
            currentOption={currentOption}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should mount all options', () => {
        const component = mount(element);
        expect(component.find(Button).length).toBe(Object.keys(mockSearchOptions).length);
    });

    it('should trigger onChange handler on changes', () => {
        const component = mount(element);
        component.find(Button).first().simulate('click');
        expect(clickHandler).toHaveBeenCalledWith(currentOption);
    });
});
