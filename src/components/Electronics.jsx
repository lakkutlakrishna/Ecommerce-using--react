import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Electronics.css'; // Import the CSS file

const Electronics = () => {
    // State to manage the selected category
    const [selectedCategory, setSelectedCategory] = useState('MOST RATING');
    const { cartCount, addToCart } = useContext(CartContext);

    // Sample data for products
    const products = {
        'BEST SELLERS': [
            {
                image: "https://storage.googleapis.com/a1aa/image/76AEnncFodXpbsCiwe6akVrd4c4UvYDm2UG3LK3_0Jo.jpg",
                name: "Dignissi Ducimus",
                price: "104,82€"
            },
            {
              image: "https://storage.googleapis.com/a1aa/image/76AEnncFodXpbsCiwe6akVrd4c4UvYDm2UG3LK3_0Jo.jpg",
              name: "Dignissi Ducimus",
              price: "104,82€"
            },

            {
                image: "https://storage.googleapis.com/a1aa/image/f7Z4IoKvLMzFjbfKzEikGxRqcxnxU8zLBv94Wnsy0bU.jpg",
                name: "Eius Modi Tempor",
                price: "125,44€"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/A_S9jsWvu3jIFZ7WHyA4C6OYul2iwZNCmAVXJJrOQkE.jpg",
                name: "Faucibus Rutrum",
                price: "104,82€"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/qmYeZyPfYerd1k9t5qLCyBVqlc6OlwTvsWbYRo-LyVg.jpg",
                name: "Hazen Dimapolan",
                price: "84,20€",
                originalPrice: "104,82€",
                discount: "-20%"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/SWO_cJMV4j-50PJwrdLwr2OGm4GpuJ724dEwnsv71N4.jpg",
                name: "Catlyn Snake Pilit",
                price: "1,032,73€"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/b6Xz3-x63XMiIoHSYjPM-5FVxrPvCQmuST860WgKFH0.jpg",
                name: "Drumsti Tenderlo",
                price: "104,82€"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/XIBL3_TYbq-wRwmxvavHS1l-uxG14iAqehTofNxXiuU.jpg",
                name: "Elit Sunt Occaec",
                price: "84,20€",
                originalPrice: "104,82€",
                discount: "-20%"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/XtmAT7JIo9RkQByNNiZ_17TE26VCL2jNnCtZIhknS9U.jpg",
                name: "Fetiam Interdum",
                price: "104,82€"
            },
            {
                image: "https://storage.googleapis.com/a1aa/image/w_dCIZVXpEWjPquqYUoBzWiMMcxkyHztcuKXkwidcd4.jpg",
                name: "Incididunt Cowlabore",
                price: "63,58€",
                originalPrice: "104,82€",
                discount: "-40%"
            }
        ],
        'NEW ARRIVALS': [
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/6-180x180.jpg",
                name: "4K Smart TV",
                price: "999,99€",
                originalPrice: "1,199,99€",
                discount: "-20%"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/6-180x180.jpg",
                name: "Gaming Console",
                price: "499,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/23-180x180.jpg",
                name: "Smart Watch",
                price: "199,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/1-180x180.jpg",
                name: "Gaming Console",
                price: "499,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/10-180x180.jpg",
                name: "Smart Watch",
                price: "199,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/10-180x180.jpg",
                name: "Gaming Console",
                price: "499,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/19-180x180.jpg",
                name: "Smart Watch",
                price: "199,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/11-180x180.jpg",
                name: "Smart Watch",
                price: "199,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/42-180x180.jpg",
                name: "Smart Watch",
                price: "199,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/55-180x180.jpg",
                name: "Smart Watch",
                price: "199,99€"
            }
        ],
        'MOST RATING': [
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/19-180x180.jpg",
                name: "Noise-Canceling Headphones",
                price: "299,99€",
                originalPrice: "349,99€",
                discount: "-15%"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/55-180x180.jpg",
                name: "Tablet Mini",
                price: "399,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/6-180x180.jpg",
                name: "Drone Pro",
                price: "599,99€",
                originalPrice: "799,99€",
                discount: "-25%"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/62-180x180.jpg",
                name: "Noise-Canceling Headphones",
                price: "299,99€",
                originalPrice: "349,99€",
                discount: "-15%"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/2-180x180.jpg",
                name: "Tablet Mini",
                price: "399,99€"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/52-180x180.jpg",
                name: "Noise-Canceling Headphones",
                price: "299,99€",
                originalPrice: "349,99€",
                discount: "-15%"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/27-180x180.jpg",
                name: "Tablet Mini",
                price: "399,99€"
            }, {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/15-180x180.jpg",
                name: "Noise-Canceling Headphones",
                price: "299,99€",
                originalPrice: "349,99€",
                discount: "-15%"
            },
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/product_index6/11-180x180.jpg",
                name: "Tablet Mini",
                price: "399,99€"
            }, 
            {
                image: "https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/electronic/63-180x180.jpg",
                name: "Noise-Canceling Headphones",
                price: "299,99€",
                originalPrice: "349,99€",
                discount: "-15%"
            }
        ]
    };

    // Function to handle category selection
    const handleCategoryClick = (category) => {
        console.log("Selected Category:", category); // Debugging
        setSelectedCategory(category);
    };

    return (
        <div className="electronics-container">
            {/* Navigation */}
            <div className="electronics-navigation">
                
                <div className="electronics-nav-links">
                <a
                        href="#"
                        className={selectedCategory === 'MOST RATING' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleCategoryClick('MOST RATING'); }}
                    >
                        MOST RATING
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
                        className={selectedCategory === 'BEST SELLERS' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleCategoryClick('BEST SELLERS'); }}
                    >
                        BEST SELLERS
                    </a>
                </div>
                <div className="electronics-logo">ELECTRONICS</div>
            </div>

            {/* Main Content */}
            <div className="electronics-main-content">
                {/* Sidebar */}
                

                {/* Products */}
                <div className="electronics-products">
                    {/* Render products based on selected category */}
                    {products[selectedCategory].map((product, index) => (
                        <div className="electronics-product" key={index}>
                            <div className="electronics-product-image">
                                <img src={product.image} alt={product.name} />
                                {product.discount && <div className="electronics-product-discount">{product.discount}</div>}
                                <div className="electronics-product-overlay">
                                    <div className="electronics-product-icon"><i className="fas fa-search"></i></div>
                                    <button className="electronics-product-button" onClick={() => addToCart(product)}>Add to cart</button>
                                    <div className="electronics-product-icons">
                                        <i className="fas fa-heart"></i>
                                        <i className="fas fa-sync-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="electronics-product-details">
                                <div className="electronics-product-name">{product.name}</div>
                                <div className="electronics-product-price">
                                    {product.price} {product.originalPrice && <span className="electronics-product-original-price">{product.originalPrice}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="electronics-sidebar">
                    <div className="electronics-sidebar-image">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVIHxvA-Z2VBo3fJdcG033eGKtOaFrdfMHWgklZx8ijuS6Pytk" alt="Side banner with electronics" />
                        <div className="electronics-sidebar-overlay"></div> {/* Light black overlay */}
                    </div>
                    <div className="electronics-sidebar-text">
                        <div className="electronics-sidebar-title">TOP ELECTRONICS</div>
                        <a href="#" className="electronics-sidebar-link">See More</a>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Electronics;