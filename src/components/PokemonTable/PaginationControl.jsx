import React from 'react';

const PaginationControl = ({
    totalItems,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    paginate
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div>
            <label htmlFor="rowsPerPage">Lignes par page :</label>
            <select
                id="rowsPerPage"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
                {Array.from({ length: totalItems }, (_, i) => i + 1).map(size => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>

            <button onClick={() => paginate(1)} disabled={currentPage === 1}>
                {'<<'}
            </button>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                {'<'}
            </button>
            <span>Page {currentPage} sur {totalPages}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                {'>'}
            </button>
            <button onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>
                {'>>'}
            </button>
        </div>
    );
};

export default PaginationControl;
