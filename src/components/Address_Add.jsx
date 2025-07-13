import React, { useState } from 'react';
import '../styles/Address_Add.css'; // Import the CSS file
import { useNavigate, useLocation } from 'react-router-dom';
import Account_sidebar from './Account_sidebar';
const Address_Add = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialData = location.state?.initialData || {}; // Get initial data for editing

    const [formData, setFormData] = useState({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        company: initialData.company || '',
        address1: initialData.address1 || '',
        address2: initialData.address2 || '',
        city: initialData.city || '',
        postCode: initialData.postCode || '',
        country: initialData.country || '',
        region: initialData.region || '',
        isDefault: initialData.isDefault || false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the form data to localStorage or a global state (e.g., Redux, Context API)
        localStorage.setItem('addressData', JSON.stringify(formData));
        navigate('/Address'); // Navigate back to the Address component
    };

    return (
        <div className="address-add-container">
            {/* Breadcrumb */}
            <div className="address-add-breadcrumb">
                <a href="#" className="address-add-breadcrumb-link">ACCOUNT</a>
                <span className="address-add-breadcrumb-separator">&gt;</span>
                <a href="#" className="address-add-breadcrumb-link">ADDRESS BOOK</a>
                <span className="address-add-breadcrumb-separator">&gt;</span>
                <span className="address-add-breadcrumb-current">ADD ADDRESS</span>
            </div>

            {/* Main Content (Form) */}
            <div className="address-add-content-wrapper">
                <div className="address-add-form-container">
                    <h2 className="address-add-form-title">Add Address</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="address-add-form-grid">
                            {/* Form Fields */}
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="address-add-form-input"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="address-add-form-input"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="address-add-form-input"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Address 1</label>
                                <input
                                    type="text"
                                    name="address1"
                                    className="address-add-form-input"
                                    placeholder="Address 1"
                                    value={formData.address1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Address 2</label>
                                <input
                                    type="text"
                                    name="address2"
                                    className="address-add-form-input"
                                    placeholder="Address 2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="address-add-form-input"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Post Code</label>
                                <input
                                    type="text"
                                    name="postCode"
                                    className="address-add-form-input"
                                    placeholder="Post Code"
                                    value={formData.postCode}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Country</label>
                                <select
                                    name="country"
                                    className="address-add-form-input"
                                    value={formData.country}
                                    onChange={handleChange}
                                >
                                    <option>--- Please Select ---</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Australia</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                </select>
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Region / State</label>
                                <select
                                    name="region"
                                    className="address-add-form-input"
                                    value={formData.region}
                                    onChange={handleChange}
                                >
                                    <option>--- Please Select ---</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Telangana</option>
                                    <option>Tamil Nadu</option>
                                    <option>Goa</option>
                                    <option>Odisa</option>
                                    <option>Karnataka</option>
                                </select>
                            </div>
                            <div className="address-add-form-field">
                                <label className="address-add-form-label">Default Address</label>
                                <div className="address-add-radio-group">
                                    <input
                                        type="radio"
                                        name="isDefault"
                                        className="address-add-radio-input"
                                        checked={formData.isDefault}
                                        onChange={handleChange}
                                    />
                                    <label className="address-add-radio-label">Yes</label>
                                    <input
                                        type="radio"
                                        name="isDefault"
                                        className="address-add-radio-input"
                                        checked={!formData.isDefault}
                                        onChange={handleChange}
                                    />
                                    <label className="address-add-radio-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="address-add-form-actions">
                            <button type="button" className="address-add-btn-back" onClick={() => navigate('/Address')}>Back</button>
                            <button type="submit" className="address-add-btn-continue">Continue</button>
                        </div>
                    </form>
                </div>
                <div className='address-add-sidebar'>
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Address_Add;