import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Libraries
import { connect } from "react-redux";

// Redux
import { setCarts, addToCart } from "./reducersAndActions/actions/cartAction";

// components
import LandingPage from "./pages/Buyers/LandingPage";
import SubCategory from "./pages/Buyers/SubCategory";
import Cart from "./pages/Buyers/Cart/CartPage";
import ProductDetails from "./pages/Buyers/Product-Details/ProductDetails";
import LoginPage from "./pages/Buyers/LoginPage";
import SignupPage from "./pages/Buyers/SignupPage";
import Help from "./pages/Buyers/Help";
import CompanyService from "./pages/Sellers/CompanyService";
import Layout from "./Layout";
import Homepage from "./pages/Sellers/Home/Homepage";

const mapStateToProps = (state) => {
    return {
        productTest: state.productTestReducer,
        carts: state.cartReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    incrementQty: () => dispatch(incrementQty(1)),
    setCarts: (data) => dispatch(setCarts(data)),
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
});

function App(props) {
    return (
        <>
            <div>
                <Router>
                    <Layout>
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<LandingPage />}
                            />
                            <Route
                                path="/subcategories"
                                element={<SubCategory />}
                            />
                            <Route
                                path="/product-details"
                                element={
                                    <ProductDetails
                                        product={props.productTest}
                                        addToCart={props.addToCart}
                                        setCarts={props.setCarts}
                                    />
                                }
                            />
                            <Route
                                path="/cart"
                                element={<Cart />}
                            />
                            <Route
                                path="/sellers"
                                element={<Homepage />}
                            />
                            <Route
                                path="/help"
                                element={<Help />}
                            />
                            <Route
                                path="/language"
                                element="#"
                            />
                            <Route
                                path="/account"
                                element="#"
                            />
                            <Route
                                path="/app"
                                element="#"
                            />
                            <Route
                                path="/login"
                                element={<LoginPage />}
                            />
                            <Route
                                path="/signup"
                                element={<SignupPage />}
                            />
                            <Route
                                path="/companyService"
                                element={<CompanyService />}
                            />
                        </Routes>
                    </Layout>
                </Router>
            </div>
        </>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
