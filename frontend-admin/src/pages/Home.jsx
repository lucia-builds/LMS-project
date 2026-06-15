import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#050a19', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '40px', borderRadius: '24px', backdropFilter: 'blur(10px)' }}>
        <span style={{ color: '#ef4444', fontSize: '12px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>Secure Console Gateway</span>
        <h1 style={{ fontSize: '36px', fontWeight: '900', marginTop: '12px', marginBottom: '16px', color: 'white' }}>Admin Only</h1>
        <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '32px', fontSize: '15px' }}>
          Authorized systems operations panel. Please authenticate to access backend courses, metrics management, and student enrollments tracking.
        </p>
        
        <button 
          onClick={() => navigate('/login')}
          style={{ width: '100%', background: 'linear-gradient(135deg, #ef4444, #b91c1c)', color: 'white', border: 'none', padding: '14px 0', borderRadius: '12px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 24px rgba(239,68,68,0.25)' }}
        >
          Sign In To Admin Dashboard
        </button>
      </div>
    </div>
  );
};

export default Home;