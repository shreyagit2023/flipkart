// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './pages/Home/Home';
import ProductDetail from './pages/product/ProductDetail';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound';
import './App.css';
import Order from "./pages/Orders/Orders";
import OrderDetail from './pages/Orders/OrdersDetail';
import Address from "./pages/Profile/Address";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/SearchResults";
import WishList from "./pages/Wishlist/Wishlist";
import Navbar from "./components/common/Navbar";
import ThemeProvider from "./components/context/ThemeProvider"
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <main style={{ minHeight: '70vh' }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/address" element={<Address />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </ThemeProvider>
    </UserProvider>
  );
}

export default App;



