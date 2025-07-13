import React, { useState } from 'react';
import '../styles/Sub_Rengae_manges.css'; // Import the CSS file

const Sub_Rengae_manges = () => {
    const [items, setItems] = useState([
        { id: 1, title: '2017 Hotsales', price: '68,73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/10-270x270.jpg' },
        { id: 2, title: 'Dell 29UC97-S 29"', price: '42,96€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/6-270x270.jpg' },
        { id: 3, title: 'Deserunt mollitia', price: '59,96€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/1-270x270.jpg' },
    ]);

    const [newItem, setNewItem] = useState({ title: '', price: '', image: '' });
    const [isTableView, setIsTableView] = useState(false);
    const [gridColumns, setGridColumns] = useState(5); // Default grid columns
    const [activeButton, setActiveButton] = useState(5); // Default active button

    const handleGridColumns = (columns, buttonNumber) => {
        setGridColumns(columns);
        setActiveButton(buttonNumber);
        setIsTableView(false); // Ensure table view is disabled when grid view is active
    };

    const toggleTableView = () => {
        setIsTableView(!isTableView);
        setActiveButton(null); // Reset active button when switching to table view
    };

    const handleAddItem = () => {
        if (newItem.title && newItem.price && newItem.image) {
            const newItemWithId = { ...newItem, id: items.length + 1 };
            setItems([...items, newItemWithId]);
            setNewItem({ title: '', price: '', image: '' }); // Reset the form
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="sub-rengae-manges-container">
            <h1 className="sub-rengae-manges-title">RENGAE MANGES</h1>
            <div className="sub-rengae-manges-controls">
                <div className="sub-rengae-manges-grid-controls">
                    <span className="sub-rengae-manges-control-label">Grid View:</span>
                    
                    <button
                        className={`sub-rengae-manges-grid-view-button ${activeButton === 2 ? 'sub-rengae-manges-button-active' : ''}`}
                        onClick={() => handleGridColumns(2, 2)}
                    >
                        2
                    </button>
                    <button
                        className={`sub-rengae-manges-grid-view-button ${activeButton === 3 ? 'sub-rengae-manges-button-active' : ''}`}
                        onClick={() => handleGridColumns(3, 3)}
                    >
                        3
                    </button>
                    <button
                        className={`sub-rengae-manges-grid-view-button ${activeButton === 4 ? 'sub-rengae-manges-button-active' : ''}`}
                        onClick={() => handleGridColumns(4, 4)}
                    >
                        4
                    </button>
                    <button
                        className={`sub-rengae-manges-grid-view-button ${activeButton === 5 ? 'sub-rengae-manges-button-active' : ''}`}
                        onClick={() => handleGridColumns(5, 5)}
                    >
                        5
                    </button>
                    <button 
                        className="sub-rengae-manges-grid-view-button"
                        onClick={toggleTableView}
                    >
                        <i className="fas fa-th"></i>
                    </button>
                </div>
                <div className="sub-rengae-manges-sort-controls">
                    <span className="sub-rengae-manges-control-label">Sort By:</span>
                    <select className="sub-rengae-manges-select">
                        <option>Default</option>
                        <option>Name(A-Z)</option><option>Name(Z-A)</option>
                        <option>Rating(Highest)</option><option>Rating(Lowest)</option>
                        <option>Price(Low&gt;High)</option><option>Price(High&gt;Low)</option>
                        <option>Model(A-Z)</option><option>Model(Z-A)</option>
                    </select>
                    <span className="sub-rengae-manges-control-label">Show:</span>
                    <select className="sub-rengae-manges-select">
                        <option>12</option>
                        <option>25</option>
                        <option>50</option><option>75</option><option>100</option>
                    </select>
                    <button className="sub-rengae-manges-compare-button">
                        Product Compare (0)
                    </button>
                </div>
            </div>

            {/* Product Grid or Table */}
            {isTableView ? (
                <table className="sub-rengae-manges-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Information</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="sub-rengae-manges-table-image"
                                    />
                                </td>
                                <td>{item.price}</td>
                                <td>Some information about the item</td>
                                <td>{item.title}</td>
                                <td>
                                    <div className="sub-rengae-manges-table-actions">
                                        <button className="sub-rengae-manges-action-button">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button className="sub-rengae-manges-action-button">
                                            <i className="fas fa-exchange-alt"></i>
                                        </button>
                                        <button className="sub-rengae-manges-action-button">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div
                    className={`sub-rengae-manges-grid sub-rengae-manges-grid-cols-${gridColumns}`}
                    id="sub-rengae-manges-product-grid"
                >
                    {items.map((item) => (
                        <div key={item.id} className="sub-rengae-manges-product-card">
                            <div className="sub-rengae-manges-product-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="sub-rengae-manges-image"
                                />
                                <div className="sub-rengae-manges-overlay">
                                    <button className="sub-rengae-manges-overlay-button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <h2 className="sub-rengae-manges-product-title">{item.title}</h2>
                            <div className="sub-rengae-manges-rating">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="sub-rengae-manges-star">
                                        <i className="fas fa-star"></i>
                                    </span>
                                ))}
                                <span className="sub-rengae-manges-rating-count">(8)</span>
                            </div>
                            <p className="sub-rengae-manges-price">{item.price}</p>
                            <div className="sub-rengae-manges-actions">
                                <button className="sub-rengae-manges-action-button">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <button className="sub-rengae-manges-action-button">
                                    <i className="fas fa-exchange-alt"></i>
                                </button>
                                <button className="sub-rengae-manges-action-button">
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sub_Rengae_manges;