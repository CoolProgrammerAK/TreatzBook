import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_FAIL_MSG,
  REGISTER_FAIL_MSG,
} from "../ActionConstants/index";
import setAuthToken from "../../utils/setAuthToken";
import { toast } from "react-toastify";

// load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
console.log(localStorage)
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth`);
    // console.log("data", res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// register
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/register`,
      formData,
      config
    );
console.log(res)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {

    console.log(err);
    dispatch({
      type: REGISTER_FAIL,
    });
    toast.error(err.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
  }
};

// login
export const login = (email, password) => async (dispatch) => {
  //  console.log("login here", email, password);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/login`,
      {
        email,
        password,
      },
      config
    );

    // console.log(res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error(err.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
  }
};

// logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
