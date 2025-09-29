import React from 'react';

export default function Pagination({ currentPage, pageCount, setCurrentPage }) {
  if (pageCount <= 1) return null;

  const pages = [];
  for (let i = 1; i <= pageCount; i++) pages.push(i);

  return (
    <div className="flex gap-2 justify-center mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        First
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage ? 'bg-blue-600 text-white' : ''
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === pageCount}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
      <button
        disabled={currentPage === pageCount}
        onClick={() => setCurrentPage(pageCount)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Last
      </button>
    </div>
  );
}
