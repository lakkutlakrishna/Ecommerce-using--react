import React, { useState } from 'react';
import '../styles/Sub_Women_women.css';

const Sub_Women_women = () => {
    const [isMore, setIsMore] = useState(true); // State to toggle between "+ More" and "- Less"

  const handleMoreClick = () => {
    setIsMore(!isMore); // Toggle the state
  };

  const [items, setItems] = useState([
    { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/10-270x270.jpg' },
    { id: 2, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/29-270x270.jpg' },
    { id: 3, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/11-270x270.jpg' },
    { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/31-270x270.jpg' },
    { id: 5, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/40-270x270.jpg' },
    
    { id: 7, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/10-270x270.jpg' },
    { id: 8, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/31-270x270.jpg' },
    
    { id: 10, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/29-270x270.jpg' },
    { id: 11, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/11-270x270.jpg' },
    { id: 12, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/31-270x270.jpg' },
  
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
    <div className="Sub_Women_women-container">
      {/* Header */}
      <h1 className="Sub_Women_women-header">Women</h1><br/>
      {/* <p className="Sub_Women_women-description">
        Shop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.
      </p> */}

      {/* Refine Search */}
      <h2 className="Sub_Women_women-refine-search Sub_Women_women-header">REFINE SEARCH</h2>
      <div className="Sub_Women_women-refine-buttons">
        <button className="Sub_Women_women-refine-button">
          <img alt="Bracelet icon" src="https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/logo/logo-default-133x75.png" />
          <span>Computers</span>
        </button>
       
        
        
      </div>

      {/* Grid View and Sort Options */}
      <div className="Sub_Women_women-grid-sort-options">
        <div className="Sub_Women_women-grid-buttons">
          <span>Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_Women_women-grid-view-button ${activeButton === columns ? 'Sub_Women_women-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_Women_women-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_Women_women-sort-options">
          <div>
            <label>Sort By:</label>
            <select className="Sub_Women_women-sort-select">
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
            <select className="Sub_Women_women-sort-select">
              <option>12</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
          </div>
          <button className="Sub_Women_women-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product List */}
      {isTableView ? (
        <table className="Sub_Women_women-table">
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
                    className="Sub_Women_women-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_Women_women-table-actions">
                    <button className="Sub_Women_women-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_Women_women-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_Women_women-action-button">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={`Sub_Women_women-grid Sub_Women_women-grid-cols-${gridColumns}`}>
          {items.map((item) => (
            <div key={item.id} className="Sub_Women_women-product-card">
              <div className="Sub_Women_women-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_Women_women-image"
                />
                <div className="Sub_Women_women-overlay">
                  <button className="Sub_Women_women-overlay-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <h2 className="Sub_Women_women-product-title">{item.title}</h2>
              <div className="Sub_Women_women-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_Women_women-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_Women_women-rating-count">(8)</span>
              </div>
              <p className="Sub_Women_women-price">{item.price}</p>
              <div className="Sub_Women_women-actions">
                <button className="Sub_Women_women-action-button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="Sub_Women_women-action-button">
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button className="Sub_Women_women-action-button">
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

export default Sub_Women_women;