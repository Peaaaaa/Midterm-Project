import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto p-4 relative min-h-screen">
      <h1 className="text-4xl font-bold mb-5">Shopme</h1>

      {/* Cart Icon */}
<button
  onClick={() => setShowCart((prev) => !prev)}
  className="fixed bottom-4 right-4 z-50 flex items-center bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
  aria-label="Toggle Cart"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.217 1.316l5.373 5.373a1 1 0 001.414 0l5.373-5.373a1 1 0 00.217-1.316L17 13M7 13l-2-4m10 4v6m-6 0v-6"
    />
  </svg>
  {totalQuantity > 0 && (
    <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
      {totalQuantity}
    </span>
  )}
</button>


      {/* Main content */}
      {!selectedProduct ? (
        <>
          <ProductList onSelect={setSelectedProduct} addToCart={addToCart} />
          {showCart && (
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          )}
        </>
      ) : (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
