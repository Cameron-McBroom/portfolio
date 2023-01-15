import React from 'react';
import styles from './CareerSummary.module.css'


type CareerSummaryProps = {
    headline?: string
    summary: string
}

function CareerSummary(props : CareerSummaryProps) {
    return (
        <div className={styles.container}>
            {props.headline && <h2 className={styles.headline}> {props.headline} </h2>}
            <p className={styles.summary}> {props.summary} </p>
        </div>
    );
}

export default CareerSummary;