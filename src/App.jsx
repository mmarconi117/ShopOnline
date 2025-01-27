import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
// buyers
import LandingPage from './pages/Buyers/LandingPage'
import WomensFashionSubCategory from './pages/Buyers/Category/WomensFashion/WomansFashionSubCategory'
import MenFashionSubCategories from './pages/Buyers/Category/Mens-Fashion/MenFashionSubCategories'
import JewelleryAndWatchesSubCategory from './pages/Buyers/Category/JewelleryAndWatches/JewelleryAndWatchesSubCategory'
import OutdoorsFunAndSportsSubCategory from './pages/Buyers/Category/OutdoorsFunAndSports/OutdoorsFunAndSportsSubCategory'
import Shipping from './pages/Buyers/Product-Details/Shipping-Component/Shipping'
import BagsAndShoes from './pages/Buyers/Category/BagsAndShoes/BagsAndShoes'
import Cart from './pages/Buyers/Cart/CartPage'
import LoginPage from './pages/Buyers/Login/LoginPage'
import SignupPage from './pages/Buyers/Signup/SignupPage'
import CustomerService from './pages/Buyers/Aacount/CustomerService'
import PaymentSuccessful from './pages/Buyers/PaymentSuccessful'
import Checkout from './pages/Buyers/Checkout/Checkout'
import MyAccount from './components/Account/MyAccount'
import PendingReviews from './pages/Buyers/Aacount/PendingReviews'
import ProductDetails from './pages/Buyers/Product-Details/ProductDetails'
import ProductCatalogue from './pages/Buyers/Product-Catalogue/ProductCatalogue'
import Electronics from './pages/Buyers/Category/Electronics'
import ToolsAndHomeImprovement from './pages/Buyers/Category/ToolsAndHomeImprovement'
import PhonesAndAccessoriesSubCategory from './pages/Buyers/Category/PhonesAndAccessories/PhonesAndAccessoriesSubCategory'
import ComputerOfficeSubCategory from './pages/Buyers/Category/ComputerOffice/ComputerOfficeSubCategory'
import HomePetAndAppliances from './pages/Buyers/Category/HomePetAndAppliances/HomePetAndAppliances'
import AutomotiveSubCategory from './pages/Buyers/Category/Automotive/AutomotiveSubCategory'
import HelpCenter from './components/Footer/Help-center/HelpCenter'
import ContactUs from './components/Footer/Contact-Us/ContactUs'
import AboutUs from './components/Footer/About-Us/AboutUs'
import FlashSales from './components/Footer/Flash-Sales/FlashSales'
import SiteMap from './components/Footer/Site-Map/SiteMap'
import FAQComponent from './components/Footer/FAQs/FAQComponent'
import ReturnsHelp from './components/Footer/Returns/ReturnsHelp'
import PoliciesComponent from './components/Footer/Policies/PoliciesComponent'
import CareersComponent from './components/Footer/Careers/CareersComponent'
import DigitalMedia from './pages/Buyers/Category/DigitalMedia/DigitalMediaSubCategory'
import ToysKidsAndBabiesSubCategory from './pages/Buyers/Category/ToysKidsAndBabies/ToysKidsAndBabiesSubCategory'

// layout
import Layout from "./Layout";

// Sellers component

import Homepage from './pages/Sellers/Home/Homepage'
import ListOfProducts from './pages/Sellers/ProductCatalogue/ListOfProducts'
import ActivityFeed from './pages/Sellers/Analytics/ActivityFeed'
import UploadProduct from './pages/Sellers/ProductCatalogue/UploadProduct'
import OrderList from './pages/Sellers/OrderManagement/OrderList'
import ReturnsAndRefunds from './pages/Sellers/OrderManagement/Returns-And-Refunds/ReturnsAndRefunds'
import Disputes from './pages/Sellers/OrderManagement/Disputes'
import Overview from './pages/Sellers/Analytics/Overview/Overview'
import Payments from './pages/Sellers/Analytics/Payments/Payments'
import FeedDetail from './pages/Sellers/Analytics/FeedDetail'
import ProductDetail from './pages/Sellers/ProductCatalogue/ProductDetail'
import Signup from './pages/Sellers/Signup/Signup'
import Login from './pages/Sellers/Login/Login'
import RatingsAndReviews from './pages/Sellers/Analytics/R&R/Ratings'
import Body from './pages/Sellers/NotificationsSettings/components/Body'
import HelpPage from './pages/Sellers/HelpPage'
import CompanyService from './pages/Sellers/CompanyService'
import LandingPageforSellers from './pages/Sellers/LandingPageforSellers'

import SellerFooter from "./pages/Sellers/Footer/SellerFooter";


import CompanyInfo from './pages/Sellers/CompanyInfo/CompanyInfo'
import OnlineFulfillment from './pages/Sellers/OnlineFulfillment/OnlineFulfillment'
import PaymentServices from './pages/Sellers/PaymentServices/PaymentServices'
import TwoStepVerification from './pages/Sellers/2-StepVerification/TwoStepVerification'
import Agreements from './pages/Sellers/Agreements/Agreements'

import CategoryPage from './pages/Buyers/Category/category/Category'
import AacountLayout from "./components/Account/AacountLayout";
import Orders from "./pages/Buyers/Aacount/Orders/Orders";
import Payment from "./pages/Buyers/Aacount/Payments/Payment";
import AddGiftCardorVoucher from "./pages/Buyers/Aacount/Payments/AddGiftCardorVoucher";
import Transactions from "./pages/Buyers/Aacount/Payments/Transactions";
import AccountManagement from "./pages/Buyers/Aacount/AccountManagement/AccountManagement";
import EditShippingAddress from "./pages/Buyers/Aacount/EditShippingAddress";
import WishList from "./pages/Buyers/Aacount/WishList";
import RecentlyViewed from "./pages/Buyers/Aacount/RecentlyViewed";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Buyers Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/toolsAndHomeImprovement"
              element={<ToolsAndHomeImprovement />}
            />
            <Route path="/electronics" element={<Electronics />} />
            <Route
              path="/outdoorsAndSports"
              element={<OutdoorsFunAndSportsSubCategory />}
            />
            <Route
              path="/womensfashion"
              element={<WomensFashionSubCategory />}
            />
            <Route
              path="/homePetAndAppliances"
              element={<HomePetAndAppliances />}
            />
            <Route
              path="/outdoorsAndSports"
              element={<OutdoorsFunAndSportsSubCategory />}
            />
            <Route
              path="/womensfashion"
              element={<WomensFashionSubCategory />}
            />
            <Route
              path="/jewelryAndWatches"
              element={<JewelleryAndWatchesSubCategory />}
            />
            <Route path="/mensFashion" element={<MenFashionSubCategories />} />
            <Route
              path="/toyskidsandbabies"
              element={<ToysKidsAndBabiesSubCategory />} 
            />
            <Route
              path="/jewelryAndWatches"
              element={<JewelleryAndWatchesSubCategory />}
            />
            <Route path="/automotive" element={<AutomotiveSubCategory />} />
            <Route
              path="/phonesAndAccessories"
              element={<PhonesAndAccessoriesSubCategory />}
            />
            <Route
              path="/computersAndOffice"
              element={<ComputerOfficeSubCategory />}
            />
            <Route path="/bagsandshoes" element={<BagsAndShoes />} />
            <Route
              path="/homePetsAndAppliances"
              element={<HomePetAndAppliances />}
            />
            <Route path="/digitalMedia" element={<DigitalMedia />} />

            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/help" element={<HelpCenter />} />
            {/* Account route */}
            <Route path="/account" element={<AacountLayout />}>
              <Route path="" element={<MyAccount />} />
              <Route path="orders" element={<Orders />} />
              <Route path="pendingreviews" element={<PendingReviews />} />
              <Route path="wishList" element={<WishList />} />
              <Route path="recentlyViewed" element={<RecentlyViewed />} />
              <Route path="customer-service" element={<CustomerService />} />
              <Route path="payments" element={<Payment />} />
              <Route path="addgiftcard-voucher" element={<AddGiftCardorVoucher />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="accountManagement" element={<AccountManagement />} />
              <Route path="editShippingAddress" element={<EditShippingAddress />} />
            </Route>



            <Route path="/app" element="#" />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/companyService" element={<CompanyService />} />

            <Route path="/careers" element={<CareersComponent />} />

            <Route path="/paymentSuccess" element={<PaymentSuccessful />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/reviews" element={<ReviewPage />} /> */}
            <Route path="/accountsettings" element={<AacountLayout />} />
            <Route path="/productcatalogue" element={<ProductCatalogue />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/practiceCategory" element={<CategoryPage />} />
            {/* Buyer's Footer */}
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/flash-sales" element={<FlashSales />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/faqs" element={<FAQComponent />} />
            <Route path="/returns-help" element={<ReturnsHelp />} />
            <Route path="/policies" element={<PoliciesComponent />} />
            <Route path="/careers" element={<CareersComponent />} />
          </Route>

          {/* Sellers Routers */}
          <Route path="/sellers" element={<LandingPageforSellers />}>
           
            <Route path="" element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="help" element={<HelpPage />} />
           
            <Route path="footer" element={<SellerFooter />} />
            {/* Analytics Routing */}
            <Route path="overview" element={<Overview />} />
            <Route path="payments" element={<Payments />} />
            <Route path="activityfeed/*" element={<ActivityFeed />} />
            <Route
              path="activityfeed/FeedDetail/:id"
              element={<FeedDetail />}
            />
            <Route path="ratingsandreviews" element={<RatingsAndReviews />} />

            {/* Product Catalogue Routing */}
            <Route path="listOfproducts" element={<ListOfProducts />} />
            <Route path="uploadproduct" element={<UploadProduct />} />
            <Route path="product" element={<ProductDetail />} />

            {/* Order Management Routing */}
            <Route path="orderlist" element={<OrderList />} />
            <Route path="returnsandrefunds" element={<ReturnsAndRefunds />} />
            <Route path="disputes" element={<Disputes />} />

            {/* Notification Setting */}
            <Route path="notificationsettings" element={<Body />} />
            <Route path="onlinefulfillment" element={<OnlineFulfillment />} />
            <Route path="companyinfo" element={<CompanyInfo />} />
            <Route path="paymentservices" element={<PaymentServices />} />
            <Route
              path="twostepverification"
              element={<TwoStepVerification />}
            />
            <Route path="agreements" element={<Agreements />} />
            <Route path="helppage" element={<HelpPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
