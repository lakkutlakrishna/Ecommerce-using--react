import React, { useState, useRef, useEffect } from 'react';
import '../styles/ShopBy.css'; // Import the CSS file

const ShopBy = () => {
    const [sections, setSections] = useState({
        search: false,
        manufacturer: false,
        colors: false,
        checkbox: false,
        size: false,
        price: false,
    });

    const [priceRange, setPriceRange] = useState({
        min: 43,
        max: 241,
    });

    const contentRefs = {
        search: useRef(null),
        manufacturer: useRef(null),
        colors: useRef(null),
        checkbox: useRef(null),
        size: useRef(null),
        price: useRef(null),
    };

    const toggleSection = (section) => {
        setSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setPriceRange((prev) => ({
            ...prev,
            min: value,
        }));
    };

    const handleInputChange = (e, type) => {
        const value = parseInt(e.target.value.replace('€', ''), 10); // Remove "€" before parsing
        if (!isNaN(value)) { // Ensure the value is a valid number
            if (type === 'min') {
                setPriceRange((prev) => ({
                    ...prev,
                    min: value,
                }));
            } else {
                setPriceRange((prev) => ({
                    ...prev,
                    max: value,
                }));
            }
        }
    };

    // Effect to handle smooth height transitions
    useEffect(() => {
        Object.keys(contentRefs).forEach((section) => {
            const content = contentRefs[section].current;
            if (content) {
                if (sections[section]) {
                    content.style.height = `${content.scrollHeight}px`;
                } else {
                    content.style.height = '0px';
                }
            }
        });
    }, [sections]);

    return (
        <div className="shopby-container">
            <div className="shopby-header">
                <h2 className="shopby-title">SHOP BY</h2>
            </div>

            {/* Search Section */}
            <div className="shopby-section">
                <div className="shopby-section-header" onClick={() => toggleSection('search')}>
                    <h3 className="shopby-section-title">SEARCH</h3>
                    <i className={`fas ${sections.search ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </div>
                <div
                    ref={contentRefs.search}
                    className="shopby-section-content"
                    style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}
                >
                    <input type="text" placeholder="Search" className="shopby-input" />
                </div>
            </div>

            {/* Manufacturer Section */}
            <div className="shopby-section">
                <div className="shopby-section-header" onClick={() => toggleSection('manufacturer')}>
                    <h3 className="shopby-section-title">MANUFACTURER</h3>
                    <i className={`fas ${sections.manufacturer ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </div>
                <div
                    ref={contentRefs.manufacturer}
                    className="shopby-section-content"
                    style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}
                >
                    {['Palm', 'Hewlett-Packard', 'Apple'].map((brand, index) => (
                        <div key={index} className="shopby-checkbox-item">
                            <label className="shopby-checkbox-label">
                                <input type="checkbox" className="shopby-checkbox" />
                                <span className="shopby-checkbox-text">{brand}</span>
                            </label>
                            <span className="shopby-count">3</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Colors Section */}
            <div className="shopby-section">
                <div className="shopby-section-header" onClick={() => toggleSection('colors')}>
                    <h3 className="shopby-section-title">COLORS</h3>
                    <i className={`fas ${sections.colors ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </div>
                <div
                    ref={contentRefs.colors}
                    className="shopby-section-content"
                    style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}
                >
                    {['green', 'blue', 'red', 'brown'].map((color, index) => (
                        <div key={index} className="shopby-checkbox-item">
                            <label className="shopby-checkbox-label">
                                <input type="checkbox" className="shopby-checkbox" />
                                <span className="shopby-checkbox-text">{color}</span>
                            </label>
                            <span className="shopby-count">1</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Checkbox Section */}
            <div className="shopby-section">
                <div className="shopby-section-header" onClick={() => toggleSection('checkbox')}>
                    <h3 className="shopby-section-title">CHECKBOX</h3>
                    <i className={`fas ${sections.checkbox ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </div>
                <div
                    ref={contentRefs.checkbox}
                    className="shopby-section-content"
                    style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}
                >
                    {['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4'].map((item, index) => (
                        <div key={index} className="shopby-checkbox-item">
                            <label className="shopby-checkbox-label">
                                <input type="checkbox" className="shopby-checkbox" />
                                <span className="shopby-checkbox-text">{item}</span>
                            </label>
                            <span className="shopby-count">1</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Size Section */}
            <div className="shopby-section">
                <div className="shopby-section-header" onClick={() => toggleSection('size')}>
                    <h3 className="shopby-section-title">SIZE</h3>
                    <i className={`fas ${sections.size ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </div>
                <div
                    ref={contentRefs.size}
                    className="shopby-section-content"
                    style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}
                >
                    {['S', 'M', 'L'].map((size, index) => (
                        <div key={index} className="shopby-checkbox-item">
                            <label className="shopby-checkbox-label">
                                <input type="checkbox" className="shopby-checkbox" />
                                <span className="shopby-checkbox-text">{size}</span>
                            </label>
                            <span className="shopby-count">1</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Section */}
            <div className="shopby-section">
                <div className="shopby-section-header" onClick={() => toggleSection('price')}>
                    <h3 className="shopby-section-title">PRICE</h3>
                    <i className={`fas ${sections.price ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </div>
                <div
                    ref={contentRefs.price}
                    className="shopby-section-content"
                    style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}
                >
                    <div className="shopby-price-inputs">
                        <input
                            type="text"
                            value={`€${priceRange.min}`}
                            onChange={(e) => handleInputChange(e, 'min')}
                            className="shopby-price-input"
                        />
                        <input
                            type="text"
                            value={`€${priceRange.max}`}
                            onChange={(e) => handleInputChange(e, 'max')}
                            className="shopby-price-input"
                        />
                    </div>
                    <input
                        type="range"
                        min={43}
                        max={241}
                        value={priceRange.min}
                        onChange={handleSliderChange}
                        className="shopby-price-slider"
                    />
                </div>
            </div>

            <button className="shopby-reset-button">RESET ALL</button>
        </div>
    );
};

export default ShopBy;