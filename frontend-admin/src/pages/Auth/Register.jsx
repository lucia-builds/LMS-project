import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdPersonAdd, MdArrowBack } from 'react-icons/md';
import { FaJava, FaGitAlt, FaGithub, FaDocker, FaPython, FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus, SiTypescript } from 'react-icons/si';

const techIcons = [
  // Left side
  { Icon: FaJava, className: "top-[10%] left-[6%] text-orange-500/30", size: 48, delay: "0s", duration: "8s" },
  { Icon: FaReact, className: "top-[25%] left-[18%] text-cyan-500/30", size: 36, delay: "1.5s", duration: "6.5s" },
  { Icon: SiTypescript, className: "top-[35%] left-[26%] text-blue-500/30", size: 38, delay: "3s", duration: "8.5s" },
  { Icon: FaGitAlt, className: "top-[48%] left-[8%] text-red-500/30", size: 40, delay: "2s", duration: "7s" },
  { Icon: FaGithub, className: "top-[68%] left-[15%] text-slate-400/40", size: 52, delay: "4s", duration: "9s" },
  { Icon: FaNodeJs, className: "top-[82%] left-[7%] text-green-500/30", size: 42, delay: "2.5s", duration: "9.5s" },

  // Right side
  { Icon: FaDocker, className: "top-[8%] right-[8%] text-blue-500/30", size: 56, delay: "1s", duration: "10s" },
  { Icon: SiCplusplus, className: "top-[24%] right-[22%] text-indigo-500/30", size: 44, delay: "3s", duration: "8s" },
  { Icon: FaCss3Alt, className: "top-[40%] right-[10%] text-blue-400/30", size: 38, delay: "0.5s", duration: "7.5s" },
  { Icon: FaHtml5, className: "top-[56%] right-[24%] text-orange-600/30", size: 34, delay: "2s", duration: "7s" },
  { Icon: FaJs, className: "top-[72%] right-[8%] text-yellow-500/30", size: 38, delay: "3.5s", duration: "8.5s" },
  { Icon: FaPython, className: "top-[86%] right-[18%] text-yellow-500/30", size: 48, delay: "5s", duration: "7.5s" }
];

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

 const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    
    if (formData.name && formData.email && formData.password) {
      
      localStorage.setItem('isLoggedIn', 'true'); 
      localStorage.setItem('role', 'student');
      
      localStorage.setItem('user', JSON.stringify({ name: formData.name })); 
      
      navigate('/home'); 
    } else {
      setError('Please fill all required fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-purple/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[120px]" />
        
        {/* Floating tech icons */}
        {techIcons.map((item, idx) => (
          <item.Icon
            key={idx}
            size={item.size}
            className={`absolute animate-float transition-all duration-500 ${item.className}`}
            style={{
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          />
        ))}
      </div>

      <div className="absolute top-8 left-8 z-10">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <MdArrowBack className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
      </div>

      <div className="glass-card max-w-md w-full p-10 rounded-3xl neon-border relative z-10">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <MdPersonAdd size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Join the future of learning today
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleRegister}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-start gap-3">
              <span className="text-red-400 font-bold">!</span>
              <p className="text-sm text-red-200">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white placeholder-gray-500 transition-colors"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white placeholder-gray-500 transition-colors"
                placeholder="student@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white placeholder-gray-500 transition-colors"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-accent-purple hover:text-accent-cyan font-semibold transition-colors">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;