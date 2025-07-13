import React, { useState } from "react";
import "../../styles/Cart.css";

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 50, quantity: 2 },
    { id: 2, name: "Product B", price: 30, quantity: 1 },
  ]);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCartItems(updatedCart);
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart">
      <h2>Cart & Saved Items</h2>

      {/* Cart Items */}
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <p><strong>{item.name}</strong></p>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="item-actions">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="price-breakdown">
        <div className="price-row">
          <span>Subtotal:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="price-row">
          <span>Discount:</span>
          <span>$0.00</span>
        </div>
        <div className="price-row total">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="checkout-button" disabled={cartItems.length === 0}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;