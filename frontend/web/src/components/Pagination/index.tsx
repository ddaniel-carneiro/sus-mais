export interface PaginationProps {
  currentPage: number,
  totalPages: number,
  onPrev(): void,
  onNext(): void,
  onPageClick(pageNumber: number): void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onPageClick
}) => {

  const MAX_VISIBLE_PAGES = 5;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= MAX_VISIBLE_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    let startPage = Math.max(2, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2) + 1);
    let endPage = Math.min(totalPages - 1, currentPage + Math.floor(MAX_VISIBLE_PAGES / 2) - 1);

    const delta = MAX_VISIBLE_PAGES - (endPage - startPage + 1);
    if (delta > 0) {
      if (startPage === 2) {
        endPage = Math.min(totalPages - 1, endPage + delta);
      } else if (endPage === totalPages - 1) {
        startPage = Math.max(2, startPage - delta);
      }
    }

    pages.push(1);

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages.filter((value, index, self) => self.indexOf(value) === index);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-colors duration-150 cursor-pointer
                    ${currentPage === 1
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-secondary text-white hover:bg-secondary-dark'
                    }
                  `}
      >
        Anterior
      </button>

      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span key={index} className="px-3 py-1 text-sm text-gray-700">
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={index}
            onClick={() => onPageClick(pageNum)}
            disabled={isActive}
            className={`px-2.5 py-1 rounded-full text-sm font-bold transition-colors duration-150 cursor-pointer
                        ${isActive
                          ? 'bg-secondary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                        }
                      `}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-colors duration-150 cursor-pointer
                    ${currentPage === totalPages
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-secondary text-white hover:bg-secondary-dark'
                    }
                  `}
      >
        Próximo
      </button>

    </div>
  )
};

export default Pagination
