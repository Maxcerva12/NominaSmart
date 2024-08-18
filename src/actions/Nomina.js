import { db } from "../firebase/Confing-firebase";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { AuthTypes } from "../types/AuthTypes";

export const CrearRegistro = (registroData) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const nuevoRegistro = {
      fecha: Timestamp.fromDate(new Date()), // Usamos Timestamp.fromDate()
      nombre: registroData.nombre,
      apellidos: registroData.apellidos,
      cc: registroData.cc,
      pago: registroData.cantidadFinal,
    };

    try {
      const userNominaCollectionRef = collection(db, "usuarios", uid, "nomina");
      const docRef = await addDoc(userNominaCollectionRef, nuevoRegistro);

      // Convertimos el Timestamp a Date antes de despacharlo
      const registroConFechaJS = {
        ...nuevoRegistro,
        fecha: nuevoRegistro.fecha.toDate(),
        id: docRef.id,
      };

      dispatch({
        type: AuthTypes.nominaAdd,
        payload: registroConFechaJS,
      });
    } catch (error) {
      dispatch({ type: AuthTypes.nominaError, payload: error.message });
    }
  };
};

export const leerRegistros = (data) => {
  return {
    type: AuthTypes.nominaLoad,
    payload: data,
  };
};

export const BorrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const registroRef = doc(db, "usuarios", uid, "nomina", id);
      await deleteDoc(registroRef);

      dispatch({
        type: AuthTypes.nominaDelete,
        payload: id,
      });
    } catch (error) {
      dispatch({ type: AuthTypes.nominaError, payload: error.message });
    }
  };
};

export const EditarRegistro = (id, registroData) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const registroActualizado = {
      ...registroData,
      fecha: Timestamp.fromDate(new Date()), // Actualizamos la fecha
    };

    try {
      const registroRef = doc(db, "usuarios", uid, "nomina", id);
      await updateDoc(registroRef, registroActualizado);

      const registroConFechaJS = {
        ...registroActualizado,
        fecha: registroActualizado.fecha.toDate(),
        id: id,
      };

      dispatch({
        type: AuthTypes.nominaEdit,
        payload: registroConFechaJS,
      });
    } catch (error) {
      dispatch({ type: AuthTypes.nominaError, payload: error.message });
    }
  };
};

export const Limpiar = () => {
  return {
    type: AuthTypes.nominaClean,
  };
};
