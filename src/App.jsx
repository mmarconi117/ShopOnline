
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
// buyers
import LandingPage from "./pages/Buyers/LandingPage";
import WomensFashionSubCategory from "./pages/Buyers/Category/WomensFashion/WomansFashionSubCategory";
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
import Shipping from "./pages/Buyers/Product-Details/Shipping-Component/Shipping"

// layout
import Layout from "./Layout";

// Sellers
import CompanyService from "./pages/Sellers/CompanyService";
import LandingPageforSellers from "./pages/Sellers/LandingPageforSellers";
import CompanyInfo from "./pages/Sellers/CompanyInfo/CompanyInfo";
import OnlineFulfillment from "./pages/Sellers/OnlineFulfillment/OnlineFulfillment";
import PaymentServices from "./pages/Sellers/PaymentServices/PaymentServices";
import TwoStepVerification from "./pages/Sellers/2-StepVerification/TwoStepVerification";
import Agreements from "./pages/Sellers/Agreements/Agreements";
import HelpPage from "./pages/Sellers/HelpPage";

function App() {

  return (
      <div>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route exact path="" element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/womensfashion" element={<WomensFashionSubCategory />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/help" element={<Help />} />
                <Route path="/language" element="#" />
                <Route path="/account" element={<Account/>} />
                <Route path="/app" element="#" />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/companyService" element={<CompanyService/>}/>
                <Route path="/paymentSuccess" element={<PaymentSuccessful/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/reviews" element={<ReviewPage/>} />
                <Route path="/accountsettings" element={<Account />} />
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/productcatalogue" element={<ProductCatalogue />} />
              </Route>
              {/* Sellers Routes */}
              <Route path="/sellers/*" element={<LandingPageforSellers />} />
              <Route path="/onlinefulfillment" element={<OnlineFulfillment />} />
              <Route path="/companyinfo" element={<CompanyInfo />} />
              <Route path="/paymentservices" element={<PaymentServices />} />
              <Route path="/twostepverification" element={<TwoStepVerification />} />
              <Route path="/agreements" element={<Agreements />} />
              <Route path="/helppage" element={<HelpPage />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
