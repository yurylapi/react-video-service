import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ResultsBody from '../components/results-body';

const films = [
    {
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
    },
    {
        id: 424785,
        title: 'Transformers 7',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '2019-06-26',
        poster_path:
            'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
        overview: 'Plot unknown.',
        budget: 0,
        revenue: 0,
        genres: ['Science Fiction', 'Action', 'Adventure'],
        runtime: null
    },
    {
        id: 299534,
        title: 'Untitled Avengers',
        tagline: '',
        vote_average: 0,
        vote_count: 9,
        release_date: '2019-04-24',
        poster_path:
            'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
        overview: 'The culmination of the Marvel Cinematic Universe.',
        budget: 0,
        revenue: 0,
        genres: ['Action', 'Adventure', 'Science Fiction'],
        runtime: null
    }
];

storiesOf('Results/ResultsBody', module).add('standard', () => (
    <ResultsBody results={films} onOpenFilmHandler={action('clicked')} />
));
