import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Checkout.css'; // Import the CSS file

const Checkout = () => {
  const location = useLocation();
  const { cartItems = [] } = location.state || {}; // Get cartItems from state or default to empty array

  // Calculate subtotal, VAT, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingRate = 0;
  const ecoTax = 0;
  const vatRate = 0;
  const vat = subtotal * vatRate;
  const total = subtotal + shippingRate + ecoTax + vat;

  return (
    <div className="checkout-container">
      <nav className="checkout-nav">
        <a className="checkout-nav-link" href="#">SHOPPING CART</a> &gt;
        <a className="checkout-nav-link" href="#">CHECKOUT</a>
      </nav>
      <h1 className="checkout-title">So Onepage Checkout</h1>
      <div className="checkout-grid">
        {/* Left Side: User Details */}
        <div className="checkout-left">
          {/* Account Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-user checkout-icon"></i>
              CREATE AN ACCOUNT OR LOGIN
            </h2>
            <div className="checkout-radio-group">
              <input type="radio" id="register" name="account" />
              <label htmlFor="register">Register Account</label>
            </div>
            <div className="checkout-radio-group">
              <input type="radio" id="guest" name="account" />
              <label htmlFor="guest">Guest Checkout</label>
            </div>
            <div className="checkout-radio-group">
              <input type="radio" id="returning" name="account" />
              <label htmlFor="returning">Returning Customer</label>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-user checkout-icon"></i>
              YOUR PERSONAL DETAILS
            </h2>
            <input className="checkout-input" placeholder="First Name *" type="text" />
            <input className="checkout-input" placeholder="Last Name *" type="text" />
            <input className="checkout-input" placeholder="E-Mail *" type="email" />
            <input className="checkout-input" placeholder="Telephone *" type="tel" />
            <input className="checkout-input disabled" placeholder="kgorkhmah6@gmail.com" type="text" disabled />
          </div>

          {/* Password Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-lock checkout-icon"></i>
              YOUR PASSWORD
            </h2>
            <input className="checkout-input" placeholder="Password *" type="password" />
            <input className="checkout-input" placeholder="Password Confirm *" type="password" />
          </div>

          {/* Address Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-map-marker-alt checkout-icon"></i>
              YOUR ADDRESS
            </h2>
            <input className="checkout-input" placeholder="Company" type="text" />
            <input className="checkout-input" placeholder="Address 1 *" type="text" />
            <input className="checkout-input" placeholder="Address 2" type="text" />
            <input className="checkout-input" placeholder="City *" type="text" />
            <input className="checkout-input" placeholder="Post Code *" type="text" />
            <select className="checkout-input">
              <option>United States</option>
            </select>
            <select className="checkout-input">
              <option>New York</option>
            </select>
            <div className="checkout-checkbox-group">
              <input type="checkbox" id="same-address" />
              <label htmlFor="same-address">My delivery and billing addresses are the same.</label>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="checkout-right">
          {/* Shipping Method Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-shipping-fast checkout-icon"></i>
              SHIPPING METHOD
            </h2>
            <div className="checkout-radio-group">
              <input type="radio" id="flat-rate" name="shipping" />
              <label htmlFor="flat-rate">Flat Shipping Rate - 6.87€</label>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-money-bill-alt checkout-icon"></i>
              PAYMENT METHOD
            </h2>
            <div className="checkout-radio-group">
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>

          {/* Coupon/Voucher Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-gift checkout-icon"></i>
              DO YOU HAVE A COUPON OR VOUCHER?
            </h2>
            <input className="checkout-input" placeholder="Enter coupon code" type="text" />
            <button className="checkout-button">APPLY COUPON</button>
            <input className="checkout-input" placeholder="Enter voucher code" type="text" />
            <button className="checkout-button">APPLY VOUCHER</button>
          </div>

          {/* Shopping Cart Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-shopping-cart checkout-icon"></i>
              SHOPPING CART ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} ITEMS)
            </h2>
            <table className="checkout-table">
              <thead>
                <tr>
                  <th>PRODUCT NAME</th>
                  <th>QUANTITY</th>
                  <th>UNIT PRICE</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="checkout-product-image"
                      />
                      {item.name}
                    </td>
                    <td>
                      <input
                        type="number"
                        className="checkout-quantity-input"
                        defaultValue={item.quantity}
                      />
                    </td>
                    <td>{item.price}€</td>
                    <td>{(item.price * item.quantity).toFixed(2)}€</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="checkout-summary">
              <div>SUB-TOTAL: {subtotal.toFixed(2)}€</div>
              <div>FLAT SHIPPING RATE: {shippingRate.toFixed(2)}€</div>
              <div>ECO TAX (2.00): {ecoTax.toFixed(2)}€</div>
              <div>VAT (20%): {vat.toFixed(2)}€</div>
              <div className="checkout-total">TOTAL: {total.toFixed(2)}€</div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <i className="fas fa-comment-dots checkout-icon"></i>
              ADD COMMENTS ABOUT YOUR ORDER
            </h2>
            <textarea className="checkout-textarea" rows="4"></textarea>
            <div className="checkout-checkbox-group">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">I wish to subscribe to the Your Store newsletter.</label>
            </div>
            <div className="checkout-checkbox-group">
              <input type="checkbox" id="support" />
              <label htmlFor="support">
                I have read and agree to the <a href="#" className="checkout-link">Support 24/7 page</a>
              </label>
            </div>
            <div className="checkout-checkbox-group">
              <input type="checkbox" id="coming-soon" />
              <label htmlFor="coming-soon">
                I have read and agree to the <a href="#" className="checkout-link">Coming Soon</a>
              </label>
            </div>
          </div>

          {/* Confirm Order Button */}
          <button className="checkout-confirm-button">CONFIRM ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;