import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchField from '.';

describe('SearchField component', () => {
    let inputValue;
    let changeHandler;

    beforeAll(() => {
        inputValue = 'someSearch';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<SearchField value={inputValue} />);
        expect(component).toMatchSnapshot();
    });

    it('should trigger changeHandler on changes', () => {
        changeHandler = jest.fn();
        const component = mount(<SearchField value={inputValue} onChange={changeHandler} />);
        component.find('input[type="text"]').simulate('change', { target: { value: 'someString' } });
        expect(changeHandler).toHaveBeenCalled();
    });
});
