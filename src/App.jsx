import LandingPage from './pages/Buyers/LandingPage';
import SubCategory from './pages/Buyers/SubCategory';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Cart from './pages/Buyers/CartPage';
import LoginPage from './pages/Buyers/LoginPage';
import SignupPage from './pages/Buyers/SignupPage';
import ProductDetails from "./pages/Buyers/Product-Details/ProductDetails";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import { setProductDetails, incrementQty } from "./actions/setProduct";
import { addToCart, removeFromCart } from "./actions/cart";
import { useEffect } from "react";

const mapStateToProps = (state) => {
    return {
        productTest: state.setProductDetailsReducer,
        cartTest: state.setCartReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    incrementQty: () => dispatch(incrementQty(1)),
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
});

function App(props) {
    console.log(props);
    // useEffect(()=> {
    //     this.props
    // },[])
    return (
        <>
            <div>
                <Router>
                    <Header />
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
                            element={<ProductDetails product={props} />}
                        />
                        <Route
                            path="/cart"
                            element={<Cart cart={props.cartTest} />}
                        />
                        <Route
                            path="/sellers"
                            element="#"
                        />
                        <Route
                            path="/help"
                            element="#"
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
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </>
    );
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
// export default App
