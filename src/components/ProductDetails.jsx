import React from 'react';

export default function ProductDetails({ product, onBack, addToCart }) {
  return (
    <div>
      <button
        className="mb-4 text-blue-600 underline"
        onClick={onBack}
      >
        &larr; Back to products
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-w-sm object-cover rounded"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-2">${product.price}</p>
          <p className="mb-4">Category: {product.category}</p>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
