import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Sub_Angene_mahn.css'; // Import the CSS file

const Sub_Angene_mahn = () => {
    const { cartCount, addToCart } = useContext(CartContext);
    const [items, setItems] = useState([
        { id: 5, title: 'Deserunt mollitia', price: '59,96€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/1-270x270.jpg' },
        { id: 1, title: 'Adipisicing ground', price: '77.22€', image: 'https://storage.googleapis.com/a1aa/image/EWo37lmvsk4f-5Bmt5aj2gFpddIDfiJ2Cq4GoXV2vBk.jpg' },
        { id: 2, title: 'Cuid dementius', price: '85.99€', image: 'https://storage.googleapis.com/a1aa/image/pmWPYkT-QE4Gce2qR2GtxFVOD7dENSMCy-qI8V_WeNI.jpg' },
        { id: 3, title: 'Dail minimunam', price: '77.22€', image: 'https://storage.googleapis.com/a1aa/image/7lHzRPu_T-RyeNV_0Z13nS-Eh7It4acMCZEfjlyHWEA.jpg' },
        { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://storage.googleapis.com/a1aa/image/7BL-FWdPy7AYfJm2suYvdqkXtth02lzSPvHT-PLHGnU.jpg' },

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
        <div className="sub_angene_mahn-container">
            <h1 className="sub_angene_mahn-title">Angene Mahn</h1>
            <div className="sub_angene_mahn-controls">
                <div className="sub_angene_mahn-grid-controls">
                    <span className="sub_angene_mahn-control-label">Grid View:</span>
                    
                    <button
                        className={`sub_angene_mahn-grid-view-button ${activeButton === 2 ? 'sub_angene_mahn-button-active' : ''}`}
                        onClick={() => handleGridColumns(2, 2)}
                    >
                        2
                    </button>
                    <button
                        className={`sub_angene_mahn-grid-view-button ${activeButton === 3 ? 'sub_angene_mahn-button-active' : ''}`}
                        onClick={() => handleGridColumns(3, 3)}
                    >
                        3
                    </button>
                    <button
                        className={`sub_angene_mahn-grid-view-button ${activeButton === 4 ? 'sub_angene_mahn-button-active' : ''}`}
                        onClick={() => handleGridColumns(4, 4)}
                    >
                        4
                    </button>
                    <button
                        className={`sub_angene_mahn-grid-view-button ${activeButton === 5 ? 'sub_angene_mahn-button-active' : ''}`}
                        onClick={() => handleGridColumns(5, 5)}
                    >
                        5
                    </button>
                    <button 
                        className="sub_angene_mahn-grid-view-button"
                        onClick={toggleTableView}
                    >
                        <i className="fas fa-th"></i>
                    </button>
                </div>
                <div className="sub_angene_mahn-sort-controls">
                    <span className="sub_angene_mahn-control-label">Sort By:</span>
                    <select className="sub_angene_mahn-select">
                        <option>Default</option>
                        <option>Name(A-Z)</option><option>Name(Z-A)</option>
                        <option>Rating(Highest)</option><option>Rating(Lowest)</option>
                        <option>Price(Low&gt;High)</option><option>Price(High&gt;Low)</option>
                        <option>Model(A-Z)</option><option>Model(Z-A)</option>
                    </select>
                    <span className="sub_angene_mahn-control-label">Show:</span>
                    <select className="sub_angene_mahn-select">
                        <option>12</option>
                        <option>25</option>
                        <option>50</option><option>75</option><option>100</option>
                    </select>
                    <button className="sub_angene_mahn-compare-button">
                        Product Compare (0)
                    </button>
                </div>
            </div>

            {/* Product Grid or Table */}
            {isTableView ? (
                <table className="sub_angene_mahn-table">
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
                                        className="sub_angene_mahn-table-image"
                                    />
                                </td>
                                <td>{item.price}</td>
                                <td>Some information about the item</td>
                                <td>{item.title}</td>
                                <td>
                                    <div className="sub_angene_mahn-table-actions">
                                        <button className="sub_angene_mahn-action-button">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button className="sub_angene_mahn-action-button">
                                            <i className="fas fa-exchange-alt"></i>
                                        </button>
                                        <button className="sub_angene_mahn-action-button">
                                            <i className="fas fa-shopping-cart" onClick={() => addToCart(item)} ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div
                    className={`sub_angene_mahn-grid sub_angene_mahn-grid-cols-${gridColumns}`}
                    id="sub_angene_mahn-product-grid"
                >
                    {items.map((item) => (
                        <div key={item.id} className="sub_angene_mahn-product-card">
                            <div className="sub_angene_mahn-product-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="sub_angene_mahn-image"
                                />
                                <div className="sub_angene_mahn-overlay">
                                    <button className="sub_angene_mahn-overlay-button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <h2 className="sub_angene_mahn-product-title">{item.title}</h2>
                            <div className="sub_angene_mahn-rating">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="sub_angene_mahn-star">
                                        <i className="fas fa-star"></i>
                                    </span>
                                ))}
                                <span className="sub_angene_mahn-rating-count">(8)</span>
                            </div>
                            <p className="sub_angene_mahn-price">{item.price}</p>
                            <div className="sub_angene_mahn-actions">
                                <button className="sub_angene_mahn-action-button">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <button className="sub_angene_mahn-action-button">
                                    <i className="fas fa-exchange-alt"></i>
                                </button>
                                <button className="sub_angene_mahn-action-button">
                                    <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sub_Angene_mahn;