import React, { useState, useEffect } from 'react';
import '../styles/ComingSoon.css'; // Import the CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ComingSoon = () => {
    const [formmail, setformmail] = useState({
        mail: '',
    });

    // State for countdown
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Target launch date (replace with your desired launch date)
    const launchDate = new Date('2025-04-21T00:00:00').getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = launchDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [launchDate]);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformmail({ ...formmail, [name]: value });
    };

    const handlesubscribe = (e) => {
        e.preventDefault();
        toast.success('Successfully subscribed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setformmail({
            mail: '',
        });
    };

    return (
        <div className="coming-soon-container">
            {/* Breadcrumb */}
            <div className="coming-soon-breadcrumb">
                <a href="#" className="coming-soon-breadcrumb-link">Home</a> &gt; <span>Coming Soon</span>
            </div>

            {/* Main Content */}
            <div className="coming-soon-content">
                {/* Hero Section */}
                <div className="coming-soon-hero">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRa3bB9T61lRHdoT-J19wjR7Mp58NChHYjA&s"
                        alt="Background with pillows on a couch"
                        className="coming-soon-hero-image"
                    />
                    <div className="coming-soon-hero-overlay">
                        <h1 className="coming-soon-hero-title">WE WILL LAUNCH SOMETHING AWESOME</h1>
                        <p className="coming-soon-hero-description">
                            Our website is under construction. We'll be here soon with our new awesome site. Subscribe now to get
                            notified at our Grand Opening. Already 4,986 subscribers are on the list.
                        </p>
                        <div className="coming-soon-countdown">
                            <div className="coming-soon-countdown-item">
                                <div className="coming-soon-countdown-number">{timeLeft.days}</div>
                                <div className="coming-soon-countdown-label">DAY</div>
                            </div>
                            <div className="coming-soon-countdown-item">
                                <div className="coming-soon-countdown-number">{timeLeft.hours}</div>
                                <div className="coming-soon-countdown-label">HOUR</div>
                            </div>
                            <div className="coming-soon-countdown-item">
                                <div className="coming-soon-countdown-number">{timeLeft.minutes}</div>
                                <div className="coming-soon-countdown-label">MIN</div>
                            </div>
                            <div className="coming-soon-countdown-item">
                                <div className="coming-soon-countdown-number">{timeLeft.seconds}</div>
                                <div className="coming-soon-countdown-label">SEC</div>
                            </div>
                        </div>
                        <div className="coming-soon-subscribe">
                            <form onSubmit={handlesubscribe}>
                                <input
                                    type="email"
                                    name="mail"
                                    value={formmail.mail}
                                    onChange={handlechange}
                                    placeholder="Your email address..."
                                    className="coming-soon-subscribe-input"
                                    required
                                />
                                <button type="submit" className="coming-soon-subscribe-button">SUBSCRIBE</button>
                            </form>
                        </div>
                        <ToastContainer />
                    </div>
                </div>

                {/* Maintenance Instructions */}
                <div className="coming-soon-instructions">
                    <h2 className="coming-soon-instructions-title">Config page maintenance</h2>
                    <ol className="coming-soon-instructions-list">
                        <li>
                            Open your site in{' '}
                            <a href="https://www.fastcomet.com/tutorials/opencart2/maintenance-mode" className="coming-soon-instructions-link">
                                maintenance mode
                            </a>
                        </li>
                        <li>
                            Open your OpenCart admin panel and navigate to the Opencartwork &gt; So Theme Config.
                        </li>
                        <li>
                            So Theme Config to Click Tab Pages &gt; Comingson on the right of your store name to open settings page
                        </li>
                        <li>
                            Click Save button on the top right of the page to save the changes:
                        </li>
                        <li>
                            Log off and refresh the page to see maintenance mode enabled on your site.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;