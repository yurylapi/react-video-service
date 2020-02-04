import React from 'react';
import { shallow } from 'enzyme';
import FilmGenre from '.';

describe('FilmGenre component', () => {
    let filmGenres;

    beforeAll(() => {
        filmGenres = ['someGenre', 'anotherGenre'];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmGenre genres={filmGenres} />);
        expect(component).toMatchSnapshot();
    });
});
