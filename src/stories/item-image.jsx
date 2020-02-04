import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemImage from '../components/item-image';

const src = 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg';
const alt = 'Some Description';

storiesOf('ResultsItem/ItemImage', module).add('standard', () => (
    <ItemImage img={src} title={alt} />
));
