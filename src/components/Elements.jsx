import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BorrarRegistro } from "../actions/Nomina";
import EditarRegistroForm from "./EditarRegistroForm ";
import "animate.css";
import "../Styles/Elements.css";

const Elements = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const dispatch = useDispatch();

  const { id, fecha, nombre, apellidos, cc, pago } = data;

  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const formatDate = (fecha) => {
    if (fecha && fecha.toDate instanceof Function) {
      return fecha.toDate().toLocaleDateString();
    } else if (fecha instanceof Date) {
      return fecha.toLocaleDateString();
    } else {
      return "Fecha no disponible";
    }
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setAlertMessage("¿Estás seguro de que deseas borrar este elemento?");
    setAlertType("confirm");
    setShowAlert(true);
  };

  const confirmDelete = () => {
    dispatch(BorrarRegistro(id));
    setAlertMessage("Elemento borrado con éxito");
    setAlertType("success");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsDeleting(false);
    }, 3000);
  };

  const cancelDelete = () => {
    setAlertMessage("Eliminación cancelada");
    setAlertType("info");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsDeleting(false);
    }, 3000);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    if (alertType !== "confirm") {
      setIsDeleting(false);
    }
  };

  if (isEditing) {
    return (
      <tr>
        <td colSpan="6">
          <EditarRegistroForm
            registro={data}
            onClose={() => setIsEditing(false)}
          />
        </td>
      </tr>
    );
  }

  return (
    <>
      <tr
        className={`animate__animated ${
          isDeleting ? "animate__fadeOutLeft" : "animate__fadeInLeft"
        }`}
      >
        <td>{formatDate(fecha)}</td>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{cc}</td>
        <td>${formatNumber(pago)}</td>
        <td>
          <button className="action-button edit" onClick={handleEdit}>
            <i className="material-icons">edit</i>
          </button>
          <button className="action-button delete" onClick={handleDelete}>
            <i className="material-icons">delete_forever</i>
          </button>
        </td>
      </tr>
      {showAlert && (
        <div className={`custom-alert ${alertType}`}>
          <i
            className={`fas ${
              alertType === "confirm"
                ? "fa-question-circle"
                : alertType === "success"
                ? "fa-check-circle"
                : "fa-info-circle"
            }`}
          ></i>
          <p>{alertMessage}</p>
          {alertType === "confirm" ? (
            <div className="alert-buttons">
              <button onClick={confirmDelete}>Sí</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          ) : (
            <button className="close-alert" onClick={closeAlert}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Elements;
