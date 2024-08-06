import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Auth from './pages/Auth/Auth'
import Landing from './pages/Landing/Landing'
function Routing() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
  )
}

export default Routing