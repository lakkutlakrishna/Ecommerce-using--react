import React, { useState } from "react";
import "../styles/DealsRight.css";

const DealsRight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    [
      {
        name: "Totam Rem Aperiam Shirt",
        price: "84.20€",
        oldPrice: "166.68€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/tBMCQlq5FCfjow7R-_2e9Er5IUlDjInye9RKanUGel8.jpg",
      },
      {
        name: "Cornedbeef Turkeyse",
        price: "94.51€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/64Qy0jtLY5R1vrDmzslNlhwx_bFMJhsrgC3SerQO9zY.jpg",
      },
      {
        name: "Cillum Ham Hock",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/kzZfD5D20wXbYov3xr7793axG1s4CNqYsnd7nlyXR9k.jpg",
      },
      {
        name: "Cuid Densinteu",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/VivOGPcqKBZLLfMi_puvd4SMxPIXdw5gFPzf8BDQ-Y0.jpg",
      },
      {
        name: "Dell 29UC97-S FHD",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/g2SdQ0y0PLjRQb7OXCJrbZoyNHnNDKuOfOJIwhE06Eo.jpg",
      },
    ],
    [
      {
        name: "New Item 1",
        price: "99.99€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/UOtzmxwhT6hF8GPBuo1Xkb--gPKeJOOyR0r5d2T8yXw.jpg",
      },
      {
        name: "New Item 2",
        price: "89.99€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/sU-CSCgawv3cdxFtlNgDVytg7gzV6r6GBGxZ2B54Cjo.jpg",
      },
      {
        name: "New Item 3",
        price: "79.99€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/G0uGzVra1Xbk9iFwRNoVOu_WikP3dMtP6OFXmCSjT2o.jpg",
      },
    ],
  ];

  const handleSlide = (direction) => {
    if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex < products.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }
  };

  return (
    <div className="deals-right-container">
      <div className="deals-right-card">
        <div className="deals-right-header">
          <div className="deals-right-flex">
            <i className="fas fa-gem deals-right-icon"></i>
            <h2 className="deals-right-title">BEST SELLERS</h2>
          </div>
          <div className="deals-right-flex">
            <i
              className="fas fa-chevron-left deals-right-chevron"
              onClick={() => handleSlide("left")}
            ></i>
            <i
              className="fas fa-chevron-right deals-right-chevron deals-right-chevron-right"
              onClick={() => handleSlide("right")}
            ></i>
          </div>
        </div>
        <div className="deals-right-content">
          <div
            className="deals-right-slide-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((group, index) => (
              <div key={index} className="deals-right-slide">
                {group.map((product, idx) => (
                  <div key={idx} className="deals-right-item">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="deals-right-image"
                    />
                    <div className="deals-right-details">
                      <p className="deals-right-name">{product.name}</p>
                      <p className="deals-right-price">
                        {product.price}
                        {product.oldPrice && (
                          <span className="deals-right-old-price">
                            {" "}
                            {product.oldPrice}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsRight;