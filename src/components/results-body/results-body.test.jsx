import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsBody from '.';
import ResultsItem from '../results-item';
import { RESPONSE_MOCK_DATA } from '../../constants';

describe('ResultsBody component', () => {
    let films;
    let clickHandler;
    let element;

    beforeAll(() => {
        films = RESPONSE_MOCK_DATA.data;
        clickHandler = jest.fn();
        element = (<ResultsBody
            results={films}
            onOpenFilmHandler={clickHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should mount all items', () => {
        const component = mount(element);
        expect(component.find(ResultsItem).length).toBe(films.length);
    });

    it('should handle click', () => {
        const component = mount(element);
        component.find(ResultsItem).first().simulate('click');
        expect(clickHandler).toHaveBeenCalledWith(films[0]);
    });
});
