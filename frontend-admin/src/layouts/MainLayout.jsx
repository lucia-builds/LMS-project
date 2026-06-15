import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const MainLayout = ({ children }) => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(to bottom, #020817, #0a0f1e, #020817)",
      width: "100%",
    }}>
      {/* Global Integrated Navigation Head */}
      <Navbar />
      
      {/* Dynamic Main Dashboard Frame */}
      <div style={{ flex: 1, width: "100%" }}>
        {children}
      </div>
      
      {/* Global Footnotes */}
      <Footer />
    </div>
  );
};

export default MainLayout;