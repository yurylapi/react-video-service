import React from 'react';
import styles from './search-field.scss';

const SearchField = ({ value, onChange }) => (
    <input
        type="text"
        className={styles.searchField}
        onChange={onChange}
        value={value}
        placeholder="Search..."
    />
);

export default SearchField;
