import LandingPage from "./pages/Buyers/LandingPage";
import SubCategory from "./pages/Buyers/SubCategory";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Cart from "./pages/Buyers/Cart/CartPage";
import LoginPage from "./pages/Buyers/LoginPage";
import SignupPage from "./pages/Buyers/SignupPage";
import CompanyService from "./pages/Sellers/CompanyService";

// The App.jsx component is now wrapped in a Layout tag that is used to ensure persistance of the Header and Footer across every page. This was was done to ensure all possible and future routes diplay the same.

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
              <Route path="/help" element="#" />
              <Route path="/language" element="#" />
              <Route path="/account" element="#" />
              <Route path="/app" element="#" />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/companyService" element={<CompanyService/>}/>
            </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
}

export default App;
