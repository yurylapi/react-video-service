import React from 'react';
import { shallow } from 'enzyme';
import ResultsCount from '.';

describe('ResultsCount component', () => {
    let filmsCount;

    it('should mount and display correct value if present value', () => {
        filmsCount = 6;
        const component = shallow(<ResultsCount count={filmsCount} />);
        expect(component.html()).toEqual('<span class="resultsCount">6 movies found</span>');
        expect(component).toMatchSnapshot();
    });

    it('should mount and display empty element if null value', () => {
        filmsCount = 0;
        const component = shallow(<ResultsCount count={filmsCount} />);
        expect(component.html()).toEqual('<span></span>');
        expect(component).toMatchSnapshot();
    });
});
