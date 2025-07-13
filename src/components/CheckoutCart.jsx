import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutCart.css"; // Import the CSS file

const CheckoutCart = () => {
  const [openSection, setOpenSection] = useState(null);
  const [showAlert, setShowAlert] = useState(true);
  const navigate=useNavigate();
  const [items, setItems] = useState([
    {
      id: "itemRow1",
      image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/j4-180x180.jpg",
      name: "Amper modi dolores",
      model: "Simple Product",
      quantity: 1,
      unitPrice: 218.23,
      total: 218.23,
      isOutOfStock: true,
    },
  ]);
const handlecontinue=()=>{
    navigate('/');
}
  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  // Calculate subtotal, eco tax, VAT, and total
  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const ecoTax = subtotal * 0.02; // Assuming eco tax is 2% of subtotal
    const vat = subtotal * 0.2; // Assuming VAT is 20% of subtotal
    const total = subtotal + ecoTax + vat;

    return { subtotal, ecoTax, vat, total };
  };

  const { subtotal, ecoTax, vat, total } = calculateTotals();

  return (
    <div className="checkout-cart-container">
      <div className="breadcrumb">
        <a href="#" className="breadcrumb-link">
          Home
        </a>
        &gt;
        <span className="breadcrumb-current">SHOPPING CART</span>
      </div>

      

      

      {items.length === 0 ? (
        <div className="empty-cart-message">
          <h2>Oops, Shopping Cart</h2>
          <p>Your shopping cart is empty!</p>
          <div className="empty-cart-buttons">
            <button className="continue-shopping-button" onClick={handlecontinue}>Continue Shopping</button>
            <button className="go-support-button">Go Support</button>
          </div>
        </div>
      ) : (
        <>{showAlert && (
            <div className="alert-box">
              <i className="fas fa-exclamation-triangle alert-icon"></i>
              <span>
                Products marked with *** are not available in the desired quantity
                or not in stock!
              </span>
              <button className="alert-close-button" onClick={closeAlert}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
          <table className="cart-table">
          <h1 className="cart-title">
        Shopping Cart <span className="cart-weight">(5.00kg)</span>
      </h1>
            <thead>
              <tr className="table-header">
                <th>Image</th>
                <th>Product Name</th>
                <th>Model</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="table-row">
                  <td>
                    <img
                      src={item.image}
                      alt="Product"
                      className="product-image"
                    />
                  </td>
                  <td>
                    {item.name}
                    {item.isOutOfStock && <span className="out-of-stock"> ***</span>}
                  </td>
                  <td>{item.model}</td>
                  <td>
                    <div className="quantity-control">
                      <input
                        type="number"
                        className="quantity-input"
                        value={item.quantity}
                      />
                      <button className="refresh-button">
                        <i className="fas fa-sync-alt"></i>
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => deleteItem(item.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                  <td>{item.unitPrice}€</td>
                  <td>{item.total}€</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="action-title">What would you like to do next?</h2>
          <p className="action-description">
            Choose if you have a discount code or reward points you want to use or
            would like to estimate your delivery cost.
          </p>

          <div className="action-section">
            <button
              className="action-button"
              onClick={() => toggleSection("couponSection")}
            >
              Use Coupon Code <i className="fas fa-caret-down"></i>
            </button>
            {openSection === "couponSection" && (
              <div className="toggle-section">
                <input
                  type="text"
                  className="coupon-input"
                  placeholder="Enter your coupon here"
                />
                <button className="apply-button">Apply Coupon</button>
              </div>
            )}

            <button
              className="action-button"
              onClick={() => toggleSection("shippingSection")}
            >
              Estimate Shipping & Taxes <i className="fas fa-caret-down"></i>
            </button>
            {openSection === "shippingSection" && (
              <div className="toggle-section">
                <p>Enter your destination to get a shipping estimate.</p>
                <div className="form-group">
                  <label>Country</label>
                  <select className="form-select">
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Region / State</label>
                  <select className="form-select">
                    <option>--- Please Select ---</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Post Code</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Post Code"
                  />
                </div>
                <button className="apply-button">Get Quotes</button>
              </div>
            )}

            <button
              className="action-button"
              onClick={() => toggleSection("giftSection")}
            >
              Use Gift Certificate <i className="fas fa-caret-down"></i>
            </button>
            {openSection === "giftSection" && (
              <div className="toggle-section">
                <input
                  type="text"
                  className="gift-input"
                  placeholder="Enter your gift certificate code here"
                />
                <button className="apply-button">Apply Gift Certificate</button>
              </div>
            )}
          </div>

          <div className="cart-summary">
            <button className="continue-shopping-button" onClick={handlecontinue}>Continue Shopping</button>
            <div>
              <p>
                Sub-Total: <span className="total-value">{subtotal.toFixed(2)}€</span>
              </p>
              <p>
            EcoTax(-2.00):<span className="total-value">{ecoTax.toFixed(2)}€</span>
              </p>
              <p>
                VAT (20%): <span className="total-value">{vat.toFixed(2)}€</span>
              </p>
              <p className="total-amount">
                Total: <span className="total-value">{total.toFixed(2)}€</span>
              </p>
              <button className="checkout-button">CHECKOUT</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutCart;