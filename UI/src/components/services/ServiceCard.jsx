import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <button>Book Service</button>
    </div>
  );
};

export default ServiceCard;
