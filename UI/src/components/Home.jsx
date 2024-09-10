// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>¡Hola! Antes que nada contanos, ¿qué vas a publicar?</h1>
      <div className="card-container">
        <div className="card" onClick={() => navigate("/products")}>
          <img src="/icons/products-icon.png" alt="Productos" />
          <h2>Productos</h2>
        </div>
        <div className="card" onClick={() => navigate("/services")}>
          <img src="/icons/services-icon.png" alt="Servicios" />
          <h2>Servicios</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
