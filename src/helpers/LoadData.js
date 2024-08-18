

import { db } from "../firebase/Confing-firebase";
import { collection, getDocs } from "firebase/firestore";
import { AuthTypes } from "../types/AuthTypes";

export const LoadData = (uid) => {
  return async (dispatch) => {
    dispatch({ type: AuthTypes.nominaRead }); // Indica que la carga ha comenzado
    try {
      const nominaCollectionRef = collection(db, "usuarios", uid, "nomina");
      const querySnapshot = await getDocs(nominaCollectionRef);
      const nominaData = [];
      querySnapshot.forEach((doc) => {
        nominaData.push({ id: doc.id, ...doc.data() });
      });
      console.log("Datos de nómina cargados:", nominaData);
      dispatch({ type: AuthTypes.nominaLoad, payload: nominaData });
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      dispatch({ type: AuthTypes.nominaError, payload: error.message });
    }
  };
};
