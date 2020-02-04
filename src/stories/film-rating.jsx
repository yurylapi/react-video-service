import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmRating from '../components/film-rating';

storiesOf('FilmDetails/FilmRating', module).add('standard', () => (
    <FilmRating rating="333" />
));
