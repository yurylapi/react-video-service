import React from 'react';
import styles from './item-title.scss';

const ItemTitle = (props) => (
    <div className={styles.itemTitle}>{props.title}</div>
);

export default ItemTitle;
