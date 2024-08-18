import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/Confing-firebase";
import { login } from "../actions/AuthActions";
import LoginScreen from "../pages/LoginScreen";
import RegistreScreen from "../pages/RegistreScreen";
import Approuter from "./AppRouter";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { LoadData } from "../helpers/LoadData";
import LoadingScreen from "../components/LoadingScreen"; // Importa el componente de carga

const AuthRouter = () => {
  const dispatch = useDispatch();
  const [isLog, setIsLog] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setIsLog(true);
        dispatch(LoadData(user.uid));
      } else {
        setIsLog(false);
      }
      setLoading(false); // Actualiza el estado de carga
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />; // Muestra la pantalla de carga mientras se verifica la autenticación
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes auth={isLog}>
              <LoginScreen />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes auth={isLog}>
              <RegistreScreen />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes auth={isLog}>
              <Approuter />
            </PrivateRoutes>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
