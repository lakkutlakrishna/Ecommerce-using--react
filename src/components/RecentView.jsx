import React from "react";
import "../styles/RecentView.css"; // Import the CSS file

const RecentView = ({ onClose }) => {
  // Example data for recently viewed items
  const recentItems = [
    {
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-180x180.jpg",
      name: "Dignissi Ducimus",
      price: "104,82€",
    },
    {
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-180x180.jpg",
      name: "Dignissi Ducimus",
      price: "104,82€",
    },
    {
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-180x180.jpg",
      name: "Dignissi Ducimus",
      price: "104,82€",
    },
    {
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-180x180.jpg",
      name: "Dignissi Ducimus",
      price: "104,82€",
    },
    {
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/10-180x180.jpg",
      name: "Eius Modi Tempor",
      price: "125,44€",
    },
    {
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/4-180x180.jpg",
      name: "Faucibus Rutrum",
      price: "104,82€",
    },
    
  ];

  return (
    <div className="recent-view-overlay">
      <div className="recent-view-container">
        <div className="recent-view-header">
          <div className="header-content">
            <i className="fas fa-eye icon"></i>
            <span className="header-text">RECENT VIEW PRODUCTS</span>
          </div>
          <i className="fas fa-times close-icon" onClick={onClose}></i>
        </div>
        <div className="products-grid">
          {recentItems.map((item, index) => (
            <div key={index} className="product-card">
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
              />
              <h2 className="product-title">{item.name}</h2>
              <p className="product-price">{item.price}</p>
              <button className="add-to-cart-button">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentView;