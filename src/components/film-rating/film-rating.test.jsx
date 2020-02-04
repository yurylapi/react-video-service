import React from 'react';
import { shallow } from 'enzyme';
import FilmRating from '.';

describe('FilmRating component', () => {
    let filmRating;

    beforeAll(() => {
        filmRating = 6.1;
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmRating rating={filmRating} />);
        expect(component).toMatchSnapshot();
    });
});
