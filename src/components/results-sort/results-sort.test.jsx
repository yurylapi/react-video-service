import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsSort from './results-sort';
import ResultsSortList from '../results-sort-list';
import { SORT_OPTIONS } from '../../constants';

describe('ResultsSort component', () => {
    let currentOption;
    let clickHandler;
    let element;

    beforeAll(() => {
        currentOption = SORT_OPTIONS[0];
        clickHandler = jest.fn();
        element = (<ResultsSort
            currentSortCriteria={currentOption}
            onResultsSortChange={clickHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should contain span with proper wording', () => {
        const component = mount(element);
        expect(component.find('span > span').text()).toEqual('Sort by:');
    });

    it('should contain ResultsSortList', () => {
        const component = mount(element);
        expect(component.find(ResultsSortList).exists()).toBe(true);
    });
});
