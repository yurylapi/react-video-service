import React from 'react';
import { shallow } from 'enzyme';
import MessagePage from './message-page';

describe('MessagePage component', () => {
    let routeProps;
    let message;

    beforeAll(() => {
        message = 'alert message';
        routeProps = {
            match: {
                params: {
                    filmId: 11111
                }
            }
        };
    });

    it('should be rendered correctly', () => {
        const component = shallow(<MessagePage message={message} {...routeProps} />);
        expect(component).toMatchSnapshot();
    });
});
