// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import ServiceList from "./components/Services/ServiceList";
import Navbar from "./components/UI/Navbar";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 10,
    imageUrl: "/assets/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 20,
    imageUrl: "/assets/product2.jpg",
  },
];

const services = [
  {
    id: 1,
    name: "Service 1",
    description: "Description for service 1",
    price: 50,
  },
  {
    id: 2,
    name: "Service 2",
    description: "Description for service 2",
    price: 75,
  },
];

const cartItems = [
  { id: 1, name: "Product 1", quantity: 2, price: 10 },
  { id: 2, name: "Service 1", quantity: 1, price: 50 },
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the ISP eCommerce</h1>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/products"
            element={<ProductList products={products} />}
          />
          <Route
            path="/services"
            element={<ServiceList services={services} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
