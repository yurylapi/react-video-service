import React from 'react';
import { shallow } from 'enzyme';
import FilmPage from './film-page';

describe('FilmPage component', () => {
    let routeProps;

    beforeAll(() => {
        routeProps = {
            match: {
                params: {
                    filmId: 11111
                }
            }
        };
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmPage {...routeProps} />);
        expect(component).toMatchSnapshot();
    });
});
