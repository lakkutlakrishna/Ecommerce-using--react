import React from 'react';
import '../styles/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Header Image */}
      <div className="services-breadcrumb">
        <a href='/'>Home</a> &gt; <a href='/about'>ABOUT</a>
      </div>
      <div className="header-image">
        <img
          alt="A stylish clothing store with various clothes and accessories displayed"
          src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/image-about-1.jpg"
        />
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-title">WELCOME TO REVO</h1>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>

      {/* Meet Our Team Section */}
      <div className="team-section">
        <h2 className="team-title">MEET OUR TEAM</h2>
        <p className="team-text">
          We are working hard with passion day by day to deliver the best fashion items to you. Besides work, we love
          backpacking, looking for fun, and sky diving, etc.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img alt="Team member Katharin" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/ourmember01.jpg" />
            <h3 className="member-name">KATHARIN</h3>
            <p className="member-role">Administrator, Web Designer</p>
          </div>
          <div className="team-member">
            <img alt="Team member Katharin" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/ourmember02.jpg" />
            <h3 className="member-name">KATHARIN</h3>
            <p className="member-role">Administrator, Web Designer</p>
          </div>
          <div className="team-member">
            <img alt="Team member Katharin" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/ourmember03.jpg" />
            <h3 className="member-name">KATHARIN</h3>
            <p className="member-role">Administrator, Web Designer</p>
          </div>
          <div className="team-member">
            <img alt="Team member Katharin" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/ourmember04.jpg" />
            <h3 className="member-name">KATHARIN</h3>
            <p className="member-role">Administrator, Web Designer</p>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="info-section">
        <div className="info-card">
          <img alt="Cityscape with modern buildings" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/image01.jpg" />
          <h3 className="info-title">WHAT WE REALLY DO?</h3>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
        <div className="info-card">
          <img alt="A stylish clothing store interior" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/image02.jpg" />
          <h3 className="info-title">OUR VERSION</h3>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
        <div className="info-card">
          <img alt="Cityscape at night with bright lights" src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/about/image03.jpg" />
          <h3 className="info-title">HISTORY OF BEGINNING</h3>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;