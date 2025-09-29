import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products..."
      className="w-full border p-2 mb-4 rounded"
    />
  );
}
