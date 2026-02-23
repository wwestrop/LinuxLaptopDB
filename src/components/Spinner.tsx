import React from 'react';
import styles from './Spinner.module.css';

export function Spinner(props: {message: string}) {
    return (
        <div className={styles['spinner-container']}>
            <div className={styles.spinner}></div>
            <p>{props.message}...</p>
        </div>
    );
}

export default Spinner;
