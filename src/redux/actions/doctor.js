import axios from "axios";

import {
  GET_DOCTOR,
  GET_DOCTORS,
  CLEAR_PROFILE,
  GET_BOOKING,
  SPECIFIED_DOCTORS,
  DOCTORS_LOADING,
} from "../ActionConstants";

// Get all doctors
export const getDoctors = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctors`
    );

    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

// getDoctorsSorted
export const getDoctorsSorted = (long, lat) => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctorsSorted`,
      { long, lat },
      config
    );

    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
    console.log(res)
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

// getDoctorsBySearch
export const getDoctorsBySearch = (s) => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  const config = {
    headers: {
      "Content-Type": "application/json" // this shows the expected content type
    },
  };
  dispatch({type:DOCTORS_LOADING})
  const res= await fetch("https://doctrec--preshitx.repl.co/api/?symptoms="+s)
  const d = await res.json();
  // console.log(d)
   var searchText=d.predicted_specialization
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctorsBySearch`,
      { searchText },
      config
    );
  
    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
    dispatch({
      type:SPECIFIED_DOCTORS,payload:searchText
    })
    // console.log(res)
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

// Get a doctor selected
export const getDoctor = (id) => async (dispatch) => {
  try {
    
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctor/${id}`
    );

    dispatch({
      type: GET_DOCTOR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

export const getDoctorByUserid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctorByUserid/${id}`
    );

    dispatch({
      type: GET_DOCTOR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};
