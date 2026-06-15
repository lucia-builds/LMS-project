import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const MainLayout = ({ children }) => {
  return (
    <div style={{ background: '#050a19', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '70px' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;