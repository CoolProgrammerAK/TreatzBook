import React, { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { getDoctors, getDoctorsSorted } from "../../redux/actions/doctor";
import { connect } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";
import Hospital from "../../assets/svgs/dashboard-hospital.svg";
import Searchbar from "./Searchbar";
import ReactLoading from 'react-loading';

const PatientDashboard = ({
  doctors: { loading, doctorsList,specification, searchloading },
  getDoctors,
  getDoctorsSorted,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  useEffect(() => {
    if (checked) {
      // getDoctorsSorted(25.087626, 55.151134);
      getDoctorsSorted(long, lat);
    } else {
      getDoctors();
    }
  }, [checked]);

  useEffect(() => {
    getDoctors();
  }, [getDoctors]);

  return (
    <div className="dashboard__container ">
      <div class="dashboard">
        <div className="dashboard__navbar">
          <DashboardNavbar
            links={[
              ["Doctors", "/dashboard"],
              ["Appointments", "/appointments"],
            ]}
          />
        </div>
      </div>
      {/* <h1 className="dashboard__heading">Dashboard</h1> */}
      <Searchbar></Searchbar>
      {/* sort section */}
      {specification && <div style={{fontSize:'1.8rem',margin:'2rem 20rem'}}>Based on the symptom, go to <span style={{fontWeight:'bold'}}>{specification}</span></div>}
      <div className="dashboard__sort">
        <div className="dashboard__sort--title" style={{textDecoration:'underline'}}>List of doctors</div>
        {!specification && <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          {"  "}
          Sort by distance
        </label>}
      </div>
       
      {/* cards */}
      {searchloading ? (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
       <ReactLoading type={'spin'} color={'#444cf7'} height={'70px'} width={'70px'} />
       </div>
      ) : (
        <div className="dashboard__cards">
          {doctorsList.length > 0 ? (
            doctorsList.map((doctor) => (
              <div className="dashboard__card">
                <img
                  className="round-img dashboard__card--hospital"
                  src={Hospital}
                  alt=""
                />
                <div className="dashboard__card--contents">
                  <h1 className="dashboard__card--title">
                    <span className="dashboard__card--label">
                      Hospital Name -{"  "}
                    </span>
                    {doctor.hospitalName}
                  </h1>
                  <h2 className="dashboard__card--item">
                    <span className="dashboard__card--label">
                      Doctor Name -{"  "}
                    </span>
                    {doctor.doctorName}
                  </h2>
                  <div className="dashboard__card--item">
                    <span className="dashboard__card--label">
                      Specialization -{"  "}
                    </span>
                    {doctor.specialization}
                  </div>
                  <div className="dashboard__card--item">
                    <div className="dashboard__card--address-item">
                      <span className="dashboard__card--label">
                        Hospital Address -{"  "}
                      </span>
                      {doctor.hospitalAddress}
                    </div>
                    <div className="dashboard__card--item">
                      <span className="dashboard__card--label">
                        City -{"  "}
                      </span>
                      {doctor.city}
                    </div>
                    <div className="dashboard__card--item">
                      <span className="dashboard__card--label">
                        State -{"  "}
                      </span>
                      {doctor.state}
                    </div>
                    <div className="dashboard__card--item">
                      <span className="dashboard__card--label">
                        Country -{"  "}
                      </span>
                      {doctor.country}
                    </div>
                  </div>
                </div>
                <Link
                  target="_blank"
                  to={`/doctor/${doctor._id}`}
                  className="dashboard__card--bookbtn"
                >
                  Book Appointment
                </Link>
              </div>
            ))
          ) : (
            <h4>No Doctors Available</h4>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps, { getDoctors, getDoctorsSorted })(
  PatientDashboard
);
