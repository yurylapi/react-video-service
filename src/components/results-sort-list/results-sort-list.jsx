import React from 'react';
import Button from '../button';

const ResultsSortList = (props) => {
    const searchCriteria = Object.values(props.options).map((option) => (
        <Button
            key={option}
            title={option}
            classModifier={
                props.currentOption === option ? 'button-checked' : 'button'
            }
            onClick={() => props.onResultsSortChange(option)}
        />
    ));

    return <React.Fragment>{searchCriteria}</React.Fragment>;
};

export default ResultsSortList;
