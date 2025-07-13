import React, { useState } from 'react';
import '../styles/Sub_speaker_necklaces.css';

const Sub_speaker_necklaces = () => {
    const [isMore, setIsMore] = useState(true); // State to toggle between "+ More" and "- Less"

  const handleMoreClick = () => {
    setIsMore(!isMore); // Toggle the state
  };

  const [items, setItems] = useState([
    { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/10-270x270.jpg' },
    { id: 2, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/7-270x270.jpg' },
    { id: 3, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/10-270x270.jpg' },
    { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/11-270x270.jpg' },
    { id: 5, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/9-270x270.jpg' },
    { id: 6, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/2-270x270.jpg' },
    { id: 7, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-270x270.jpg' },
    { id: 8, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/32-270x270.jpg' },
    { id: 9, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/63-270x270.jpg' },
    { id: 10, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-270x270.jpg' },
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
    <div className="Sub_speaker_necklaces-container">
      {/* Header */}
      <h1 className="Sub_speaker_necklaces-header">Necklaces</h1>
     

      {/* Refine Search */}
      

      {/* Grid View and Sort Options */}
      <div className="Sub_speaker_necklaces-grid-sort-options">
        <div className="Sub_speaker_necklaces-grid-buttons">
          <span>Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_speaker_necklaces-grid-view-button ${activeButton === columns ? 'Sub_speaker_necklaces-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_speaker_necklaces-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_speaker_necklaces-sort-options">
          <div>
            <label>Sort By:</label>
            <select className="Sub_speaker_necklaces-sort-select">
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
            <select className="Sub_speaker_necklaces-sort-select">
              <option>12</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
          </div>
          <button className="Sub_speaker_necklaces-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product List */}
      {isTableView ? (
        <table className="Sub_speaker_necklaces-table">
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
                    className="Sub_speaker_necklaces-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_speaker_necklaces-table-actions">
                    <button className="Sub_speaker_necklaces-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_speaker_necklaces-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_speaker_necklaces-action-button">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={`Sub_speaker_necklaces-grid Sub_speaker_necklaces-grid-cols-${gridColumns}`}>
          {items.map((item) => (
            <div key={item.id} className="Sub_speaker_necklaces-product-card">
              <div className="Sub_speaker_necklaces-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_speaker_necklaces-image"
                />
                <div className="Sub_speaker_necklaces-overlay">
                  <button className="Sub_speaker_necklaces-overlay-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <h2 className="Sub_speaker_necklaces-product-title">{item.title}</h2>
              <div className="Sub_speaker_necklaces-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_speaker_necklaces-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_speaker_necklaces-rating-count">(8)</span>
              </div>
              <p className="Sub_speaker_necklaces-price">{item.price}</p>
              <div className="Sub_speaker_necklaces-actions">
                <button className="Sub_speaker_necklaces-action-button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="Sub_speaker_necklaces-action-button">
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button className="Sub_speaker_necklaces-action-button">
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

export default Sub_speaker_necklaces;