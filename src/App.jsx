import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
// buyers
import LandingPage from './pages/Buyers/LandingPage'
import WomensFashionSubCategory from './pages/Buyers/Category/WomensFashion/WomansFashionSubCategory'
import JewelleryAndWatchesSubCategory from './pages/Buyers/Category/JewelleryAndWatches/JewelleryAndWatchesSubCategory'
import ComputerOfficeSubCategory from './pages/Buyers/Category/Computer Office and Security/ComputerOfficeSubCategory'
import OutdoorsFunAndSportsSubCategory from './pages/Buyers/Category/Outdoors, Fun and Sports/OutdoorsFunAndSportsSubCategory'
import Shipping from './pages/Buyers/Product-Details/Shipping-Component/Shipping'
import Cart from "./pages/Buyers/Cart/CartPage";
import LoginPage from "./pages/Buyers/Login/LoginPage";
import SignupPage from "./pages/Buyers/Signup/SignupPage";
import Help from "./pages/Buyers/Help";
import PaymentSuccessful from "./pages/Buyers/PaymentSuccessful";
import Checkout from "./pages/Buyers/Checkout/Checkout";
import Account from "./pages/Buyers/Account";
import ReviewPage from "./pages/Buyers/ReviewPage";
import ProductDetails from "./pages/Buyers/Product-Details/ProductDetails";
import ProductCatalogue from "./pages/Buyers/Product-Catalogue/ProductCatalogue";


// layout
import Layout from './Layout'

// Sellers
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
import CompanyInfo from './pages/Sellers/CompanyInfo/CompanyInfo'
import OnlineFulfillment from './pages/Sellers/OnlineFulfillment/OnlineFulfillment'
import PaymentServices from './pages/Sellers/PaymentServices/PaymentServices'
import TwoStepVerification from './pages/Sellers/2-StepVerification/TwoStepVerification'
import Agreements from './pages/Sellers/Agreements/Agreements'
import Electronics from './pages/Buyers/Category/Electronics'
import ToolsAndHomeImprovement from './pages/Buyers/Category/ToolsAndHomeImprovement'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route exact path="" element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/toolsAndHomeImprovement" element={<ToolsAndHomeImprovement />} />
                        <Route path="/electronics" element={<Electronics />} />
                        <Route path="/outdoorsAndSports" element={<OutdoorsFunAndSportsSubCategory />} />
                        <Route path="/computersAndOffice" element={<ComputerOfficeSubCategory/> } />
                        <Route
                            path="/womensfashion"
                            element={<WomensFashionSubCategory />}
                        />
                        <Route
                            path="/jewelryAndWatches"
                            element={<JewelleryAndWatchesSubCategory />}
                        />
                        <Route path="/productdetails" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/language" element="#" />
                        <Route path="/account" element={<Account />} />
                        <Route path="/app" element="#" />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/companyService" element={<CompanyService />} />
                        <Route path="/paymentSuccess" element={<PaymentSuccessful />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/reviews" element={<ReviewPage />} />
                        <Route path="/accountsettings" element={<Account />} />
                        <Route path="/productcatalogue" element={<ProductCatalogue />} />
                        <Route path="/shipping" element={<Shipping />} />
                    </Route>

                    {/* Sellers Routers */}
                    <Route path="/sellers/*" element={<LandingPageforSellers />}>
                        <Route path="" element={<Homepage />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="login" element={<Login />} />
                        <Route path="help" element={<HelpPage />} />

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

export default App