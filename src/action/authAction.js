import { authType } from "./type";
import axios from "../helper/axios";

export const signin = (payload) => {
  return async (dispatch) => {
    dispatch({ type: authType.LOGIN_REQUEST });
    try {
      const res = await axios.post("/user/signin", { payload });
      if (res.status === 202) {
        const { user } = res.data;
        localStorage.setItem("status", true);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        dispatch({
          type: authType.LOGIN_SUCCESS,
          payload: { user: user },
        });
      }
    } catch (error) {
      dispatch({
        type: authType.LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
};

export const isLogged = () => {
  return async (dispatch) => {
    const status = localStorage.getItem("status");
    if (status) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authType.LOGIN_SUCCESS,
        payload: { user: user },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authType.SIGNOUT_REQUEST });
    try {
      const res = await axios.post("/user/signout");
      if (res.status == 202) {
        localStorage.clear();
        dispatch({ type: authType.SIGNOUT_SUCCESS });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
