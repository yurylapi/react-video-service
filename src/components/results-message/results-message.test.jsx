import React from 'react';
import { shallow } from 'enzyme';
import ResultsMessage from './results-message';

describe('ResultsMessage component', () => {
    let testMessage;
    let element;

    beforeAll(() => {
        testMessage = 'Test message';
        element = (<ResultsMessage message={testMessage} />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });
});
