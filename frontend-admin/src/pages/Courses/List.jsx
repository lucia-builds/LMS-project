const mernImage = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500";
const dsaImage = "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500";
const aiImage = "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=500";
const interviewImage = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500";

/*import viratImage from "../assets/virat.jpg";
import ronaldoImage from "../assets/ronaldo.jpg";
import srkImage from "../assets/srk.jpg";
import elonImage from "../assets/elon.jpg";
import messiImage from "../assets/messi.jpg";
import bezosImage from "../assets/bezos.jpg";
import pichaiImage from "../assets/pichai.jpg";
import sachinImage from "../assets/sachin.jpg";*/
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Safe online placeholders so the admin application renders instantly:
const viratImage = "https://ui-avatars.com/api/?name=Virat+Kohli&background=1e293b&color=38bdf8";
const ronaldoImage = "https://ui-avatars.com/api/?name=Cristiano+Ronaldo&background=1e293b&color=38bdf8";
const srkImage = "https://ui-avatars.com/api/?name=SRK&background=1e293b&color=38bdf8";
const elonImage = "https://ui-avatars.com/api/?name=Elon+Musk&background=1e293b&color=38bdf8";
const messiImage = "https://ui-avatars.com/api/?name=Lionel+Messi&background=1e293b&color=38bdf8";
const bezosImage = "https://ui-avatars.com/api/?name=Jeff+Bezos&background=1e293b&color=38bdf8";
const pichaiImage = "https://ui-avatars.com/api/?name=Sundar+Pichai&background=1e293b&color=38bdf8";
const sachinImage = "https://ui-avatars.com/api/?name=Sachin+T&background=1e293b&color=38bdf8";

/* ── ALL COURSES DATA ── */
const allCourses = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    image: mernImage,
    mentorImage: viratImage,
    mentor: "Virat Kohli",
    category: "Development",
    level: "Beginner → Pro",
    levelColor: "#34d399",
    rating: "4.9",
    students: "3.2K",
    lessons: "48",
    hours: "36",
    accent: "#38bdf8",
    tag: "Most Popular",
    tagColor: "#38bdf8",
    desc: "Master the MERN stack — MongoDB, Express, React and Node.js — by building 10 real-world production apps.",
    skills: ["React.js", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    image: dsaImage,
    mentorImage: ronaldoImage,
    mentor: "Cristiano Ronaldo",
    category: "DSA",
    level: "Intermediate",
    levelColor: "#fbbf24",
    rating: "4.8",
    students: "2.8K",
    lessons: "60",
    hours: "48",
    accent: "#a78bfa",
    tag: "Trending 🔥",
    tagColor: "#a78bfa",
    desc: "Crack any coding interview with deep DSA knowledge — arrays, trees, graphs, dynamic programming and more.",
    skills: ["Arrays", "Trees", "Graphs", "DP"],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    image: aiImage,
    mentorImage: elonImage,
    mentor: "Elon Musk",
    category: "AI",
    level: "Advanced",
    levelColor: "#f87171",
    rating: "4.9",
    students: "4.1K",
    lessons: "52",
    hours: "42",
    accent: "#34d399",
    tag: "Hot Pick 🚀",
    tagColor: "#34d399",
    desc: "Explore machine learning, neural networks, computer vision and NLP — build real AI-powered applications.",
    skills: ["ML", "Deep Learning", "NLP", "CV"],
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    image: interviewImage,
    mentorImage: srkImage,
    mentor: "Shah Rukh Khan",
    category: "Career",
    level: "All Levels",
    levelColor: "#60a5fa",
    rating: "4.7",
    students: "2.5K",
    lessons: "35",
    hours: "28",
    accent: "#fbbf24",
    tag: "New ✨",
    tagColor: "#fbbf24",
    desc: "Land your dream job with mock interviews, resume building, aptitude training and HR preparation.",
    skills: ["Mock Interview", "Resume", "Aptitude", "HR"],
  },
  {
    id: "system-design",
    title: "System Design",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    mentorImage: messiImage,
    mentor: "Lionel Messi",
    category: "Development",
    level: "Advanced",
    levelColor: "#f87171",
    rating: "4.8",
    students: "1.9K",
    lessons: "40",
    hours: "32",
    accent: "#f472b6",
    tag: "New ✨",
    tagColor: "#f472b6",
    desc: "Design scalable systems like Netflix, Uber and WhatsApp. Learn load balancing, caching and microservices.",
    skills: ["Microservices", "Caching", "Load Balancing", "DB Design"],
  },
   {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    mentorImage: bezosImage,
    mentor: "Jeff Bezos",
    category: "Development",
    level: "Intermediate",
    levelColor: "#fbbf24",
    rating: "4.7",
    students: "2.2K",
    lessons: "45",
    hours: "38",
    accent: "#fb923c",
    tag: "Trending 🔥",
    tagColor: "#fb923c",
    desc: "Master AWS, Docker, Kubernetes and CI/CD pipelines. Deploy real apps to the cloud like a pro.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "android-flutter",
    title: "Android & Flutter",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    mentorImage: pichaiImage,
    mentor: "Sundar Pichai",
    category: "Development",
    level: "Beginner → Pro",
    levelColor: "#34d399",
    rating: "4.6",
    students: "1.7K",
    lessons: "55",
    hours: "44",
    accent: "#60a5fa",
    tag: "Popular",
    tagColor: "#60a5fa",
    desc: "Build cross-platform mobile apps for Android and iOS using Flutter and Dart from scratch.",
    skills: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    mentorImage: sachinImage,
    mentor: "Sachin Tendulkar",
    category: "DSA",
    level: "Intermediate",
    levelColor: "#fbbf24",
    rating: "4.8",
    students: "1.4K",
    lessons: "38",
    hours: "30",
    accent: "#e879f9",
    tag: "New ✨",
    tagColor: "#e879f9",
    desc: "Learn ethical hacking, penetration testing, network security and protect systems from cyber attacks.",
    skills: ["Ethical Hacking", "Pen Testing", "Network", "Security"],
  },
];

const categories = ["All", "Development", "DSA", "AI", "Career"];

/* ── SHARED STYLES ── */
const S = {
  gradText: {
    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  glass: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
  },
};

/* ════════════════════════════════════════ */
const Courses = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  /* Filter logic */
  const filtered = allCourses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.mentor.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      {/* ── HERO HEADER ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* background glows */}
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-50px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px 30px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ color: "#60a5fa", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: "700", display: "block", marginBottom: "14px" }}>
              ✦ Celebrity AI Powered Learning ✦
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "white", fontWeight: "900", lineHeight: "1.1", marginBottom: "18px", letterSpacing: "-2px" }}>
              Explore All <span style={S.gradText}>Courses</span>
            </h1>
            <p style={{ color: "#64748b", fontSize: "18px", maxWidth: "520px", margin: "0 auto", lineHeight: "1.8" }}>
              Learn from celebrity AI mentors. Master real skills.
              Land your dream tech job.
            </p>
          </div>

          {/* ── SEARCH BAR ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "580px" }}>
              <span style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", fontSize: "18px", color: "#475569" }}>🔍</span>
              <input
                type="text"
                placeholder="Search courses or mentors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 20px 16px 50px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  backdropFilter: "blur(10px)",
                  transition: "border 0.3s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          </div>

          {/* ── CATEGORY FILTERS ── */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "100px",
                  border: activeCategory === cat
                    ? "1px solid rgba(56,189,248,0.5)"
                    : "1px solid rgba(255,255,255,0.1)",
                  background: activeCategory === cat
                    ? "rgba(56,189,248,0.15)"
                    : "rgba(255,255,255,0.04)",
                  color: activeCategory === cat ? "#38bdf8" : "#64748b",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  backdropFilter: "blur(8px)",
                }}
                onMouseOver={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "white";
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#64748b";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{ textAlign: "center", color: "#475569", fontSize: "14px", marginBottom: "0" }}>
            Showing <span style={{ color: "#38bdf8", fontWeight: "700" }}>{filtered.length}</span> courses
            {activeCategory !== "All" && <span> in <span style={{ color: "white" }}>{activeCategory}</span></span>}
          </p>
        </div>
      </div>

      {/* ── COURSE GRID ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px 16px 60px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
            <h3 style={{ color: "white", fontSize: "24px", marginBottom: "10px" }}>No courses found</h3>
            <p style={{ color: "#475569" }}>Try a different search or category</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "30px",
          }}>
            {filtered.map((course, index) => (
              <div
                key={index}
                onClick={() => navigate(`/courses/${course.id}`)}
                onMouseOver={() => setHoveredCard(index)}
                onMouseOut={() => setHoveredCard(null)}
                style={{
                  ...S.glass,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  transform: hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: hoveredCard === index ? "0 20px 50px rgba(56,189,248,0.1)" : "none",
                  borderColor: hoveredCard === index ? "rgba(56,189,248,0.25)" : "rgba(255,255,255,0.08)",
                }}
              >
                {/* IMAGE */}
                <div style={{ position: "relative", height: "190px", overflow: "hidden" }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform: hoveredCard === index ? "scale(1.06)" : "scale(1)",
                    }}
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop`;
                    }}
                  />
                  {/* gradient overlay */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, rgba(5,10,25,0.9), transparent)" }} />

                  {/* Tag badge */}
                  <span style={{
                    position: "absolute", top: "12px", left: "12px",
                    background: "rgba(56,189,248,0.15)",
                    color: "#38bdf8",
                    border: "1px solid rgba(56,189,248,0.3)",
                    padding: "4px 12px", borderRadius: "100px",
                    fontSize: "11px", fontWeight: "800",
                    letterSpacing: "0.3px",
                  }}>
                    {course.tag}
                  </span>

                  {/* Rating */}
                  <span style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "rgba(5,10,25,0.85)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fbbf24", padding: "4px 10px",
                    borderRadius: "100px", fontSize: "12px",
                    fontWeight: "700", backdropFilter: "blur(6px)",
                  }}>
                    ⭐ {course.rating}
                  </span>

                  {/* Mentor avatar — bottom left of image */}
                  <div style={{
                    position: "absolute", bottom: "12px", left: "12px",
                    display: "flex", alignItems: "center", gap: "8px",
                  }}>
                    <img
                      src={course.mentorImage}
                      alt={course.mentor}
                      style={{
                        width: "34px", height: "34px",
                        borderRadius: "50%",
                        border: `2px solid ${course.accent}`,
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(course.mentor)}&background=1e293b&color=60a5fa&size=100`;
                      }}
                    />
                    <span style={{
                      color: "white", fontSize: "12px",
                      fontWeight: "600",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}>
                      {course.mentor}
                    </span>
                  </div>
                </div>

                {/* CARD BODY */}
                <div style={{ padding: "20px" }}>
                  {/* Title */}
                  <h3 style={{
                    color: "white", fontSize: "16px",
                    fontWeight: "700", marginBottom: "8px",
                    lineHeight: "1.4",
                  }}>
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: "#475569", fontSize: "13px",
                    lineHeight: "1.7", marginBottom: "14px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {course.desc}
                  </p>

                  {/* Skills tags */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
                    {course.skills.map((skill, i) => (
                      <span key={i} style={{
                        background: "rgba(56,189,248,0.1)",
                        border: "1px solid rgba(56,189,248,0.2)",
                        color: "#38bdf8",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    marginBottom: "16px",
                  }}>
                    <div style={{ display: "flex", gap: "14px" }}>
                      <span style={{ color: "#475569", fontSize: "12px" }}>
                        📚 {course.lessons} lessons
                      </span>
                      <span style={{ color: "#475569", fontSize: "12px" }}>
                        ⏱️ {course.hours}h
                      </span>
                    </div>
                    <span style={{
                      color: "#94a3b8",
                      fontSize: "11px",
                      fontWeight: "700",
                      background: "rgba(148,163,184,0.1)",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      border: "1px solid rgba(148,163,184,0.2)",
                    }}>
                      {course.level}
                    </span>
                  </div>

                  {/* Students + Enroll button */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748b", fontSize: "12px" }}>
                      👥 {course.students} students
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/courses/${course.id}`);
                      }}
                      style={{
                        background: `linear-gradient(135deg, #1d4ed8, #7c3aed)`,
                        color: "white",
                        border: "none",
                        padding: "9px 20px",
                        borderRadius: "9px",
                        cursor: "pointer",
                        fontWeight: "700",
                        fontSize: "13px",
                        boxShadow: "0 4px 14px rgba(29,78,216,0.3)",
                        transition: "0.25s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(29,78,216,0.45)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 14px rgba(29,78,216,0.3)";
                      }}
                    >
                      Enroll Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Courses;