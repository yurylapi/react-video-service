import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '.';

describe('Button component', () => {
    let clickHandler;
    let element;

    beforeAll(() => {
        clickHandler = jest.fn();
        element = (<Button
            onClick={clickHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
        expect(component.find('button').is('.otherClass')).toEqual(false);
    });

    it('should add auxiliary class if passed', () => {
        const component = mount(<Button classModifier={'otherClass'} />);
        expect(component.find('button').is('.otherClass')).toEqual(true);
    });

    it('should handle click', () => {
        const component = mount(element);
        component.find('button').simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });
});
