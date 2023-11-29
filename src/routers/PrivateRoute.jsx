import React from "react";
import { connect } from "react-redux";
import { Route, Navigate, redirect ,useNavigate} from "react-router-dom";
import LoginContainer from "../containers/auth/LoginContainer";

const PrivateRoute = ({
  auth: { isAuthenticated, loading },
  component: Component,
  ...rest
}) => {
  const navigate=useNavigate()
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
           navigate('/login')
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
