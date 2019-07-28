import React from 'react';
import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = (props) => {
    const {page, pages } = props;

    let currentPage = parseInt(page, 10);
    let nextPage = currentPage !== 1 ? currentPage - 1 : currentPage;
    let prevPage = currentPage !== pages ? currentPage + 1 : currentPage;

    return (
        <div className="pagination">
            {currentPage !== 1 && <Link to={`/news/${nextPage}`}> &#171; prev </Link>}

            <span>{`${currentPage}/${pages}`}</span>

            {currentPage !== pages && (
                <Link to={`/news/${prevPage}`}> next &#187;</Link>
            )}
        </div>
    );
};

export default Pagination;



