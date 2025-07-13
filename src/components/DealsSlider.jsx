import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/DealsSlider.css"; // Import styles

const dealsImages = [
  "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/slideshow/home1/slide1-650x510.jpg",
  "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/slideshow/home1/slide2-650x510.jpg",
  "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/slideshow/home1/slide3-650x510.jpg",
];

const DealsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dealsImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dealsImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dealsImages.length);
  };

  return (
    <div className="slider-container">
      {/* Slider with Image */}
      <div className="slider">
        {/* <button className="nav-button left" onClick={goToPrevious}>
          <ChevronLeft size={32} />
        </button> */}

        <img src={dealsImages[currentIndex]} alt={`Deal ${currentIndex + 1}`} className="slider-image" />

        {/* <button className="nav-button right" onClick={goToNext}>
          <ChevronRight size={32} />
        </button> */}
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {dealsImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsSlider;