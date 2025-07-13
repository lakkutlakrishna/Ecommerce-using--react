import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Fashion.css'; // Import the CSS file

const Fashion = () => {
    // State to manage the selected category
    const [selectedCategory, setSelectedCategory] = useState('MOST RATING');
    const { cartCount, addToCart } = useContext(CartContext);

    // Sample data for products
    const products = {
        'BEST SELLERS': [
          {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/j4-180x180.jpg",
            name: "Dignissi Ducimus",
            price: "104,82€"
        },
        {
          image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/1-180x180.jpg",
          name: "Dignissi Ducimus",
          price: "104,82€"
        },

        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index13/7-180x180.jpg",
            name: "Eius Modi Tempor",
            price: "125,44€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/12-180x180.jpg",
            name: "Faucibus Rutrum",
            price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/2-180x180.jpg",
            name: "Hazen Dimapolan",
            price: "84,20€",
            originalPrice: "104,82€",
            discount: "-20%"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/22-180x180.jpg",
            name: "Catlyn Snake Pilit",
            price: "1,032,73€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/11-180x180.jpg",
            name: "Drumsti Tenderlo",
            price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index9/6-180x180.jpg",
            name: "Elit Sunt Occaec",
            price: "84,20€",
            originalPrice: "104,82€",
            discount: "-20%"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/14-180x180.jpg",
            name: "Fetiam Interdum",
            price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/7-180x180.jpg",
            name: "Incididunt Cowlabore",
            price: "63,58€",
            originalPrice: "104,82€",
            discount: "-40%"
        }
        ],
        'NEW ARRIVALS': [
          {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/1-180x180.jpg",
            name: "Eius Modi Tempor",
            price: "125,44€"
        },
          {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/j4-180x180.jpg",
            name: "Dignissi Ducimus",
            price: "104,82€"
        },
       

        
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/11-180x180.jpg",
            name: "Faucibus Rutrum",
            price: "104,82€"
        },
        {
          image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/22-180x180.jpg",
          name: "Dignissi Ducimus",
          price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index9/6-180x180.jpg",
            name: "Hazen Dimapolan",
            price: "84,20€",
            originalPrice: "104,82€",
            discount: "-20%"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-180x180.jpg",
            name: "Catlyn Snake Pilit",
            price: "1,032,73€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index3/4-180x180.jpg",
            name: "Drumsti Tenderlo",
            price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/4-180x180.jpg",
            name: "Elit Sunt Occaec",
            price: "84,20€",
            originalPrice: "104,82€",
            discount: "-20%"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/h4-180x180.jpg",
            name: "Fetiam Interdum",
            price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/12-180x180.jpg",
            name: "Incididunt Cowlabore",
            price: "63,58€",
            originalPrice: "104,82€",
            discount: "-40%"
        }
        ],
        'MOST RATING': [
          {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/j4-180x180.jpg",
            name: "Dignissi Ducimus",
            price: "104,82€"
        },
        {
          image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/22-180x180.jpg",
          name: "Dignissi Ducimus",
          price: "104,82€"
        },

        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/1-180x180.jpg",
            name: "Eius Modi Tempor",
            price: "125,44€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/11-180x180.jpg",
            name: "Faucibus Rutrum",
            price: "104,82€"
        },
        {
          image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/h4-180x180.jpg",
          name: "Fetiam Interdum",
          price: "104,82€"
      },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index9/6-180x180.jpg",
            name: "Hazen Dimapolan",
            price: "84,20€",
            originalPrice: "104,82€",
            discount: "-20%"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-180x180.jpg",
            name: "Catlyn Snake Pilit",
            price: "1,032,73€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index3/4-180x180.jpg",
            name: "Drumsti Tenderlo",
            price: "104,82€"
        },
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/4-180x180.jpg",
            name: "Elit Sunt Occaec",
            price: "84,20€",
            originalPrice: "104,82€",
            discount: "-20%"
        },
        
        {
            image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/fashion/12-180x180.jpg",
            name: "Incididunt Cowlabore",
            price: "63,58€",
            originalPrice: "104,82€",
            discount: "-40%"
        }
        ]
    };

    // Function to handle category selection
    const handleCategoryClick = (category) => {
        console.log("Selected Category:", category); // Debugging
        setSelectedCategory(category);
    };

    return (
        <div className="fashion-container">
            {/* Navigation */}
            <div className="fashion-navigation">
                <div className="fashion-logo">FASHION</div>
                <div className="fashion-nav-links">
                    <a
                        href="#"
                        className={selectedCategory === 'BEST SELLERS' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleCategoryClick('BEST SELLERS'); }}
                    >
                        BEST SELLERS
                    </a>
                    <a
                        href="#"
                        className={selectedCategory === 'NEW ARRIVALS' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleCategoryClick('NEW ARRIVALS'); }}
                    >
                        NEW ARRIVALS
                    </a>
                    <a
                        href="#"
                        className={selectedCategory === 'MOST RATING' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleCategoryClick('MOST RATING'); }}
                    >
                        MOST RATING
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="fashion-main-content">
                {/* Sidebar */}
                <div className="fashion-sidebar">
                    <div className="fashion-sidebar-image">
                        <img src="https://storage.googleapis.com/a1aa/image/c3XnZ043rAbkbH5G8WZLHvUrSegsiOPcCdgRcJ67-mU.jpg" alt="Side banner with a woman in a blue dress" />
                        <div className="fashion-sidebar-overlay"></div> {/* Light black overlay */}
                    </div>
                    <div className="fashion-sidebar-text">
                        <div className="fashion-sidebar-title">DESTINATION DRESSES</div>
                        <a href="#" className="fashion-sidebar-link">See More</a>
                    </div>
                </div>

                {/* Products */}
                <div className="fashion-products">
                    {/* Render products based on selected category */}
                    {products[selectedCategory].map((product, index) => (
                        <div className="fashion-product" key={index}>
                            <div className="fashion-product-image">
                                <img src={product.image} alt={product.name} />
                                {product.discount && <div className="fashion-product-discount">{product.discount}</div>}
                                <div className="fashion-product-overlay">
                                    <div className="fashion-product-icon"><i className="fas fa-search"></i></div>
                                    <button className="fashion-product-button" onClick={() => addToCart(product)}>Add to cart</button>
                                    <div className="fashion-product-icons">
                                        <i className="fas fa-heart"></i>
                                        <i className="fas fa-sync-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="fashion-product-details">
                                <div className="fashion-product-name">{product.name}</div>
                                <div className="fashion-product-price">
                                    {product.price} {product.originalPrice && <span className="fashion-product-original-price">{product.originalPrice}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fashion;