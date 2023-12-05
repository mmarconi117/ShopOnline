import LandingPage from './pages/Buyers/LandingPage'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Cart from './pages/Buyers/CartPage';
import LoginPage from './pages/Buyers/LoginPage';
import SignupPage from './pages/Buyers/SignupPage';

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<LandingPage />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/sellers' element="#"/>
            <Route path='/help' element="#"/>
            <Route path='/language' element="#"/>
            <Route path='/account' element="#"/>
            <Route path='/app' element="#"/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App
