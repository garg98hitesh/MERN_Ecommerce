import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {  Route, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const ProtectedRoute = (props) => {
  console.log(props);
  console.log(props.children);
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
  const navigate = useNavigate();
 return props.isAdmin==false ? <div>Hello</div>:<div>Bye</div>

  return isAuthenticated === false || (user.role !== "admin") ? <Navigate to="/login" />:props.children;
    // <Fragment>
    //   {loading === false && (
    //     <Route
    //       {...rest}
    //       render={(props) => {
    //         if (isAuthenticated === false) {
    //           //return navigate('/login')
    //            return <Navigate to="/login" />;
    //         }

    //         if (isAdmin === true && user.role !== "admin") {
    //           //return navigate('/login')
    //            return <Navigate to="/login" />;
              
    //         }

    //         retdurn <Component {...props} />;
    //       }}
    //     />
    //   )}
    // </Fragment>
   
  ;
};

export default ProtectedRoute;