import { useEffect, useState } from "react";
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
    </div>
  );
}

/* ---------------- HOME PAGE ---------------- */

function Home() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "I'm Olivia.";
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typing);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <Layout>



<div className="hero-title">
  <div className="pixel-newspaper" aria-hidden="true">
    <div className="newspaper-paper">
      <div className="newspaper-name"></div>
      <div className="newspaper-headline"></div>
      <div className="newspaper-headline"></div>
      <div className="newspaper-headline short"></div>

      <div className="newspaper-lines">
        <span></span>
        <span></span>
        <span></span>
        <span className="short"></span>
        <span></span>
      </div>
    </div>
  </div>

  <h1>
    {typedText}
    <span className="typing-cursor">|</span>
  </h1>
</div>

      {/* SOCIAL MEDIA ICONS */}
      <div className="socials">

        <a href="https://www.linkedin.com/in/olivia-borgula/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/oliviaborgula" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://twitter.com/oliviaborgula" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>

        <a href="mailto:oliviaborgula@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      {/* INTRO PARAGRAPH */}
      <div className="body-text">

        <p>
          Most recently, I was a summer 2026 data reporting intern with{" "}
          <a href="https://www.sfchronicle.com/data/" target="_blank" rel="noopener noreferrer">
            the San Francisco Chronicle.
          </a>{" "}
          Previously, I was a Capitol Hill reporting fellow with{" "}
          <a href="https://www.texastribune.org/author/olivia-borgula/" target="_blank" rel="noopener noreferrer">
            the Texas Tribune
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
          I graduated summa cum laude with dual degrees in journalism and information science from the University of Maryland in May. While I was there, I was managing editor of the student newspaper,{" "}
          <a href="https://dbknews.com/" target="_blank" rel="noopener noreferrer">
            the Diamondback
          </a>, and worked on the data team at{" "}
          <a href="https://cnsmaryland.org/the-howard-center-for-investigative-journalism/" target="_blank" rel="noopener noreferrer">
            the Howard Center for Investigative Journalism.
          </a>{" "}
        </p>

        <p>
          Now, I'm pursuing a career in data journalism. In my free time, I enjoy reading, going on long walks and drinking coffee and matcha!
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
        <h2>San Francisco Chronicle</h2>
        <p className="section-desc">Data reporting intern, June - Aug 2026</p>
        <ul>
        <li>
          <a href="https://drive.google.com/file/d/1je3JxWBGX7-Cd2A9YCe47_Hjgd2WZXSN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Analysis: Tech’s turn to the political right was a mirage
            </a>
          </li>
          <li>
          <a href="https://drive.google.com/file/d/1ELKbK7kk9MJjfi-LPE-3NVHNvF_u11-E/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          This Bay Area city became a Filipino American haven. Now many can’t afford to stay
            </a>
          </li>
          <li>
          <a href="https://drive.google.com/file/d/1_RHNZf32hh3pedld1I19TwnvVWHpe6dW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Noise complaints are surging in San Francisco. Hundreds are tied to the same corner
            </a>
          </li>
          <li>
          <a href="https://drive.google.com/file/d/1XBoVF_yzGRlfSFtKFPi2Uee0EoqTWiOp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Donald Trump made historic gains in California in 2024. Can Steve Hilton build on that?
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1PtjnIFk63pg1C51zoYkFwGeTREB3Cbpu/view?usp=sharingg" target="_blank" rel="noopener noreferrer">
            Exclusive: In the capital of AI, government adoption is all over the place
            </a>
          </li>
          <li>
          <a href="https://drive.google.com/file/d/1mUge25HYAYKF-YT6XN9aQkZcjCP68YnC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          California cannabis sales have tumbled. Is the market finally turning a corner?
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/13nXbSb9abIUQbIwawsz_3EUwXOkcj4Kz/view?usp=sharing/" target="_blank" rel="noopener noreferrer">
            Wealthier riders once flocked to Bay Area public transit. New data suggests that’s over
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1_r5s3mbhS3mSOoLaFrNOaj9c41Ga6kAy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            These Bay Area suburbs are the furthest behind on their housing goals
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ibXrsxqJUfxkm1na8dzqPN05I6LUc2li/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Where do tech workers live in San Francisco? This neighborhood tops the list</a>
          </li>
        </ul>
        </div>
    
        <div className="report-section">
        <h2>The Texas Tribune</h2>
        <p className="section-desc">Capitol Hill reporting fellow, Jan - May 2026</p>

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
              Cryptocurrency industry is on track to surpass 2024 spending on Texas midterm races
            </a>
          </li>

          <li>
            <a href="https://www.texastribune.org/2026/05/13/texas-democratic-primary-runoff-colin-allred-julie-johnson-congress/" target="_blank" rel="noopener noreferrer">
              Immigration a flashpoint in Allred-Johnson Democratic runoff
            </a>
          </li>

          <li>
            <a href="https://www.texastribune.org/2026/05/22/texas-18th-congressional-district-democratic-primary-corporate-super-pacs-crypto-christian-menefee-al-green/" target="_blank" rel="noopener noreferrer">
              In Democratic runoff, Reps. Al Green and Christian Menefee clash over influence of big money in politics
            </a>
          </li>

          <li>
            <a href="https://www.texastribune.org/2026/05/29/texas-35th-congressional-district-maureen-galindo-johnny-garcia-outside-spending-gop-pac/" target="_blank" rel="noopener noreferrer">
              Outside spending blitz defined the close of Texas’ District 35 Democratic runoff
            </a>
          </li>
        </ul>
      </div>

      <div className="report-section">
        <h2>Capital News Service</h2>
        <p className="section-desc">Data and graphics reporter, Jan - May 2025</p>

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

          <li>
            <a href="https://cnsmaryland.org/2025/05/09/heres-how-federal-and-state-action-may-affect-maryland-electric-vehicle-programs/" target="_blank" rel="noopener noreferrer">
              Here’s how federal and state action may affect Maryland electric vehicle programs
            </a>
          </li>

          <li>
            <a href="https://cnsmaryland.org/2025/04/01/maryland-reported-3-measles-cases-in-march-heres-what-you-need-to-know/" target="_blank" rel="noopener noreferrer">
              Maryland reported 3 measles cases in March. Here’s what you need to know.
            </a>
          </li>

          <li>
            <a href="https://www.thebanner.com/community/public-health/egg-prices-bird-flu-outbreak-GILFRQ4YUZCOXNK5JE7BY6B57U/" target="_blank" rel="noopener noreferrer">
              Egg prices nationwide hit record high amid bird flu outbreak
            </a>
          </li>
        </ul>
      </div>

      <div className="report-section">
        <h2>Advertising Specialty Institute via Dow Jones</h2>
        <p className="section-desc">Data reporter, June - Aug 2025</p>

        <ul>
          <li>
            <a href="https://members.asicentral.com/news/strategy/july-2025/pride-related-promo-searches-decline-as-brands-scale-back/" target="_blank" rel="noopener noreferrer">
              Pride-Related Promo Searches Decline as Brands Scale Back
            </a>
          </li>

          <li>
            <a href="https://members.asicentral.com/news/strategy/august-2025/apparel-suppliers-broaden-supply-chains-amid-tariff-concerns/" target="_blank" rel="noopener noreferrer">
              Apparel Suppliers Broaden Supply Chains Amid Tariff Concerns
            </a>
          </li>

          <li>
            <a href="https://members.asicentral.com/news/strategy/august-2025/art-in-the-age-of-algorithms-the-promise-pitfalls-of-ai-design/" target="_blank" rel="noopener noreferrer">
              Art in the Age of Algorithms: The Promise & Pitfalls of AI Design
            </a>
          </li>

          <li>
            <a href="https://members.asicentral.com/news/strategy/august-2025/nearly-one-third-of-top-promo-firms-release-annual-sustainability-reports/" target="_blank" rel="noopener noreferrer">
              Nearly One-Third of Top Promo Firms Release Annual Sustainability Reports
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
  },

  {
    title: "Apparel imports from China",
    subhead: "Published by Advertising Specialty Institute",
    link: "/images/China_Apparel_Imports.png",
    preview: "/images/China_Apparel_Imports.png",
    type: "image",
    skills: ["Flourish"]
  },

  {
    title: "Corporate sustainability reports",
    subhead: "Published by Advertising Specialty Institute",
    link: "/images/Borgula_Sustainability.png",
    preview: "/images/Borgula_Sustainability.png",
    type: "image",
    skills: ["Python", "Illustrator", "Photoshop"]
  },

  {
    title: "Trump administration cuts to higher education",
    subhead: "Personal project",
    link: "/images/SchoolsGrants.png",
    preview: "/images/SchoolsGrants.png",
    type: "image",
    skills: ["Flourish"]
  },

  {
    title: "Swan Lake coda",
    subhead: "Produced for data visualization class at the University of Maryland",
    link: "/images/Borgula_Fouette.png",
    preview: "/images/Borgula_Fouette.png",
    type: "image",
    skills: ["Illustrator", "Photoshop"]
  },

  {
    title: "MMR vaccination rates",
    subhead: "Published by Capital News Service",
    link: "/images/Borgula_Measles.png",
    preview: "/images/Borgula_Measles.png",
    type: "image",
    skills: ["R", "Illustrator", "Photoshop"]
  },

  {
    title: "Power grid auction",
    subhead: "Published by Capital News Service",
    link: "/images/PJM_Auction.png",
    preview: "/images/PJM_Auction.png",
    type: "image",
    skills: ["Datawrapper"]
  },

  {
    title: "Data center load projections",
    subhead: "Published by Capital News Service",
    link: "/images/DataCenterProjections.png",
    preview: "/images/DataCenterProjections.png",
    type: "image",
    skills: ["Datawrapper"]
  },

  {
    title: "Juneteenth holiday around the country",
    subhead: "Published by Advertising Specialty Institute",
    link: "/images/Juneteenth.png",
    preview: "/images/Juneteenth.png",
    type: "image",
    skills: ["Flourish"]
  },

  {
    title: "Death row disparities",
    subhead: "Produced for data visualization class at the University of Maryland",
    link: "/images/Borgula_Death_Row.png",
    preview: "/images/Borgula_Death_Row.png",
    type: "image",
    skills: ["Illustrator", "Photoshop", "Sheets"]
  },

  {
    title: "Iris flowers",
    subhead: "Produced for data visualization class at the University of Maryland",
    link: "/images/Borgula_Iris.png",
    preview: "/images/Borgula_Iris.png",
    type: "image",
    skills: ["RAWGraphs", "Artwork"]
  },

  {
    title: "Apparel import levels on different countries",
    subhead: "Published by Advertising Specialty Institute",
    link: "/images/Tariffs_Apparel.png",
    preview: "/images/Tariffs_Apparel.png",
    type: "image",
    skills: ["Flourish"]
  },

  {
    title: "Trump administration cuts to the healthcare industry",
    subhead: "Personal Project",
    link: "/images/Healthcare_Cuts.png",
    preview: "/images/Healthcare_Cuts.png",
    type: "image",
    skills: ["Datawrapper"]
  },

  {
    title: "Rising ocean temperatures",
    subhead: "Produced for data visualization class at the University of Maryland",
    link: "/images/Borgula_Ocean_Temps.png",
    preview: "/images/Borgula_Ocean_Temps.png",
    type: "image",
    skills: ["Illustrator", "Photoshop"]
  }
];

/* ---------------- GRAPHICS PAGE ---------------- */

function Graphics() {
  return (
    <Layout>

      <h1>Graphics & Interactive</h1>

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