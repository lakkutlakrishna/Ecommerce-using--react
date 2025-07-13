import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Sub_Sushi_Cormer.css';

const Sub_Sushi_Cormer = () => {
  const { cartCount, addToCart } = useContext(CartContext);
  const [items, setItems] = useState([
    { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index7/6-270x270.jpg' },
    { id: 2, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index7/4-270x270.jpg' },
    { id: 3, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index7/9-270x270.jpg' },
    { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index7/8-270x270.jpg' },
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
    <div className="Sub_Sushi_Cormer-container">
      <h1 className="Sub_Sushi_Cormer-title">Sushi Cormer</h1>
      <div className="Sub_Sushi_Cormer-controls">
        <div className="Sub_Sushi_Cormer-grid-controls">
          <span className="Sub_Sushi_Cormer-control-label">Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_Sushi_Cormer-grid-view-button ${activeButton === columns ? 'Sub_Sushi_Cormer-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_Sushi_Cormer-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_Sushi_Cormer-sort-controls">
          <span className="Sub_Sushi_Cormer-control-label">Sort By:</span>
          <select className="Sub_Sushi_Cormer-select">
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
          <span className="Sub_Sushi_Cormer-control-label">Show:</span>
          <select className="Sub_Sushi_Cormer-select">
            <option>12</option>
            <option>25</option>
            <option>50</option>
            <option>75</option>
            <option>100</option>
          </select>
          <button className="Sub_Sushi_Cormer-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product Grid or Table */}
      {isTableView ? (
        <table className="Sub_Sushi_Cormer-table">
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
                    className="Sub_Sushi_Cormer-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_Sushi_Cormer-table-actions">
                    <button className="Sub_Sushi_Cormer-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_Sushi_Cormer-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_Sushi_Cormer-action-button">
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
          className={`Sub_Sushi_Cormer-grid Sub_Sushi_Cormer-grid-cols-${gridColumns}`}
        >
          {items.map((item) => (
            <div key={item.id} className="Sub_Sushi_Cormer-product-card">
              <div className="Sub_Sushi_Cormer-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_Sushi_Cormer-image"
                />
                <div className="Sub_Sushi_Cormer-overlay">
                  <div className="Sub_Sushi_Cormer-thumbnails">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/JojsPw0MQy9mNsC0GLw9tr3mo0CffSknwCGYA71BUo8.jpg"
                      alt="Thumbnail 1"
                      className="Sub_Sushi_Cormer-thumbnail"
                    />
                    <img
                      src="https://storage.googleapis.com/a1aa/image/WGcba6adQbzfuVv6t_2KmvgRTjOnwZ6txuY90ez54i0.jpg"
                      alt="Thumbnail 2"
                      className="Sub_Sushi_Cormer-thumbnail"
                    />
                    <img
                      src="https://storage.googleapis.com/a1aa/image/9_X1LL5eb3N6xIQr15OMtr-wBriX2X9GefYhzpmsQJ8.jpg"
                      alt="Thumbnail 3"
                      className="Sub_Sushi_Cormer-thumbnail"
                    />
                  </div>
                  <div className="Sub_Sushi_Cormer-actions">
                    <button className="Sub_Sushi_Cormer-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_Sushi_Cormer-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_Sushi_Cormer-action-button">
                      <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                    </button>
                  </div>
                </div>
              </div>
              <h2 className="Sub_Sushi_Cormer-product-title">{item.title}</h2>
              <div className="Sub_Sushi_Cormer-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_Sushi_Cormer-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_Sushi_Cormer-rating-count">(8)</span>
              </div>
              <p className="Sub_Sushi_Cormer-price">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sub_Sushi_Cormer;