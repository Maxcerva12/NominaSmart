import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { AuthReducer } from "../reducers/AuthReducers";
import { thunk } from "redux-thunk";
import { NominaReducer } from "../reducers/NominaReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  nomina: NominaReducer, // Corregido de "nommina" a "nomina"
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
