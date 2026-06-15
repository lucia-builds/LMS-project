import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import viratImage from "../images/virat.jpg";
import ronaldoImage from "../images/ronaldo.jpg";
import srkImage from "../images/srk.jpg";
import elonImage from "../images/elon.jpg";
import messiImage from "../images/messi.jpg";
import bezosImage from "../images/bezos.jpg";
import pichaiImage from "../images/pichai.jpg";
import sachinImage from "../images/sachin.jpg";

/* ── ALL AVAILABLE MENTORS ── */
const allMentors = [
  { id: "virat",   name: "Virat Kohli",       role: "Full Stack Expert",    image: viratImage,   accent: "#38bdf8", emoji: "🏏", imagePosition: "center 25%" },
  { id: "ronaldo", name: "Cristiano Ronaldo",  role: "DSA Expert",           image: ronaldoImage, accent: "#a78bfa", emoji: "⚽", imagePosition: "center 30%" },
  { id: "elon",    name: "Elon Musk",          role: "AI & ML Expert",       image: elonImage,    accent: "#34d399", emoji: "🚀", imagePosition: "center 35%" },
  { id: "srk",     name: "Shah Rukh Khan",     role: "Career Coach",         image: srkImage,     accent: "#fbbf24", emoji: "🎬", imagePosition: "center 15%" },
  { id: "messi",   name: "Lionel Messi",       role: "System Design Expert", image: messiImage,   accent: "#f472b6", emoji: "🌟", imagePosition: "center 20%" },
  { id: "bezos",   name: "Jeff Bezos",         role: "Cloud & DevOps Expert",image: bezosImage,   accent: "#fb923c", emoji: "☁️", imagePosition: "center 20%" },
  { id: "pichai",  name: "Sundar Pichai",      role: "Mobile Dev Expert",    image: pichaiImage,  accent: "#60a5fa", emoji: "📱", imagePosition: "center 15%" },
  { id: "sachin",  name: "Sachin Tendulkar",   role: "Cybersecurity Expert", image: sachinImage,  accent: "#e879f9", emoji: "🛡️", imagePosition: "center 20%" },
];

/* ── COURSE DATA ── */
const courseData = {
  "full-stack-development": {
    title: "Full Stack Development",
    subtitle: "Build real-world MERN stack apps from scratch",
    description: "Master frontend and backend development with real-world MERN stack projects. Learn HTML, CSS, JavaScript, React, Node.js, Express and MongoDB — and build 10 production-level applications that go straight into your portfolio.",
    mentor: "Virat Kohli",
    mentorRole: "Full Stack Expert & AI Mentor",
    mentorImage: viratImage,
    rating: "4.9",
    students: "3.2K",
    lessons: "48",
    hours: "36",
    level: "Beginner → Pro",
    accent: "#38bdf8",
    tag: "Most Popular",
    imagePosition: "center 25%",
    skills: ["React.js", "Node.js", "MongoDB", "Express", "HTML/CSS", "JavaScript"],
    learns: [
      "Build complete MERN stack applications",
      "Master React hooks, context and routing",
      "Create REST APIs with Node.js and Express",
      "Design MongoDB schemas and queries",
      "Deploy apps to cloud platforms",
      "Implement authentication and security",
    ],
    modules: [
      { title: "HTML & CSS Fundamentals", lessons: 6, duration: "4h 30m" },
      { title: "JavaScript Mastery", lessons: 8, duration: "6h 15m" },
      { title: "React.js Complete Guide", lessons: 10, duration: "8h 45m" },
      { title: "Node.js & Express Backend", lessons: 8, duration: "6h 30m" },
      { title: "MongoDB & Database Design", lessons: 6, duration: "4h 45m" },
      { title: "Full Stack Projects", lessons: 10, duration: "5h 15m" },
    ],
  },

  "data-structures-algorithms": {
    title: "Data Structures & Algorithms",
    subtitle: "Crack any coding interview with confidence",
    description: "Learn problem-solving techniques used at Google, Amazon and Microsoft. Master arrays, linked lists, trees, graphs, dynamic programming and more — with Cristiano Ronaldo's discipline and focus mindset.",
    mentor: "Cristiano Ronaldo",
    mentorRole: "DSA Expert & AI Mentor",
    mentorImage: ronaldoImage,
    rating: "4.8",
    students: "2.8K",
    lessons: "60",
    hours: "48",
    level: "Intermediate",
    accent: "#a78bfa",
    tag: "Trending 🔥",
    imagePosition: "center 30%",
    skills: ["Arrays", "Trees", "Graphs", "DP", "Recursion", "Sorting"],
    learns: [
      "Solve LeetCode problems with ease",
      "Master time and space complexity",
      "Understand all major data structures",
      "Apply dynamic programming patterns",
      "Crack FAANG coding interviews",
      "Build algorithmic thinking",
    ],
    modules: [
      { title: "Arrays & Strings", lessons: 10, duration: "8h 00m" },
      { title: "Linked Lists", lessons: 8, duration: "6h 30m" },
      { title: "Stacks & Queues", lessons: 8, duration: "6h 00m" },
      { title: "Trees & Binary Search Trees", lessons: 12, duration: "9h 30m" },
      { title: "Graphs & BFS/DFS", lessons: 12, duration: "9h 00m" },
      { title: "Dynamic Programming", lessons: 10, duration: "9h 00m" },
    ],
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    subtitle: "Build the future with AI and Machine Learning",
    description: "Explore machine learning, neural networks, computer vision and NLP — and build real AI-powered applications. Learn from Elon Musk's vision of the future and understand the technology that is reshaping the world.",
    mentor: "Elon Musk",
    mentorRole: "AI & ML Expert — AI Mentor",
    mentorImage: elonImage,
    rating: "4.9",
    students: "4.1K",
    lessons: "52",
    hours: "42",
    level: "Advanced",
    accent: "#34d399",
    tag: "Hot Pick 🚀",
    imagePosition: "center center",
    skills: ["Python", "ML", "Deep Learning", "NLP", "Computer Vision", "TensorFlow"],
    learns: [
      "Build machine learning models from scratch",
      "Understand neural networks and deep learning",
      "Work with real datasets and data preprocessing",
      "Apply NLP to text classification problems",
      "Build computer vision applications",
      "Deploy AI models to production",
    ],
    modules: [
      { title: "Python for AI", lessons: 6, duration: "4h 30m" },
      { title: "Machine Learning Basics", lessons: 10, duration: "8h 00m" },
      { title: "Deep Learning & Neural Networks", lessons: 10, duration: "8h 30m" },
      { title: "Computer Vision", lessons: 10, duration: "8h 00m" },
      { title: "Natural Language Processing", lessons: 10, duration: "8h 00m" },
      { title: "AI Projects & Deployment", lessons: 6, duration: "5h 00m" },
    ],
  },

  "interview-preparation": {
    title: "Interview Preparation",
    subtitle: "Land your dream tech job with confidence",
    description: "Prepare for technical interviews with aptitude training, DSA revision, mock interviews and HR guidance. Learn from Shah Rukh Khan's charisma and communication mastery to ace every interview round.",
    mentor: "Shah Rukh Khan",
    mentorRole: "Career Coach & AI Mentor",
    mentorImage: srkImage,
    rating: "4.7",
    students: "2.5K",
    lessons: "35",
    hours: "28",
    level: "All Levels",
    accent: "#fbbf24",
    tag: "New ✨",
    imagePosition: "center top",
    skills: ["Communication", "DSA Revision", "Aptitude", "Resume", "HR", "Mock Interview"],
    learns: [
      "Crack aptitude and reasoning tests",
      "Revise DSA for coding rounds",
      "Nail technical and HR interviews",
      "Build a job-winning resume",
      "Master communication skills",
      "Get referrals and job offers",
    ],
    modules: [
      { title: "Aptitude & Reasoning", lessons: 6, duration: "4h 30m" },
      { title: "DSA Quick Revision", lessons: 8, duration: "6h 00m" },
      { title: "Mock Coding Interviews", lessons: 8, duration: "6h 30m" },
      { title: "Resume & LinkedIn Building", lessons: 5, duration: "3h 30m" },
      { title: "HR & Behavioral Questions", lessons: 5, duration: "4h 00m" },
      { title: "Final Mock Interviews", lessons: 3, duration: "3h 30m" },
    ],
  },
  "system-design": {
    title: "System Design",
    subtitle: "Design scalable systems like Netflix and Uber",
    description: "Learn how to design large-scale distributed systems. Master load balancing, caching, microservices, database design and system architecture used at top tech companies.",
    mentor: "Lionel Messi",
    mentorRole: "System Design Expert & AI Mentor",
    mentorImage: messiImage,
    rating: "4.8",
    students: "1.9K",
    lessons: "40",
    hours: "32",
    level: "Advanced",
    accent: "#f472b6",
    tag: "New ✨",
    skills: ["Microservices", "Caching", "Load Balancing", "DB Design", "APIs", "Scaling"],
    learns: [
      "Design systems like Netflix and Uber",
      "Understand load balancing and caching",
      "Master microservices architecture",
      "Design scalable databases",
      "Handle millions of users",
      "Crack system design interviews",
    ],
    modules: [
      { title: "System Design Basics", lessons: 6, duration: "4h 30m" },
      { title: "Database Design & Scaling", lessons: 8, duration: "6h 00m" },
      { title: "Caching & CDN", lessons: 6, duration: "5h 00m" },
      { title: "Microservices Architecture", lessons: 8, duration: "6h 30m" },
      { title: "Real System Design Cases", lessons: 8, duration: "6h 00m" },
      { title: "System Design Interviews", lessons: 4, duration: "4h 00m" },
    ],
  },

  "cloud-devops": {
    title: "Cloud & DevOps",
    subtitle: "Deploy real apps to cloud like a pro",
    description: "Master AWS, Docker, Kubernetes and CI/CD pipelines. Learn how to deploy, monitor and scale real applications to the cloud. Build the skills companies need most right now.",
    mentor: "Jeff Bezos",
    mentorRole: "Cloud & DevOps Expert & AI Mentor",
    mentorImage: bezosImage,
    rating: "4.7",
    students: "2.2K",
    lessons: "45",
    hours: "38",
    level: "Intermediate",
    accent: "#fb923c",
    tag: "Trending 🔥",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Terraform"],
    learns: [
      "Deploy apps to AWS cloud",
      "Containerize apps with Docker",
      "Orchestrate with Kubernetes",
      "Build CI/CD pipelines",
      "Monitor production systems",
      "Master Linux and shell scripting",
    ],
    modules: [
      { title: "Cloud Fundamentals & AWS", lessons: 8, duration: "6h 30m" },
      { title: "Docker & Containerization", lessons: 8, duration: "6h 00m" },
      { title: "Kubernetes Orchestration", lessons: 8, duration: "7h 00m" },
      { title: "CI/CD Pipelines", lessons: 8, duration: "6h 30m" },
      { title: "Monitoring & Logging", lessons: 7, duration: "5h 30m" },
      { title: "Real DevOps Projects", lessons: 6, duration: "6h 30m" },
    ],
  },

  "android-flutter": {
    title: "Android & Flutter",
    subtitle: "Build mobile apps for Android and iOS",
    description: "Build cross-platform mobile apps using Flutter and Dart. Create beautiful, fast mobile applications that run on both Android and iOS from a single codebase.",
    mentor: "Sundar Pichai",
    mentorRole: "Mobile Dev Expert & AI Mentor",
    mentorImage: pichaiImage,
    rating: "4.6",
    students: "1.7K",
    lessons: "55",
    hours: "44",
    level: "Beginner → Pro",
    accent: "#60a5fa",
    tag: "Popular",
    skills: ["Flutter", "Dart", "Android", "iOS", "Firebase", "REST APIs"],
    learns: [
      "Build Flutter apps from scratch",
      "Master Dart programming language",
      "Create beautiful UI with Flutter widgets",
      "Integrate Firebase backend",
      "Publish apps to Play Store",
      "Handle state management",
    ],
    modules: [
      { title: "Dart Programming Basics", lessons: 8, duration: "6h 00m" },
      { title: "Flutter UI Fundamentals", lessons: 10, duration: "8h 00m" },
      { title: "State Management", lessons: 10, duration: "8h 30m" },
      { title: "Firebase Integration", lessons: 10, duration: "8h 00m" },
      { title: "REST API Integration", lessons: 9, duration: "7h 30m" },
      { title: "Publishing & Deployment", lessons: 8, duration: "6h 00m" },
    ],
  },

  "cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Protect systems and learn ethical hacking",
    description: "Learn ethical hacking, penetration testing, network security and how to protect systems from cyber attacks. Master the skills that every company desperately needs right now.",
    mentor: "Sachin Tendulkar",
    mentorRole: "Cybersecurity Expert & AI Mentor",
    mentorImage: sachinImage,
    rating: "4.8",
    students: "1.4K",
    lessons: "38",
    hours: "30",
    level: "Intermediate",
    accent: "#e879f9",
    tag: "New ✨",
    skills: ["Ethical Hacking", "Pen Testing", "Network Security", "Linux", "Kali", "OWASP"],
    learns: [
      "Perform ethical hacking legally",
      "Master penetration testing tools",
      "Secure web applications",
      "Understand network security",
      "Work with Kali Linux",
      "Pass CEH certification",
    ],
    modules: [
      { title: "Cybersecurity Fundamentals", lessons: 6, duration: "4h 30m" },
      { title: "Network Security & Protocols", lessons: 6, duration: "5h 00m" },
      { title: "Ethical Hacking Basics", lessons: 8, duration: "6h 30m" },
      { title: "Web Application Security", lessons: 8, duration: "6h 00m" },
      { title: "Penetration Testing", lessons: 6, duration: "4h 30m" },
      { title: "Security Projects & CTF", lessons: 4, duration: "3h 30m" },
    ],
  },
};

/* ── SHARED STYLES ── */
const glass = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  backdropFilter: "blur(12px)",
};

/* ════════════════════════════════════════ */
const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openModule, setOpenModule] = useState(null);
  const [showMentorPanel, setShowMentorPanel] = useState(false);

  // Load saved mentor from localStorage
  const savedMentorId = localStorage.getItem(`mentor_${id}`);
  const savedMentor = allMentors.find(m => m.id === savedMentorId) || null;
  const [selectedMentor, setSelectedMentor] = useState(savedMentor);

  const switchMentor = (mentor) => {
    setSelectedMentor(mentor);
    localStorage.setItem(`mentor_${id}`, mentor.id);
    setShowMentorPanel(false);
  };

  const resetMentor = () => {
    setSelectedMentor(null);
    localStorage.removeItem(`mentor_${id}`);
    setShowMentorPanel(false);
  };

  const course = courseData[id];
// Use selected mentor or course default
  const activeMentor = selectedMentor || {
    name: course ? course.mentor : "",
    image: course ? course.mentorImage : "",
    accent: course ? course.accent : "#38bdf8",
    role: "AI Mentor",
  };
  if (!course) {
    return (
      <div style={{ textAlign: "center", padding: "120px 20px", color: "white" }}>
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>😕</div>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Course Not Found</h1>
        <p style={{ color: "#64748b", marginBottom: "30px" }}>
          This course doesn't exist yet.
        </p>
        <button
          onClick={() => navigate("/courses")}
          style={{
            background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
            color: "white", border: "none",
            padding: "14px 32px", borderRadius: "12px",
            cursor: "pointer", fontWeight: "700", fontSize: "16px",
          }}
        >
          Browse All Courses
        </button>
      </div>
    );
  }

  return (
    <>
    <div style={{ width: "100%", overflowX: "hidden", color: "white" }}>

      {/* ── HERO SECTION ── */}
      <div style={{
        background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(10,15,35,0.98))",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "500px", height: "500px",
          background: `radial-gradient(circle, ${course.accent}15 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "30px 20px" }}>

          {/* Back button */}
          <button
            onClick={() => navigate("/courses")}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8", padding: "8px 18px",
              borderRadius: "10px", cursor: "pointer",
              fontSize: "14px", fontWeight: "600",
              marginBottom: "36px", display: "flex",
              alignItems: "center", gap: "8px",
              transition: "0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
            onMouseOut={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            ← Back to Courses
          </button>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}>
            {/* LEFT */}
            <div>
              {/* Tag */}
              <span style={{
                background: course.accent + "20",
                border: `1px solid ${course.accent}40`,
                color: course.accent,
                padding: "5px 14px", borderRadius: "100px",
                fontSize: "12px", fontWeight: "700",
                display: "inline-block", marginBottom: "18px",
                letterSpacing: "0.5px",
              }}>
                {course.tag}
              </span>

              <h1 style={{
                fontSize: "clamp(28px, 4vw, 50px)",
                fontWeight: "900", lineHeight: "1.1",
                marginBottom: "14px", letterSpacing: "-1px",
              }}>
                {course.title}
              </h1>

              <p style={{
                color: "#94a3b8", fontSize: "18px",
                marginBottom: "20px", fontWeight: "500",
              }}>
                {course.subtitle}
              </p>

              <p style={{
                color: "#64748b", lineHeight: "1.85",
                fontSize: "15px", marginBottom: "28px",
                maxWidth: "620px",
              }}>
                {course.description}
              </p>

              {/* Stats row */}
              <div style={{
                display: "flex", gap: "24px",
                flexWrap: "wrap", marginBottom: "28px",
              }}>
                {[
                  { icon: "⭐", val: course.rating, lbl: "Rating" },
                  { icon: "👥", val: course.students, lbl: "Students" },
                  { icon: "📚", val: `${course.lessons} lessons`, lbl: "" },
                  { icon: "⏱️", val: `${course.hours}h`, lbl: "Total" },
                  { icon: "🎯", val: course.level, lbl: "" },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "16px" }}>{s.icon}</span>
                    <span style={{ color: "white", fontWeight: "700", fontSize: "14px" }}>
                      {s.val}
                    </span>
                    {s.lbl && <span style={{ color: "#475569", fontSize: "13px" }}>{s.lbl}</span>}
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                {course.skills.map((skill, i) => (
                  <span key={i} style={{
                    background: "rgba(56,189,248,0.08)",
                    border: "1px solid rgba(56,189,248,0.2)",
                    color: "#38bdf8",
                    padding: "5px 14px", borderRadius: "100px",
                    fontSize: "13px", fontWeight: "600",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Mentor row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={course.mentorImage}
                  alt={course.mentor}
                  style={{
                    width: "48px", height: "48px",
                    borderRadius: "50%", objectFit: "cover",
                    objectPosition: "center top",
                    border: `2px solid ${course.accent}`,
                  }}
                />
                <div>
                  <p style={{ color: "white", fontWeight: "700", fontSize: "15px", margin: 0 }}>
                    {course.mentor}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
                    {course.mentorRole}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Mentor card */}
            <div style={{ ...glass, overflow: "hidden", position: "sticky", top: "100px" }}>
              <img
                src={activeMentor.image}
                alt={activeMentor.name}
                style={{
                  width: "100%", height: "280px",
                  objectFit: "cover",
                  objectPosition: selectedMentor
                    ? selectedMentor.imagePosition || "center 20%"
                    : course.imagePosition || "center 25%",
                  display: "block",
                }}
              />
              <div style={{ padding: "24px" }}>
                <p style={{
                  color: course.accent, fontWeight: "700",
                  fontSize: "13px", marginBottom: "4px",
                  letterSpacing: "0.5px",
                }}>
                  YOUR AI MENTOR
                </p>
                <h3 style={{ color: "white", fontSize: "20px", fontWeight: "800", marginBottom: "4px" }}>
                  {activeMentor.name}
                </h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                  AI-powered personality with real knowledge. Switch anytime!
                </p>

                {/* Switch Mentor Button */}
                <button
                  onClick={() => setShowMentorPanel(true)}
                  style={{
                    width: "100%",
                    background: "rgba(56,189,248,0.08)",
                    border: "1px solid rgba(56,189,248,0.25)",
                    color: "#38bdf8",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "14px",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  🔄 Switch Mentor
                </button>

                {/* Enroll button */}
                <button
                  onClick={() => navigate(`/learn/${id}`)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 14px 36px rgba(29,78,216,0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(29,78,216,0.35)";
                  }}
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                    color: "white", border: "none",
                    padding: "16px", borderRadius: "12px",
                    fontSize: "16px", cursor: "pointer",
                    fontWeight: "700", marginBottom: "12px",
                    boxShadow: "0 8px 28px rgba(29,78,216,0.35)",
                    transition: "all 0.25s ease",
                  }}
                >
                  🚀 Enroll Now — It's Free
                </button>

                <p style={{ color: "#475569", fontSize: "12px", textAlign: "center" }}>
                  ✅ No credit card required &nbsp;•&nbsp; ✅ Lifetime access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "30px 20px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>

          {/* LEFT CONTENT */}
          <div>

            {/* What you'll learn */}
            <div style={{ ...glass, padding: "32px", marginBottom: "32px" }}>
              <h2 style={{ color: "white", fontSize: "22px", fontWeight: "800", marginBottom: "24px" }}>
                🎯 What You'll Learn
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}>
                {course.learns.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{
                      color: course.accent, fontSize: "16px",
                      marginTop: "1px", flexShrink: 0,
                    }}>✓</span>
                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Modules */}
            <div>
              <h2 style={{ color: "white", fontSize: "22px", fontWeight: "800", marginBottom: "20px" }}>
                📚 Course Modules
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {course.modules.map((mod, index) => (
                  <div
                    key={index}
                    style={{
                      ...glass,
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      borderColor: openModule === index
                        ? `${course.accent}33`
                        : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Module header */}
                    <div
                      onClick={() => setOpenModule(openModule === index ? null : index)}
                      style={{
                        padding: "18px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        transition: "0.2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                      onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <span style={{
                          width: "32px", height: "32px",
                          background: course.accent + "20",
                          border: `1px solid ${course.accent}40`,
                          borderRadius: "8px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: course.accent, fontWeight: "800", fontSize: "13px",
                          flexShrink: 0,
                        }}>
                          {index + 1}
                        </span>
                        <div>
                          <p style={{ color: "white", fontWeight: "700", fontSize: "15px", margin: 0 }}>
                            {mod.title}
                          </p>
                          <p style={{ color: "#475569", fontSize: "12px", margin: 0 }}>
                            {mod.lessons} lessons • {mod.duration}
                          </p>
                        </div>
                      </div>
                      <span style={{
                        color: "#475569", fontSize: "18px",
                        transform: openModule === index ? "rotate(180deg)" : "rotate(0)",
                        transition: "0.3s",
                      }}>
                        ↓
                      </span>
                    </div>

                    {/* Expanded content */}
                    {openModule === index && (
                      <div style={{
                        padding: "0 24px 20px",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                      }}>
                        <p style={{ color: "#64748b", fontSize: "14px", marginTop: "14px", lineHeight: "1.7" }}>
                          In this module you will master <strong style={{ color: "#94a3b8" }}>{mod.title}</strong> through
                          hands-on projects and real-world examples. Includes {mod.lessons} video lessons
                          totaling {mod.duration} of content.
                        </p>
                        <button
                          onClick={() => navigate(`/learn/${id}`)}
                          style={{
                            marginTop: "12px",
                            background: "transparent",
                            border: `1px solid ${course.accent}44`,
                            color: course.accent,
                            padding: "8px 18px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "13px",
                          }}
                        >
                          Start Module →
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            {/* Course includes */}
            <div style={{ ...glass, padding: "28px", marginBottom: "24px" }}>
              <h3 style={{ color: "white", fontSize: "16px", fontWeight: "700", marginBottom: "18px" }}>
                📦 This Course Includes
              </h3>
              {[
                { icon: "🎬", text: `${course.hours} hours of video content` },
                { icon: "📚", text: `${course.lessons} detailed lessons` },
                { icon: "🏗️", text: "Real-world projects" },
                { icon: "🏆", text: "Certificate of completion" },
                { icon: "♾️", text: "Lifetime access" },
                { icon: "📱", text: "Mobile & desktop access" },
                { icon: "💬", text: "Community support" },
                { icon: "🔄", text: "Regular content updates" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "10px 0",
                  borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <span style={{ color: "#94a3b8", fontSize: "14px" }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Share */}
            <div style={{ ...glass, padding: "28px" }}>
              <h3 style={{ color: "white", fontSize: "16px", fontWeight: "700", marginBottom: "16px" }}>
                🌟 Share This Course
              </h3>
              <div style={{ display: "flex", gap: "10px" }}>
                {["Twitter", "LinkedIn", "WhatsApp"].map((s, i) => (
                  <button key={i} style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#94a3b8", padding: "10px 6px",
                    borderRadius: "10px", cursor: "pointer",
                    fontSize: "12px", fontWeight: "600",
                    transition: "0.2s",
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "white"; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#94a3b8"; }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* ── MENTOR SWITCH PANEL ── */}
      {showMentorPanel && (
        <div
          onClick={() => setShowMentorPanel(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(10,15,35,0.98)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "32px",
              width: "100%",
              maxWidth: "700px",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <div>
                <h2 style={{ color: "white", fontSize: "22px", fontWeight: "800", margin: 0 }}>
                  🔄 Switch Your Mentor
                </h2>
                <p style={{ color: "#475569", fontSize: "13px", margin: "4px 0 0" }}>
                  Choose any mentor for {course.title}. Switch anytime — even mid-course!
                </p>
              </div>
              <button
                onClick={() => setShowMentorPanel(false)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8", width: "36px", height: "36px",
                  borderRadius: "50%", cursor: "pointer",
                  fontSize: "16px", flexShrink: 0,
                }}
              >✕</button>
            </div>

            {/* Current mentor indicator */}
            <div style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.15)",
              borderRadius: "12px", padding: "10px 16px",
              marginBottom: "24px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span style={{ fontSize: "16px" }}>👤</span>
              <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
                Current mentor: <span style={{ color: "#38bdf8", fontWeight: "700" }}>{activeMentor.name}</span>
              </p>
              {selectedMentor && (
                <button
                  onClick={resetMentor}
                  style={{
                    marginLeft: "auto",
                    background: "transparent",
                    border: "1px solid rgba(248,113,113,0.3)",
                    color: "#f87171", padding: "4px 12px",
                    borderRadius: "100px", cursor: "pointer",
                    fontSize: "12px", fontWeight: "600",
                  }}
                >Reset to Default</button>
              )}
            </div>

            {/* Mentor Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "14px",
            }}>
              {allMentors.map((mentor, i) => {
                const isSelected = activeMentor.name === mentor.name;
                return (
                  <div
                    key={i}
                    onClick={() => switchMentor(mentor)}
                    style={{
                      background: isSelected ? `${mentor.accent}15` : "rgba(255,255,255,0.03)",
                      border: isSelected ? `2px solid ${mentor.accent}66` : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px", padding: "16px 12px",
                      cursor: "pointer", textAlign: "center",
                      transition: "all 0.25s ease", position: "relative",
                    }}
                    onMouseOver={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = `${mentor.accent}44`;
                        e.currentTarget.style.background = `${mentor.accent}08`;
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      }
                    }}
                  >
                    {isSelected && (
                      <div style={{
                        position: "absolute", top: "8px", right: "8px",
                        width: "20px", height: "20px",
                        background: mentor.accent, borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "11px", color: "#0f172a", fontWeight: "800",
                      }}>✓</div>
                    )}
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      style={{
                        width: "70px", height: "70px",
                        borderRadius: "50%", objectFit: "cover",
                        objectPosition: "center top",
                        border: `2px solid ${isSelected ? mentor.accent : "rgba(255,255,255,0.1)"}`,
                        display: "block", margin: "0 auto 10px",
                      }}
                    />
                    <p style={{
                      color: isSelected ? mentor.accent : "white",
                      fontWeight: "700", fontSize: "13px",
                      margin: "0 0 4px", lineHeight: "1.3",
                    }}>{mentor.name}</p>
                    <p style={{ color: "#475569", fontSize: "11px", margin: 0 }}>
                      {mentor.emoji} {mentor.role}
                    </p>
                  </div>
                );
              })}
            </div>

            <p style={{ color: "#334155", fontSize: "12px", textAlign: "center", marginTop: "20px" }}>
              💡 Your progress is saved automatically when you switch mentors
            </p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CourseDetails;