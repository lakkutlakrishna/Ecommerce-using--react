import React, { useState } from "react";
import "../styles/PhotoGallery.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTimes } from "@fortawesome/free-solid-svg-icons";

const PhotoGallery = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });
  const images = [
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/1.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/2.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/3.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/4.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/5.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/6.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/7.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/8.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/9.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/10.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/11.jpg",
    "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/blog/1.jpg",
  ];
  const openModal = (src, alt) => {
    setModalImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="photo-gallery-container">
      <div className="photo-gallery-breadcrumb">
        <FontAwesomeIcon icon={faHome} className="photo-gallery-breadcrumb-icon" />
        <span>Photo Gallery</span>
      </div>
      <div className="photo-gallery-tabs">
        <ul className="photo-gallery-tab-list">
          <li>
            <button
              className={`photo-gallery-tab-button ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => showTab("tab1")}
            >
              Tabs Demo 1 (4 Columns)
            </button>
          </li>
          <li>
            <button
              className={`photo-gallery-tab-button ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => showTab("tab2")}
            >
              Tabs Demo 2 (3 Columns)
            </button>
          </li>
          <li>
            <button
              className={`photo-gallery-tab-button ${activeTab === "tab3" ? "active" : ""}`}
              onClick={() => showTab("tab3")}
            >
              Tabs Demo 3 (2 Columns)
            </button>
          </li>
        </ul>
      </div>
      <div className={`photo-gallery-tab-content ${activeTab === "tab1" ? "active" : ""}`} id="tab1">
        <div className="photo-gallery-grid photo-gallery-grid-4">
        {images.map((image, index) => (
  <div key={index}>
    <img
      alt={`Image ${index + 1}`}
      className="photo-gallery-image"
      onClick={() => openModal(image, `Image ${index + 1}`)}
      src={image}
    />
  </div>
))}
        </div>
      </div>
      <div className={`photo-gallery-tab-content ${activeTab === "tab2" ? "active" : ""}`} id="tab2">
        <div className="photo-gallery-grid photo-gallery-grid-3">
        {images.map((image, index) => (
  <div key={index}>
    <img
      alt={`Image ${index + 13}`}
      className="photo-gallery-image"
      onClick={() => openModal(image, `Image ${index + 13}`)}
      src={image}
    />
  </div>
))}
        </div>
      </div>
      <div className={`photo-gallery-tab-content ${activeTab === "tab3" ? "active" : ""}`} id="tab3">
        <div className="photo-gallery-grid photo-gallery-grid-2">
        {images.map((image, index) => (
  <div key={index}>
    <img
      alt={`Image ${index + 19}`}
      className="photo-gallery-image"
      onClick={() => openModal(image, `Image ${index + 19}`)}
      src={image}
    />
  </div>
))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="photo-gallery-modal">
          <div className="photo-gallery-modal-content">
            <button className="photo-gallery-modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img alt={modalImage.alt} className="photo-gallery-modal-image" src={modalImage.src} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;