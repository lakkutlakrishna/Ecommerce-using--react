import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import ReactDOM from "react-dom";
import "../styles/CartSlide.css"; // Import the corresponding CSS file

const CartSlide = ({ onClose }) => {
    
  return ReactDOM.createPortal(
    <div className="cart-slide-overlay">
      {/* Dimmed Background */}
      <div className="cart-slide-dimmed-background" onClick={onClose}></div>

      {/* Cart Slide Container */}
      <div className="cart-slide-container">
        {/* Header */}
        <div className="cart-slide-header">
          <div className="cart-slide-header-content">
            <i className="fas fa-shopping-cart cart-slide-icon"></i>
            <span className="cart-slide-title">SHOPPING CART</span>
          </div>
          <i className="fas fa-times cart-slide-close-icon" onClick={onClose}></i>
        </div>

        {/* Cart Content */}
        <div className="cart-slide-body">
          <div className="cart-slide-item-count">
            There are <span className="cart-slide-item-count-value">1 item(s)</span> in your cart
          </div>

          {/* Cart Item */}
          <div className="cart-slide-item">
            <img
              src="https://storage.googleapis.com/a1aa/image/v3dQmDoYqzOHL5-Yg4EzEbREduQEqiZGeRzDgGvxjV4.jpg"
              alt="A small brown leather bag with a strap"
              className="cart-slide-item-image"
            />
            <div className="cart-slide-item-details">
              <div className="cart-slide-item-info">
                <span className="cart-slide-item-name">Drumsti tenderlo</span>
                <span className="cart-slide-item-quantity">x 1</span>
                <span className="cart-slide-item-price">104.82€</span>
              </div>
              <i className="fas fa-trash-alt cart-slide-delete-icon" onClick={() => {}}></i>
            </div>
          </div>

          <hr className="cart-slide-divider" />

          {/* Cart Summary */}
          <div className="cart-slide-summary">
            <div className="cart-slide-summary-row">
              <span>Sub-Total</span>
              <span className="cart-slide-summary-value">85.92€</span>
            </div>
            <div className="cart-slide-summary-row">
              <span>Eco Tax (-2.00)</span>
              <span className="cart-slide-summary-value">1.72€</span>
            </div>
            <div className="cart-slide-summary-row">
              <span>VAT (20%)</span>
              <span className="cart-slide-summary-value">17.18€</span>
            </div>
            <div className="cart-slide-summary-row cart-slide-total">
              <span>Total</span>
              <span className="cart-slide-summary-value cart-slide-total-value">104.82€</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="cart-slide-actions">
            <button className="cart-slide-view-cart-button">VIEW CART</button>
            <button className="cart-slide-checkout-button">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") // Render into the portal container
  );
};

export default CartSlide;