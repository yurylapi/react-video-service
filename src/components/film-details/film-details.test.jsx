import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmDetails from './film-details';
import { RESPONSE_MOCK_DATA } from '../../constants';

describe('FilmDetails component', () => {
    let filmData;

    beforeAll(() => {
        filmData = RESPONSE_MOCK_DATA.data[0];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDetails film={filmData} />);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly', () => {
        const component = mount(<FilmDetails film={filmData} />);
        expect(component).toMatchSnapshot();
    });
});
