import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Layout({ children }) {
  return (
    <div className="page">

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/reporting">Data & Enterprise Reporting</Link>
        <Link to="/graphics">Graphics & Interactive</Link>
      </nav>

      {children}

      <footer className="footer">
        Made with React.
      </footer>
    </div>
  );
}

function Home() {
  return (
    <Layout>

      <h1>🌸 I'm Olivia.</h1>

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

      <div className="body-text">
        <p>
        I'm pursuing a career as a data reporter, and I'm passionate about using numbers and data visualization to make complicated information more digestible for readers.
        </p>

        <p>
          I'm currently interning on <a href="https://www.sfchronicle.com/data/" target="_blank">the San Francisco Chronicle's</a> data team. Previously, I was a Capitol Hill reporting fellow with <a href="https://www.texastribune.org/author/olivia-borgula/" target="_blank">the Texas Tribune</a> and a <a href="https://www.dowjonesnewsfund.org/djnfinternships/">Dow Jones News Fund</a> data reporting intern with <a href="https://members.asicentral.com/news" target="_blank">Advertising Specialty Institute</a>, a business trade publication. 
        </p>

        <p>
          While in college, I was managing editor of the student newspaper, <a href="https://dbknews.com/" target="_blank">The Diamondback</a>, and worked for <a href="https://cnsmaryland.org/the-howard-center-for-investigative-journalism/">the Howard Center for Investigative Journalism</a>
           and <a href="https://cnsmaryland.org/author/olborgula/">Capital News Services’</a> data and graphics bureau.
        </p>

        <p>
          In my free time, I enjoy reading, going on long walks and drinking
          coffee and matcha! Feel free to contact me at the links above.
          Thanks for stopping by my portfolio :)
        </p>
      </div>
    </Layout>
  );
}


function Reporting() {
  return (
    <Layout>

      <h1>📊 Data & Enterprise</h1>

      <div className="report-section">
        <h2>The Texas Tribune</h2>
        <ul>
          <li>
            <a href="https://www.texastribune.org/2026/04/01/texas-congress-ai-super-pacs-artificial-intelligence-regulation-2026-midterms/" target="_blank">AI-aligned super PACs are pouring millions into Texas congressional races</a>
          </li>
          <li>
            <a href="https://www.texastribune.org/2026/01/28/julie-johnson-palantir-ice-deportation-stock-trades-congress/" target="_blank">Rep. Julie Johnson traded stocks from company that helps Trump’s deportation efforts despite anti-ICE comments</a>
          </li>
          <li>
            <a href="https://www.texastribune.org/2026/04/09/bobby-pulido-quinceaneras-monica-de-la-cruz-south-texas-congress/" target="_blank">In South Texas, quinceañera dig becomes campaign fuel for Tejano musician Bobby Pulido</a>
          </li>
          <li>
            <a href="https://www.texastribune.org/2026/05/13/texas-democratic-primary-runoff-colin-allred-julie-johnson-congress/" target="_blank">Immigration a flashpoint in Allred-Johnson Democratic runoff</a>
          </li>
          <li>
            <a href="https://www.texastribune.org/2026/05/22/texas-18th-congressional-district-democratic-primary-corporate-super-pacs-crypto-christian-menefee-al-green/" target="_blank">In Democratic runoff, Reps. Al Green and Christian Menefee clash over influence of big money in politics</a>
          </li>
        </ul>
      </div>

      <div className="report-section">
        <h2>Capital News Service</h2>

        <ul>
          <li>
            <a href="https://cnsmaryland.org/2026/03/04/as-data-centers-multiply-marylands-power-grid-struggles-to-keep-up/" target="_blank">As data centers multiply, Maryland’s power grid struggles to keep up</a>
          </li>
          <li>
            <a href="https://cnsmaryland.org/2025/05/09/heres-how-federal-and-state-action-may-affect-maryland-electric-vehicle-programs/" target="_blank">Here’s how federal and state action may affect Maryland electric vehicle programs</a>
          </li>
          <li>
            <a href="https://cnsmaryland.org/2025/04/01/maryland-reported-3-measles-cases-in-march-heres-what-you-need-to-know/" target="_blank">Maryland reported 3 measles cases in March. Here’s what you need to know.</a>
          </li>
        </ul>
      </div>

      <div className="report-section">
        <h2>Advertising Specialty Institute via Dow Jones</h2>

        <ul>
          <li>
            <a href="https://members.asicentral.com/news/strategy/july-2025/pride-related-promo-searches-decline-as-brands-scale-back/" target="_blank">Pride-Related Promo Searches Decline as Brands Scale Back</a>
          </li>
          <li>
            <a href="https://members.asicentral.com/news/strategy/august-2025/art-in-the-age-of-algorithms-the-promise-pitfalls-of-ai-design/" target="_blank">Art in the Age of Algorithms: The Promise & Pitfalls of AI Design</a>
          </li>
          <li>
            <a href="https://members.asicentral.com/news/strategy/august-2025/nearly-one-third-of-top-promo-firms-release-annual-sustainability-reports/" target="_blank">Nearly One-Third of Top Promo Firms Release Annual Sustainability Reports</a>
          </li>
          <li>
            <a href="https://members.asicentral.com/news/strategy/august-2025/apparel-suppliers-broaden-supply-chains-amid-tariff-concerns/" target="_blank">Apparel Suppliers Broaden Supply Chains Amid Tariff Concerns</a>
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
    link: "https://cnsmaryland.org/2026/05/13/mapping-washington-d-c-s-shade/",
    preview: "/images/trees-preview.mp4",
    type: "video",
    skills: ["JavaScript", "D3", "HTML", "CSS", "Scrollytelling"]
  },
  {
    title: "Plastic waste distribution",
    link: "/images/Borgula_Plastic_Distribution.png",
    preview: "/images/Borgula_Plastic_Distribution.png",
    type: "image",
    skills: ["Adobe Illustrator", "Photoshop", "Flourish"]
  },

  {
    title: "Swan Lake coda",
    link: "/images/Borgula_Fouette.png",
    preview: "/images/Borgula_Fouette.png",
    type: "image",
    skills: ["Adobe Illustrator", "Photoshop"]
  },
];

/* ---------------- GRAPHICS PAGE ---------------- */

function Graphics() {
  return (
    <Layout>

      <h1>🎨 Graphics & Interactive</h1>

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

            <div className="graphic-meta">
              {project.meta}
            </div>

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
