import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // if using React Router v6
import Loader from '../components/Loader.jsx';

const LoaderTrigger = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/signup'); // Navigate to signup page after loader
    }, 2000); // Wait for the loader to show for 2 seconds
  };

  return (
    <div>
      <a href="#!" onClick={handleClick} className="register">Register</a>
      {loading && <Loader />}
    </div>
  );
};

export default LoaderTrigger;
