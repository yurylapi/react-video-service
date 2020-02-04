import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmDurationAndYear from '../components/film-duration-and-year';

storiesOf('FilmDetails/FilmDurationAndYear', module).add('standard', () => (
    <FilmDurationAndYear duration="333" year="1984" />
));
