import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../styles/CartShow.css";

function CartShow() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout/checkout', { state: { cartItems } }); // Pass cartItems to Checkout
  };

  return (
    <div className="CartShow-container">
      <div className="CartShow">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="CartShow-item">
              <div className="CartShow-item-content">
                <img
                  src={item.image}
                  alt={item.name}
                  className="CartShow-item-image"
                />
                <div className="CartShow-item-details">
                  <div className="CartShow-item-name">{item.name}</div>
                </div>
                <div className="CartShow-item-quantity">x {item.quantity}</div>
                <div className="CartShow-item-price">{item.price}</div>
                <button
                  className="CartShow-delete-button"
                  onClick={() => removeFromCart(item.name)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))
        )}
        <div className="CartShow-actions">
          <button className="CartShow-view-cart-button">View Cart</button>
          <button className="CartShow-checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartShow;