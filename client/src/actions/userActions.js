import axios from "axios";

const API_URL = "http://localhost:8005/user/";
export const CHECK_CREDENTIALS = "checkCredentials";
// Action creators

export const checkCredentials =
  (user_name, user_password) => async (dispatch) => {
    try {
      const response = await axios.post(
        API_URL + "login",
        {
          user_name,
          user_password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch({
        type: CHECK_CREDENTIALS,
        payload: response.data.auth,
      });
      // saves user details in local storage
      localStorage.setItem("userName", response.data.auth.userName);
      localStorage.setItem("userId", response.data.auth.userId);
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
