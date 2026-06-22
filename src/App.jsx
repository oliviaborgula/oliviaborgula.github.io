import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

/* ---------------- LAYOUT ---------------- */

function Layout({ children, className }) {
  return (
    <div className={`page ${className || ""}`}>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/reporting">Data & Enterprise Reporting</Link>
        <Link to="/graphics">Graphics & Data Viz</Link>
      </nav>

      {children}

      <footer className="footer">
        Made with React.
      </footer>
    </div>
  );
}

/* ---------------- HOME PAGE ---------------- */

function Home() {
  return (
    <Layout>

      <h1>🌸 I'm Olivia.</h1>

      {/* SOCIAL MEDIA ICONS */}
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/olivia-borgula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/oliviaborgula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://twitter.com/oliviaborgula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a href="mailto:oliviaborgula@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      {/* BODY TEXT */}
      <div className="body-text">

        <p>
          I'm pursuing a career as a data reporter, and I'm passionate about using numbers and data visualization to make complicated information more digestible for readers.
        </p>

        <p>
          I'm currently a summer 2026 intern with{" "}
          <a href="https://www.sfchronicle.com/data/" target="_blank" rel="noopener noreferrer">
            the San Francisco Chronicle's
          </a>{" "}
          data team. Previously, I was a Capitol Hill reporting fellow with{" "}
          <a href="https://www.texastribune.org/author/olivia-borgula/" target="_blank" rel="noopener noreferrer">
            The Texas Tribune
          </a>{" "}
          and a{" "}
          <a href="https://www.dowjonesnewsfund.org/djnfinternships/" target="_blank" rel="noopener noreferrer">
            Dow Jones News Fund
          </a>{" "}
          data reporting intern with{" "}
          <a href="https://members.asicentral.com/news" target="_blank" rel="noopener noreferrer">
            Advertising Specialty Institute
          </a>, a business trade publication.
        </p>

        <p>
          While I was there, I was managing editor of the student newspaper,{" "}
          <a href="https://dbknews.com/" target="_blank" rel="noopener noreferrer">
            The Diamondback
          </a>, and worked with{" "}
          <a href="https://cnsmaryland.org/the-howard-center-for-investigative-journalism/" target="_blank" rel="noopener noreferrer">
            the Howard Center for Investigative Journalism
          </a>{" "}
          and Capital News Service’s data bureau.
        </p>

        <p>
          In my free time, I enjoy reading, going on long walks and drinking coffee and matcha!
        </p>

      </div>

    </Layout>
  );
}

/* ---------------- REPORTING PAGE ---------------- */

function Reporting() {
  return (
    <Layout className="reporting-page">

      <h1>Data & Enterprise</h1>

      <div className="report-section">
        <h2>The Texas Tribune</h2>
        <p className="section-desc">
          Capitol Hill reporting fellow, Jan - May 2026
        </p>

        <ul>
          <li>
            <a href="https://www.texastribune.org/2026/04/01/texas-congress-ai-super-pacs-artificial-intelligence-regulation-2026-midterms/" target="_blank" rel="noopener noreferrer">
              AI-aligned super PACs are pouring millions into Texas congressional races
            </a>
          </li>

          <li>
            <a href="https://www.texastribune.org/2026/04/09/bobby-pulido-quinceaneras-monica-de-la-cruz-south-texas-congress/" target="_blank" rel="noopener noreferrer">
              In South Texas, quinceañera dig becomes campaign fuel for Tejano musician Bobby Pulido
            </a>
          </li>

          <li>
            <a href="https://www.texastribune.org/2026/04/20/texas-crypto-currency-pacs-fairshake-menefee-green/" target="_blank" rel="noopener noreferrer">
              Cryptocurrency industry is on track to surpass 2024 spending
            </a>
          </li>
        </ul>
      </div>

      <div className="report-section">
        <h2>Capital News Service</h2>

        <p className="section-desc">
          Data and graphics reporter, Jan - May 2025
        </p>

        <ul>
          <li>
            <a href="https://cnsmaryland.org/2026/06/09/residents-fear-frederick-county-will-be-the-new-data-center-alley/" target="_blank" rel="noopener noreferrer">
              Residents fear Frederick County will be the new ‘data center alley’
            </a>
          </li>

          <li>
            <a href="https://cnsmaryland.org/2026/03/04/as-data-centers-multiply-marylands-power-grid-struggles-to-keep-up/" target="_blank" rel="noopener noreferrer">
              As data centers multiply, Maryland’s power grid struggles to keep up
            </a>
          </li>
        </ul>
      </div>

    </Layout>
  );
}

/* ---------------- GRAPHICS DATA ---------------- */

const graphicsProjects = [
  {
    title: "Tree loss and inequality in Washington, D.C.",
    subhead: "Published by Capital News Service",
    link: "https://cnsmaryland.org/2026/05/13/mapping-washington-d-c-s-shade/",
    preview: "/images/trees-preview.mp4",
    type: "video",
    skills: ["JavaScript", "D3", "HTML", "CSS", "Scrollytelling"]
  },

  {
    title: "Plastic waste distribution",
    subhead: "Personal project",
    link: "/images/Borgula_Plastic_Distribution.png",
    preview: "/images/Borgula_Plastic_Distribution.png",
    type: "image",
    skills: ["Illustrator", "Photoshop", "Flourish"]
  }
];

/* ---------------- GRAPHICS PAGE ---------------- */

function Graphics() {
  return (
    <Layout>

      <h1>Graphics & Interactive</h1>

      <p className="page-subhead">
        This page has a mix of my published data visualizations and interactive graphics.
      </p>

      <div className="graphics-grid">
        {graphicsProjects.map((project, i) => (
          <a
            key={i}
            className="graphic-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >

            {project.type === "video" ? (
              <video
                className="graphic-media"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src={project.preview} type="video/mp4" />
              </video>
            ) : (
              <img src={project.preview} alt={project.title} />
            )}

            <div className="graphic-info">
              <div className="graphic-title">{project.title}</div>
              <div className="graphic-subhead">{project.subhead}</div>

              <div className="skill-tags">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </a>
        ))}
      </div>

    </Layout>
  );
}

/* ---------------- APP ROUTER ---------------- */

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/graphics" element={<Graphics />} />
      </Routes>
    </Router>
  );
}