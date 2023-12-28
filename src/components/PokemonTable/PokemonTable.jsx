import React from 'react';
import styles from './PokemonTable.module.css'

const PokemonTable = ({ data }) => {
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
        </tr>
      </thead>
      <tbody>
        {data.map(pokemon => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.type}</td>
            <td>{pokemon.hp}</td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>{pokemon.special_attack}</td>
            <td>{pokemon.special_defense}</td>
            <td>{pokemon.speed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
