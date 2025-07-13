import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Account_sidebar.css'; // Import the CSS file

const Account_sidebar = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAccount = () => {
        navigate('/Account'); // Navigate to the Account component
    };
const handleEdit = () => {
    navigate('/Edit');
};
const handlePassword =()=>{
    navigate('/Password');
};
const handleAddress= ()=>{
    navigate('/Address');
};
const handleWishList=()=>{
    navigate('/Wish_List');
};
const handleOrderHistory=()=>{
    navigate('/Order_History');
};
const handleDownload=()=>{
    navigate('/Download');
};
const handleRecurringPayment=()=>{
    navigate('/Recurring_Payments');
};
const handleRewardPoints=()=>{
    navigate('/Reward_Points');
}
const handleReturns=()=>{
    navigate('/Product_Returns');
};
const handleTransaction=()=>{
    navigate('/Transactions');
};
const handleNewsletter=()=>{
    navigate('/Newsletter');
}
const handleLogout = () => {
    localStorage.removeItem('userToken'); 
    sessionStorage.clear();
    navigate('/Logout');
};
    return (
        <div className="account-sidebar">
            <h2>ACCOUNT</h2>
            <ul>
                <hr />
                <li onClick={handleAccount}>
                    <FontAwesomeIcon icon={faCircle} className="sidebar-icon" />
                    My Account
                </li>
                <hr />
                <li onClick={handleEdit}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Edit Account</li>
                <hr />
                <li onClick={handlePassword}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Password</li>
                <hr />
                <li onClick={handleAddress}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Address Book</li>
                <hr />
                <li onClick={handleWishList}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Wish List</li>
                <hr />
                <li onClick={handleOrderHistory}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Order History</li>
                <hr />
                <li onClick={handleDownload}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Downloads</li>
                <hr />
                <li onClick={handleRecurringPayment}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Recurring payments</li>
                <hr />
                <li onClick={handleRewardPoints}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Reward Points</li>
                <hr />
                <li onClick={handleReturns}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Returns</li>
                <hr />
                <li onClick={handleTransaction}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Transactions</li>
                <hr />
                <li onClick={handleNewsletter}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Newsletter</li>
                <hr />
                <li onClick={handleLogout}><FontAwesomeIcon icon={faCircle} className="sidebar-icon" />Logout</li>
                <hr />
            </ul>
        </div>
    );
};

export default Account_sidebar;