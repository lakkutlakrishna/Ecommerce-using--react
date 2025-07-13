

import React, { useState } from 'react';
import '../styles/Sub_Women_web_cameras.css';

const Sub_Women_web_cameras = () => {
  const [isMore, setIsMore] = useState(true); // State to toggle between "+ More" and "- Less"
  const [items, setItems] = useState([
    // { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/10-270x270.jpg' },
    // { id: 2, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/7-270x270.jpg' },
    // { id: 3, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/10-270x270.jpg' },
    // { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/11-270x270.jpg' },
    // { id: 5, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/9-270x270.jpg' },
    // { id: 6, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/2-270x270.jpg' },
    // { id: 7, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-270x270.jpg' },
    // { id: 8, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/32-270x270.jpg' },
    // { id: 9, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/63-270x270.jpg' },
    // { id: 10, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-270x270.jpg' },
  ]); // Empty array for testing no items scenario
  const [isTableView, setIsTableView] = useState(false);
  const [gridColumns, setGridColumns] = useState(4); // Default grid columns
  const [activeButton, setActiveButton] = useState(4); // Default active button


//   const [items, setItems] = useState([
//         { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/10-270x270.jpg' },
//         { id: 2, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/7-270x270.jpg' },
//         { id: 3, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/10-270x270.jpg' },
//         { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/11-270x270.jpg' },
//         { id: 5, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/9-270x270.jpg' },
//         { id: 6, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/2-270x270.jpg' },
//         { id: 7, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-270x270.jpg' },
//         { id: 8, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/32-270x270.jpg' },
//         { id: 9, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/63-270x270.jpg' },
//         { id: 10, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-270x270.jpg' },
//       ]);




  const handleMoreClick = () => {
    setIsMore(!isMore); // Toggle the state
  };

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
    <div className="Sub_Women_web_cameras-container">
      {/* Header */}
      <h1 className="Sub_Women_web_cameras-header">Web Cameras</h1>

      {/* Grid View and Sort Options */}
      <div className="Sub_Women_web_cameras-grid-sort-options">
        <div className="Sub_Women_web_cameras-grid-buttons">
          <span>Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_Women_web_cameras-grid-view-button ${activeButton === columns ? 'Sub_Women_web_cameras-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_Women_web_cameras-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_Women_web_cameras-sort-options">
          <div>
            <label>Sort By:</label>
            <select className="Sub_Women_web_cameras-sort-select">
              <option>Default</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
              <option>Rating (Highest)</option>
              <option>Rating (Lowest)</option>
              <option>Price (Low &gt; High)</option>
              <option>Price (High &gt; Low)</option>
              <option>Model (A-Z)</option>
              <option>Model (Z-A)</option>
            </select>
          </div>
          <div>
            <label>Show:</label>
            <select className="Sub_Women_web_cameras-sort-select">
              <option>12</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
          </div>
          <button className="Sub_Women_web_cameras-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product List */}
      {items.length === 0 ? (
        <div className="Sub_Women_web_cameras-no-products">
          <p>There are no products to list in this category.</p>
          <a href='/'><button className="Sub_Women_web_cameras-continue-button">Continue</button></a>
        </div>
      ) : isTableView ? (
        <table className="Sub_Women_web_cameras-table">
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
                    className="Sub_Women_web_cameras-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_Women_web_cameras-table-actions">
                    <button className="Sub_Women_web_cameras-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_Women_web_cameras-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_Women_web_cameras-action-button">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={`Sub_Women_web_cameras-grid Sub_Women_web_cameras-grid-cols-${gridColumns}`}>
          {items.map((item) => (
            <div key={item.id} className="Sub_Women_web_cameras-product-card">
              <div className="Sub_Women_web_cameras-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_Women_web_cameras-image"
                />
                <div className="Sub_Women_web_cameras-overlay">
                  <button className="Sub_Women_web_cameras-overlay-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <h2 className="Sub_Women_web_cameras-product-title">{item.title}</h2>
              <div className="Sub_Women_web_cameras-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_Women_web_cameras-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_Women_web_cameras-rating-count">(8)</span>
              </div>
              <p className="Sub_Women_web_cameras-price">{item.price}</p>
              <div className="Sub_Women_web_cameras-actions">
                <button className="Sub_Women_web_cameras-action-button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="Sub_Women_web_cameras-action-button">
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button className="Sub_Women_web_cameras-action-button">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sub_Women_web_cameras;