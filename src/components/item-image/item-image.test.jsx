import React from 'react';
import { shallow } from 'enzyme';
import ItemImage from '.';

describe('ItemImage component', () => {
    let itemSrc;
    let itemAlt;

    beforeAll(() => {
        itemSrc = 'src.jpg';
        itemAlt = 'Alt';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemImage src={itemSrc} alt={itemAlt} />);
        expect(component).toMatchSnapshot();
    });
});
