import React, { useState } from 'react';
import '../styles/Sub_Speaker.css';

const Sub_Speaker = () => {
  const [gridColumns, setGridColumns] = useState(3); // Default grid columns
  const [activeButton, setActiveButton] = useState(3); // Default active button
  const [isTableView, setIsTableView] = useState(false); // Toggle between grid and table views

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
    <div className="sub-speaker-container">
      {/* Header */}
      <h1 className="sub-speaker-title">SPEAKERS</h1>

      {/* Controls */}
      <div className="sub-speaker-controls">
        <div className="sub-speaker-grid-controls">
          <span className="sub-speaker-label">Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`sub-speaker-grid-button ${activeButton === columns ? 'sub-speaker-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="sub-speaker-grid-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="sub-speaker-sort-controls">
          <span className="sub-speaker-label">Sort By:</span>
          <select className="sub-speaker-select">
            <option>Default</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Price (High &gt; Low)</option>
            <option>Price (Low &gt; High)</option>
            <option>Rating (Highest)</option>
            <option>Rating (Lowest)</option>
            <option>Model (A-Z)</option>
            <option>Model (Z-A)</option>
          </select>
          <span className="sub-speaker-label">Show:</span>
          <select className="sub-speaker-select">
            <option>12</option>
            <option>25</option>
            <option>50</option>
            <option>75</option>
            <option>100</option>
          </select>
          <button className="sub-speaker-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product Grid or Table */}
      {isTableView ? (
        <table className="sub-speaker-table">
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
            {/* Example row */}
            <tr>
              <td>
                <img
                  src="https://storage.googleapis.com/a1aa/image/FBkUQB-6_kH0Zw8fnuOiW6mEPwpsrnkvlLghp8HqHSU.jpg"
                  alt="Speaker"
                  className="sub-speaker-table-image"
                />
              </td>
              <td>68,73€</td>
              <td>Some information about the item</td>
              <td>Elit sunt occaec</td>
              <td>
                <div className="sub-speaker-table-actions">
                  <button className="sub-speaker-action-button">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="sub-speaker-action-button">
                    <i className="fas fa-exchange-alt"></i>
                  </button>
                  <button className="sub-speaker-action-button">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className={`sub-speaker-grid sub-speaker-grid-cols-${gridColumns}`}>
          {/* Example Product Card */}
          <div className="sub-speaker-card">
            <div className="sub-speaker-image-container">
              <div
                className="sub-speaker-main-image"
                style={{
                  backgroundImage: "url('https://storage.googleapis.com/a1aa/image/FBkUQB-6_kH0Zw8fnuOiW6mEPwpsrnkvlLghp8HqHSU.jpg')",
                }}
              >
                <div className="sub-speaker-discount">-20%</div>
              </div>
              <div className="sub-speaker-overlay">
                <div className="sub-speaker-overlay-icon">
                  <i className="fas fa-search"></i>
                </div>
                <div className="sub-speaker-thumbnails">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/JojsPw0MQy9mNsC0GLw9tr3mo0CffSknwCGYA71BUo8.jpg"
                    alt="Small image 1"
                    className="sub-speaker-thumbnail"
                  />
                  <img
                    src="https://storage.googleapis.com/a1aa/image/WGcba6adQbzfuVv6t_2KmvgRTjOnwZ6txuY90ez54i0.jpg"
                    alt="Small image 2"
                    className="sub-speaker-thumbnail"
                  />
                  <img
                    src="https://storage.googleapis.com/a1aa/image/9_X1LL5eb3N6xIQr15OMtr-wBriX2X9GefYhzpmsQJ8.jpg"
                    alt="Small image 3"
                    className="sub-speaker-thumbnail"
                  />
                </div>
                <div className="sub-speaker-actions">
                  <button className="sub-speaker-action-button">Add to Cart</button>
                  <button className="sub-speaker-action-button">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="sub-speaker-action-button">
                    <i className="fas fa-exchange-alt"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="sub-speaker-color-options">
              <div
                className="sub-speaker-color-option"
                data-image="https://storage.googleapis.com/a1aa/image/JojsPw0MQy9mNsC0GLw9tr3mo0CffSknwCGYA71BUo8.jpg"
              ></div>
              <div
                className="sub-speaker-color-option"
                data-image="https://storage.googleapis.com/a1aa/image/WGcba6adQbzfuVv6t_2KmvgRTjOnwZ6txuY90ez54i0.jpg"
              ></div>
              <div
                className="sub-speaker-color-option"
                data-image="https://storage.googleapis.com/a1aa/image/9_X1LL5eb3N6xIQr15OMtr-wBriX2X9GefYhzpmsQJ8.jpg"
              ></div>
            </div>
            <h2 className="sub-speaker-product-name">Elit sunt occaec</h2>
            <div className="sub-speaker-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span className="sub-speaker-rating-count">(0)</span>
            </div>
            <div className="sub-speaker-price">
              <span className="sub-speaker-discounted-price">68,73€</span>
              <span className="sub-speaker-original-price">85,98€</span>
            </div>
          </div>
        </div>
      )}

      {/* Grid Info */}
      <div className="sub-speaker-grid-info">
        Showing 1 to 1 of 1 (1 Pages)
      </div>
    </div>
  );
};

export default Sub_Speaker;