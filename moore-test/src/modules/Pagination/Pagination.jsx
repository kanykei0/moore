import { useState } from "react";
import { PaginationArrow } from "assets/icons";
import classes from "./Pagination.module.scss";

export const Pagination = ({ total = 5, defaultPage = 1, onChange }) => {
  const [page, setPage] = useState(defaultPage);

  const handlePrevPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      onChange?.(newPage);
    }
  };

  const handleNextPage = () => {
    if (page < total) {
      const newPage = page + 1;
      setPage(newPage);
      onChange?.(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let start = 1;
    let end = total;

    if (total > maxVisiblePages) {
      const leftOffset = Math.floor(maxVisiblePages / 2);
      const rightOffset = maxVisiblePages - leftOffset - 1;

      if (page <= leftOffset) {
        end = maxVisiblePages;
      } else if (page >= total - rightOffset) {
        start = total - maxVisiblePages + 1;
      } else {
        start = page - leftOffset;
        end = page + rightOffset;
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={`${classes.pageButton} ${
            page === i ? classes.active : ""
          }`}
          onClick={() => {
            setPage(i);
            onChange?.(i);
          }}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={classes.block}>
      <button
        className={`${classes.arrowButton} ${classes.left} ${
          page === 1 ? classes.disabled : ""
        }`}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <PaginationArrow />
      </button>
      <div className={classes.pages}>{renderPageNumbers()}</div>
      <button
        className={`${classes.arrowButton} ${classes.right} ${
          page === total ? classes.disabled : ""
        }`}
        onClick={handleNextPage}
        disabled={page === total}
      >
        <PaginationArrow />
      </button>
    </div>
  );
};
