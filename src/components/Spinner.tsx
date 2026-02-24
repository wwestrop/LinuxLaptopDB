import React from 'react';
import * as styles from './Spinner.module.css';

export function Spinner(props: {message: string}) {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            <p>{props.message}...</p>
        </div>
    );
}

export default Spinner;
