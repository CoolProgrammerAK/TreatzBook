import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import authLogo from "../../assets/svgs/auth-logo.svg";
import { IconButton } from "@mui/material";
import { useRouter } from "../../utils/useRouter";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
// import { Redirect } from "react-router-dom";
import {Close} from '@mui/icons-material'
import { ToastContainer } from "react-toastify";
const LoginContainer = ({ isAuthenticated, login, message }) => {
  let navigate = useNavigate();
  const router = useRouter();
  console.log(router)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(isAuthenticated)
  if (isAuthenticated) {
    return navigate("/dashboard")
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
console.log(message)
  return (
    <div className="login">
      
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover={false}
theme="light"
/>
      <div className="login__sidebar">
        <div className="login__sidebar-logo">
          <img src={authLogo} alt="authlogo" />
        </div>
        <div className="login__sidebar-links">
          <p>Don't have an account?</p>
          <Link to="/register" className="login__sidebar-links--auth">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="login__box">
        <IconButton onClick={() => router.push("/")} className="close">
          <Close />
        </IconButton>
        <h1 className="heading heading--primary heading--big">Sign In</h1>
        <form
          action=""
          className="form login__box-form"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              id="email"
              onChange={(e) => onChange(e)}
              name="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              id="password"
              onChange={(e) => onChange(e)}
              name="password"
              required
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
          </div>
          <button
            className="button button--primary login__box-form--button"
          >
            Sign In
          </button>
        </form>

        <div className="login__sidebar-links login__box--mobilelink">
          <p>Don't have an account?</p>
          <Link to="/register" className="login__sidebar-links--auth">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => (console.log(state),{
  isAuthenticated: state.auth.isAuthenticated || false,
  message:state.auth.loginMessage
});

export default connect(mapStateToProps, { login })(LoginContainer);
