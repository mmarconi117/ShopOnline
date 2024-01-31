import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Buyers components
import LandingPage from "./pages/Buyers/LandingPage";
import SubCategory from "./pages/Buyers/SubCategory";
import Cart from "./pages/Buyers/Cart/CartPage";
import LoginPage from "./pages/Buyers/LoginPage";
import SignupPage from "./pages/Buyers/SignupPage";
import Help from "./pages/Buyers/Help";
import PaymentSuccessful from "./pages/Buyers/PaymentSuccessful";
import Checkout from "./pages/Buyers/Checkout";
import Account from "./pages/Buyers/Account";
import ReviewPage from "./pages/Buyers/ReviewPage";
import ProductDetails from "./pages/Buyers/Product-Details/ProductDetails";
import ProductCatalogue from "./pages/Buyers/Product-Catalogue/ProductCatalogue"

// Layout
import Layout from "./Layout";

// Sellers components
import CompanyService from "./pages/Sellers/CompanyService";
import LandingPageforSellers from "./pages/Sellers/LandingPageforSellers";
import CompanyInfo from "./pages/Sellers/CompanyInfo/CompanyInfo";
import OnlineFulfillment from "./pages/Sellers/OnlineFulfillment/OnlineFulfillment";
import PaymentServices from "./pages/Sellers/PaymentServices/PaymentServices";
import TwoStepVerification from "./pages/Sellers/2-StepVerification/TwoStepVerification";
import Agreements from "./pages/Sellers/Agreements/Agreements";
import RatingsAndReviews from "./components/R&R/Ratings";
import Disputes from "./pages/Sellers/OrderManagement/Disputes";






function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/subcategories" element={<SubCategory />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/help" element={<Help />} />
            <Route path="/language" element="#" />
            <Route path="/account" element={<Account />} />
            <Route path="/app" element="#" />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/companyService" element={<CompanyService />} />
            <Route path="/paymentSuccess" element={<PaymentSuccessful />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/accountsettings" element={<Account />} />
            <Route path="/ratings-reviews" element={<RatingsAndReviews />} />
          </Route>

          <Route path="/sellers/*" element={<LandingPageforSellers />} />
          <Route path="/onlinefulfillment" element={<OnlineFulfillment />} />
          <Route path="/companyinfo" element={<CompanyInfo />} />
          <Route path="/paymentservices" element={<PaymentServices />} />
          <Route path="/twostepverification" element={<TwoStepVerification />} />
          <Route path="/agreements" element={<Agreements />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
