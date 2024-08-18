import { AuthTypes } from "../types/AuthTypes";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthTypes.login:
      return action.payload;
    case AuthTypes.logout:
      return {};
    default:
      return state;
  }
};
