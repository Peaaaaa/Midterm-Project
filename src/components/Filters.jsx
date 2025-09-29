import React, { useEffect, useState } from 'react';

const categories = [
  'all',
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting',
];

export default function Filters({ category, setCategory, priceRange, setPriceRange }) {
  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPriceRange([Number(minPrice), Number(maxPrice)]);
    }, 500);
    return () => clearTimeout(timeout);
  }, [minPrice, maxPrice, setPriceRange]);

  return (
    <div className="flex gap-4 flex-wrap items-center">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat[0].toUpperCase() + cat.slice(1).replace(/-/g, ' ')}
          </option>
        ))}
      </select>

      <div className="flex items-center gap-2">
        <label>Price:</label>
        <input
          type="number"
          value={minPrice}
          min={0}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-1 rounded w-20"
          placeholder="Min"
        />
        <span>-</span>
        <input
          type="number"
          value={maxPrice}
          min={0}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-1 rounded w-20"
          placeholder="Max"
        />
      </div>
    </div>
  );
}
