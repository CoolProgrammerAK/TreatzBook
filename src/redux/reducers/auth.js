import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL_MSG,
  LOGIN_FAIL_MSG,
} from "../ActionConstants/index";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  loginMessage:"",
  registerMessage:""
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        loginMessage:"",
        registerMessage:""

      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        loginMessage:"",
        registerMessage:""
      };
      case REGISTER_FAIL_MSG:
        return {
          ...state,
          loginMessage:"",
          registerMessage:payload
         }
      case LOGIN_FAIL_MSG:
         return {
          ...state,
          loginMessage:payload,
          registerMessage:""
         }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading:false,
        loginMessage:"",
        registerMessage:""
      };
  

    
    default:
      return state;
  }
}
