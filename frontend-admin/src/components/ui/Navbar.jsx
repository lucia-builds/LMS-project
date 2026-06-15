import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get logged in user name from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.name : "Student";

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  // Helper: is this link active?
  const isActive = (path) => location.pathname === path;

  // Style for each nav link
  const linkStyle = (path) => ({
    textDecoration: "none",
    color: isActive(path) ? "#60a5fa" : "#e2e8f0",
    fontWeight: "600",
    padding: "10px 18px",
    borderRadius: "10px",
    background: isActive(path) ? "rgba(96,165,250,0.12)" : "transparent",
    border: isActive(path)
      ? "1px solid rgba(96,165,250,0.3)"
      : "1px solid transparent",
    borderBottom: isActive(path)
      ? "2px solid #60a5fa"
      : "2px solid transparent",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "14px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        zIndex: "1000",
        flexWrap: "nowrap",
        gap: "10px",
      }}
    >
      {/* LOGO */}
      <div
        onClick={() => navigate("/home")}
        style={{
          cursor: "pointer",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {/* StarClass AI Logo */}
        <div>
          <h1 style={{
            color: "#60a5fa",
            fontSize: "20px",
            fontWeight: "900",
            margin: 0,
            whiteSpace: "nowrap",
            letterSpacing: "-0.5px",
          }}>
            StarClass AI
          </h1>
        </div>

        {/* Divider */}
        <div style={{
          width: "1px",
          height: "28px",
          background: "rgba(255,255,255,0.1)",
        }} />

        {/* UptoSkills Logo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <span style={{ fontSize: "14px" }}>🎓</span>
            <span style={{
              fontSize: "14px",
              fontWeight: "900",
              letterSpacing: "0.3px",
              lineHeight: 1,
            }}>
              <span style={{ color: "#f97316" }}>UPTO</span>
              <span style={{ color: "#2dd4bf" }}>SKILLS</span>
            </span>
          </div>
          <p style={{
            color: "#475569",
            fontSize: "9px",
            margin: 0,
            letterSpacing: "0.3px",
            paddingLeft: "18px",
          }}>
            Let's Make Freshers Employable!
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexShrink: 0,
        }}
      >
        {/* DESKTOP NAV LINKS */}
        <div className="nav-links" style={{ gap: "10px" }}>

          {/* FIX: Home now goes to /home not / */}
          <Link to="/home" style={linkStyle("/home")}>
            Home
          </Link>

          <Link to="/courses" style={linkStyle("/courses")}>
            Courses
          </Link>

          <Link to="/dashboard" style={linkStyle("/dashboard")}>
            Dashboard
          </Link>
        </div>

        {/* USER NAME + LOGOUT */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* Welcome message */}
          <span
            className="nav-links"
            style={{
              color: "#94a3b8",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            👋 {userName}
          </span>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              background: "rgba(239,68,68,0.1)",
              color: "#f87171",
              border: "1px solid rgba(239,68,68,0.3)",
              padding: "8px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(239,68,68,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(239,68,68,0.1)";
            }}
          >
            Logout
          </button>
        </div>

        {/* HAMBURGER BUTTON - mobile only */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "8px 10px",
            fontSize: "20px",
            cursor: "pointer",
            color: "#e2e8f0",
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <span
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            style={{
              color: "#f87171",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Logout
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;