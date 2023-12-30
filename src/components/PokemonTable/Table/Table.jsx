import React from 'react';
import styles from './Table.module.css';

const TableRow = React.memo(({ pokemon }) => {
    return (
        <tr>
            <td>{pokemon.id}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.type}</td>
            <td>{pokemon.hp}</td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>{pokemon.special_attack}</td>
            <td>{pokemon.special_defense}</td>
            <td>{pokemon.speed}</td>
            <td>{pokemon.power}</td>
        </tr>
    );
});

const Table = ({ currentItems }) => {
    return (
        <table className={`${styles.table} tableContainer`}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Health</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Special Attack</th>
                    <th>Special Defense</th>
                    <th>Speed</th>
                    <th>Power</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map(pokemon => <TableRow key={pokemon.id} pokemon={pokemon} />)}
            </tbody>
        </table>
    );
};

export default Table;
