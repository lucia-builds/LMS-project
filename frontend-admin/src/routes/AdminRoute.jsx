import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const role = localStorage.getItem('role');

  if (!isLoggedIn || role !== 'admin') {
    
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;