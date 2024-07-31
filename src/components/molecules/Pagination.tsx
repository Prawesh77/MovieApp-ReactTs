import React from 'react';

interface PaginationProps {
    page: number;
    totalPageNumber: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPageNumber, onPageChange }) => (
    <div className="pagination">
        <button
            className="previous_btn"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
        >
            Previous
        </button>
        <button className="current_page">{page}</button>
        <button
            className="next_btn"
            disabled={page >= totalPageNumber}
            onClick={() => onPageChange(page + 1)}
        >
            Next
        </button>
    </div>
);

export default Pagination;
