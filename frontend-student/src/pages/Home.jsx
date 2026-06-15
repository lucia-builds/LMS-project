import { useNavigate } from "react-router-dom";
import heroImage from "../assets/AI.jpg";
import viratImage from "../assets/virat.jpg";
import ronaldoImage from "../assets/ronaldo.jpg";
import srkImage from "../assets/srk.jpg";
import elonImage from "../assets/elon.jpg";
import messiImage from "../assets/messi.jpg";
import bezosImage from "../assets/bezos.jpg";
import pichaiImage from "../assets/pichai.jpg";
import sachinImage from "../assets/sachin.jpg";
import mernImage from "../assets/mern.jpg";
import dsaImage from "../assets/dsa.png";
import aiImage from "../assets/artificial.jpg";
import interviewImage from "../assets/interview.jpg";

/* ── DATA ── */
const mentors = [
  { name: "Virat Kohli",       subject: "Full Stack Development",       tag: "MERN Stack",     id: "full-stack-development",     image: viratImage,   students: "3.2K", emoji: "🏏", position: "center 15%" },
  { name: "Cristiano Ronaldo", subject: "Data Structures & Algorithms", tag: "DSA Master",     id: "data-structures-algorithms", image: ronaldoImage, students: "2.8K", emoji: "⚽", position: "center 25%" },
  { name: "Elon Musk",         subject: "Artificial Intelligence",      tag: "AI & ML",        id: "artificial-intelligence",    image: elonImage,    students: "4.1K", emoji: "🚀", position: "center top" },
  { name: "Shah Rukh Khan",    subject: "Interview Preparation",        tag: "Career Coach",   id: "interview-preparation",      image: srkImage,     students: "2.5K", emoji: "🎬", position: "center top" },
  { name: "Lionel Messi",      subject: "System Design",                tag: "Architecture",   id: "system-design",              image: messiImage,   students: "1.9K", emoji: "🌟", position: "center 15%" },
  { name: "Jeff Bezos",        subject: "Cloud & DevOps",               tag: "AWS Expert",     id: "cloud-devops",               image: bezosImage,   students: "2.2K", emoji: "☁️", position: "center 20%" },
  { name: "Sundar Pichai",     subject: "Android & Flutter",            tag: "Mobile Dev",     id: "android-flutter",            image: pichaiImage,  students: "1.7K", emoji: "📱", position: "center 15%" },
  { name: "Sachin Tendulkar",  subject: "Cybersecurity",                tag: "Ethical Hacking",id: "cybersecurity",              image: sachinImage,  students: "1.4K", emoji: "🛡️", position: "center top" },
];

const courses = [
  { title: "Full Stack Development",       image: mernImage,      id: "full-stack-development",     mentor: "Virat Kohli",       lessons: "48", hours: "36h", level: "Beginner → Pro", rating: "4.9", tag: "Most Popular" },
  { title: "Data Structures & Algorithms", image: dsaImage,       id: "data-structures-algorithms", mentor: "Cristiano Ronaldo", lessons: "60", hours: "48h", level: "Intermediate",   rating: "4.8", tag: "Trending 🔥"  },
  { title: "Artificial Intelligence",      image: aiImage,        id: "artificial-intelligence",    mentor: "Elon Musk",         lessons: "52", hours: "42h", level: "Advanced",       rating: "4.9", tag: "Hot Pick"     },
  { title: "Interview Preparation",        image: interviewImage, id: "interview-preparation",      mentor: "Shah Rukh Khan",    lessons: "35", hours: "28h", level: "All Levels",     rating: "4.7", tag: "New ✨"       },
];

const features = [
  { icon: "🤖", title: "AI Celebrity Mentors",  desc: "Your favourite icons teach real skills using cutting-edge AI personality and voice technology." },
  { icon: "🏗️", title: "Real-World Projects",   desc: "Build 10+ production-level apps — actual deployable products that strengthen your portfolio." },
  { icon: "🔄", title: "Switch Mentors Freely", desc: "Not vibing with your mentor? Switch anytime to any of our 8 celebrity AI mentors mid-course." },
  { icon: "🎯", title: "Placement Support",     desc: "Resume reviews, mock interviews and referrals. We don't stop until you're placed." },
  { icon: "🏆", title: "Verified Certificates", desc: "LinkedIn-ready certificates trusted by 500+ companies including Google, Amazon and Flipkart." },
  { icon: "👥", title: "Live Doubt Sessions",   desc: "Weekly live sessions with senior developers. Real-time help, not outdated forum answers." },
];

const testimonials = [
  { name: "Arjun Sharma", role: "SDE at Google",            avatar: "https://i.pravatar.cc/80?img=3", course: "DSA Mastery",    text: "Ronaldo's DSA course is insane. The way he explains recursion using football tactics — I'll never forget it. Got into Google in 4 months." },
  { name: "Priya Verma",  role: "Full Stack at Flipkart",   avatar: "https://i.pravatar.cc/80?img=5", course: "Full Stack Dev", text: "Virat teaching React sounds absurd but the focus he brings is exactly what I needed. Best investment I ever made in myself." },
  { name: "Rahul Nair",   role: "ML Engineer at Microsoft", avatar: "https://i.pravatar.cc/80?img=8", course: "AI Course",      text: "Elon's AI course is deeper than any university course. The neural network explanations blew my mind. Worth every single rupee." },
];

const stats = [
  { v: "10K+", l: "Students Enrolled",  i: "🎓" },
  { v: "8",    l: "Celebrity Mentors",  i: "⭐" },
  { v: "95%",  l: "Placement Rate",     i: "🚀" },
  { v: "24/7", l: "AI Support",         i: "🤖" },
];

/* ── SHARED STYLES ── */
const S = {
  gradText: { background: "linear-gradient(135deg, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  glass: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", backdropFilter: "blur(12px)" },
  label: { color: "#60a5fa", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: "700", display: "block", marginBottom: "14px" },
  h2: { color: "white", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: "800", lineHeight: "1.15", marginBottom: "16px", letterSpacing: "-0.5px" },
  sub: { color: "#64748b", lineHeight: "1.85", fontSize: "16px", maxWidth: "540px", margin: "0 auto" },
  btnPrimary: { background: "linear-gradient(135deg, #1d4ed8, #7c3aed)", color: "white", border: "none", padding: "15px 34px", borderRadius: "12px", fontSize: "15px", cursor: "pointer", fontWeight: "700", boxShadow: "0 8px 28px rgba(29,78,216,0.35)", transition: "all 0.25s ease" },
  btnGhost: { background: "transparent", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.25)", padding: "15px 34px", borderRadius: "12px", fontSize: "15px", cursor: "pointer", fontWeight: "600", transition: "all 0.25s ease" },
  btnOutline: { background: "transparent", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.3)", padding: "12px 26px", borderRadius: "10px", fontSize: "14px", cursor: "pointer", fontWeight: "600", transition: "0.25s", whiteSpace: "nowrap" },
};

/* ════════════════════════════════════════ */
const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      {/* ══ HERO ══ */}
      <div style={{ position: "relative", width: "100%", minHeight: "92vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", top: "-150px", left: "-100px", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-200px", right: "-100px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1400px", width: "100%", margin: "0 auto", padding: "60px 40px", display: "flex", alignItems: "center", gap: "70px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>

          {/* LEFT */}
          <div style={{ flex: "1 1 380px", minWidth: "300px" }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "100px", padding: "7px 18px", marginBottom: "24px" }}>
              <span style={{ fontSize: "13px" }}>⭐</span>
              <span style={{ color: "#7dd3fc", fontSize: "13px", fontWeight: "600" }}>India's #1 AI-Powered Learning Platform</span>
            </div>

            <h1 style={{ fontSize: "clamp(38px, 5vw, 68px)", color: "white", fontWeight: "900", lineHeight: "1.05", marginBottom: "20px", letterSpacing: "-2px" }}>
              Learn From<br />
              <span style={S.gradText}>Celebrity AI</span><br />
              Mentors
            </h1>

            <p style={{ fontSize: "17px", color: "#64748b", lineHeight: "1.9", marginBottom: "16px", maxWidth: "480px" }}>
              Learn from world-class AI mentors. Master in-demand tech skills —
              Full Stack, DSA, AI & Career growth — and land your dream job faster than ever.
            </p>

            

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
              <button style={S.btnPrimary} onClick={() => navigate("/login")}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(29,78,216,0.5)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(29,78,216,0.35)"; }}
              >
                Student Login
              </button>
              <button style={S.btnGhost} onClick={() => navigate("/dashboard")}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
              >
                My Dashboard
              </button>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex" }}>
                {["img=3","img=5","img=8","img=12"].map((q, i) => (
                  <img key={i} src={`https://i.pravatar.cc/36?${q}`} alt=""
                    style={{ width: "34px", height: "34px", borderRadius: "50%", border: "2px solid #0f172a", marginLeft: i === 0 ? "0" : "-9px", objectFit: "cover" }}
                  />
                ))}
              </div>
              <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
                <span style={{ color: "white", fontWeight: "700" }}>10,000+</span> students already learning
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ flex: "1 1 340px", position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", maxWidth: "520px", width: "100%" }}>
              <div style={{ position: "absolute", inset: "-3px", borderRadius: "27px", background: "linear-gradient(135deg, rgba(29,78,216,0.5), rgba(124,58,237,0.3), transparent 60%)", zIndex: 0 }} />
              <img src={heroImage} alt="StarClass AI"
                style={{ width: "100%", borderRadius: "24px", display: "block", position: "relative", zIndex: 1, boxShadow: "0 30px 80px rgba(0,0,0,0.5)", transform: "perspective(1200px) rotateY(-5deg)" }}
              />
              {/* floating badge — Placement Rate */}
              <div style={{ position: "absolute", bottom: "28px", left: "-28px", zIndex: 2, background: "rgba(10,15,35,0.95)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "14px", padding: "14px 20px", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                <p style={{ color: "#38bdf8", fontWeight: "800", fontSize: "26px", margin: 0, lineHeight: 1 }}>95%</p>
                <p style={{ color: "#475569", fontSize: "12px", margin: 0 }}>Placement Rate</p>
              </div>
              {/* floating badge — Switch Mentors */}
              <div style={{ position: "absolute", top: "22px", right: "-22px", zIndex: 2, background: "rgba(10,15,35,0.95)", border: "1px solid rgba(129,140,248,0.25)", borderRadius: "14px", padding: "12px 16px", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", maxWidth: "140px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "16px" }}>🔄</span>
                  <p style={{ color: "white", fontWeight: "800", fontSize: "13px", margin: 0 }}>Switch Mentor</p>
                </div>
                <p style={{ color: "#475569", fontSize: "11px", margin: 0 }}>8 mentors available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ STATS BAR ══ */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0" }}>
          {stats.map((s, i, arr) => (
            <div key={i} style={{ textAlign: "center", padding: "10px 20px", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontSize: "22px", marginBottom: "4px" }}>{s.i}</div>
              <div style={{ color: "#38bdf8", fontSize: "32px", fontWeight: "800", lineHeight: 1, marginBottom: "4px" }}>{s.v}</div>
              <div style={{ color: "#475569", fontSize: "13px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MENTOR SWITCH FEATURE HIGHLIGHT ══ */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px 20px" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(124,58,237,0.08))", border: "1px solid rgba(56,189,248,0.15)", borderRadius: "24px", padding: "40px 48px", display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "100px", padding: "5px 14px", marginBottom: "16px" }}>
              <span style={{ fontSize: "14px" }}>🔄</span>
              <span style={{ color: "#38bdf8", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>New Feature</span>
            </div>
            <h2 style={{ color: "white", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "800", lineHeight: "1.2", marginBottom: "12px" }}>
              Switch Mentors<br /><span style={S.gradText}>Anytime, Mid-Course</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.8", marginBottom: "24px", maxWidth: "420px" }}>
              Not connecting with your current mentor's style? Switch to any of our 8 celebrity AI mentors at any point in your learning journey — your progress is always saved.
            </p>
            <button
              onClick={() => navigate("/courses")}
              style={S.btnPrimary}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Try It Now →
            </button>
          </div>
          {/* Mentor avatars */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <p style={{ color: "#475569", fontSize: "13px", fontWeight: "600", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Choose from 8 celebrity AI mentors:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              {mentors.map((m, i) => (
                <div key={i} onClick={() => navigate(`/courses/${m.id}`)}
                  style={{ textAlign: "center", cursor: "pointer" }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ transition: "0.2s" }}>
                    <img src={m.image} alt={m.name}
                      style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", objectPosition: m.position, border: "2px solid rgba(56,189,248,0.3)", display: "block", margin: "0 auto 6px" }}
                    />
                    <p style={{ color: "#94a3b8", fontSize: "11px", fontWeight: "600", margin: 0, lineHeight: "1.3" }}>
                      {m.name.split(" ")[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ MENTORS ══ */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={S.label}>✦ Exclusive Celebrity AI Mentors ✦</span>
          <h2 style={S.h2}>Your Idols Are Now Your<br /><span style={S.gradText}>Personal Teachers</span></h2>
          <p style={S.sub}>We combined AI technology with the personalities, wisdom and teaching styles of the world's most inspiring icons.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {mentors.map((m, i) => (
            <div key={i} onClick={() => navigate(`/courses/${m.id}`)}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(56,189,248,0.12)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              style={{ ...S.glass, overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img src={m.image} alt={m.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: m.position || "center top", transition: "transform 0.4s ease" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=1e293b&color=38bdf8&size=400`; }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "70px", background: "linear-gradient(to top, rgba(5,10,25,0.95), transparent)" }} />
                <span style={{ position: "absolute", top: "12px", left: "12px", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.35)", background: "rgba(56,189,248,0.12)", padding: "4px 11px", borderRadius: "100px", fontSize: "11px", fontWeight: "700", backdropFilter: "blur(8px)" }}>
                  {m.emoji} {m.tag}
                </span>
                <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(5,10,25,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)" }}>
                  👥 {m.students}
                </span>
              </div>
              <div style={{ padding: "18px 20px 20px" }}>
                <h3 style={{ color: "white", fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{m.name}</h3>
                <p style={{ color: "#38bdf8", fontSize: "13px", marginBottom: "14px" }}>{m.subject}</p>
                <button style={{ width: "100%", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#38bdf8", padding: "9px", borderRadius: "9px", cursor: "pointer", fontWeight: "700", fontSize: "13px", transition: "0.2s" }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "rgba(56,189,248,0.15)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "rgba(56,189,248,0.08)"; }}
                >
                  View Course →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ COURSES ══ */}
      <div style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px", gap: "20px", flexWrap: "wrap" }}>
            <div>
              <span style={S.label}>✦ Most Popular ✦</span>
              <h2 style={{ ...S.h2, marginBottom: 0 }}>Trending <span style={S.gradText}>Courses</span></h2>
            </div>
            <button style={S.btnOutline} onClick={() => navigate("/courses")}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(96,165,250,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >View All Courses →</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "22px" }}>
            {courses.map((c, i) => (
              <div key={i} onClick={() => navigate(`/courses/${c.id}`)}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                style={{ ...S.glass, overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }}
              >
                <div style={{ position: "relative" }}>
                  <img src={c.image} alt={c.title} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8", padding: "3px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "800" }}>{c.tag}</span>
                  <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(5,10,25,0.85)", border: "1px solid rgba(255,255,255,0.1)", color: "#fbbf24", padding: "3px 10px", borderRadius: "100px", fontSize: "12px", fontWeight: "700", backdropFilter: "blur(6px)" }}>⭐ {c.rating}</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "white", fontSize: "15px", fontWeight: "700", marginBottom: "7px", lineHeight: "1.4" }}>{c.title}</h3>
                  <p style={{ color: "#38bdf8", fontSize: "13px", marginBottom: "14px" }}>👤 {c.mentor}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#475569", fontSize: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: "16px" }}>
                    <span>📚 {c.lessons} lessons</span>
                    <span>⏱️ {c.hours}</span>
                    <span>🎯 {c.level}</span>
                  </div>
                  <button style={{ width: "100%", background: "linear-gradient(135deg, #1d4ed8, #7c3aed)", color: "white", border: "none", padding: "11px", borderRadius: "10px", cursor: "pointer", fontWeight: "700", fontSize: "14px", boxShadow: "0 4px 14px rgba(29,78,216,0.3)" }}>
                    Enroll Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FEATURES ══ */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={S.label}>✦ Why StarClass AI ✦</span>
          <h2 style={S.h2}>Everything You Need To <span style={S.gradText}>Succeed</span></h2>
          <p style={S.sub}>We don't just teach code. We build careers, confidence and the mindset to win in tech.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {features.map((f, i) => (
            <div key={i}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.2)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              style={{ ...S.glass, padding: "28px", transition: "all 0.3s ease" }}
            >
              <div style={{ width: "48px", height: "48px", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.18)", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "16px" }}>
                {f.icon}
              </div>
              <h3 style={{ color: "white", fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "14px", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ TESTIMONIALS ══ */}
      <div style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={S.label}>✦ Student Success Stories ✦</span>
            <h2 style={S.h2}>What Our <span style={S.gradText}>Students Say</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "22px" }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ ...S.glass, padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#fbbf24", fontSize: "15px", marginBottom: "14px", letterSpacing: "2px" }}>★★★★★</div>
                <p style={{ color: "#94a3b8", lineHeight: "1.85", fontSize: "14px", marginBottom: "22px", fontStyle: "italic", flex: 1 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <img src={t.avatar} alt={t.name} style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid rgba(56,189,248,0.25)", objectFit: "cover" }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "white", fontWeight: "700", fontSize: "14px", margin: 0 }}>{t.name}</p>
                    <p style={{ color: "#60a5fa", fontSize: "12px", margin: 0 }}>{t.role}</p>
                  </div>
                  <span style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", color: "#38bdf8", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "600", whiteSpace: "nowrap" }}>
                    {t.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CTA ══ */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ borderRadius: "28px", background: "linear-gradient(135deg, rgba(29,78,216,0.18), rgba(124,58,237,0.12))", border: "1px solid rgba(56,189,248,0.12)", padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          <span style={{ ...S.label, textAlign: "center" }}>✦ Start Today ✦</span>
          <h2 style={{ ...S.h2, fontSize: "clamp(30px, 4.5vw, 54px)", letterSpacing: "-1px", marginBottom: "16px" }}>
            Your Dream Tech Job<br /><span style={S.gradText}>Starts Here</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "17px", maxWidth: "460px", margin: "0 auto 36px", lineHeight: "1.75" }}>
            Join 10,000+ students who transformed their careers with StarClass AI. First lesson is completely free.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("/login")}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 18px 48px rgba(29,78,216,0.55)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(29,78,216,0.35)"; }}
              style={{ ...S.btnPrimary, fontSize: "17px", padding: "17px 44px" }}
            >
              Sign in to Account 🚀
            </button>
            <button onClick={() => navigate("/register")}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
              style={{ ...S.btnGhost, fontSize: "17px", padding: "17px 44px", color: "white", borderColor: "rgba(255,255,255,0.15)" }}
            >
              Create Free Account
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;