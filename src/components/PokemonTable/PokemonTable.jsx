import React, { useState } from 'react';
import PaginationControl from './PaginationControl';
import styles from './PokemonTable.module.css';

const PokemonTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (number) => {
    setItemsPerPage(number);
    setCurrentPage(1);
  };

  return (
    <>
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
          {currentItems.map(pokemon => {
            const power = pokemon.hp + pokemon.attack + pokemon.defense +
              pokemon.special_attack + pokemon.special_defense + pokemon.speed;
            return (
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
                <td>{power}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationControl
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={handleItemsPerPageChange}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default PokemonTable;
