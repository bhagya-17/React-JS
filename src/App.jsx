import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Place_Order from './Pages/Place_order/Place_Order'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './components/Login/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Place_Order />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
