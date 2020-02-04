import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmGenre from '../components/film-genre';

const genres = ['Action', 'Adventure', 'Science Fiction'];

storiesOf('FilmDetails/FilmGenre', module).add('standard', () => (
    <FilmGenre genres={genres} />
));
