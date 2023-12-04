import { GET_DOCTOR, GET_DOCTORS, CLEAR_PROFILE, SPECIFIED_DOCTORS, DOCTORS_LOADING } from "../ActionConstants";

const initialState = {
  doctorSelected: null,
  doctorsList: [],
  loading: true,
  specification:"",
  searchloading:true
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctorsList: payload,
        loading: false,
        specification:"",searchloading:false
      };
    case GET_DOCTOR:
      return {
        ...state,
        doctorSelected: payload,searchloading:false,
        loading: false, specification:""
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        doctorSelected: null,
        loading: false, specification:"",searchloading:false
      };
      case SPECIFIED_DOCTORS:
         return {
          ...state,
          specification:payload,searchloading:false
         }
         case DOCTORS_LOADING:
          return {
            ...state,searchloading:true
          }
    default:
      return state;
  }
}
