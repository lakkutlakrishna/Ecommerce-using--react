import React, { useState } from "react";
import "../styles/Information.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Information = ({ onClose }) => {
    const [formail,setmail]=useState({
        mail:'',
    });
    const handlechange=(e)=>{
        const {name,value} = e.target;
        setmail({...formail, [name]:value});
    };
    const handlemail=(e)=>{
        e.preventDefault();
        toast.success('successfully regisytered',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setmail({
            mail:'',
        });
    };

  return (
    <div className="information-container">
      <div className="information-popup" id="newsletter-popup">
        {/* Header Section */}
        <div className="information-header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlShN3CyMXje995SEfEQ4ZNnUOYq8-Eqp2DQ&s"
            alt="Decorative background with flamingo and colorful swimsuit"
            className="information-image"
          />
          <div className="information-overlay"></div>
          <div className="information-content">
            <button className="information-close-button" onClick={onClose}>
              ×
            </button>
            <h2 className="information-title">JOIN OUR NEWSLETTER</h2>
            <p className="information-description">
              Subscribe now to get <span className="information-highlight">40%</span> off on
              any product!
            </p>
            <div className="information-input-group">
                <form onSubmit={handlemail}>
              <input
                type="email"
                placeholder="Your email address..."
                className="information-input-field"
                name="mail"
                value={formail.mail}
                onChange={handlechange}
                required
              />
              <button className="information-submit-button" type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
              </form>
            </div>
            <ToastContainer/>
            <div className="information-checkbox-group">
              <input type="checkbox" id="no-popup" className="information-checkbox" />
              <label htmlFor="no-popup" className="information-checkbox-label">
                Don't show this popup again
              </label>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="information-social-media-section">
          <h3 className="information-social-media-title">FOLLOW US</h3>
          <div className="information-social-icons">
            <a href="#" className="information-social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="information-social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="information-social-icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="information-social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="information-social-icon">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;