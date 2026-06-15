import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const links = {
    Platform: ["Home", "Courses", "Dashboard", "Certificates"],
    Courses: ["Full Stack Dev", "DSA Mastery", "Artificial Intelligence", "Interview Prep"],
    Company: ["About Us", "Careers", "Blog", "Press Kit"],
    Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Use"],
  };

  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(5,10,25,0.95)",
      backdropFilter: "blur(12px)",
    }}>
      {/* MAIN FOOTER */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 20px 30px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "30px",
      }}>

        {/* BRAND COL */}
        <div>
          <h2 style={{ color: "#38bdf8", fontSize: "26px", fontWeight: "900", marginBottom: "6px", letterSpacing: "-0.5px" }}>
            LMS AI
          </h2>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "100px",
            padding: "3px 12px",
            marginBottom: "14px",
          }}>
            <span style={{ color: "#475569", fontSize: "11px" }}>powered by</span>
            <span style={{ fontSize: "11px", fontWeight: "800" }}>
              <span style={{ color: "#f97316" }}>UPTO</span>
              <span style={{ color: "#38bdf8" }}>SKILLS</span>
            </span>
          </div>
          <p style={{ color: "#475569", lineHeight: "1.85", fontSize: "14px", marginBottom: "24px", maxWidth: "280px" }}>
            India's #1 celebrity AI-powered EdTech platform.
            Learn from Virat, Ronaldo, Elon Musk and more —
            and land your dream tech job.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "𝕏", href: "#" },
              { label: "in", href: "#" },
              { label: "▶", href: "#" },
              { label: "📸", href: "#" },
            ].map((s, i) => (
              <a key={i} href={s.href}
                style={{
                  width: "36px", height: "36px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "9px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#64748b", fontSize: "14px", fontWeight: "700",
                  textDecoration: "none", transition: "0.25s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(56,189,248,0.1)"; e.currentTarget.style.color = "#38bdf8"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* LINK COLS */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px" }}>
              {heading}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {items.map((item, i) => (
                <li key={i}>
                  <span
                    onClick={() => {
                      const pathMap = {
                        "Home": "/home", "Courses": "/courses",
                        "Dashboard": "/dashboard", "Certificates": "/dashboard",
                        "Full Stack Dev": "/courses/full-stack-development",
                        "DSA Mastery": "/courses/data-structures-algorithms",
                        "Artificial Intelligence": "/courses/artificial-intelligence",
                        "Interview Prep": "/courses/interview-preparation",
                      };
                      if (pathMap[item]) navigate(pathMap[item]);
                    }}
                    style={{
                      color: "#475569", fontSize: "14px", cursor: "pointer",
                      transition: "0.2s", display: "inline-block",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.color = "#38bdf8"; e.currentTarget.style.paddingLeft = "4px"; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.paddingLeft = "0"; }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* NEWSLETTER */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{
          maxWidth: "1400px", margin: "0 auto",
          padding: "24px 20px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
        }}>
          <div>
            <p style={{ color: "white", fontWeight: "700", fontSize: "15px", margin: "0 0 4px" }}>Get weekly tech tips &amp; course updates</p>
            <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>No spam. Unsubscribe anytime.</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px", padding: "11px 18px",
                color: "white", fontSize: "14px", outline: "none",
                width: "240px", boxSizing: "border-box",
              }}
            />
            <button style={{
              background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
              color: "white", border: "none",
              padding: "11px 22px", borderRadius: "10px",
              cursor: "pointer", fontWeight: "700", fontSize: "14px",
              whiteSpace: "nowrap",
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <p style={{ color: "#334155", fontSize: "13px", margin: 0 }}>
          © 2026 <span style={{ color: "#38bdf8" }}>StarClass AI</span>. All rights reserved. Built with ❤️ in India.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item, i) => (
            <span key={i} style={{ color: "#334155", fontSize: "13px", cursor: "pointer", transition: "0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#38bdf8")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;