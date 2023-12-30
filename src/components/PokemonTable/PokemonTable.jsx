import React, { useState } from 'react';
import PaginationControl from './PaginationControl';
import Table from './Table';


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
      <Table currentItems={currentItems} />
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
