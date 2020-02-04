import React from 'react';
import { mount } from 'enzyme';
import ResultsSortList from '.';
import Button from '../button';
import { SORT_OPTIONS } from '../../constants';

describe('ResultsSortList component', () => {
    let mockSortOptions;
    let currentOption;
    let clickHandler;
    let element;

    beforeAll(() => {
        mockSortOptions = SORT_OPTIONS;
        currentOption = SORT_OPTIONS.RELEASE_DATE;
        clickHandler = jest.fn();
        element = (<ResultsSortList
            options={mockSortOptions}
            currentOption={currentOption}
            onResultsSortChange={clickHandler}
        />);
    });

    it('should mount all options', () => {
        const component = mount(element);
        expect(component.find(Button).length).toBe(Object.keys(mockSortOptions).length);
    });

    it('should trigger onChange handler on changes', () => {
        const component = mount(element);
        component.find(Button).first().simulate('click');
        expect(clickHandler).toHaveBeenCalledWith(currentOption);
        expect(component).toMatchSnapshot();
    });
});
