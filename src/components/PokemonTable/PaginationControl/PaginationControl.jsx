import React from 'react';
import styles from './PaginationControl.module.css';

const PaginationControl = ({
    totalItems,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    paginate
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.selectContainer}>
                <label htmlFor="rowsPerPage">Rows per page :</label>
                <select
                    id="rowsPerPage"
                    className={styles.rowsPerPageDropdown}
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                    {Array.from({ length: totalItems }, (_, i) => i + 1).map(size => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>

            <button className={styles.paginationButton} onClick={() => paginate(1)} disabled={currentPage === 1}>
                {'<<'}
            </button>
            <button className={styles.paginationButton} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                {'<'}
            </button>
            <span className={styles.currentPageInfo}>
                Page {currentPage} sur {totalPages}
            </span>
            <button className={styles.paginationButton} onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                {'>'}
            </button>
            <button className={styles.paginationButton} onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>
                {'>>'}
            </button>
        </div>
    );
};

export default PaginationControl;
