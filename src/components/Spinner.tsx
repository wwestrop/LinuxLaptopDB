import React from 'react';

export function Spinner(props: {message: string}) {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p>{props.message}...</p>
        </div>
    );
}

export default Spinner;
