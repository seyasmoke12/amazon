import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Auth from './pages/Auth/Auth'
import Landing from './pages/Landing/Landing'
import Results from './pages/Results/Results';
import ProductDetail from './pages/ProductDetail/ProductDetail';
function Routing() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
  )
}

export default Routing