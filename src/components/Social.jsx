// import React from "react";
// import ReactDOM from "react-dom";
// import "../styles/Social.css"; // Import the CSS file for styling

// const Social = () => {
//   return ReactDOM.createPortal(
//     <div className="social-container">
//       {/* Left Side: Social Media Icons */}
//       <div className="left-icons">
//         {/* Facebook Icon */}
//         <a href="#" className="icon facebook" data-tooltip="Follow us on Facebook">
//           <i className="fab fa-facebook-f"></i>
//           <div className="hover-box">
//             <p>Stay connected with us!</p>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               Follow on Facebook
//             </a>
//           </div>
//         </a>

//         {/* Twitter Icon */}
//         <a href="#" className="icon twitter" data-tooltip="Follow us on Twitter">
//           <i className="fab fa-twitter"></i>
//           <div className="hover-box">
//             <p>Get the latest updates!</p>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               Follow on Twitter
//             </a>
//           </div>
//         </a>

//         {/* YouTube Icon */}
//         <a href="#" className="icon youtube" data-tooltip="Subscribe on YouTube">
//           <i className="fab fa-youtube"></i>
//           <div className="hover-box">
//             <p>Watch our videos!</p>
//             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//               Subscribe on YouTube
//             </a>
//           </div>
//         </a>
//       </div>

//       {/* Right Side: Navigation Icons */}
//       <div className="right-icons">
//         <div className="icon menu" data-tooltip="Categories">
//           <i className="fas fa-bars"></i>
//         </div>
//         <div className="icon cart" data-tooltip="Cart">
//           <i className="fas fa-shopping-cart"></i>
//         </div>
//         <div className="icon user" data-tooltip="Account">
//           <i className="fas fa-user"></i>
//         </div>
//         <div className="icon search" data-tooltip="Search">
//           <i className="fas fa-search"></i>
//         </div>
//         <div className="icon eye" data-tooltip="Recent View">
//           <i className="fas fa-eye"></i>
//         </div>
//         <div
//           className="icon up"
//           data-tooltip="Go To Top"
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//         >
//           <i className="fas fa-chevron-up"></i>
//         </div>
//       </div>
//     </div>,
//     document.getElementById("portal-root") // Render into the portal container
//   );
// };

// export default Social;






import React, { useState } from "react";
import ReactDOM from "react-dom";
import RecentView from "../components/RecentView.jsx"; // Import the RecentView component
import Search from "../components/Search"; 
import AccountSlide from "./AccountSlide.jsx";
import CartSlide from "./CartSlide.jsx";
import CategorySlide from "./CategoriesSlide.jsx";
import "../styles/Social.css"; // Import the CSS file for styling

const Social = () => {
  const [isRecentViewVisible, setIsRecentViewVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [isCartSlideVisible, setIsCartSlideVisible] =useState(false);
  const [isCategoriesSlideVisible, setIsCategoriesSlideVisible]=useState(false);

  return ReactDOM.createPortal(
    <div className="social-container">
      {/* Left Side: Social Media Icons */}
      <div className="left-icons">
        {/* Facebook Icon */}
        <a href="#" className="icon facebook" data-tooltip="Follow us on Facebook">
          <i className="fab fa-facebook-f"></i>
          <div className="hover-box">
            <p>Stay connected with us!</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Follow on Facebook
            </a>
          </div>
        </a>
        {/* Twitter Icon */}
        <a href="#" className="icon twitter" data-tooltip="Follow us on Twitter">
          <i className="fab fa-twitter"></i>
          <div className="hover-box">
            <p>Get the latest updates!</p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Follow on Twitter
            </a>
          </div>
        </a>
        {/* YouTube Icon */}
        <a href="#" className="icon youtube" data-tooltip="Subscribe on YouTube">
          <i className="fab fa-youtube"></i>
          <div className="hover-box">
            <p>Watch our videos!</p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </div>
        </a>
      </div>

      {/* Right Side: Navigation Icons */}
      <div className="right-icons">
        <div className="icon menu" data-tooltip="Categories"
        onClick={()=>setIsCategoriesSlideVisible(true)}
        >
          <i className="fas fa-bars"></i>
        </div>
        <div className="icon cart" data-tooltip="Cart"
        onClick={()=>setIsCartSlideVisible(true)}
        >
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="icon user" data-tooltip="Account"
        onClick={()=> setIsAccountVisible(true)}
        >
          <i className="fas fa-user"></i>
        </div>
        <div className="icon search" data-tooltip="Search"
        onClick={() => setIsSearchVisible(true)}
        >
          <i className="fas fa-search"></i>
        </div>
        <div
          className="icon eye"
          data-tooltip="Recent View"
          onClick={() => setIsRecentViewVisible(true)} // Show RecentView on click
        >
          <i className="fas fa-eye"></i>
        </div>
        <div
          className="icon up"
          data-tooltip="Go To Top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </div>
      </div>

      {/* Render RecentView if visible */}
      {isRecentViewVisible && (
        <RecentView onClose={() => setIsRecentViewVisible(false)} />
      )}
      {isSearchVisible && <Search onClose={() => setIsSearchVisible(false)} />}
      {isAccountVisible && (
        <AccountSlide onClose={() => setIsAccountVisible(false)} />
      )}
      {isCartSlideVisible && (<CartSlide onClose={() => setIsCartSlideVisible(false)}/>)}
        {isCategoriesSlideVisible && (<CategorySlide onClose={() => setIsCategorySlideVisible(false)}/>)}
    </div>,
    document.getElementById("portal-root") // Render into the portal container
  );
};

export default Social;