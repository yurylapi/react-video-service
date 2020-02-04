import React from 'react';
import { shallow } from 'enzyme';
import FilmDescription from '.';

describe('FilmDescription component', () => {
    let filmDescr;

    beforeAll(() => {
        filmDescr = 'Some description';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDescription description={filmDescr} />);
        expect(component).toMatchSnapshot();
    });
});
