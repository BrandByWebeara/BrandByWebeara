import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Globe,
  ShoppingBag,
  Smartphone,
  BarChart3,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Store",
    category: "E-Commerce",
    type: "ecommerce",
    text: "Modern online store with product listing and shopping experience.",
  },
  {
    title: "Business Website",
    category: "Business",
    type: "business",
    text: "Professional website designed to build trust and generate leads.",
  },
  {
    title: "Meta Ads Campaign",
    category: "Marketing",
    type: "marketing",
    text: "Social media advertising campaign designed for business growth.",
  },
  {
    title: "Google Business Listing",
    category: "Business",
    type: "google",
    text: "Google Business Profile setup and optimization.",
  },
  {
    title: "Modern Landing Page",
    category: "Landing Page",
    type: "landing",
    text: "High-converting landing page for a growing business.",
  },
  {
    title: "Mobile Business App",
    category: "Mobile",
    type: "mobile",
    text: "Mobile-first interface designed for a modern brand.",
  },
];

const filters = [
  "All",
  "E-Commerce",
  "Business",
  "Marketing",
  "Landing Page",
  "Mobile",
];

function ProjectPreview({ type }) {
  if (type === "ecommerce") {
    return (
      <div className="preview ecommerce-preview">
        <div className="preview-top">
          <b>SHOP</b>
          <span>⌕　♡　🛒</span>
        </div>

        <div className="preview-banner">
          <small>NEW COLLECTION</small>
          <strong>Grow Your<br />Business Online</strong>
          <button>SHOP NOW</button>
        </div>

        <div className="preview-products">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (type === "business") {
    return (
      <div className="preview business-preview">
        <div className="preview-browser">
          <i></i><i></i><i></i>
        </div>

        <div className="business-content">
          <small>YOUR BUSINESS</small>
          <h4>Build Your<br /><span>Digital Presence</span></h4>
          <p>Professional solutions for modern businesses.</p>
          <button>GET STARTED</button>
        </div>

        <div className="business-circle"></div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="preview marketing-preview">
        <div className="marketing-phone">
          <div className="phone-head">Instagram</div>
          <div className="insta-photo">
            <span>SALE</span>
          </div>
          <div className="insta-lines"></div>
          <div className="insta-lines short"></div>
        </div>

        <div className="marketing-chart">
          <small>CAMPAIGN RESULTS</small>
          <strong>+127%</strong>

          <div className="chart-bars">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    );
  }

  if (type === "google") {
    return (
      <div className="preview google-preview">
        <div className="google-logo">G</div>

        <div className="google-search">
          Google Business Profile
        </div>

        <div className="google-card">
          <div className="google-stars">★★★★★</div>
          <strong>BrandByWebeara</strong>
          <small>Digital Growth Agency</small>

          <div className="google-info">
            📍 India
            <br />
            ✓ Open · Online services
          </div>
        </div>
      </div>
    );
  }

  if (type === "landing") {
    return (
      <div className="preview landing-preview">
        <div className="landing-nav">
          BRAND<span>WEB</span>
          <small>MENU　CONTACT</small>
        </div>

        <div className="landing-center">
          <small>CREATIVE DIGITAL AGENCY</small>
          <h4>Turn Ideas Into<br /><span>Impact.</span></h4>
          <button>START PROJECT →</button>
        </div>
      </div>
    );
  }

  return (
    <div className="preview mobile-preview">
      <div className="mobile-phone">
        <div className="mobile-notch"></div>
        <small>BrandByWebeara</small>
        <h4>Grow<br /><span>Online.</span></h4>

        <div className="mobile-box"></div>
        <div className="mobile-line"></div>
        <div className="mobile-line short"></div>

        <button>EXPLORE</button>
      </div>
    </div>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="portfolio-page">

     {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <div className="brand-logo">
              <span>W</span>
            </div>
            <div>
              <div className="brand-name">
                Brand<span>By</span>Webeara
              </div>
              <div className="brand-tagline">YOUR BRAND. OUR CREATION.</div>
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Get Started <ArrowRight size={15} />
            </a>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>


      {/* ================= COMPACT HERO ================= */}

      <section className="portfolio-hero">

        <div className="portfolio-container hero-inner">

          <div className="hero-left">

            <Link
              to="#home"
              className="back-home"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

            <div className="gold-label">
              <span></span>
              OUR PORTFOLIO
            </div>

            <h1>
              Projects We've
              <br />
              <span>Built.</span>
            </h1>

            <p>
              Explore our latest websites, e-commerce stores,
              landing pages and digital projects.
            </p>

          </div>

          <div className="hero-mini-visual">

            <div className="mini-browser">

              <div className="browser-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="mini-browser-content">
                <small>BRANDBYWEBEARA</small>

                <h3>
                  Grow Your
                  <br />
                  <span>Business Online</span>
                </h3>

                <div className="mini-button">
                  GET STARTED
                </div>
              </div>

            </div>

            <div className="mini-phone">

              <div className="mini-notch"></div>

              <small>BrandBy</small>

              <strong>
                Grow
                <br />
                Online
              </strong>

              <div className="mini-phone-box"></div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="portfolio-work">

        <div className="portfolio-container">

          <div className="work-heading">

            <div>

              <div className="gold-label">
                <span></span>
                FEATURED WORK
              </div>

              <h2>
                Our Recent <span>Projects</span>
              </h2>

            </div>

            <p>
              A collection of websites and digital experiences
              we've created for businesses and brands.
            </p>

          </div>


          {/* FILTERS */}

          <div className="portfolio-filters">

            {filters.map((filter) => (

              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>

            ))}

          </div>


          {/* PROJECT GRID */}

          <div className="projects-grid">

            {filteredProjects.map(
              (project, index) => (

                <article
                  className="project-card"
                  key={project.title}
                >

                  <div className="project-preview">

                    <ProjectPreview
                      type={project.type}
                    />

                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <button className="preview-arrow">
                      <ArrowUpRight size={17} />
                    </button>

                  </div>


                  <div className="project-info">

                    <div className="project-category">
                      {project.category}
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.text}
                    </p>

                    <button className="view-project">
                      View Project
                      <ArrowRight size={13} />
                    </button>

                  </div>

                </article>

              )
            )}

          </div>


          {/* BOTTOM INFO */}

          <div className="portfolio-bottom-info">

            <div>
              <Globe size={18} />
              <span>
                Modern & Responsive
              </span>
            </div>

            <div>
              <Code2 size={18} />
              <span>
                Clean Development
              </span>
            </div>

            <div>
              <Smartphone size={18} />
              <span>
                Mobile Friendly
              </span>
            </div>

            <div>
              <BarChart3 size={18} />
              <span>
                Business Focused
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="portfolio-cta">

        <div className="portfolio-container">

          <div className="cta-inner">

            <div>

              <small>
                HAVE A PROJECT IN MIND?
              </small>

              <h2>
                Let's build something
                <span> amazing.</span>
              </h2>

              <p>
                Ready to turn your idea into a professional
                digital experience?
              </p>

            </div>

            <Link
              to="/contact"
              className="cta-button"
            >
              Start Your Project
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

       <footer className="footer">
        <div className="container footer-top">
          <a href="#home" className="brand">
            <div className="brand-logo">
              <span>W</span>
            </div>
            <div>
              <div className="brand-name">
                Brand<span>By</span>Webeara
              </div>
              <div className="brand-tagline">YOUR BRAND. OUR CREATION.</div>
            </div>
          </a>
          
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="#services">Services</Link>
            <Link to="#about">About</Link>
            <Link to="#portfolio">Portfolio</Link>
            <Link to="#contact">Contact</Link>
          </div>

          <div className="copyright">
            © 2026 BrandByWebeara
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Portfolio;