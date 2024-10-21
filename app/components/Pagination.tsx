import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];

    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 pt-5">
      <div className="flex w-full items-center justify-center space-x-3">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-full bg-[#72C82B] px-2 py-2 text-[#F7F6A4] transition ease-in-out hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-[#348638] disabled:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray={10}
              strokeDashoffset={10}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l5 -5M9 12l5 5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="10;0"
              ></animate>
            </path>
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          {pageNumbers.map((number, index) => (
            <button
              key={index}
              onClick={() =>
                typeof number === "number" && handlePageChange(number)
              }
              className={`rounded-xl px-4 py-2 transition ease-in-out ${currentPage === number ? "bg-[#955AAD] text-white" : "text-[#955AAD] hover:bg-[#955AAD] hover:text-white"}`}
            >
              {number}
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="rounded-full bg-[#72C82B] px-2 py-2 text-[#F7F6A4] transition ease-in-out hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-[#348638] disabled:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray={10}
              strokeDashoffset={10}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12l-5 -5M15 12l-5 5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="10;0"
              ></animate>
            </path>
          </svg>
        </button>
      </div>
      {/* <span className="text-sm text-gray-200">
        Página {currentPage} de {totalPages}
      </span> */}
    </div>
  );
};

export default Pagination;
