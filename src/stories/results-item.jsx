import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ResultsItem from '../components/results-item';

const filmDetailsData = {
    id: 447365,
    title: 'Guardians of the Galaxy Vol. 3',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '2020-05-01',
    poster_path:
        'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    budget: 0,
    revenue: 0,
    genres: ['Action', 'Adventure', 'Science Fiction'],
    runtime: null
};

storiesOf('Results/ResultsItem', module).add('ResultsItem', () => (
    <ResultsItem data={filmDetailsData} onClick={action('clicked')} />
));
