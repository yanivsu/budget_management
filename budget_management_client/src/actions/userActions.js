import axios from "axios";

const API_URL = "http://localhost:8005/user/";
export const CHECK_CREDENTIALS = "checkCredentials";
// Action creators

export const checkCredentials =
  (user_name, user_password) => async (dispatch) => {
    try {
      console.log("Checking user credentials");
      // console.log(user_name, user_password);
      const response = await axios.post(API_URL + "login", {
        user_name,
        user_password,
      });
      console.log(response.data);
      dispatch({
        type: CHECK_CREDENTIALS,
        payload: response.data,
      });
    } catch (error) {
      // log the server's error response
      console.error(error.response.data);
      // dispatch login error action
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response.data.Error,
      });
    }
  };
