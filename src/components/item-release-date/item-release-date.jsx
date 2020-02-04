import React from 'react';
import styles from './item-release-date.scss';

const ItemReleaseDate = (props) => (
    <div className={styles.itemReleaseDate}>{props.year}</div>
);

export default ItemReleaseDate;
