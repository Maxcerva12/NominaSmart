import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EditarRegistro } from "../actions/Nomina";
import "../Styles/EditarRegistroForm.css"; // Asegúrate de crear este archivo CSS

const EditarRegistroForm = ({ registro, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    cc: "",
    pago: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (registro) {
      setFormData({
        nombre: registro.nombre,
        apellidos: registro.apellidos,
        cc: registro.cc,
        pago: registro.pago,
      });
    }
  }, [registro]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditarRegistro(registro.id, formData));
    onClose();
  };

  return (
    <div className="editar-registro-form">
      <h2 className="form-title">Editar Registro</h2>
      <form onSubmit={handleSubmit}>
        <div
          className={`input-container ${formData.nombre ? "has-value" : ""}`}
        >
          <i className="fas fa-user input-icon"></i>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <label>Nombre</label>
        </div>

        <div
          className={`input-container ${formData.apellidos ? "has-value" : ""}`}
        >
          <i className="fas fa-user-tag input-icon"></i>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
          <label>Apellidos</label>
        </div>

        <div className={`input-container ${formData.cc ? "has-value" : ""}`}>
          <i className="fas fa-id-card input-icon"></i>
          <input
            type="text"
            name="cc"
            value={formData.cc}
            onChange={handleChange}
            required
          />
          <label>C.C</label>
        </div>

        <div className={`input-container ${formData.pago ? "has-value" : ""}`}>
          <i className="fas fa-dollar-sign input-icon"></i>
          <input
            type="number"
            name="pago"
            value={formData.pago}
            onChange={handleChange}
            required
          />
          <label>Pago</label>
        </div>

        <div className="button-container">
          <button className="submit-button" type="submit">
            <i className="fas fa-save"></i> Guardar cambios
          </button>
          <button className="cancel-button" type="button" onClick={onClose}>
            <i className="fas fa-times"></i> Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarRegistroForm;
