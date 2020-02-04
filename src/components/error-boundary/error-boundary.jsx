import React from 'react';

const ErrorBoundary = (props) => {
    if (props.hasError) {
        return <pre>Something went wrong.</pre>;
    }

    return props.children;
};

export default ErrorBoundary;
