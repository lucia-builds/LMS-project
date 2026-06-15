import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is logged in based on the login page's storage key
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // If NOT logged in, redirect to the login screen
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected component normally
  return children;
};

export default PrivateRoute;