import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

async function checkAuth() {
  try {
    const response = await axiosInstance.get('/api/users/auth');
    const data = response.data; // You probably want to access the data here

    if (response.status === 200 && data.isAuthenticated === true) {
      return true; // User is authenticated
    } else {
      return false; // User is not authenticated
    }
  } catch (error) {
    console.error('An error occurred while checking authentication:', error);
    return false; // Assume not authenticated in case of an error
  }
}

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchAuthStatus() {
      const authStatus = await checkAuth();
      setIsAuthenticated(authStatus);
    }

    fetchAuthStatus();
    console.log(isAuthenticated)
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;