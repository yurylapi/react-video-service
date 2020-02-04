import React from 'react';
import { shallow } from 'enzyme';
import ItemGenre from '.';

describe('ItemGenre component', () => {
    let itemGenres;

    beforeAll(() => {
        itemGenres = ['someGenre', 'anotherGenre'];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemGenre genres={itemGenres} />);
        expect(component).toMatchSnapshot();
    });
});
