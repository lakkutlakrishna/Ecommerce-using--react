import React from "react";
import "../styles/OurBest.css"; // Import the CSS file

const OurBest = () => {
  return (
    <div className="our-best-container">
      {/* Left Section: Text Content */}
      <div className="text-section">
        <h2 className="subtitle">OUR BEST</h2>
        <h1 className="title">MACBOOK PRO & IPHONE 5S</h1>
        <a href="#" className="see-more-link">
          See More
        </a>
      </div>

      {/* Right Section: Images */}
      <div className="image-section">
        {/* Left Speaker */}
        <img
          src="https://storage.googleapis.com/a1aa/image/6slZtbI8hbGJogT3h7fyX5j_QlT1rIXFe8JV6z-h0rw.jpg"
          alt="Left speaker"
          className="speaker-left"
        />

        {/* MacBook Pro Image */}
        <img
          src="https://storage.googleapis.com/a1aa/image/5S81ooVjcW0hBgLTBt27lXM_Wbxf9GlX4UxE9fKhgpM.jpg"
          alt="MacBook Pro displaying various websites"
          className="macbook-image"
        />

        {/* Right Speaker */}
        <img
          src="https://storage.googleapis.com/a1aa/image/Q_ufi9jDAfujmJwinjB9bFxEL7vKGLahmVpnqvuMZTA.jpg"
          alt="Right speaker"
          className="speaker-right"
        />

        {/* Additional Items */}
        <div className="additional-items">
          <img
            src="https://storage.googleapis.com/a1aa/image/pftPc8tgI4u7tXC2Jk0W2F6DzHTIQEONLIG9UA1V2Bc.jpg"
            alt="Earphones"
            className="earphones"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/3acah2jC32LfWHTHgbYCnP_7oBiHIiP9hx6tAQjjF8U.jpg"
            alt="Red notebook"
            className="notebook"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/h6uCKfog5B35MJjCaQTGibN4VmXE19x8svOCrJQc13U.jpg"
            alt="iPhone 5S displaying a fish wallpaper"
            className="iphone"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBest;