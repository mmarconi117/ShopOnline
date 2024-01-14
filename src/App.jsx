import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import LandingPage from "./pages/Buyers/LandingPage";
import SubCategory from "./pages/Buyers/SubCategory";
import Cart from "./pages/Buyers/Cart/CartPage";

import LoginPage from "./pages/Buyers/LoginPage";
import SignupPage from "./pages/Buyers/SignupPage";
import Help from "./pages/Buyers/Help";
import CompanyService from "./pages/Sellers/CompanyService";
import Layout from "./Layout";

import PaymentSuccessful from "./pages/Buyers/PaymentSuccessful";
import Checkout from "./pages/Buyers/Checkout";

function App() {
  return (
    <>
      <div>
        <Router>
          <Layout> 
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/subcategories" element={<SubCategory />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sellers" element="#" />
              <Route path="/help" element={<Help />} />
              <Route path="/language" element="#" />
              <Route path="/account" element="#" />
              <Route path="/app" element="#" />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/companyService" element={<CompanyService/>}/>
              <Route path="/paymentSuccess" element={<PaymentSuccessful/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
}

export default App;
