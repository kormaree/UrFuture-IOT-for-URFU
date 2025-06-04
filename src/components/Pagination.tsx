import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const delta = 2;

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pages: React.ReactNode[] = [];
        const left = Math.max(2, currentPage - delta);
        const right = Math.min(totalPages - 1, currentPage + delta);

        pages.push(
            <div
                key={1}
                className={`page-number${currentPage === 1 ? ' active' : ''}`}
                onClick={() => currentPage !== 1 && onPageChange(1)}
            >
                1
            </div>
        );

        if (left > 2) {
            pages.push(
                <div key="dots-start" className="dots">
                    …
                </div>
            );
        }

        for (let page = left; page <= right; page++) {
            pages.push(
                <div
                    key={page}
                    className={`page-number${currentPage === page ? ' active' : ''}`}
                    onClick={() => currentPage !== page && onPageChange(page)}
                >
                    {page}
                </div>
            );
        }

        if (right < totalPages - 1) {
            pages.push(
                <div key="dots-end" className="dots">
                    …
                </div>
            );
        }

        if (totalPages > 1) {
            pages.push(
                <div
                    key={totalPages}
                    className={`page-number${currentPage === totalPages ? ' active' : ''}`}
                    onClick={() => currentPage !== totalPages && onPageChange(totalPages)}
                >
                    {totalPages}
                </div>
            );
        }

        return pages;
    };

    return (
        <div className="pagination">
            <div
                className={`page-btn${currentPage === 1 ? ' disabled' : ''}`}
                onClick={handlePrev}
            >
                <img
                    src="/images/heroicons.com.svg"
                    alt="назад"
                    className="arrow-icon"
                />
                <span>Назад</span>
            </div>

            {renderPageNumbers()}

            <div
                className={`page-btn${currentPage === totalPages ? ' disabled' : ''}`}
                onClick={handleNext}
            >
                <span>Далее</span>
                <img
                    src="/images/heroicons2.com.svg"
                    alt="вперед"
                    className="arrow-icon"
                />
            </div>
        </div>
    );
};

export default Pagination;