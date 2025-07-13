import React, { useState } from 'react';
import '../styles/Brands.css';

const Brands = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveCarousel = (direction) => {
        const items = document.querySelectorAll('.carousel img');
        const itemWidth = items[0].clientWidth + 32; // 32 accounts for spacing between images
        const totalItems = items.length;

        let newIndex = currentIndex + direction;

        // Handle looping logic
        if (newIndex < 0) {
            newIndex = totalItems - 1; // Loop to the last image
        } else if (newIndex >= totalItems) {
            newIndex = 0; // Loop to the first image
        }

        setCurrentIndex(newIndex);
        const offset = -newIndex * itemWidth;
        document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
    };

    return (
        <div className="carousel-container">
            {/* Left Arrow */}
            <button className="arrow arrow-left" onClick={() => moveCarousel(-1)}>
                <i className="fas fa-chevron-left"></i>
            </button>

            {/* Carousel Images */}
            <div className="carousel">
                <img
                    alt="Logo of Infinitecode"
                    className="h-12"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/yKJxXgK-DjGL3TfLwAtsBVd2LscU6OXhdHkYDlX-Oxc.jpg"
                    width="100"
                />
                <img
                    alt="Logo of Walgreens"
                    className="h-12"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/o5UWJEImvxMGb6wwJmaFeiXFgZ-aBzGx39BdbkKPQO4.jpg"
                    width="100"
                />
                <img
                    alt="Logo of Envato"
                    className="h-12"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/8lB7WcWhjelNNSxX0lEUIp9a3akH4wENUsDFN5rrWJA.jpg"
                    width="100"
                />
                <img
                    alt="Logo of Jungheinrich"
                    className="h-12"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/_gFCyIx0Z4EshZUx6cVPKkxm9Q__3BwQSaFCUvJjYf8.jpg"
                    width="100"
                />
                <img
                    alt="Logo of TaylorMade"
                    className="h-12"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/XF7NhMSYH15DvDe_GyD5RlW2IR5qjWEaljRH11QY4dY.jpg"
                    width="100"
                />
                <img
                    alt="Logo of Alphabooks"
                    className="h-12"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/BMwrKC_XPjU2b7RMrDtY_ap2Ms5kGU7UktNjUhv-bLE.jpg"
                    width="100"
                />
            </div>

            {/* Right Arrow */}
            <button className="arrow arrow-right" onClick={() => moveCarousel(1)}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};
export default Brands;