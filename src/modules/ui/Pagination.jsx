import React from 'react';
import { ButtonPro } from './ButtonPro';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export function Pagination({ 
    currentPage, 
    totalPages, 
    onPageChange 
}) {
    const getPageNumbers = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-6">
            <ButtonPro
                variant="outline"
                size="sm"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
                <MdChevronLeft className="h-4 w-4" />
            </ButtonPro>

            {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="px-3 py-2">...</span>
                    ) : (
                        <ButtonPro
                            variant={currentPage === page ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </ButtonPro>
                    )}
                </React.Fragment>
            ))}

            <ButtonPro
                variant="outline"
                size="sm"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
            >
                <MdChevronRight className="h-4 w-4" />
            </ButtonPro>
        </div>
    );
}