import React from 'react';

export default function Cart({ cartItems, removeFromCart, clearCart }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed top-16 right-4 z-50 w-80 max-h-[70vh] overflow-auto p-4 bg-white shadow-lg border rounded">
      <h2 className="text-xl font-bold mb-2">Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <div>
                  {item.title} x {item.quantity}
                </div>
                <div className="flex gap-2">
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                  <button
                    className="text-red-600 underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="font-bold mb-4">Total: ${totalPrice.toFixed(2)}</div>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Clear Cart
          </button>
          <button
            onClick={() => alert('Checkout functionality not implemented')}
            className="ml-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
