import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import for toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Default styles for toast
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace with actual API call if needed)
    console.log('Form Data Submitted:', formData);

    // Show success message
    toast.success('Successfully submitted!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      enquiry: '',
    });
  };

  return (
    <div className="contact-container">
      {/* Breadcrumb */}
      <div className="contact-breadcrumb">
        <a href="#" className="contact-breadcrumb-link">
          <i className="fas fa-home contact-breadcrumb-icon"></i>
        </a>
        <span className="contact-breadcrumb-separator">&gt;</span>
        <span className="contact-breadcrumb-text">CONTACT US</span>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2 className="contact-form-title">CONTACT FORM</h2>
        <p className="contact-form-description">
          Lorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name *"
            className="contact-form-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="E-Mail Address *"
            className="contact-form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Enquiry *"
            className="contact-form-textarea"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-form-button">
            SUBMIT
          </button>
        </form>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;