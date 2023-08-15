import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Auth from '../utils/auth'



const ProtectedRoute = () => {

  const checkAuth = () => {
    const token = Auth.getToken(); // Get the token using Auth class
    if (token) {
      try {
        return Auth.isTokenExpired(token) ? false : true
      } catch (error) {
        console.log(error)
        return false;
      }
    }
    console.log('check returning false', token)
    return false;
  };
  return(
     checkAuth() ? <Outlet /> : <Navigate to="/login" />
  )

};

export default ProtectedRoute;