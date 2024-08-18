import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import FormAdd from "../components/FormAdd";
import Elements from "../components/Elements";
import "../Styles/AppScreen.css";
import Footer from "../components/Footer";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);
  const nominaItems = useSelector((state) => state.nomina.nominaItems);
  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const handleExcelDownload = () => {
    const wb = XLSX.utils.book_new();
    const wsData = nominaItems.map((item) => ({
      ...item,
      fecha: item.fecha.toDate().toLocaleDateString(), // Convierte la fecha a un formato legible
    }));
    const ws = XLSX.utils.json_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Nómina");
    XLSX.writeFile(wb, "nomina_completa.xlsx");
  };

  return (
    <div className="app-screen">
      <Navbar />
      <div className="app-container">
        <div className="app-header">
          <h1 className="welcome-message">Bienvenido, {name}</h1>
          <div className="action-buttons1">
            <button
              onClick={handlePrint}
              className="action-button1 print-button"
            >
              <i className="fas fa-print"></i> Imprimir
            </button>
            <button
              onClick={handleExcelDownload}
              className="action-button1 excel-button"
            >
              <i className="fas fa-file-excel"></i> Exportar a Excel
            </button>
          </div>
        </div>
        <div className="content-section">
          <FormAdd />
          <div className="table-container" ref={tableRef}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>C.C</th>
                  <th>Cantidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {nominaItems.map((elemento) => (
                  <Elements key={elemento.id} data={elemento} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppScreen;
