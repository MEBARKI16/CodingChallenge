import React from 'react';

const Filter = ({ onSearchChange, onPowerThresholdChange, minPower, maxPower }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Rechercher par nom..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <input
                type="number"
                placeholder="Seuil de puissance..."
                onChange={(e) => onPowerThresholdChange(e.target.value)}
            />
            <div>
                <p>Min power: {minPower}</p>
                <p>Max power: {maxPower}</p>
            </div>
        </div>
    );
};

export default Filter;
