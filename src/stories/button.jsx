import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';

storiesOf('Button', module)
    .add('standard', () => (
        <Button title="Button" classModifier="button" onClick={action('clicked')} />
    ))
    .add('buttonBack class', () => (
        <Button
            title="Button"
            classModifier="buttonBack"
            onClick={action('clicked')}
        />
    ))
    .add('buttonChecked class', () => (
        <Button
            title="Button"
            classModifier="buttonChecked"
            onClick={action('clicked')}
        />
    ));
