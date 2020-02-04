import React from 'react';
import { shallow } from 'enzyme';
import FilmTitle from '.';

describe('FilmTitle component', () => {
    let filmTitle;

    beforeAll(() => {
        filmTitle = 'Some Title';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmTitle title={filmTitle} />);
        expect(component).toMatchSnapshot();
    });
});
