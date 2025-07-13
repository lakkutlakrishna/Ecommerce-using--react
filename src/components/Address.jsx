import React, { useState, useEffect } from 'react';
import '../styles/Address.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';
import { useNavigate } from 'react-router-dom';

const Address = () => {
    const navigate = useNavigate();
    const [addressData, setAddressData] = useState(null);

    // Fetch address data from localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('addressData'));
        if (data) {
            setAddressData(data);
        }
    }, []);

    const deleteAddress = () => {
        localStorage.removeItem('addressData');
        setAddressData(null);
    };

    const handleEdit = () => {
        navigate('/Address_Add', { state: { initialData: addressData } });
    };

    const handleNewAddress = () => {
        navigate('/Address_Add');
    };

    return (
        <div className="address-container">
            {/* Breadcrumb */}
            <div className="address-breadcrumb">
                <a href="#" className="address-breadcrumb-link">Home</a>
                <span className="address-breadcrumb-separator">&gt;</span>
                <a href="#" className="address-breadcrumb-link">Account</a>
                <span className="address-breadcrumb-separator">&gt;</span>
                <span className="address-breadcrumb-current">Address Book</span>
            </div>

            {/* Title */}
            <h1 className="address-title">Address Book Entries</h1>

            {/* Main Content */}
            <div className="address-main">
                {/* Address Section */}
                <div className="address-section">
                    {addressData ? (
                        <div id="address-content" className="address-content">
                            <p>{addressData.firstName} {addressData.lastName}</p>
                            <p>{addressData.company}</p>
                            <p>{addressData.address1}, {addressData.address2}</p>
                            <p>{addressData.city}</p>
                            <p>{addressData.postCode}</p>
                            <p>{addressData.region}</p>
                            <p>{addressData.country}</p>
                        </div>
                    ) : (
                        <p>No address saved.</p>
                    )}
                    <div className="address-actions">
                        {addressData && (
                            <>
                                <button id="edit-button" className="address-edit-button" onClick={handleEdit}>EDIT</button>
                                <button id="delete-button" onClick={deleteAddress} className="address-delete-button">Delete</button>
                            </>
                        )}
                    </div>
                    <div className="address-buttons">
                        <button className="address-back-button">Back</button>
                        <button className="address-new-address-button" onClick={handleNewAddress}>NEW ADDRESS</button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="address-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Address;