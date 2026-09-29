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
        <Link to="/data-viz">Data Viz</Link>
        <Link to="/dev">Dev & Design</Link>
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

/* ---------------- DATA VIZ PAGE ---------------- */

const flourishSandbox = "allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation";

const dataVizVisualizations = [
  ["Bay Area tech workers skew more Democratic than others in their political giving", "https://datawrapper.dwcdn.net/DV5Vp/10/", 655],
  ["Share of Bay Area tech company donors who gave primarily to Republicans, in 2020 and 2024", "https://datawrapper.dwcdn.net/ENBQ6/4/", 776],
  ["Share of donors that gave all or most of their donations to Democrats at selected tech companies", "https://datawrapper.dwcdn.net/ZAcH0/2/", 864],
  ["Tech workers' giving to Scott Wiener and Connie Chan", "https://datawrapper.dwcdn.net/ffzcD/2/", 437],
  ["Polls' estimate of support for California gubernatorial candidates", "https://datawrapper.dwcdn.net/psnCD/1/", 345],
  ["Select groups' support for Xavier Becerra and Kamala Harris", "https://datawrapper.dwcdn.net/XckmB/1/", 410],
  ["The Filipino population declined more in Bay Area cities with high home values", "https://datawrapper.dwcdn.net/o0HJR/3/", 581],
  ["Major U.S. cities by share of residents living with a same-sex partner", "https://datawrapper.dwcdn.net/KVonb/3/", 899],
  ["Fewer UC students are graduating with debt...", "https://datawrapper.dwcdn.net/j4Xaz/1/", 511],
  ["...Meaning average student loan burdens have declined", "https://datawrapper.dwcdn.net/kQdSM/1/", 532],
  ["Change in S.F. noise complaints by neighborhood", "https://datawrapper.dwcdn.net/YVGuV/2/", 796],
  ["Noise complaints in the Western Addition", "https://datawrapper.dwcdn.net/WwIUa/2/", 468],
  ["Noise complaints in the Western Addition in 2026", "https://datawrapper.dwcdn.net/HMYqw/2/", 470],
  ["California counties by share of second homes", "https://datawrapper.dwcdn.net/SdJKc/1/", 635],
  ["Copilot use across S.F. city departments", "https://datawrapper.dwcdn.net/155ln/2/", 985],
  ["Copilot use by S.F. city employees since July 2025", "https://datawrapper.dwcdn.net/sU0Kx/4/", 514],
  ["Where tech workers live in S.F.", "https://datawrapper.dwcdn.net/78KGK/2/", 579],
  ["California cannabis sales", "https://datawrapper.dwcdn.net/CdWCJ/1/", 542],
  ["Major Bay Area transit systems by riders' income", "https://datawrapper.dwcdn.net/YZCq1/1/", 425],
  ["Interactive or visual content", "https://flo.uri.sh/story/3192870/embed?auto=1", 748, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/visualisation/24184759/embed?auto=1", 488.141, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/visualisation/23944872/embed?auto=1", 556.125, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/visualisation/24743933/embed?auto=1", 382.922, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/story/3285290/embed?auto=1", 585, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/visualisation/24666029/embed?auto=1", 400, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/story/3285392/embed?auto=1", 583, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/story/3263098/embed?auto=1", 518, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/visualisation/24648166/embed?auto=1", 614.156, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/visualisation/24492322/embed?auto=1", 242.234, flourishSandbox],
  ["Sustainability reporting waffle", "https://members.asicentral.com/media/jkbf5xwr/sustainabilityreportingwaffle.pdf", 900, undefined, "pdf"],
  ["Interactive or visual content", "https://flo.uri.sh/story/2967211/embed", 700, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/story/2998877/embed", 750, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/story/3048193/embed", 800, flourishSandbox],
  ["Interactive or visual content", "https://flo.uri.sh/story/3087991/embed", 900, flourishSandbox],
  ["Projections for regional electricity demand have increased each year", "https://datawrapper.dwcdn.net/aCu1f/2/", 484],
  ["Total PJM capacity costs rose in recent auctions", "https://datawrapper.dwcdn.net/4vUNf/2/", 438],
  ["There are nearly 40 data centers in Maryland", "https://datawrapper.dwcdn.net/UQ7X8/2/", 442]
];

function DataViz() {
  return (
    <Layout className="data-viz-page">
      <div className="data-viz-grid">
        {dataVizVisualizations.map(([title, src, height, sandbox]) => (
          <figure className="data-viz-card" key={src}>
            <iframe
              title={title}
              src={src}
              scrolling="no"
              loading="lazy"
              sandbox={sandbox}
              style={{ height: `${height}px` }}
            />
          </figure>
        ))}
      </div>
    </Layout>
  );
}

/* ---------------- DEV PAGE ---------------- */

const developmentProjects = [
  {
    title: "Tree canopy coverage in Washington, D.C.",
    link: "https://cnsmaryland.org/2026/05/13/mapping-washington-d-c-s-shade/",
    preview: "/images/trees-preview.mp4",
    type: "video",
    mimeType: "video/mp4",
    description: "Developed graphics and scrolly-telling in Javascript/D3 to show how tree canopy differs across Washington, D.C., and how that relates to other factors like the urban heat island effect, income and trees removed due to development. This story was published by Capital News Service."
  },
  {
    title: "Michigan demographic change tool",
    link: "https://michigan-demographic-changes.vercel.app/",
    preview: "/images/michigan-preview.mp4",
    type: "video",
    mimeType: "video/mp4",
    description: "Used React to build a news utility tool allowing users to enter their Michigan address and see how the population, income, education and diversity has changed in their microneighborhood in the last decade. The featured visualization allows readers to explore different Census tracts, and the written analysis section shows that, amid a statewide push for increased population, west Michigan has seen a boom, while other parts of the state have felt a loss in residents."
  }
];

function Dev() {
  return (
    <Layout className="dev-page">
      <h1>Dev & Design</h1>

      <div className="dev-list">
        {developmentProjects.map((project) => (
          <article className="dev-item" key={project.title}>
            <a className="dev-preview-link" href={project.link} target="_blank" rel="noopener noreferrer">
              <video
                className="dev-preview"
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
                <source src={project.preview} type={project.mimeType} />
              </video>
            </a>

            <div className="dev-copy">
              <h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h2>
              <p>{project.description}</p>
            </div>
          </article>
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
        <Route path="/data-viz" element={<DataViz />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/graphics" element={<Dev />} />
      </Routes>
    </Router>
  );
}
