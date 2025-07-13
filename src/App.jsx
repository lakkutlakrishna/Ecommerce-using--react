import React from 'react';
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import TodayDeals from './components/TodayDeals.jsx';
import Upperbar from './components/Upperbar.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import UsersPage from './components/Userspage/UsersPage.jsx';
import DealsSlider from "./components/DealsSlider";
import './styles/App.css';
import Department from './components/Department.jsx';
import ItemShow from './components/ItemShow.jsx';
import Fashion from './components/Fashion.jsx';
import Electronics from './components/Electronics.jsx';
import Sports from './components/Sports.jsx';
import Blog from './Blog.jsx';
import Products from './components/Products.jsx';
import OurBest from './components/OurBest.jsx';
import Brands from './components/Brands.jsx';
import Rewards from './components/Rewards.jsx';
import Info from "./components/Info.jsx";
import CartPop from './components/CartPop.jsx';
import LogPop from './components/LoginPop.jsx';
import ForgotPassword from './components/ForgotPasswordPop.jsx';
import Account from './components/Account.jsx';
import Edit from './components/Edit.jsx';
import Password from './components/Password.jsx';
import Address from './components/Address.jsx';
import Address_Add from './components/Address_Add.jsx';
import Wish_List from './components/Wish_List.jsx';
import Order_History from './components/Order_History.jsx';
import Download from './components/Download.jsx';
import Recurring_Payments from './components/Recurring_Payments.jsx';
import Reward_points from './components/Reward_points.jsx';
import Product_Returns from './components/Product_Returns.jsx';
import Transactions from './components/Transactions.jsx';
import Newsletter from './components/Newsletter.jsx';
import Logout from './components/Logout.jsx';
import Speaker from './components/Speaker.jsx';
import Rengae_manges from './components/Rengae_manges.jsx';
import Angene_mahn from './components/Angene_mahn.jsx';
import Fashion_Electronics from './components/Fashion_Electronics.jsx';
import Egante_mangetes from './components/Egante_mangetes.jsx';
import Macs from './components/Macs.jsx';
import Pearl_Jewelry from './components/Pearl_Jewelry.jsx';
import Dental_Magela from './components/Dental_Magela.jsx';
import Delicacies from './components/Delicacies.jsx';
import Jewelry from './components/Jewelry.jsx';
import Sushi_Cormer from './components/Sushi_Cormer.jsx';
import Speaker_Electronics from './components/Speaker_Electronics.jsx';
import Speaker_Necklaces from './components/Speaker_Necklaces.jsx';
import Speaker_alarms from './components/Speaker_alarms.jsx';
import Speaker_qunge_genga from './components/Speaker_qunge_genga';
import Women_women from './components/Women_women.jsx';
import Women_web_cameras from './components/Women_web_cameras.jsx';
import Women_windows from './components/Women_windows.jsx';
import Women_boys_news from './components/Women_boys_news.jsx';
import Women_pearl_jewelry from './components/Women_pearl_jewelry.jsx';
import Checkout from './components/Checkout.jsx';
import CheckoutCart from './components/CheckoutCart.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import FAQ from './components/FAQ.jsx';
import Contact  from './components/Contact.jsx';
import Support from './components/Support.jsx';
import ComingSoon from './components/ComingSoon.jsx';
import NotFound from './components/Notfound.jsx';
import SiteMap from './components/Sitemap.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Typography from './components/Typography.jsx';


// import Comp from './components/sample.jsx';

// import CartShow from './components/CartShow.jsx';

const AppContent = () => {
  const location = useLocation();
  // const [showCartPop, setShowCartPop] = useState(true);

  if (location.pathname === "/userspage") {
    return <UsersPage />;
  }

  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <div className="app">
        <Upperbar />
        {/* <Comp/> */}
        <Navbar />
        <Department/>
        <main className="main-content container">
          <Routes>
            <Route path="/" element={
              <>
                <DealsSlider />
                <ProductList />
                <TodayDeals />
                <ItemShow/>
                <Fashion/>
                <Electronics/>
                <Sports/><CartPop />
                <OurBest/>
                <Products/>
                <Blog/>
                <Brands/>
                {/* <Rewards/> */}
                {/* <Info/> */}
                
                {/* <CartShow/> */}
              </>
            } />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/LogPop" element={<LogPop />} />
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            <Route path="/userspage" element={<UsersPage />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Edit" element={<Edit/>}/>
            <Route path="/Password" element={<Password/>}/>
            <Route path="/Address" element={<Address/>}/>
            <Route path="/Address_Add" element={<Address_Add/>}/>
            <Route path="/Wish_List" element={<Wish_List/>}/>
            <Route path="/Order_History" element={<Order_History/>}/>
            <Route path="/Download" element={<Download/>}/>
            <Route path="/Recurring_Payments" element={<Recurring_Payments/>}/>
            <Route path="/Reward_points" element={<Reward_points/>}/>
            <Route path="/Product_Returns" element={<Product_Returns/>}/>
            <Route path='/Transactions' element={<Transactions/>}/>
            <Route path="/Newsletter" element={<Newsletter/>}/>
            <Route path="/Logout" element={<Logout/>}/>
            <Route path='/Speaker1' element={<Speaker/>}/>
            <Route path='/Speaker2' element={<Rengae_manges/>}/>
            <Route path='/Speaker3' element={<Angene_mahn/>}/>
            <Route path='/Speaker4' element={<Fashion_Electronics/>}/>
            <Route path="/Speaker5" element={<Egante_mangetes/>}/>
            <Route path="/Speaker6" element={<Macs/>}/>
            <Route path="/Electroincsone" element={<Pearl_Jewelry/>}/>
            <Route path="/Electronicstwo" element={<Dental_Magela/>}/>
            <Route path="/Electronicsthree" element={<Delicacies/>}/>
            <Route path="/Electronicsfour" element={<Jewelry/>}/>
            <Route path="/Electronicssix" element={<Sushi_Cormer/>}/>
            <Route path='/Speaker_speakers' element={<Speaker/>}/>
            <Route path='/Speaker_electronics' element={<Speaker_Electronics/>}/>
            <Route path='/Speaker_angene_malin' element={<Angene_mahn/>}/>
            <Route path='/Speaker_Necklaces' element={<Speaker_Necklaces/>}/>
            <Route path="/Speaker_alarms" element={<Speaker_alarms/>}/>
            <Route path="/Speaker_qunge" element={<Speaker_qunge_genga/>}/>
            <Route path="/Women_women" element={<Women_women/>}/>
            <Route path="/Women_web_cameras" element={<Women_web_cameras/>}/>
            <Route path="/Women_windows" element={<Women_windows/>}/>
            <Route path="/Women_boys_news" element={<Women_boys_news/>}/>
            <Route path="/Women_pearl_jewelry" element={<Women_pearl_jewelry/>}/>
            <Route path="/Women_jewelry" element={<Jewelry/>}/>
            <Route path="/checkout/checkout" element={<Checkout/>}/>
            <Route path="/checkout/cart" element={<CheckoutCart/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/faqs" element={<FAQ/>}/>
            <Route path="/contactus" element={<Contact/>}/>
            <Route path="/support-24/7" element={<Support/>}/>
            <Route path="/comingsoon" element={<ComingSoon/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="/sitemap" element={<SiteMap/>}/>
            <Route path="/photogallery" element={<PhotoGallery/>}/>
            <Route path="/typography" element={<Typography/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;