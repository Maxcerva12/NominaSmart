import React, { useState } from "react";
import { CrearRegistro } from "../actions/Nomina";
import { useDispatch } from "react-redux";
import "animate.css";
import "../Styles/FormAdd.css";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cc, setCc] = useState("");
  const [cantidad, setCantidad] = useState({
    horas: "",
    precioHora: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const { horas, precioHora } = cantidad;

  const [viewForm, setViewForm] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);

  const handleAdd = () => {
    if (viewForm) {
      setAnimateForm(false);
      setTimeout(() => setViewForm(false), 500); // Espera a que termine la animación
    } else {
      setViewForm(true);
      setAnimateForm(true);
    }
  };

  const handleChangeData = (e) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [e.target.name]: parseFloat(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cantidadFinal = horas * precioHora;

    const nuevoRegistro = {
      nombre,
      apellidos,
      cc,
      cantidadFinal,
    };

    dispatch(CrearRegistro(nuevoRegistro));

    // Mostrar la alerta
    setShowAlert(true);

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    setAnimateForm(false);
    setTimeout(() => {
      setNombre("");
      setApellidos("");
      setCc("");
      setCantidad({ horas: "", precioHora: "" });
      setViewForm(false);
    }, 500); // Espera a que termine la animación antes de resetear el formulario
  };

  return (
    <div className="form-add-container">
      <button onClick={handleAdd} className="add-button">
        <i className={`fas ${viewForm ? "fa-minus" : "fa-plus"}`}></i>
        {viewForm ? " Cerrar " : " Agregar "}
      </button>
      {viewForm && (
        <div
          className={`form-card animate__animated ${
            animateForm ? "animate__fadeInDown" : "animate__backOutUp"
          }`}
        >
          <h2 className="form-title">Nuevo Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className={`input-container ${nombre ? "has-value" : ""}`}>
              <i className="fas fa-user input-icon"></i>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label htmlFor="nombre">Ingrese su Nombre</label>
            </div>

            <div className={`input-container ${apellidos ? "has-value" : ""}`}>
              <i className="fas fa-user-tag input-icon"></i>
              <input
                type="text"
                id="apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                required
              />
              <label htmlFor="apellidos">Ingrese sus apellidos</label>
            </div>

            <div className={`input-container ${cc ? "has-value" : ""}`}>
              <i className="fas fa-id-card input-icon"></i>
              <input
                type="text"
                id="cc"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                required
              />
              <label htmlFor="cc">Ingrese su C.C</label>
            </div>

            <div className={`input-container ${precioHora ? "has-value" : ""}`}>
              <i className="fas fa-dollar-sign input-icon"></i>
              <input
                type="number"
                id="precioHora"
                name="precioHora"
                value={precioHora}
                onChange={handleChangeData}
                required
              />
              <label htmlFor="precioHora">
                Ingrese Cantidad de Pago por Horas
              </label>
            </div>

            <div className={`input-container ${horas ? "has-value" : ""}`}>
              <i className="fas fa-hourglass-half input-icon"></i>
              <input
                type="number"
                id="horas"
                name="horas"
                value={horas}
                onChange={handleChangeData}
                required
              />
              <label htmlFor="horas">Ingrese Cantidad de Horas</label>
            </div>

            <button type="submit" className="submit-button">
              <i className=" fas fa-paper-plane "></i>
              Enviar
            </button>
          </form>
        </div>
      )}
      {showAlert && (
        <div className="custom-alert animate__animated animate__fadeIn">
          <i className="fas fa-check-circle"></i>
          Formulario enviado con éxito
        </div>
      )}
    </div>
  );
};

export default FormAdd;
