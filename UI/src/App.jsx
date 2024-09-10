/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Importa el archivo CSS actualizado

const data = {
  Producto: {
    Equipos: {
      Routers: {
        "Routers domésticos": [
          "WiFi de doble banda",
          "WiFi de malla (Mesh)",
          "Con firewall integrado",
          "Con soporte para control parental",
        ],
        "Routers empresariales": {
          "Con balanceo de carga": [
            "Soporte de Alta Disponibilidad (HA)",
            "Con soporte de virtualización (NFV)",
          ],
          "VPN (Virtual Private Network)": ["Con soporte de SD-WAN"],
        },
      },
      Switches: {
        "Switches administrables": [
          "Capa 2",
          "Capa 3 (con routing)",
          "Soporte para VLAN",
          "Soporte para QoS",
          "PoE",
        ],
      },
    },
    Cables: {
      "Cable de red": ["UTP", "FTP", "STP"],
      "Cable de fibra": ["Monomodo", "Multimodo"],
    },
    Accesorios: {
      Adaptadores: ["HDMI a VGA", "USB a Ethernet"],
      Conectores: ["RJ45", "BNC", "LC"],
    },
    Interfaces: {
      "Interfaces de red": ["PCIe", "USB"],
      "Módulos de expansión": ["Módulo PoE", "Módulo VPN"],
    },
  },
  Servicio: {
    Instalación: {
      "Instalación de redes": [
        "Cableado estructurado",
        "Instalación de equipos",
      ],
      "Instalación de servidores": ["Rack", "Servidor de almacenamiento"],
    },
    Mantenimiento: {
      "Mantenimiento preventivo": [
        "Revisión de hardware",
        "Limpieza de equipos",
      ],
      "Mantenimiento correctivo": [
        "Reparación de routers",
        "Cambio de componentes",
      ],
    },
  },
};

const App = () => {
  const [currentOptions, setCurrentOptions] = useState([
    "Producto",
    "Servicio",
  ]); // Primera opción: Producto o Servicio
  const [selectedOptions, setSelectedOptions] = useState([]); // Almacena las selecciones del usuario
  const [showForm, setShowForm] = useState(false); // Mostrar formulario final
  const [questionText, setQuestionText] = useState(
    "Selecciona Producto o Servicio"
  );
  const [formData, setFormData] = useState({
    productName: "",
    quantity: 1,
    price: "",
    description: "",
    category: "",
    subcategory: "",
    subcategory_1: "",
    subcategory_2: "",
    subcategory_3: "",
  });

  // Función para manejar la selección de opciones
  const handleSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);

    const level = selectedOptions.length;
    if (level === 0) {
      setFormData({ ...formData, category: option });
      setQuestionText(option); // Cambia la pregunta dependiendo de la selección de Producto o Servicio
    }
    if (level === 1) setFormData({ ...formData, subcategory: option });
    if (level === 2) setFormData({ ...formData, subcategory_1: option });
    if (level === 3) setFormData({ ...formData, subcategory_2: option });
    if (level === 4) setFormData({ ...formData, subcategory_3: option });

    const newOptions =
      data[option] ||
      data[selectedOptions[0]]?.[option] ||
      data[selectedOptions[0]]?.[selectedOptions[1]]?.[option];
    if (Array.isArray(newOptions) && newOptions.length === 0) {
      setShowForm(true); // Mostrar formulario si no hay más opciones
    } else if (newOptions) {
      setCurrentOptions(Object.keys(newOptions)); // Muestra subcategorías
    } else {
      setShowForm(true); // Mostrar formulario si se llega al final
    }
  };

  // Volver al paso anterior
  const handleBack = () => {
    const newSelectedOptions = selectedOptions.slice(0, -1);
    setSelectedOptions(newSelectedOptions);
    setShowForm(false);

    if (newSelectedOptions.length === 0) {
      setCurrentOptions(["Producto", "Servicio"]); // Volver a la selección inicial
      setQuestionText("Selecciona Producto o Servicio");
    } else {
      const previousOption = newSelectedOptions[newSelectedOptions.length - 1];
      const newOptions =
        data[previousOption] || data[selectedOptions[0]]?.[previousOption];
      setCurrentOptions(Object.keys(newOptions));
    }
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", formData) // URL de tu API
      .then((response) => {
        console.log("Formulario enviado correctamente", response.data);
        alert("Datos del producto enviados correctamente");
      })
      .catch((error) => {
        console.error("Error al enviar el formulario", error);
      });
  };

  return (
    <div className="page-container">
      <div className="form-container centered">
        <h1 className="mb-4 text-center">{questionText}</h1>

        {/* Mostrar las opciones de categoría y subcategoría */}
        {!showForm && (
          <div className="grid-container">
            {currentOptions.map((option) => (
              <div
                key={option}
                className="card grid-item"
                onClick={() => handleSelect(option)}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{option}</h5>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Botón para regresar */}
        {selectedOptions.length > 0 && !showForm && (
          <button className="btn btn-green mt-3" onClick={handleBack}>
            Volver
          </button>
        )}

        {/* Formulario Final */}
        {showForm && (
          <div className="mt-4">
            <h2>Detalles del producto o servicio</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Nombre del producto o servicio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={formData.productName}
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
            <button className="btn btn-secondary mt-3" onClick={handleBack}>
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
