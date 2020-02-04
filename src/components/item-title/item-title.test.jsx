import React from 'react';
import { shallow } from 'enzyme';
import ItemTitle from '.';

describe('ItemTitle component', () => {
    let itemTitle;

    beforeAll(() => {
        itemTitle = 'Some Title';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemTitle title={itemTitle} />);
        expect(component).toMatchSnapshot();
    });
});
