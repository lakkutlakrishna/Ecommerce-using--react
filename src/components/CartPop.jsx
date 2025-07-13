import React, { useContext } from "react";
import { CartContext } from "./CartContext"; // Import the CartContext
import "../styles/CartPop.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const CartPop = () => {
  const navigate=useNavigate();
  const { isCartPopupVisible, hideCartPopup, lastAddedItem } = useContext(CartContext);
  
  if (!isCartPopupVisible || !lastAddedItem) {
    return null; // Do not render the popup if it's not visible or no item is added
  }
const handlecheckout=()=>{
  navigate('/checkout/cart');
}
  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup-container">
        <div className="header">
          <p className="message">Added to cart successfully. What is next?</p>
          <span className="close-button" onClick={hideCartPopup}>
            ×
          </span>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={lastAddedItem.image} alt={lastAddedItem.name} className="product-image" />
          </div>
          <div className="details">
            <h2 className="product-name">{lastAddedItem.name}</h2>
            <p className="price">
              1 x <span className="price-value">{lastAddedItem.price}</span>
            </p>
          </div>
          <div className="summary">
            <button className="checkout-button" onClick={handlecheckout}>Checkout</button>
            <div className="subtotal">
              <p className="subtotal-label">Order subtotal</p>
              <p className="subtotal-value">{lastAddedItem.price}</p>
              <p className="item-count">Your cart contains 1 items</p>
            </div>
            <button className="continue-shopping-button">Continue shopping</button>
            <button className="view-cart-button">View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPop;




// import React, { useState } from "react";
// import "../styles/CartPop.css";
// const CartPop = () => {
// const [isVisible, setIsVisible] = useState(true);
// // Function to close the component
// const closeComponent = () => {
// setIsVisible(false);
// };
// // If the component is not visible, return null
// if (!isVisible) {
// return null;
// }
// return (
// <div className="cart-popup-overlay">
// <div className="cart-popup-container">
// <div className="header">
// <p className="message">Added to cart successfully. What is next?</p>
// <span className="close-button" onClick={closeComponent}>
// ×
// </span>
// </div>
// <div className="content">
// <div className="image-container">
// <img
// src="https://storage.googleapis.com/a1aa/image/Ti5DPU7aLWjxggeco8b0_vj7hKH6-TpCCMUIofd1QMo.jpg"
// alt="Gray sports bra"
// className="product-image"
// />
// </div>
// <div className="details">
// <h2 className="product-name">Catlyn snake pilit</h2>
// <p className="price">
// 1 x <span className="price-value">1,032.73€</span>
// </p>
// </div>
// <div className="summary">
// <button className="checkout-button">Checkout</button>
// <div className="subtotal">
// <p className="subtotal-label">Order subtotal</p>
// <p className="subtotal-value">1,032.73€</p>
// <p className="item-count">Your cart contains 1 items</p>
// </div>
// <button className="continue-shopping-button">
// Continue shopping
// </button>
// <button className="view-cart-button">View Cart</button>
// </div>
// </div>
// </div>
// </div>
// );
// };
// export default CartPop;
