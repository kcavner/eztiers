// ProtectedRoute.js
import React  from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await axios.get('/api/auth/check');
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error(error);
      }
    }

    checkAuth();
  }, []);

  return {
    isAuthenticated,
    // Any other authentication-related functions or values
  };
};

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
);
};

export default ProtectedRoute;