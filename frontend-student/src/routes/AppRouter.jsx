import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import StudentProfile from '../pages/Profile/StudentProfile';
import PrivateRoute from './PrivateRoute';

const StudentDashboardPlaceholder = () => (
  <div style={{ padding: '60px', color: 'white', background: '#0f172a', minHeight: '100vh', textAlign: 'center' }}>
    <h1 style={{ fontSize: '32px', fontWeight: '800' }}>Student Learning Center Hub</h1>
    <p style={{ color: '#64748b', marginTop: '10px' }}>Your interns will add class modules here.</p>
  </div>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute><StudentDashboardPlaceholder /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><StudentProfile /></PrivateRoute>} />
    </Routes>
  );
};

export default AppRouter;