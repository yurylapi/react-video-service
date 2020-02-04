import React from 'react';
import ErrorBoundary from './error-boundary';

class ErrorBoundaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        return (
            <ErrorBoundary
                hasError={this.state.hasError}
                children={this.props.children}
            />
        );
    }
}

export default ErrorBoundaryContainer;
