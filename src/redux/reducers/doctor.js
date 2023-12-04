import { GET_DOCTOR, GET_DOCTORS, CLEAR_PROFILE, SPECIFIED_DOCTORS } from "../ActionConstants";

const initialState = {
  doctorSelected: null,
  doctorsList: [],
  loading: true,
  specification:""
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctorsList: payload,
        loading: false,
        specification:""
      };
    case GET_DOCTOR:
      return {
        ...state,
        doctorSelected: payload,
        loading: false, specification:""
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        doctorSelected: null,
        loading: false, specification:""
      };
      case SPECIFIED_DOCTORS:
         return {
          ...state,
          specification:payload
         }
    default:
      return state;
  }
}
