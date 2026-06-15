import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const navigate = useNavigate();

  // Get real user name from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.name : "Student";
  const userEmail = user ? user.email : "";

  // Sidebar tab style helper
  const tabStyle = (tab) => ({
    background:
      activeTab === tab ? "rgba(96,165,250,0.15)" : "transparent",
    padding: "14px 16px",
    borderRadius: "12px",
    cursor: "pointer",
    color: activeTab === tab ? "#60a5fa" : "white",
    fontWeight: "600",
    marginBottom: "8px",
    transition: "0.3s",
    borderLeft: activeTab === tab
      ? "3px solid #60a5fa"
      : "3px solid transparent",
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px 16px",
        color: "white",
        alignItems: "flex-start",
      }}
    >
      {/* ── SIDEBAR ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "240px",
          flexShrink: 0,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "30px 20px",
          position: "sticky",
          top: "100px",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Profile */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "12px",
              border: "3px solid #60a5fa",
            }}
          />
          <h3 style={{ color: "white", marginBottom: "4px" }}>
            {userName}
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>
            {userEmail}
          </p>
        </div>

        <p
          style={{
            color: "#60a5fa",
            fontWeight: "700",
            fontSize: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "15px",
            paddingLeft: "4px",
          }}
        >
          Student Panel
        </p>

        <div onClick={() => setActiveTab("courses")} style={tabStyle("courses")}>
          📘 My Courses
        </div>
        <div onClick={() => setActiveTab("progress")} style={tabStyle("progress")}>
          📈 Progress
        </div>
        <div onClick={() => setActiveTab("certificates")} style={tabStyle("certificates")}>
          🏆 Certificates
        </div>
        <div onClick={() => setActiveTab("settings")} style={tabStyle("settings")}>
          ⚙️ Settings
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, minWidth: 0 }}>

        {/* PAGE TITLE — always visible */}
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "8px",
            background: "linear-gradient(to right, #60a5fa, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Student Dashboard
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
          Welcome back, {userName}! 👋 Track your learning journey.
        </p>

        {/* STATS ROW — always visible */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {[
            { title: "Courses Enrolled", value: "04" },
            { title: "Hours Learned",    value: "120+" },
            { title: "Certificates",     value: "03" },
            { title: "Projects Done",    value: "12" },
          ].map((item, index) => (
            <div
              key={index}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "25px",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                transition: "0.3s",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#60a5fa",
                  fontSize: "36px",
                  marginBottom: "8px",
                }}
              >
                {item.value}
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ── TAB: MY COURSES ── */}
        {activeTab === "courses" && (
          <div>
            <h2 style={{ color: "#60a5fa", marginBottom: "25px" }}>
              📘 My Enrolled Courses
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Full Stack Development",
                  mentor: "AI Mentor: Virat Kohli",
                  progress: 70,
                  id: "full-stack-development",
                },
                {
                  title: "Data Structures & Algorithms",
                  mentor: "AI Mentor: Cristiano Ronaldo",
                  progress: 45,
                  id: "data-structures-algorithms",
                },
                {
                  title: "Artificial Intelligence",
                  mentor: "AI Mentor: Elon Musk",
                  progress: 30,
                  id: "artificial-intelligence",
                },
                {
                  title: "Interview Preparation",
                  mentor: "AI Mentor: Shah Rukh Khan",
                  progress: 60,
                  id: "interview-preparation",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "22px",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      marginBottom: "6px",
                      fontSize: "16px",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "13px",
                      marginBottom: "15px",
                    }}
                  >
                    {course.mentor}
                  </p>

                  {/* Progress bar */}
                  <div
                    style={{
                      background: "#1e293b",
                      height: "8px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: `${course.progress}%`,
                        background:
                          "linear-gradient(to right, #2563eb, #60a5fa)",
                        height: "100%",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "#60a5fa",
                      fontSize: "13px",
                      marginBottom: "15px",
                    }}
                  >
                    {course.progress}% Completed
                  </p>

                  <button
                    onClick={() => navigate(`/learn/${course.id}`)}
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(to right, #2563eb, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Continue Learning →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB: PROGRESS ── */}
        {activeTab === "progress" && (
          <div>
            <h2 style={{ color: "#60a5fa", marginBottom: "25px" }}>
              📈 Learning Progress
            </h2>
            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              {[
                { name: "Full Stack Development", progress: 70, color: "#60a5fa" },
                { name: "Data Structures & Algorithms", progress: 45, color: "#a78bfa" },
                { name: "Artificial Intelligence", progress: 30, color: "#34d399" },
                { name: "Interview Preparation", progress: 60, color: "#f59e0b" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "22px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                    }}
                  >
                    <p style={{ color: "white", fontWeight: "600" }}>
                      {item.name}
                    </p>
                    <p style={{ color: item.color, fontWeight: "700" }}>
                      {item.progress}%
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#1e293b",
                      height: "10px",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${item.progress}%`,
                        background: item.color,
                        height: "100%",
                        borderRadius: "20px",
                        transition: "width 0.8s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div
              style={{
                marginTop: "30px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "22px",
              }}
            >
              <h3
                style={{ color: "#60a5fa", marginBottom: "18px" }}
              >
                Recent Activity
              </h3>
              {[
                { icon: "✅", text: "Completed React Module 4" },
                { icon: "🔥", text: "7 Days Learning Streak!" },
                { icon: "🎯", text: "Solved 15 DSA Problems" },
                { icon: "🏆", text: "Earned Frontend Badge" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom:
                      index < 3
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                    color: "#cbd5e1",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB: CERTIFICATES ── */}
        {activeTab === "certificates" && (
          <div>
            <h2 style={{ color: "#60a5fa", marginBottom: "25px" }}>
              🏆 My Certificates
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Frontend Development",
                  date: "March 2025",
                  color: "#60a5fa",
                },
                {
                  title: "React.js Mastery",
                  date: "April 2025",
                  color: "#a78bfa",
                },
                {
                  title: "DSA Completion",
                  date: "May 2025",
                  color: "#34d399",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${cert.color}33`,
                    borderRadius: "16px",
                    padding: "30px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "48px",
                      marginBottom: "15px",
                    }}
                  >
                    🏆
                  </div>
                  <h3
                    style={{
                      color: cert.color,
                      marginBottom: "8px",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    Issued: {cert.date}
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      border: `1px solid ${cert.color}`,
                      color: cert.color,
                      padding: "8px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB: SETTINGS ── */}
        {activeTab === "settings" && (
          <div>
            <h2
              style={{ color: "#60a5fa", marginBottom: "25px" }}
            >
              ⚙️ Account Settings
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "30px",
                maxWidth: "500px",
              }}
            >
              {/* Name field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={userName}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "white",
                    fontSize: "15px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={userEmail}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "white",
                    fontSize: "15px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              {/* Dark mode toggle */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0",
                  borderTop:
                    "1px solid rgba(255,255,255,0.06)",
                  marginBottom: "20px",
                }}
              >
                <span style={{ color: "#cbd5e1" }}>
                  🌙 Dark Mode
                </span>
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #2563eb, #3b82f6)",
                    color: "white",
                    padding: "4px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Enabled
                </span>
              </div>

              <button
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(to right, #2563eb, #3b82f6)",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;