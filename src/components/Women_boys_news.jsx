import React from 'react';
import '../styles/Women_boys_news.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Women_boys_news from './Sub_Women_boys_news';
import ItemShow from './ItemShow';

const Women_boys_news = () => {
    return (
        <div className="Women_boys_news-container">
            {/* Breadcrumb */}
            <div className="Women_boys_news-breadcrumb">
                <a href="#" className="Women_boys_news-breadcrumb-link">Home</a>
                <span className="Women_boys_news-breadcrumb-separator">&gt;</span>
                <a href="#" className="Women_boys_news-breadcrumb-link">Account</a>
                <span className="Women_boys_news-breadcrumb-separator">&gt;</span>
                <span>Boys news</span>
            </div>

            {/* Main Content */}
            <div className="Women_boys_news-main-content">
                {/* Left Section */}
                <div className="Women_boys_news-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Women_boys_news-right-section">
                    <Sub_Women_boys_news />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Women_boys_news;