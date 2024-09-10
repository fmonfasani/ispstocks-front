/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ProveedorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });

  // Manejar el cambio en los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Llamada API para enviar los datos al backend
    try {
      const response = await fetch("http://localhost:3000/providers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos del proveedor");
      }

      alert("Proveedor cargado correctamente");
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al cargar el proveedor");
    }
  };

  return (
    <div>
      <h2>Formulario de Carga de Proveedores</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del proveedor:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email del proveedor:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono del proveedor:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoría del proveedor:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Fibra Óptica">Fibra Óptica</option>
            <option value="Equipos de Red">Equipos de Red</option>
            <option value="Software">Software</option>
            <option value="Servicios">Servicios</option>
          </select>
        </div>
        <button type="submit">Cargar Proveedor</button>
      </form>
    </div>
  );
};

export default ProveedorForm;
