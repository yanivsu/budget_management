import { CHECK_CREDENTIALS } from "../actions/userActions";

const initialUserState = {
  isValidUser: false,
  error: null,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case CHECK_CREDENTIALS:
      return {
        ...state,
        isValidUser: action.payload,
      };
    case "LOGIN_ERROR": // handle login error action
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
