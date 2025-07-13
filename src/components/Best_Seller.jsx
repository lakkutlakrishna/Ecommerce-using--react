// Best_Seller.jsx
import React, { useState } from "react";
import "../styles/Best_Seller.css";

const Best_Seller = () => {
  const [bestSellerIndex, setBestSellerIndex] = useState(0);

  const bestSellers = [
    [
      {
        name: "Totam Rem Aperiam Shirt",
        price: "84.20€",
        oldPrice: "166.68€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/VkQieRI72BuW0xlZb3gM6P1zRk9ZbzHmYGRak_6GzpQ.jpg",
      },
      {
        name: "Cornedbeef Turkeyse",
        price: "94.51€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/tC0TfCZciw1wk8MqFgicc-yV-OVC07OSEiyptit2S_c.jpg",
      },
      {
        name: "Cillum Ham Hock",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/J0ocm_RmA5i917U6f_xgKFFIT9cAXu0VHb6vvfkrrZ0.jpg",
      },
      {
        name: "Cuid Densinteu",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/sNUXXEd-68fifC-Uyz0pkx33fbwCPJOeA3k3bwRzdo4.jpg",
      },
      {
        name: "Dell 29UC97-S FHD",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/owSAd5parxCSyGrPe0r0lsxFFV6xs6KEdMxUpfswAxk.jpg",
      },
    ],
    [
      {
        name: "Additional Item 3",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/1ix9neNoBuBNGp038rdX4UNarPupfNKdFg3Mzol8wDY.jpg",
      },
      {
        name: "Additional Item 4",
        price: "104.82€",
        imageUrl:
          "https://storage.googleapis.com/a1aa/image/J_5qn9H7aw-BdjKaRiNoe-XdWjxSRFOoldz1_ASIJfE.jpg",
      },
    ],
  ];

  const handleBestSellerSlide = (direction) => {
    if (direction === "right") {
      setBestSellerIndex((prev) =>
        prev < bestSellers.length - 1 ? prev + 1 : prev
      );
    } else {
      setBestSellerIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div className="deals-right-container">
      <div className="deals-right-header">
        <div className="deals-right-flex">
          <span className="deals-right-icon">🔥</span>
          <span className="deals-right-title">BEST SELLERS</span>
        </div>
        <div className="deals-right-chevron-container">
          <span
            className="deals-right-chevron deals-right-chevron-left"
            onClick={() => handleBestSellerSlide("left")}
          >
            ←
          </span>
          <span
            className="deals-right-chevron deals-right-chevron-right"
            onClick={() => handleBestSellerSlide("right")}
          >
            →
          </span>
        </div>
      </div>
      <div className="deals-right-content">
        <div
          className="deals-right-slide-container"
          style={{
            transform: `translateX(-${bestSellerIndex * 100}%)`,
          }}
        >
          {bestSellers.map((group, index) => (
            <div key={index} className="deals-right-slide">
              {group.map((product, idx) => (
                <div key={idx} className="deals-right-item">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="deals-right-image"
                    draggable="false"
                  />
                  <div className="deals-right-details">
                    <div className="deals-right-name">{product.name}</div>
                    <div className="deals-right-price">{product.price}</div>
                    {product.oldPrice && (
                      <div className="deals-right-old-price">
                        {product.oldPrice}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Best_Seller;