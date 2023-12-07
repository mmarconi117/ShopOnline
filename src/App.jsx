import './index.css'
import Layout from './Layout/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Homepage, GetVerified, ListOfProducts, ActivityFeed, UploadProduct, OrderList,ReturnsAndRefunds, Disputes, Overview, Payments, RatingsAndReviews } from './pages'
import ProductDetail from './pages/ProductCatalogue/ProductDetail'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      {/* Home Page Routing */}
      <Route path='' element={<Homepage/>}/>

      {/* Product Catalogue Routing */}
      <Route path='ListOfProducts' element={<ListOfProducts />} />
      <Route path="ProductDetail/:id" element={<ProductDetail />} />
      <Route path='ActivityFeed' element={<ActivityFeed />} />
      <Route path='UploadProduct' element={<UploadProduct />} />

      {/* Order Management Routing */}
      <Route path='OrderList' element={<OrderList />} />
      <Route path='ReturnsAndRefunds' element={<ReturnsAndRefunds />} />
      <Route path='Disputes' element={<Disputes />} />

      {/* Analytics Routing */}
      <Route path='Overview' element={<Overview />} />
      <Route path='Payments' element={<Payments />} />
      <Route path='RatingsAndReviews' element={<RatingsAndReviews />} />

    </Route>
  )
)  

function App() {

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
