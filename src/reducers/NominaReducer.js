import { AuthTypes } from "../types/AuthTypes";

const initialState = {
  nominaItems: [],
  loading: false,
  error: null,
};

export const NominaReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.nominaLoad:
      return {
        ...state,
        nominaItems: action.payload,
        loading: false,
        error: null,
      };

    case AuthTypes.nominaAdd:
      return {
        ...state,
        nominaItems: [...state.nominaItems, action.payload],
        error: null,
      };

    case AuthTypes.nominaRead:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AuthTypes.nominaDelete:
      return {
        ...state,
        nominaItems: state.nominaItems.filter(
          (item) => item.id !== action.payload
        ),
        error: null,
      };

    case AuthTypes.nominaEdit:
      return {
        ...state,
        nominaItems: state.nominaItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        error: null,
      };

    case AuthTypes.nominaClean:
      return initialState;

    case AuthTypes.nominaError:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
