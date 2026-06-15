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

/* ── COURSE CONTENT DATA ── */
const courseContent = {
  "full-stack-development": {
    title: "Full Stack Development",
    mentor: "Virat Kohli",
    mentorImage: viratImage,
    accent: "#38bdf8",
    currentLesson: "Introduction to MERN Stack",
    lessons: [
      { id: 1, title: "Welcome & Course Overview",        duration: "8:30",  free: true  },
      { id: 2, title: "HTML Fundamentals",                duration: "22:15", free: true  },
      { id: 3, title: "CSS & Flexbox Mastery",            duration: "35:40", free: false },
      { id: 4, title: "JavaScript Basics",                duration: "45:20", free: false },
      { id: 5, title: "ES6+ Modern JavaScript",           duration: "38:15", free: false },
      { id: 6, title: "React.js Introduction",            duration: "28:50", free: false },
      { id: 7, title: "React Hooks & State",              duration: "42:30", free: false },
      { id: 8, title: "React Router & Navigation",        duration: "31:10", free: false },
      { id: 9, title: "Node.js & Express Setup",          duration: "36:45", free: false },
      { id: 10, title: "REST API Development",            duration: "48:20", free: false },
      { id: 11, title: "MongoDB & Mongoose",              duration: "41:15", free: false },
      { id: 12, title: "Full Stack Project Build",        duration: "55:30", free: false },
    ],
  },
  "data-structures-algorithms": {
    title: "Data Structures & Algorithms",
    mentor: "Cristiano Ronaldo",
    mentorImage: ronaldoImage,
    accent: "#a78bfa",
    currentLesson: "Arrays & Time Complexity",
    lessons: [
      { id: 1, title: "Welcome & DSA Roadmap",            duration: "10:00", free: true  },
      { id: 2, title: "Big O Notation",                   duration: "25:30", free: true  },
      { id: 3, title: "Arrays & Two Pointers",            duration: "38:20", free: false },
      { id: 4, title: "Strings & Sliding Window",         duration: "42:15", free: false },
      { id: 5, title: "Linked Lists",                     duration: "35:40", free: false },
      { id: 6, title: "Stacks & Queues",                  duration: "30:25", free: false },
      { id: 7, title: "Binary Trees",                     duration: "45:10", free: false },
      { id: 8, title: "Binary Search Trees",              duration: "38:30", free: false },
      { id: 9, title: "Graphs & BFS/DFS",                 duration: "52:20", free: false },
      { id: 10, title: "Dynamic Programming",             duration: "58:45", free: false },
      { id: 11, title: "Greedy Algorithms",               duration: "33:15", free: false },
      { id: 12, title: "Mock Interview Session",          duration: "60:00", free: false },
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    mentor: "Elon Musk",
    mentorImage: elonImage,
    accent: "#34d399",
    currentLesson: "Introduction to Machine Learning",
    lessons: [
      { id: 1, title: "Welcome to AI",                    duration: "12:00", free: true  },
      { id: 2, title: "Python for AI Basics",             duration: "28:30", free: true  },
      { id: 3, title: "NumPy & Pandas",                   duration: "35:20", free: false },
      { id: 4, title: "Machine Learning Concepts",        duration: "42:15", free: false },
      { id: 5, title: "Linear & Logistic Regression",     duration: "38:40", free: false },
      { id: 6, title: "Decision Trees & Random Forests",  duration: "45:25", free: false },
      { id: 7, title: "Neural Networks Basics",           duration: "50:10", free: false },
      { id: 8, title: "Deep Learning with TensorFlow",    duration: "55:30", free: false },
      { id: 9, title: "Computer Vision & CNN",            duration: "48:20", free: false },
      { id: 10, title: "NLP & Text Classification",       duration: "44:45", free: false },
      { id: 11, title: "Building AI Applications",        duration: "52:15", free: false },
      { id: 12, title: "Deploying AI Models",             duration: "38:30", free: false },
    ],
  },
  "interview-preparation": {
    title: "Interview Preparation",
    mentor: "Shah Rukh Khan",
    mentorImage: srkImage,
    accent: "#fbbf24",
    currentLesson: "Cracking the Interview Mindset",
    lessons: [
      { id: 1, title: "Welcome & Interview Roadmap",      duration: "10:00", free: true  },
      { id: 2, title: "Resume Building Masterclass",      duration: "28:30", free: true  },
      { id: 3, title: "LinkedIn Profile Optimization",    duration: "22:15", free: false },
      { id: 4, title: "Aptitude — Numbers & Algebra",     duration: "35:40", free: false },
      { id: 5, title: "Aptitude — Logical Reasoning",     duration: "38:20", free: false },
      { id: 6, title: "DSA Quick Revision — Arrays",      duration: "42:15", free: false },
      { id: 7, title: "DSA Quick Revision — Trees",       duration: "38:30", free: false },
      { id: 8, title: "Mock Technical Interview 1",       duration: "55:00", free: false },
      { id: 9, title: "HR Questions Masterclass",         duration: "32:45", free: false },
      { id: 10, title: "Communication & Body Language",   duration: "28:20", free: false },
      { id: 11, title: "Mock HR Interview",               duration: "45:00", free: false },
      { id: 12, title: "Final Mock Interview + Feedback", duration: "60:00", free: false },
    ],
  },
  "system-design": {
    title: "System Design",
    mentor: "Lionel Messi",
    mentorImage: messiImage,
    accent: "#f472b6",
    currentLesson: "Introduction to System Design",
    lessons: [
      { id: 1, title: "Welcome to System Design",         duration: "10:00", free: true  },
      { id: 2, title: "Scalability Basics",               duration: "28:30", free: true  },
      { id: 3, title: "Load Balancing",                   duration: "32:15", free: false },
      { id: 4, title: "Caching Strategies",               duration: "35:40", free: false },
      { id: 5, title: "Database Design & Sharding",       duration: "42:20", free: false },
      { id: 6, title: "Microservices Architecture",       duration: "45:15", free: false },
      { id: 7, title: "API Design & REST",                duration: "38:30", free: false },
      { id: 8, title: "Design Netflix",                   duration: "55:00", free: false },
      { id: 9, title: "Design Uber",                      duration: "52:45", free: false },
      { id: 10, title: "Design WhatsApp",                 duration: "48:20", free: false },
      { id: 11, title: "Design Twitter",                  duration: "50:15", free: false },
      { id: 12, title: "System Design Interview",         duration: "60:00", free: false },
    ],
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    mentor: "Jeff Bezos",
    mentorImage: bezosImage,
    accent: "#fb923c",
    currentLesson: "Introduction to Cloud Computing",
    lessons: [
      { id: 1, title: "Welcome to Cloud & DevOps",        duration: "10:00", free: true  },
      { id: 2, title: "AWS Core Services",                duration: "32:30", free: true  },
      { id: 3, title: "EC2 & S3 Mastery",                 duration: "38:15", free: false },
      { id: 4, title: "Docker Fundamentals",              duration: "42:40", free: false },
      { id: 5, title: "Docker Compose",                   duration: "35:20", free: false },
      { id: 6, title: "Kubernetes Basics",                duration: "48:15", free: false },
      { id: 7, title: "Kubernetes Advanced",              duration: "52:30", free: false },
      { id: 8, title: "CI/CD with GitHub Actions",        duration: "45:00", free: false },
      { id: 9, title: "Jenkins Pipeline",                 duration: "40:45", free: false },
      { id: 10, title: "Monitoring with Prometheus",      duration: "35:20", free: false },
      { id: 11, title: "Infrastructure as Code",          duration: "42:15", free: false },
      { id: 12, title: "Real DevOps Project",             duration: "60:00", free: false },
    ],
  },
  "android-flutter": {
    title: "Android & Flutter",
    mentor: "Sundar Pichai",
    mentorImage: pichaiImage,
    accent: "#60a5fa",
    currentLesson: "Getting Started with Flutter",
    lessons: [
      { id: 1, title: "Welcome to Flutter",               duration: "10:00", free: true  },
      { id: 2, title: "Dart Programming Basics",          duration: "30:30", free: true  },
      { id: 3, title: "Flutter Widgets",                  duration: "38:15", free: false },
      { id: 4, title: "Layouts & Styling",                duration: "42:40", free: false },
      { id: 5, title: "Navigation & Routing",             duration: "35:20", free: false },
      { id: 6, title: "State Management",                 duration: "48:15", free: false },
      { id: 7, title: "Firebase Integration",             duration: "52:30", free: false },
      { id: 8, title: "REST API in Flutter",              duration: "45:00", free: false },
      { id: 9, title: "Local Storage",                    duration: "32:45", free: false },
      { id: 10, title: "Building a Full App",             duration: "58:20", free: false },
      { id: 11, title: "Testing Flutter Apps",            duration: "35:15", free: false },
      { id: 12, title: "Publishing to Play Store",        duration: "28:30", free: false },
    ],
  },
  "cybersecurity": {
    title: "Cybersecurity",
    mentor: "Sachin Tendulkar",
    mentorImage: sachinImage,
    accent: "#e879f9",
    currentLesson: "Introduction to Cybersecurity",
    lessons: [
      { id: 1, title: "Welcome to Cybersecurity",         duration: "10:00", free: true  },
      { id: 2, title: "Networking Fundamentals",          duration: "28:30", free: true  },
      { id: 3, title: "Linux for Security",               duration: "35:15", free: false },
      { id: 4, title: "Kali Linux Setup",                 duration: "25:40", free: false },
      { id: 5, title: "Ethical Hacking Basics",           duration: "42:20", free: false },
      { id: 6, title: "Reconnaissance Techniques",        duration: "38:15", free: false },
      { id: 7, title: "Web App Vulnerabilities",          duration: "48:30", free: false },
      { id: 8, title: "SQL Injection & XSS",              duration: "45:00", free: false },
      { id: 9, title: "Penetration Testing",              duration: "52:45", free: false },
      { id: 10, title: "Password Cracking & Defence",     duration: "38:20", free: false },
      { id: 11, title: "Security Hardening",              duration: "35:15", free: false },
      { id: 12, title: "CTF Challenge & Final Project",   duration: "60:00", free: false },
    ],
  },
};

/* ════════════════════════════════════════ */
const CoursePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState([0]);
  const [showMentorPanel, setShowMentorPanel] = useState(false);

  // Load saved mentor from localStorage or use course default
  const savedMentorId = localStorage.getItem(`mentor_${id}`);
  const defaultMentor = allMentors.find(m => m.id === savedMentorId) || null;
  const [selectedMentor, setSelectedMentor] = useState(defaultMentor);

  // Switch mentor function
  const switchMentor = (mentor) => {
    setSelectedMentor(mentor);
    localStorage.setItem(`mentor_${id}`, mentor.id);
    setShowMentorPanel(false);
  };

  // Reset to course default mentor
  const resetMentor = () => {
    setSelectedMentor(null);
    localStorage.removeItem(`mentor_${id}`);
    setShowMentorPanel(false);
  };

  const course = courseContent[id];

  // Use selected mentor or course default
  const activeMentor = selectedMentor || {
    name: course ? course.mentor : "",
    image: course ? course.mentorImage : "",
    accent: course ? course.accent : "#38bdf8",
    role: "AI Mentor",
    emoji: "🎓",
  };

  if (!course) {
    return (
      <div style={{ textAlign: "center", padding: "120px 20px", color: "white" }}>
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>😕</div>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Course Not Found</h1>
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

  const lesson = course.lessons[activeLesson];
  const progressPercent = Math.round((completed.length / course.lessons.length) * 100);

  const markComplete = () => {
    if (!completed.includes(activeLesson)) {
      setCompleted([...completed, activeLesson]);
    }
    // Go to next lesson
    if (activeLesson < course.lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
    }
  };

  return (
    <>
    <div style={{ display: "flex", width: "100%", minHeight: "calc(100vh - 70px)", color: "white" }}>

      {/* ── LEFT SIDEBAR ── */}
      <div style={{
        width: "320px",
        flexShrink: 0,
        background: "rgba(5,10,25,0.95)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>

        {/* Sidebar Header */}
        <div style={{
          padding: "20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}>
          <button
            onClick={() => navigate(`/courses/${id}`)}
            style={{
              background: "transparent",
              border: "none",
              color: "#64748b",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              padding: "0",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "white")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#64748b")}
          >
            ← Back to Course
          </button>

          <h3 style={{
            color: "white", fontSize: "14px",
            fontWeight: "700", marginBottom: "12px",
            lineHeight: "1.4",
          }}>
            {course.title}
          </h3>

          {/* Progress bar */}
          <div style={{ marginBottom: "6px" }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              marginBottom: "6px",
            }}>
              <span style={{ color: "#64748b", fontSize: "12px" }}>Your Progress</span>
              <span style={{ color: course.accent, fontSize: "12px", fontWeight: "700" }}>
                {progressPercent}%
              </span>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "100px", height: "6px",
              overflow: "hidden",
            }}>
              <div style={{
                width: `${progressPercent}%`,
                background: `linear-gradient(to right, #1d4ed8, ${course.accent})`,
                height: "100%",
                borderRadius: "100px",
                transition: "width 0.5s ease",
              }} />
            </div>
          </div>
          <p style={{ color: "#475569", fontSize: "11px" }}>
            {completed.length} of {course.lessons.length} lessons completed
          </p>
        </div>

        {/* Lesson List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
          <p style={{
            color: "#475569", fontSize: "11px",
            fontWeight: "700", letterSpacing: "1px",
            textTransform: "uppercase",
            padding: "8px 8px 12px",
          }}>
            Course Content
          </p>

          {course.lessons.map((l, index) => {
            const isActive = activeLesson === index;
            const isDone = completed.includes(index);

            return (
              <div
                key={l.id}
                onClick={() => setActiveLesson(index)}
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  marginBottom: "4px",
                  cursor: "pointer",
                  background: isActive
                    ? `${course.accent}15`
                    : "transparent",
                  border: isActive
                    ? `1px solid ${course.accent}30`
                    : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseOut={(e) => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {/* Status icon */}
                  <div style={{
                    width: "24px", height: "24px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: "800",
                    background: isDone
                      ? course.accent
                      : isActive
                        ? `${course.accent}25`
                        : "rgba(255,255,255,0.06)",
                    color: isDone
                      ? "#0f172a"
                      : isActive
                        ? course.accent
                        : "#475569",
                    border: !isDone && !isActive
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                  }}>
                    {isDone ? "✓" : isActive ? "▶" : l.id}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      color: isActive ? "white" : isDone ? "#64748b" : "#94a3b8",
                      fontSize: "13px",
                      fontWeight: isActive ? "700" : "500",
                      margin: 0,
                      lineHeight: "1.4",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}>
                      {l.title}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                      <span style={{ color: "#334155", fontSize: "11px" }}>⏱ {l.duration}</span>
                      {l.free && (
                        <span style={{
                          background: "rgba(52,211,153,0.1)",
                          border: "1px solid rgba(52,211,153,0.25)",
                          color: "#34d399",
                          padding: "1px 7px",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: "700",
                        }}>
                          FREE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Video Player Area */}
        <div style={{
          background: "#000",
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          maxHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
          {/* Mentor image as video background */}
          <img
            src={activeMentor.image}
            alt={activeMentor.name}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              opacity: 0.25,
              filter: "blur(2px)",
            }}
          />

          {/* Play button overlay */}
          <div style={{
            position: "relative", zIndex: 1,
            textAlign: "center",
          }}>
            <div style={{
              width: "80px", height: "80px",
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              margin: "0 auto 20px",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "0.3s",
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ▶
            </div>
            <p style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "18px", fontWeight: "700",
              marginBottom: "8px",
            }}>
              {lesson.title}
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
              Lesson {lesson.id} • {lesson.duration}
            </p>
          </div>

          {/* Video controls bar */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            padding: "20px 20px 12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ color: "white", fontSize: "18px", cursor: "pointer" }}>▶</span>
            <div style={{
              flex: 1, height: "4px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "100px",
              cursor: "pointer",
              position: "relative",
            }}>
              <div style={{
                width: "30%",
                height: "100%",
                background: course.accent,
                borderRadius: "100px",
              }} />
            </div>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>
              0:00 / {lesson.duration}
            </span>
            <span style={{ color: "white", fontSize: "16px", cursor: "pointer" }}>🔊</span>
            <span style={{ color: "white", fontSize: "16px", cursor: "pointer" }}>⛶</span>
          </div>
        </div>

        {/* Lesson Info */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>

          {/* Lesson title + actions */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
            gap: "20px",
            flexWrap: "wrap",
          }}>
            <div>
              <p style={{ color: "#475569", fontSize: "13px", marginBottom: "6px" }}>
                Lesson {lesson.id} of {course.lessons.length}
              </p>
              <h2 style={{
                color: "white", fontSize: "22px",
                fontWeight: "800", lineHeight: "1.3",
              }}>
                {lesson.title}
              </h2>
            </div>

            <button
              onClick={markComplete}
              style={{
                background: completed.includes(activeLesson)
                  ? "rgba(52,211,153,0.15)"
                  : "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                color: completed.includes(activeLesson) ? "#34d399" : "white",
                border: completed.includes(activeLesson)
                  ? "1px solid rgba(52,211,153,0.3)"
                  : "none",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "14px",
                flexShrink: 0,
                transition: "0.2s",
              }}
            >
              {completed.includes(activeLesson)
                ? "✓ Completed"
                : activeLesson < course.lessons.length - 1
                  ? "Mark Complete & Next →"
                  : "Complete Course 🎉"}
            </button>
          </div>

          {/* Divider */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "20px",
          }} />

          {/* Mentor info */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "14px",
            marginBottom: "20px",
          }}>
            <img
              src={activeMentor.image}
              alt={activeMentor.name}
              style={{
                width: "48px", height: "48px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: `2px solid ${course.accent}`,
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ color: "white", fontWeight: "700", fontSize: "15px", margin: 0 }}>
                {activeMentor.name}
              </p>
              <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
                Your AI Mentor — teaching {course.title}
              </p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{
                background: course.accent + "20",
                border: `1px solid ${course.accent}40`,
                color: course.accent,
                padding: "6px 14px",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: "700",
              }}>
                AI Powered ✨
              </span>
              <button
                onClick={() => setShowMentorPanel(true)}
                style={{
                  background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                  color: "white",
                  border: "none",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                🔄 Switch Mentor
              </button>
            </div>
          </div>

          {/* Lesson description */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "14px",
            padding: "20px",
            marginBottom: "20px",
          }}>
            <h3 style={{ color: "white", fontSize: "15px", fontWeight: "700", marginBottom: "10px" }}>
              About This Lesson
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.85", fontSize: "14px", margin: 0 }}>
              In this lesson, your AI mentor <strong style={{ color: "#94a3b8" }}>{activeMentor.name}</strong> walks you
              through <strong style={{ color: "#94a3b8" }}>{lesson.title}</strong> with real-world examples
              and hands-on exercises. Follow along and practice as you go to get the most out of this {lesson.duration} lesson.
            </p>
          </div>

          {/* Navigation buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
            <button
              onClick={() => activeLesson > 0 && setActiveLesson(activeLesson - 1)}
              disabled={activeLesson === 0}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: activeLesson === 0 ? "#334155" : "#94a3b8",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: activeLesson === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                fontSize: "14px",
                transition: "0.2s",
              }}
            >
              ← Previous Lesson
            </button>
            <button
              onClick={() => activeLesson < course.lessons.length - 1 && setActiveLesson(activeLesson + 1)}
              disabled={activeLesson === course.lessons.length - 1}
              style={{
                background: activeLesson === course.lessons.length - 1
                  ? "rgba(255,255,255,0.05)"
                  : "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                border: "none",
                color: activeLesson === course.lessons.length - 1 ? "#334155" : "white",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: activeLesson === course.lessons.length - 1 ? "not-allowed" : "pointer",
                fontWeight: "600",
                fontSize: "14px",
                transition: "0.2s",
              }}
            >
              Next Lesson →
            </button>
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
                Choose any mentor to teach you {course.title}. Progress is saved!
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
            >
              ✕
            </button>
          </div>

          {/* Current mentor */}
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
              >
                Reset to Default
              </button>
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
                    transition: "all 0.25s ease",
                    position: "relative",
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
                  }}>
                    {mentor.name}
                  </p>
                  <p style={{ color: "#475569", fontSize: "11px", margin: 0 }}>
                    {mentor.emoji} {mentor.role}
                  </p>
                </div>
              );
            })}
          </div>

          <p style={{ color: "#334155", fontSize: "12px", textAlign: "center", marginTop: "20px" }}>
            💡 Progress is saved automatically when you switch mentors
          </p>
        </div>
      </div>
    )}
  </>
  );
};

export default CoursePlayer;