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
import NotificationSettings from "./pages/Sellers/NotificationsSettings/NotificationsSettings";




              <Route path="/sellers/*" element={<LandingPageforSellers />} />
              <Route path="/onlinefulfillment" element={<OnlineFulfillment />} />
              <Route path="/companyinfo" element={<CompanyInfo />} />
              <Route path="/paymentservices" element={<PaymentServices />} />
              <Route path="/twostepverification" element={<TwoStepVerification />} />
              <Route path="/agreements" element={<Agreements />} />
              <Route path="/notificationsettings" element={<NotificationSettings />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
