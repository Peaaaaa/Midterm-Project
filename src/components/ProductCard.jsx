import React from 'react';

export default function ProductCard({ product, onSelect, addToCart }) {
  return (
    <div className="border rounded p-3 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover mb-2 cursor-pointer"
        onClick={() => onSelect(product)}
      />
      <h3 className="font-semibold text-lg cursor-pointer" onClick={() => onSelect(product)}>
        {product.title}
      </h3>
      <p className="text-gray-700">${product.price}</p>
      <button
        className="mt-auto bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
