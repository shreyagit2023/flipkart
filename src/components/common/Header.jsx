import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";  // Importing the separate CSS file
import ThemeBtn from "./ThemeBtn";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="header-logo">
        Flipkart
      </Link>

      {/* Search Bar */}
      <input
        type="text"
        className="header-search"
        placeholder="Search for products, brands and more"
      />

      <div className="login-hover">
        <span className="header-link login-trigger">Login</span>

        <div className="login-dropdown">
            <div className="cuslog">
                <div className="blue"><Link to="/signup" >New Customer?</Link></div>
                <Link to="/login" className="grey-bg">Login</Link>
            </div>

            <div className="cuslog2">
                <Link to="/profile" className="grey-bg">Profile</Link>
                <Link to="/order" className="grey-bg">Orders</Link>
                <Link to="/cart" className="grey-bg">Cart</Link>
            </div>
        </div>
      </div>


      {/* Cart */}
      <Link to="/cart" className="header-link">
        Cart
      </Link>
      <div className="become-seller">
        Become a Seller
      </div>
      <ThemeBtn/>
    </header>
  );
}
