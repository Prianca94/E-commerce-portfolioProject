import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/Store';
import Blog from './pages/Blog';
import Compareproducts from './pages/Compareproducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Blognews from './pages/Blognews';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refund from './pages/Refund';
import ShippingPolicy from './pages/ShippingPolicy';
import TermCondition from './pages/TermCondition';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="store" element={<OurStore/>}/>
    <Route path="blog" element={<Blog/>}/>
    <Route path="compareproducts" element={<Compareproducts/>}/>
    <Route path="wishlist" element={<Wishlist/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="forgot-password" element={<ForgotPassword/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="resetpassword" element={<ResetPassword/>}/>
    <Route path="blog/:id" element={<Blognews/>}/>
    <Route path="privacy" element={<PrivacyPolicy/>}/>
    <Route path="refund" element={<Refund/>}/>
    <Route path="shipping" element={<ShippingPolicy/>}/>
    <Route path="termscondition" element={<TermCondition/>}/>
    <Route path="product/:id" element={<Product/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="checkout" element={<Checkout/>}/>


    

    </Route>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
