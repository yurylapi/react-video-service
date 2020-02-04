import React from 'react';
import styles from './button.scss';

const Button = (props) => (
    <button
        type="button"
        className={styles[props.classModifier] || styles.button}
        onClick={props.onClick}
    >
        {props.title}
    </button>
);

export default Button;
