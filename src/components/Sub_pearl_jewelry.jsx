import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Sub_pearl_jewelry.css';

const Sub_pearl_jewelry = () => {
  const { cartCount, addToCart } = useContext(CartContext);
  const [items, setItems] = useState([
    { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/19-270x270.jpg' },
    { id: 2, title: 'Cornedbeef turkeyse', price: '91.52€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 3, title: 'Cuid dementius', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/57-270x270.jpg' },
    { id: 4, title: 'Dail mirentukan', price: '207.92€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/29-270x270.jpg' },
    { id: 5, title: 'Leona sumertis', price: '104.82€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/62-270x270.jpg' },
    { id: 6, title: 'Item 6', price: '100.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 7, title: 'Item 7', price: '200.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 8, title: 'Item 8', price: '300.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 9, title: 'Item 9', price: '400.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 10, title: 'Item 10', price: '500.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 11, title: 'Item 11', price: '600.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 12, title: 'Item 12', price: '700.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 13, title: 'Item 13', price: '800.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 14, title: 'Item 14', price: '900.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
    { id: 15, title: 'Item 15', price: '1000.00€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-270x270.jpg' },
  ]);

  const [isTableView, setIsTableView] = useState(false);
  const [gridColumns, setGridColumns] = useState(4); // Default grid columns
  const [activeButton, setActiveButton] = useState(4); // Default active button
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const itemsPerPage = 10; // Items to show per page

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleGridColumns = (columns, buttonNumber) => {
    setGridColumns(columns);
    setActiveButton(buttonNumber);
    setIsTableView(false); // Ensure table view is disabled when grid view is active
  };

  const toggleTableView = () => {
    setIsTableView(!isTableView);
    setActiveButton(null); // Reset active button when switching to table view
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Sub_pearly_jewerly-container">
      <h1 className="Sub_pearly_jewerly-title">Pearl Jewelry</h1>
      <div className="Sub_pearly_jewerly-controls">
        <div className="Sub_pearly_jewerly-grid-controls">
          <span className="Sub_pearly_jewerly-control-label">Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_pearly_jewerly-grid-view-button ${activeButton === columns ? 'Sub_pearly_jewerly-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_pearly_jewerly-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_pearly_jewerly-sort-controls">
          <span className="Sub_pearly_jewerly-control-label">Sort By:</span>
          <select className="Sub_pearly_jewerly-select">
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
          <span className="Sub_pearly_jewerly-control-label">Show:</span>
          <select className="Sub_pearly_jewerly-select">
            <option>12</option>
            <option>25</option>
            <option>50</option>
            <option>75</option>
            <option>100</option>
          </select>
          <button className="Sub_pearly_jewerly-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product Grid or Table */}
      {isTableView ? (
        <table className="Sub_pearly_jewerly-table">
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
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="Sub_pearly_jewerly-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_pearly_jewerly-table-actions">
                    <button className="Sub_pearly_jewerly-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_pearly_jewerly-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_pearly_jewerly-action-button">
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
          className={`Sub_pearly_jewerly-grid Sub_pearly_jewerly-grid-cols-${gridColumns}`}
        >
          {currentItems.map((item) => (
            <div key={item.id} className="Sub_pearly_jewerly-product-card">
              <div className="Sub_pearly_jewerly-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_pearly_jewerly-image"
                />
                <div className="Sub_pearly_jewerly-overlay">
                  <button className="Sub_pearly_jewerly-overlay-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <h2 className="Sub_pearly_jewerly-product-title">{item.title}</h2>
              <div className="Sub_pearly_jewerly-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_pearly_jewerly-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_pearly_jewerly-rating-count">(8)</span>
              </div>
              <p className="Sub_pearly_jewerly-price">{item.price}</p>
              <div className="Sub_pearly_jewerly-actions">
                <button className="Sub_pearly_jewerly-action-button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="Sub_pearly_jewerly-action-button">
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button className="Sub_pearly_jewerly-action-button">
                  <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="Sub_pearly_jewerly-pagination">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </div>

      {/* Showing Items Count */}
      <div className="Sub_pearly_jewerly-showing-items">
        Showing items {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, items.length)} of {items.length}
      </div>
    </div>
  );
};

export default Sub_pearl_jewelry;