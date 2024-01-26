import * as React from "react";
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
import Overview from "./Analytics/Overview";
import Payments from "./Analytics/Payments/Payments";
import RatingsAndReviews from "./Analytics/RatingsAndReviews";
import FeedDetail from "./Analytics/FeedDetail";
import Signup from "./Signup/Signup";




export default function LandingPageforSellers() {
  const location = useLocation();

  const isSignupPage = location.pathname === "/sellers/signup";
  return (
    <div className="bg-zinc-100">
      {!isSignupPage && <Header />}
      <div className="gap-0 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      {!isSignupPage && <Sidebar />}
         
        <div className="flex flex-col items-stretch w-full ml-0 max-md:w-full max-md:ml-0">
          
          <div className="flex flex-col items-stretch max-md:max-w-full">
                  
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

              {/* Order Management Routing */}
              <Route path='/orderlist' element={<OrderList />} />
              <Route path='/returnsandrefunds' element={<ReturnsAndRefunds />} />
              <Route path='/disputes' element={<Disputes />} />
            </Routes>
          
          </div>
        </div>
      </div>
    </div>
  );
}