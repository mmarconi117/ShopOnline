import LandingPage from './pages/Buyers/LandingPage'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';

function App() {

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<LandingPage />}/>
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
