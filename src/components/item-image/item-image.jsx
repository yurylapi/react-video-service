import React from 'react';
import styles from './item-image.scss';

const ItemImage = (props) => (
    <img
        className={styles[props.classModifier] || styles.itemImage}
        src={props.img}
        alt={props.title}
    />
);

export default ItemImage;
