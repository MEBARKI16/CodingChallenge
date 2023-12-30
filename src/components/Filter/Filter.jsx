import React from 'react';
import styles from './Filter.module.css'

const Filter = ({ onSearchChange, onPowerThresholdChange, minPower, maxPower }) => {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.filterInput}
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <input
                    className={styles.filterInput}
                    type="number"
                    placeholder="Power threshold"
                    onChange={(e) => onPowerThresholdChange(e.target.value)}
                />
            </div>

            <div className={styles.powerLabels}>
                <p>Min power: {minPower}</p>
                <p>Max power: {maxPower}</p>
            </div>
        </div>
    );
};

export default Filter;
