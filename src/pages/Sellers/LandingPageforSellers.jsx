import * as React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Home/Homepage";
import ListOfProducts from "./ProductCatalogue/ListOfProducts";
import ActivityFeed from "./Analytics/ActivityFeed";
import UploadProduct from "./ProductCatalogue/UploadProduct";
import OrderList from "./OrderManagement/OrderList";
import ReturnsAndRefunds from "./OrderManagement/ReturnsAndRefunds";
import Disputes from "./OrderManagement/Disputes";
import Overview from "./Analytics/Overview";
import Payments from "./Analytics/Payments";
import RatingsAndReviews from "./Analytics/RatingsAndReviews";
import FeedDetail from "./Analytics/FeedDetail";




export default function LandingPageforSellers() {
  return (
    <div className="bg-zinc-100">
      <div className="gap-0 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar />
        <div className="flex flex-col items-stretch w-[81%] ml-0 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch max-md:max-w-full">       
            <Routes>
              <Route path='/' element={<Homepage/>} />

              {/* Analytics Routing */}
              <Route path='Overview' element={<Overview />} />
              <Route path='Payments' element={<Payments />} />
              <Route path='ActivityFeed/*' element={<ActivityFeed />} />
              <Route path='ActivityFeed/FeedDetail/:id' element={<FeedDetail />} />
              
              
              <Route path='RatingsAndReviews' element={<RatingsAndReviews />} />

              {/* Product Catalogue Routing */}
              <Route path='ListOfProducts' element={<ListOfProducts />} />              
              <Route path='UploadProduct' element={<UploadProduct />} />

              {/* Order Management Routing */}
              <Route path='OrderList' element={<OrderList />} />
              <Route path='ReturnsAndRefunds' element={<ReturnsAndRefunds />} />
              <Route path='Disputes' element={<Disputes />} />

              
              
              
              
            </Routes>
          
          </div>
        </div>
      </div>
    </div>
  );
}