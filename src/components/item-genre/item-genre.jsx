import React from 'react';
import styles from './item-genre.scss';

const ItemGenre = (props) => {
    const resultsItems = props.genres.map((genre, index) => (
        <div key={index} className={styles.itemGenre}>
            {genre}
        </div>
    ));

    return <React.Fragment>{resultsItems}</React.Fragment>;
};

export default ItemGenre;
