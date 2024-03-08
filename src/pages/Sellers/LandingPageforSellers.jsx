import * as React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header"
import { Routes, Route, useLocation, Outlet } from "react-router-dom";


export default function LandingPageforSellers() {
  const location = useLocation();

  const isSignupPage = location.pathname === "/sellers/signup" || location.pathname === "/sellers/login" ;
  const [showBar, setShowBar] = useState(false)
  const showSideBar = () => {
    setShowBar((prev) => !prev)
  }
  return (
    <div className="bg-zinc-100 relative min-h-max">
      {!isSignupPage && <Header onClick={showSideBar}/>}
      <div className={`w-full flex items-stretch ${isSignupPage ? "" : "mt-[72px] md:mt-[107px]"} min-h-screen`}>

        {!isSignupPage && <Sidebar showBarIsTrue={showBar}/>}

        <div className={`${showBar ? "max-md:opacity-25" : "max-md:opacity-100"} flex flex-col items-stretch overflow-hidden grow`} onClick={showBar ? showSideBar : ()=>{}}>

          <Outlet />
          <Routes>
            {/* <Route path='/' element={<Homepage/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/help' element={<HelpPage/>}/> */}

            {/* Analytics Routing */}
            {/* <Route path='/overview' element={<Overview />} />
            <Route path='/payments' element={<Payments />} />
            <Route path='/activityfeed/*' element={<ActivityFeed />} />
            <Route path='/activityfeed/FeedDetail/:id' element={<FeedDetail />} />
            <Route path="/ratingsandreviews" element={<RatingsAndReviews />} /> */}

            {/* Product Catalogue Routing */}
            {/* <Route path='/listOfproducts' element={<ListOfProducts />} />
            <Route path='/uploadproduct' element={<UploadProduct />} />
            <Route path='/product' element={<ProductDetail />} /> */}

            {/* Order Management Routing */}
            {/* <Route path='/orderlist' element={<OrderList />} />
            <Route path='/returnsandrefunds' element={<ReturnsAndRefunds />} />
            <Route path='/disputes' element={<Disputes />} /> */}

            {/* Notification Setting */}
            {/* <Route path='/notificationsettings' element={<Body />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
