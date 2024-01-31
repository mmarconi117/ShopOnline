import * as React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header"
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Home/Homepage";
import ListOfProducts from "./ProductCatalogue/ListOfProducts";
import ActivityFeed from "./Analytics/ActivityFeed";
import UploadProduct from "./ProductCatalogue/UploadProduct";
import OrderList from "./OrderManagement/OrderList";
import ReturnsAndRefunds from "./OrderManagement/ReturnsAndRefunds";
import Disputes from "./OrderManagement/Disputes";
import Overview from "./Analytics/Overview/Overview";
import Payments from "./Analytics/Payments/Payments";
import RatingsAndReviews from "./Analytics/RatingsAndReviews";
import FeedDetail from "./Analytics/FeedDetail";
import ProductDetail from "./ProductCatalogue/ProductDetail";
import Signup from "./Signup/Signup";




export default function LandingPageforSellers() {
  const location = useLocation();

  const isSignupPage = location.pathname === "/sellers/signup";
  const [showBar, setShowBar] = useState(false)
  const showSideBar = () => {
    setShowBar((prev) => !prev)
  }
  return (
    <div className="bg-zinc-100 relative min-h-max">
      {!isSignupPage && <Header onClick={showSideBar}/>}
      <div className="w-full flex items-stretch mt-[72px] md:mt-[107px]">

      {!isSignupPage && <Sidebar showBarIsTrue={showBar}/>}

      <div className={`${showBar ? "max-md:opacity-25" : "max-md:opacity-100"} flex flex-col items-stretch overflow-hidden grow`} onClick={showBar ? showSideBar : ()=>{}}>

        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/signup' element={<Signup/>} />

          {/* Analytics Routing */}
          <Route path='/overview' element={<Overview />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/activityfeed/*' element={<ActivityFeed />} />
          <Route path='/activityfeed/FeedDetail/:id' element={<FeedDetail />} />

          <Route path='/ratingsandreviews' element={<RatingsAndReviews />} />

          {/* Product Catalogue Routing */}
          <Route path='/listOfproducts' element={<ListOfProducts />} />
          <Route path='/uploadproduct' element={<UploadProduct />} />
          <Route path='/product' element={<ProductDetail />} />

          {/* Order Management Routing */}
          <Route path='/orderlist' element={<OrderList />} />
          <Route path='/returnsandrefunds' element={<ReturnsAndRefunds />} />
          <Route path='/disputes' element={<Disputes />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}
