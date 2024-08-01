import React from 'react';
import usePage from '../../customHooks/hooks/PageHook';

interface PaginationProps {
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({onPageChange }) =>{

    const PageContext = usePage();
    console.log(PageContext.totalPageNumber);

    return(
    <div className="pagination">
        <button
            className="previous_btn"
            disabled={PageContext.page <= 1}
            onClick={() => onPageChange(PageContext.page - 1)}
        >
            Previous
        </button>
        <button className="current_page">{PageContext.page}</button>
        <button
            className="next_btn"
            disabled={PageContext.page >= PageContext.totalPageNumber}
            onClick={() => onPageChange(PageContext.page + 1)}
        >
            Next
        </button>
    </div>
)
}

export default Pagination;
