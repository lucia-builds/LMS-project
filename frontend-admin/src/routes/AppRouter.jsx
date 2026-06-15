import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login'; // Using the standard login page copy
import Register from '../pages/Auth/Register';
import AdminDashboardMain from '../pages/Courses/List'; 
import AdminRoute from './AdminRoute';

const AppRouter = () => {
  return (
    <Routes>
      {/* 1. When opening localhost:4000, see the Homepage */}
      <Route path="/" element={<Home />} />

      {/* 2. Authentication Paths */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 3. Secure Admin Panel Workspace */}
      <Route 
        path="/admin/*" 
        element={
          <AdminRoute>
            <AdminDashboardMain />
          </AdminRoute>
        } 
      />
    </Routes>
  );
};

export default AppRouter;