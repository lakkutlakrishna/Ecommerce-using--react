import React, { useState, useEffect, useRef } from "react";
import "../styles/TodayDeals.css";
import DealsRight from "./DealsRight";

const TodayDeals = () => {
  const [product, setProduct] = useState({
    title: "Spy Earphone Micro Wireless Earpiece",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/G-bPKIXXcGelCs6jxFMMVtOhBz1MH6BjRjevWYx87kM.jpg",
    discount: "-13%",
    price: "73.89€",
    oldPrice: "84.20€",
    description:
      "Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features in..",
  });

  const products = [
    {
      title: "Spy Earphone Micro Wireless Earpiece",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/1ix9neNoBuBNGp038rdX4UNarPupfNKdFg3Mzol8wDY.jpg",
      discount: "-13%",
      price: "73.89€",
      oldPrice: "84.20€",
      description:
        "Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features in..",
    },
    {
      title: "Invisible Hidden Sp",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/J_5qn9H7aw-BdjKaRiNoe-XdWjxSRFOoldz1_ASIJfE.jpg",
      discount: "-30%",
      price: "50.00€",
      oldPrice: "70.00€",
      description: "Invisible Hidden Sp is designed for ultimate comfort and performance.",
    },
    {
      title: "LG 29UC97-S 29'(21:9)",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/L0cUDaTo0arntxMDX-iFEuuWDuYAFx2p91b7oOnKYPM.jpg",
      discount: "-21%",
      price: "200.00€",
      oldPrice: "250.00€",
      description:
        "LG 29UC97-S 29'(21:9) offers a wide screen experience with stunning visuals.",
    },
    {
      title: "Totam Rem Aperiam",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/2gTT1XGo2bbDlorkQa51-EmwBmd8jIslbS6tsT6F4wQ.jpg",
      discount: "-50%",
      price: "25.00€",
      oldPrice: "50.00€",
      description:
        "Totam Rem Aperiam is a stylish and comfortable apparel for everyday use.",
    },
    {
      title: "SamSung 23UC97-S",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/6cwKXPORAJBYuKP34Izsy2NEtfShL_3Twi7anJO8eII.jpg",
      discount: "-55%",
      price: "300.00€",
      oldPrice: "400.00€",
      description:
        "SamSung 23UC97-S provides an immersive viewing experience with its high resolution.",
    },
    {
      title: "Dell 29UC97-S 29'(21:9)",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/SVJXNOGrV-fWkeJr5lDcrs3OlIwFQdb_l9gJ07nzuD4.jpg",
      discount: "-82%",
      price: "150.00€",
      oldPrice: "300.00€",
      description:
        "Dell 29UC97-S 29'(21:9) is a versatile monitor with excellent performance.",
    },
    {
      title: "Additional Item 1",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/GUNc5IZvbz5Uxh8Ul8DL1ncRW-oeMB8_7-hcbQVqT0M.jpg",
      discount: "-10%",
      price: "99.99€",
      oldPrice: "110.00€",
      description: "Additional Item 1 description.",
    },
    {
      title: "Additional Item 2",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/72seHhA0T8FTtW0hkXVZTgpiF4Z9dz6k_a9CZ2e1wSs.jpg",
      discount: "-15%",
      price: "89.99€",
      oldPrice: "105.00€",
      description: "Additional Item 2 description.",
    },
  ];

  const handleThumbnailClick = (selectedProduct) => {
    setProduct(selectedProduct);
  };

  // Countdown Timer Logic
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-01-01") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  // Ref for thumbnails container
  const thumbnailsRef = useRef(null);

  // Variables to track dragging
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let initialScrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - thumbnailsRef.current.offsetLeft;
    initialScrollLeft = thumbnailsRef.current.scrollLeft;
    thumbnailsRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX = e.pageX - thumbnailsRef.current.offsetLeft;
    const walk = (currentX - startX) * 1; // Adjust the multiplier for scroll speed
    thumbnailsRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    thumbnailsRef.current.style.cursor = "grab";
  };

  useEffect(() => {
    const thumbnails = thumbnailsRef.current;
    if (thumbnails) {
      thumbnails.addEventListener("mousemove", handleMouseMove);
      return () => {
        thumbnails.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  // Automatic scrolling logic
  useEffect(() => {
    const handleAutoScroll = () => {
      const thumbnails = thumbnailsRef.current;
      if (!thumbnails) return;

      const activeThumbnail = thumbnails.querySelector(".active");
      if (!activeThumbnail) return;

      const activeRect = activeThumbnail.getBoundingClientRect();
      const containerRect = thumbnails.getBoundingClientRect();

      // Check if the active thumbnail is not fully visible
      if (activeRect.left < containerRect.left || activeRect.right > containerRect.right) {
        const scrollAmount = activeRect.left - containerRect.left;
        thumbnails.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    handleAutoScroll();
  }, [product]);

  // Infinite scrolling logic
  const handleThumbnailClickInfinite = (selectedProduct, direction) => {
    const thumbnails = thumbnailsRef.current;
    if (!thumbnails) return;

    const scrollAmount = thumbnails.offsetWidth * 0.5; // Scroll by half the container width

    if (direction === "next") {
      thumbnails.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "prev") {
      thumbnails.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }

    setProduct(selectedProduct);
  };

  // Best Sellers Section
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
      setBestSellerIndex((prevIndex) =>
        prevIndex < bestSellers.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (direction === "left") {
      setBestSellerIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  return (
    <div className="today-deals-wrapper">
      {/* Today Deals Section */}
      <div className="today-deals-container">
        <div className="today-deals-header">
          <div className="today-deals-badge">TODAY DEALS</div>
        </div>
        <div className="today-deals-content">
          <div className="today-deals-image-container">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="today-deals-main-image"
              draggable="false"
            />
          </div>
          <div className="today-deals-details">
            <div className="today-deals-title-container">
              {/* <div className="today-deals-discount-badge">{product.discount}</div> */}
              <h2 className="today-deals-title">{product.title}</h2>
            </div>
            <p className="today-deals-description">{product.description}</p>
            <div className="today-deals-price-container">
              <span className="today-deals-price">{product.price}</span>
              <span className="today-deals-old-price">{product.oldPrice}</span>
            </div>
            <div className="today-deals-timer">
              <div className="today-deals-time-unit">
                <div className="today-deals-value">{timeLeft.days || 0}</div>
                <div className="today-deals-label">DAYS</div>
              </div>
              <div className="today-deals-time-unit">
                <div className="today-deals-value">{timeLeft.hours || 0}</div>
                <div className="today-deals-label">HOURS</div>
              </div>
              <div className="today-deals-time-unit">
                <div className="today-deals-value">{timeLeft.minutes || 0}</div>
                <div className="today-deals-label">MINS</div>
              </div>
              <div className="today-deals-time-unit">
                <div className="today-deals-value">{timeLeft.seconds || 0}</div>
                <div className="today-deals-label">SECS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-deals-thumbnails">
          {products.map((item, index) => (
            <div
              key={index}
              className={`today-deals-thumbnail ${
                item.title === product.title ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(item)}
            >
              <div className="today-deals-thumbnail-image-container">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="today-deals-thumbnail-image"
                  draggable="false"
                />
                <div className="today-deals-discount-badge">{item.discount}</div>
              </div>
              <div className="today-deals-thumbnail-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
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
    </div>
  );
};

export default TodayDeals;