import React, { useState } from 'react';
import PaginationControl from './PaginationControl/PaginationControl';
import styles from './PokemonTable.module.css'
import Table from './Table/Table';


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
    <div className={styles.tableGlob}>
      <Table currentItems={currentItems} />
      <PaginationControl
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={handleItemsPerPageChange}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default PokemonTable;
