import React from 'react';

export default function SortOptions({ sortKey, setSortKey }) {
  return (
    <select
      value={sortKey}
      onChange={(e) => setSortKey(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="none">Sort by</option>
      <option value="priceAsc">Price: Low to High</option>
      <option value="priceDesc">Price: High to Low</option>
      <option value="titleAsc">Title: A to Z</option>
      <option value="titleDesc">Title: Z to A</option>
    </select>
  );
}
