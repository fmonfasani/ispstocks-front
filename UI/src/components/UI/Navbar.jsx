import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/services">Services</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
