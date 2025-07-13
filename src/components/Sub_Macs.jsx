import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Sub_Macs.css';

const Sub_Macs = () => {
  const { cartCount, addToCart } = useContext(CartContext);
  const [items, setItems] = useState([
    { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/19-270x270.jpg' },
    { id: 2, title: 'Cornedbeef turkeyse', price: '91.52€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 3, title: 'Cuid dementius', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/57-270x270.jpg' },
    { id: 4, title: 'Dail mirentukan', price: '207.92€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/29-270x270.jpg' },
    { id: 4, title: 'Leona sumertis', price: '104.82€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/62-270x270.jpg' },
  ]);

  const [isTableView, setIsTableView] = useState(false);
  const [gridColumns, setGridColumns] = useState(4); // Default grid columns
  const [activeButton, setActiveButton] = useState(4); // Default active button

  const handleGridColumns = (columns, buttonNumber) => {
    setGridColumns(columns);
    setActiveButton(buttonNumber);
    setIsTableView(false); // Ensure table view is disabled when grid view is active
  };

  const toggleTableView = () => {
    setIsTableView(!isTableView);
    setActiveButton(null); // Reset active button when switching to table view
  };

  return (
    <div className="Sub_Macs-container">
      <h1 className="Sub_Macs-title">Fashion</h1>
      <div className="Sub_Macs-controls">
        <div className="Sub_Macs-grid-controls">
          <span className="Sub_Macs-control-label">Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_Macs-grid-view-button ${activeButton === columns ? 'Sub_Macs-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_Macs-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_Macs-sort-controls">
          <span className="Sub_Macs-control-label">Sort By:</span>
          <select className="Sub_Macs-select">
            <option>Default</option>
            <option>Name(A-Z)</option>
            <option>Name(Z-A)</option>
            <option>Rating(Highest)</option>
            <option>Rating(Lowest)</option>
            <option>Price(Low&gt;High)</option>
            <option>Price(High&gt;Low)</option>
            <option>Model(A-Z)</option>
            <option>Model(Z-A)</option>
          </select>
          <span className="Sub_Macs-control-label">Show:</span>
          <select className="Sub_Macs-select">
            <option>12</option>
            <option>25</option>
            <option>50</option>
            <option>75</option>
            <option>100</option>
          </select>
          <button className="Sub_Macs-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product Grid or Table */}
      {isTableView ? (
        <table className="Sub_Macs-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Information</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="Sub_Macs-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_Macs-table-actions">
                    <button className="Sub_Macs-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_Macs-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_Macs-action-button">
                      <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          className={`Sub_Macs-grid Sub_Macs-grid-cols-${gridColumns}`}
        >
          {items.map((item) => (
            <div key={item.id} className="Sub_Macs-product-card">
              <div className="Sub_Macs-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_Macs-image"
                />
                <div className="Sub_Macs-overlay">
                  <button className="Sub_Macs-overlay-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <h2 className="Sub_Macs-product-title">{item.title}</h2>
              <div className="Sub_Macs-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_Macs-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_Macs-rating-count">(8)</span>
              </div>
              <p className="Sub_Macs-price">{item.price}</p>
              <div className="Sub_Macs-actions">
                <button className="Sub_Macs-action-button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="Sub_Macs-action-button">
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button className="Sub_Macs-action-button">
                  <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sub_Macs;