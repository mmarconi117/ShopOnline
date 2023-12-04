import LandingPage from './pages/Buyers/LandingPage'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Cart from './pages/Buyers/CartPage';

function App() {
  const carts = [
    { id: 1, product: { avatar: '...', name: 'Product 1', description: '...', price: 10 }, number_of_product: 2 },
    { id: 2, product: { avatar: '...', name: 'Product 2', description: '...', price: 20 }, number_of_product: 1 },
    // ...more cart items
  ];

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<LandingPage />}/>
            <Route path='/cart' element={<Cart initialCarts={carts} />}/>
            <Route path='/sellers' element="#"/>
            <Route path='/help' element="#"/>
            <Route path='/language' element="#"/>
            <Route path='/account' element="#"/>
            <Route path='/app' element="#"/>
          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App
