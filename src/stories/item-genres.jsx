import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemGenre from '../components/item-genre';

const genres = ['Action', 'Adventure', 'Science Fiction'];

storiesOf('ResultsItem/ItemGenre', module).add('standard', () => (
    <ItemGenre genres={genres} />
));
