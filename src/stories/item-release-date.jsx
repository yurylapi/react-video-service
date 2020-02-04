import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemReleaseDate from '../components/item-release-date';

storiesOf('ResultsItem/ItemReleaseDate', module).add('standard', () => (
    <ItemReleaseDate year="1984-07-29" />
));
