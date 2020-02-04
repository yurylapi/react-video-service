import React from 'react';
import { shallow, mount } from 'enzyme';
import SameGenreFilms from './same-genre-films';
import { RESPONSE_MOCK_DATA } from '../../constants';
import ResultsItem from '../results-item';

describe('SameGenreFilms component', () => {
    let films; let openedFilmGenres; let openFilmHandler; let element;

    beforeAll(() => {
        films = RESPONSE_MOCK_DATA.data;
        openedFilmGenres = films[0].genres;
        openFilmHandler = jest.fn();
        element = (<SameGenreFilms
            films={films}
            openedFilmGenres={openedFilmGenres}
            onOpenFilmHandler={openFilmHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should trigger openFilmHandler on ResultsItem click', () => {
        const component = mount(element);
        component.find(ResultsItem).first().simulate('click');
        expect(openFilmHandler).toHaveBeenCalledWith(films[0]);
    });
});
