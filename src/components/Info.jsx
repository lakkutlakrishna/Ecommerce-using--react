import React from 'react';
import '../styles/Info.css'; // Import the CSS file

const Info = () => {
    return (
        <footer className="Info-footer">
            <div className="Info-container">
                <div className="Info-grid">
                    <div>
                        <h3 className="Info-heading">OUR SHOPS</h3>
                        <ul className="Info-list">
                            <li><a href="#" className="Info-link">&gt; Product Support</a></li>
                            <li><a href="#" className="Info-link">&gt; PC Setup & Support</a></li>
                            <li><a href="#" className="Info-link">&gt; Services</a></li>
                            <li><a href="#" className="Info-link">&gt; Extended Service Plans</a></li>
                            <li><a href="#" className="Info-link">&gt; Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="Info-heading">MY ACCOUNT</h3>
                        <ul className="Info-list">
                            <li><a href="#" className="Info-link">&gt; My Account</a></li>
                            <li><a href="#" className="Info-link">&gt; Checkout</a></li>
                            <li><a href="#" className="Info-link">&gt; Order History</a></li>
                            <li><a href="#" className="Info-link">&gt; Your Transactions</a></li>
                            <li><a href="#" className="Info-link">&gt; Account Downloads</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="Info-heading">INFORMATION</h3>
                        <ul className="Info-list">
                            <li><a href="#" className="Info-link">&gt; About US</a></li>
                            <li><a href="#" className="Info-link">&gt; Contact Us</a></li>
                            <li><a href="#" className="Info-link">&gt; Warranty And Services</a></li>
                            <li><a href="#" className="Info-link">&gt; Support 24/7 Page</a></li>
                            <li><a href="#" className="Info-link">&gt; Terms And Conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="Info-heading">EXTRAS</h3>
                        <ul className="Info-list">
                            <li><a href="#" className="Info-link">&gt; Brands</a></li>
                            <li><a href="#" className="Info-link">&gt; Gift Certificates</a></li>
                            <li><a href="#" className="Info-link">&gt; Affiliates</a></li>
                            <li><a href="#" className="Info-link">&gt; Specials</a></li>
                            <li><a href="#" className="Info-link">&gt; Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="Info-heading">CONTACT US</h3>
                        <ul className="Info-list">
                            <li>
                                <i className="fas fa-map-marker-alt Info-icon"></i>
                                <span className="Info-text">No 40 Baria Sreet 133/2 NewYork City,NY, United States</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope Info-icon"></i>
                                <span className="Info-text">contact@revo.com</span>
                            </li>
                            <li>
                                <i className="fas fa-phone Info-icon"></i>
                                <span className="Info-text">(+0123456789)</span>
                            </li>
                            <li>
                                <i className="fas fa-phone Info-icon"></i>
                                <span className="Info-text">(+0123456789)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Info-border-ttop">
                    <div className="Info-flex-tcontainer">
                        <div className="Info-links">
                            <a href="#" className="Info-link">HOME</a>
                            <a href="#" className="Info-link">CATEGORIES</a>
                            <a href="#" className="Info-link">MOBILES</a>
                            <a href="#" className="Info-link">ELECTRONICS</a>
                            <a href="#" className="Info-link">ACCESSORIES</a>
                            <a href="#" className="Info-link">LAPTOP</a>
                            <a href="#" className="Info-link">ABOUT US</a>
                            <a href="#" className="Info-link">HELP</a>
                        </div>
                        <p className="Info-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className="Info-border-top">
                    <div className="Info-flex-container">
                        <div>
                            
                            <div className="Info-newsletter">
                            <h3 className="Info-heading">SIGN UP FOR NEWSLETTER</h3>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" placeholder="Your email address..." className="Info-input" />
                                <button className="Info-button">SUBSCRIBE</button>
                            </div>
                        </div>
                        <div className="Info-social-icons">
                            <a href="#" className="Info-social-link"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="Info-social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="Info-social-link"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="Info-social-link"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="Info-social-link"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Info;