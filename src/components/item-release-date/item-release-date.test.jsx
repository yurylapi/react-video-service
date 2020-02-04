import React from 'react';
import { shallow } from 'enzyme';
import ItemReleaseDate from '.';

describe('ItemReleaseDate component', () => {
    let itemYear;

    beforeAll(() => {
        itemYear = '2018-02-07';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemReleaseDate year={itemYear} />);
        expect(component).toMatchSnapshot();
    });
});
