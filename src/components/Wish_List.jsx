import React from 'react';
import '../styles/Wish_List.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';
import { useNavigate } from 'react-router-dom';
const Wish_List = () => {
    const navigate=useNavigate();
    const handleContinue=()=>{
        navigate('/Account');
    }
    const deleteItem = (button) => {
        // Find the row containing the button and remove it
        const row = button.closest('tr');
        row.remove();
    };

    return (
        <div className="wish-list-container">
            {/* Breadcrumb */}
            <div className="wish-list-breadcrumb">
                <a className="wish-list-breadcrumb-link" href="#">
                    Account
                </a>
                <span className="wish-list-breadcrumb-separator">&gt;</span>
                <span>My Wish List</span>
            </div>

            {/* Title */}
            <h1 className="wish-list-title">My Wish List</h1>

            {/* Main Content and Sidebar */}
            <div className="wish-list-content-wrapper">
                {/* Main Content (Table Section) */}
                <div className="wish-list-table-section">
                    <table className="wish-list-table">
                        <thead>
                            <tr className="wish-list-table-header">
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Model</th>
                                <th>Stock</th>
                                <th>Unit Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="wish-list-table-row">
                                <td>
                                    <img
                                        alt="Product image of a camera"
                                        className="wish-list-product-image"
                                        src="https://placehold.co/50x50"
                                    />
                                </td>
                                <td className="wish-list-product-name">
                                    <a href="#">Cuid densinteu</a>
                                </td>
                                <td>Product 7</td>
                                <td className="wish-list-stock-status">In Stock</td>
                                <td>85.92€</td>
                                <td>
                                    <button className="wish-list-action-button wish-list-cart-button">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                    <button
                                        className="wish-list-action-button wish-list-delete-button"
                                        onClick={(e) => deleteItem(e.target)}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="wish-list-continue-button" onClick={handleContinue}>CONTINUE</button>
                </div>

                {/* Sidebar */}
                <div className="wish-list-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Wish_List;