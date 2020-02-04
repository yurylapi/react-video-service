import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmDescription from '../components/film-description';

storiesOf('FilmDetails/FilmDescription', module).add('standard', () => (
    <FilmDescription description="FilmDescription" />
));
