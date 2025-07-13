import React from 'react';
import '../styles/Edit.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Edit = () => {
    return (
        <div className="edit-container">
            <div className="edit-breadcrumb">
                <i className="fas fa-home"></i>
                <span>ACCOUNT</span>
                <i className="fas fa-chevron-right"></i>
                <span>EDIT INFORMATION</span>
            </div>
            <div className="edit-content-wrapper">
                {/* Main Content */}
                <div className="edit-main-content">
                    <h1>My Account Information</h1>
                    <h2>Your Personal Details</h2>
                    <form>
                        <div className="edit-form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="First Name" />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Last Name" />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" id="email" placeholder="E-Mail" />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" id="telephone" placeholder="Telephone" />
                        </div>
                        <div className="edit-form-actions">
                            <button className="edit-btn-back">Back</button>
                            <button className="edit-btn-continue">Continue</button>
                        </div>
                    </form>
                </div>

                {/* Sidebar */}
                <div className='acc'>
                <Account_sidebar /></div>
            </div>
        </div>
    );
};

export default Edit;