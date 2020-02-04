import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('Footer component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});
