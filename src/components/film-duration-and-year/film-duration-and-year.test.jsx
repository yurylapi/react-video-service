import React from 'react';
import { shallow } from 'enzyme';
import FilmDurationAndYear from '.';

describe('FilmDurationAndYear component', () => {
    let filmDuration;
    let filmYear;

    beforeAll(() => {
        filmDuration = 106;
        filmYear = '2018-02-07';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDurationAndYear duration={filmDuration} year={filmYear} />);
        expect(component).toMatchSnapshot();
    });
});
