import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Auth from '../utils/auth'



const ProtectedRoute = () => {

  const checkAuth = () => {
    const token = Auth.getToken(); // Get the token using Auth class
    if (token) {
      try {
        return !Auth.isTokenExpired(token)
      } catch (error) {
        console.log(error)
        return false;
      }
    }
    return false;
  };
  return(
     checkAuth() ? <Outlet /> : <Navigate to="/" />
  )

};

export default ProtectedRoute;