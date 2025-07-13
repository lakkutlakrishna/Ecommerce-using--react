import React, { useState } from "react";
import "../styles/Products.css"; // Import the CSS file

const Products = () => {
  // State to manage the current page for both sections
  const [weeklyPage, setWeeklyPage] = useState(0);
  const [featuredPage, setFeaturedPage] = useState(0);

  // Sample data for Weekly Products
  const weeklyProducts = [
    {
      image: "https://storage.googleapis.com/a1aa/image/Uci__DJHy_N8_rqk95h6oAx6WNLiUTHIx1WsF_KWdVU.jpg",
      caption: "DESTINATION DRESSES",
      details: [
        { name: "Incididunt Cowlabore", price: "63.58€", originalPrice: "84.82€" },
        { image: "https://storage.googleapis.com/a1aa/image/azcJc2RBC9ETkZB6cQRSqm7uOBQ1OHq9XfRKPkYewbY.jpg", name: "Elit Sunt Occaec", price: "84.20€", originalPrice: "104.82€" },
        { image: "https://storage.googleapis.com/a1aa/image/D-4yirAC3j0hE9jjs35AzC7tejhbYOsuN6PjhepgLSU.jpg", name: "Hazen Dimapolan", price: "84.20€", originalPrice: "104.82€" },
        { name: "New Item 1", price: "50.00€", originalPrice: "70.00€" },
        { image: "https://via.placeholder.com/150", name: "New Item 2", price: "60.00€", originalPrice: "80.00€" },
      ],
    },
  ];

  // Sample data for Featured Products
  const featuredProducts = [
    {
      image: "https://storage.googleapis.com/a1aa/image/x3WaIEhNr7vum6YNrIutnZIjDA1A68qOk9uJssgN3gg.jpg",
      caption: "SALE & SERVICE OF APPLE",
      details: [
        { name: "Cornedbeef Turkeyse", price: "94.51€", originalPrice: "104.82€" },
        { image: "https://storage.googleapis.com/a1aa/image/_LulUWZ6DnLpJ-dADnOwp0RNFdr9mGR856O89S-qMNQ.jpg", name: "Cuid Densinteu", price: "104.82€" },
        { image: "https://storage.googleapis.com/a1aa/image/CmMI0mANE4qhPA2zAPVJnJRcLpacpj1JYSNMRbhK5Tg.jpg", name: "Dell 29UC97-S FHD", price: "104.82€" },
        { name: "New Item 3", price: "70.00€", originalPrice: "90.00€" },
        { image: "https://via.placeholder.com/150", name: "New Item 4", price: "80.00€", originalPrice: "100.00€" },
      ],
    },
  ];

  // Number of items to display per page
  const itemsPerPage = 3;

  // Function to handle pagination for Weekly Products
  const handleWeeklyPagination = (direction) => {
    if (direction === "next") {
      setWeeklyPage((prev) => (prev + 1) % Math.ceil(weeklyProducts[0].details.length / itemsPerPage));
    } else if (direction === "prev") {
      setWeeklyPage((prev) => (prev - 1 + Math.ceil(weeklyProducts[0].details.length / itemsPerPage)) % Math.ceil(weeklyProducts[0].details.length / itemsPerPage));
    }
  };

  // Function to handle pagination for Featured Products
  const handleFeaturedPagination = (direction) => {
    if (direction === "next") {
      setFeaturedPage((prev) => (prev + 1) % Math.ceil(featuredProducts[0].details.length / itemsPerPage));
    } else if (direction === "prev") {
      setFeaturedPage((prev) => (prev - 1 + Math.ceil(featuredProducts[0].details.length / itemsPerPage)) % Math.ceil(featuredProducts[0].details.length / itemsPerPage));
    }
  };

  return (
    <div className="products-container">
      {/* Weekly Products */}
      <div className="product-card">
        <div className="card-header">
          <h2 className="card-title">WEEKLY PRODUCTS</h2>
          <div className="card-actions">
            <button className="action-button" onClick={() => handleWeeklyPagination("prev")}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="action-button" onClick={() => handleWeeklyPagination("next")}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="image-section">
            <img src={weeklyProducts[0].image} alt="Woman in a dress" className="image-large" />
            <div className="image-caption">
              <h3 className="caption-title">{weeklyProducts[0].caption}</h3>
              <a href="#" className="caption-link">
                See More
              </a>
            </div>
          </div>
          <div className="details-section">
            {weeklyProducts[0].details.slice(weeklyPage * itemsPerPage, (weeklyPage + 1) * itemsPerPage).map((product, index) => (
              <div className="product-item" key={index}>
                {product.image && <img src={product.image} alt={product.name} className="product-image" />}
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">
                  {product.price}
                  {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="product-card">
        <div className="card-header">
          <h2 className="card-title">FEATURED PRODUCTS</h2>
          <div className="card-actions">
            <button className="action-button" onClick={() => handleFeaturedPagination("prev")}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="action-button" onClick={() => handleFeaturedPagination("next")}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="image-section">
            <img src={featuredProducts[0].image} alt="Apple products on a desk" className="image-large" />
            <div className="image-caption">
              <h3 className="caption-title">{featuredProducts[0].caption}</h3>
              <a href="#" className="caption-link">
                See More
              </a>
            </div>
          </div>
          <div className="details-section">
            {featuredProducts[0].details.slice(featuredPage * itemsPerPage, (featuredPage + 1) * itemsPerPage).map((product, index) => (
              <div className="product-item" key={index}>
                {product.image && <img src={product.image} alt={product.name} className="product-image" />}
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">
                  {product.price}
                  {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;