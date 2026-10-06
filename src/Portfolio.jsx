import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  Globe,
  Menu,
  Smartphone,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    category: "E-Commerce",
    type: "ecommerce",
    text: "Modern online store with product listing and a smooth shopping experience.",
  },
  {
    id: 2,
    title: "Business Website",
    category: "Business",
    type: "business",
    text: "Professional website designed to build trust and generate quality leads.",
  },
  {
    id: 3,
    title: "Meta Ads Campaign",
    category: "Marketing",
    type: "marketing",
    text: "Social media advertising campaign designed to increase reach and growth.",
  },
  {
    id: 4,
    title: "Google Business Listing",
    category: "Business",
    type: "google",
    text: "Google Business Profile setup and optimization for better local visibility.",
  },
  {
    id: 5,
    title: "Modern Landing Page",
    category: "Landing Page",
    type: "landing",
    text: "High-converting landing page created for a growing modern business.",
  },
  {
    id: 6,
    title: "Mobile Business App",
    category: "Mobile",
    type: "mobile",
    text: "Mobile-first interface designed for a modern brand and its customers.",
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

/* =========================================================
   PROJECT PREVIEWS
========================================================= */

function ProjectPreview({ type }) {
  if (type === "ecommerce") {
    return (
      <div className="portfolio-preview portfolio-preview-ecommerce">
        <div className="portfolio-preview-top">
          <strong>SHOP</strong>

          <div className="portfolio-preview-icons">
            <span>⌕</span>
            <span>♡</span>
            <span>🛒</span>
          </div>
        </div>

        <div className="portfolio-ecommerce-banner">
          <small>NEW COLLECTION</small>

          <h4>
            Grow Your
            <br />
            <span>Business Online</span>
          </h4>

          <button type="button">SHOP NOW</button>
        </div>

        <div className="portfolio-product-row">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (type === "business") {
    return (
      <div className="portfolio-preview portfolio-preview-business">
        <div className="portfolio-browser-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="portfolio-business-content">
          <small>YOUR BUSINESS</small>

          <h4>
            Build Your
            <br />
            <span>Digital Presence</span>
          </h4>

          <p>Professional solutions for modern businesses.</p>

          <button type="button">GET STARTED</button>
        </div>

        <div className="portfolio-business-circle"></div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="portfolio-preview portfolio-preview-marketing">
        <div className="portfolio-marketing-phone">
          <div className="portfolio-phone-header">Instagram</div>

          <div className="portfolio-instagram-photo">
            <span>SALE</span>
          </div>

          <div className="portfolio-instagram-line"></div>
          <div className="portfolio-instagram-line portfolio-short"></div>
        </div>

        <div className="portfolio-marketing-chart">
          <small>CAMPAIGN RESULTS</small>

          <strong>+127%</strong>

          <div className="portfolio-chart-bars">
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
      <div className="portfolio-preview portfolio-preview-google">
        <div className="portfolio-google-logo">G</div>

        <div className="portfolio-google-search">
          Google Business Profile
        </div>

        <div className="portfolio-google-card">
          <div className="portfolio-google-stars">★★★★★</div>

          <strong>BrandByWebeara</strong>

          <small>Digital Growth Agency</small>

          <div className="portfolio-google-info">
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
      <div className="portfolio-preview portfolio-preview-landing">
        <div className="portfolio-landing-nav">
          <strong>
            BRAND<span>WEB</span>
          </strong>

          <small>MENU&nbsp;&nbsp;&nbsp; CONTACT</small>
        </div>

        <div className="portfolio-landing-center">
          <small>CREATIVE DIGITAL AGENCY</small>

          <h4>
            Turn Ideas Into
            <br />
            <span>Impact.</span>
          </h4>

          <button type="button">START PROJECT →</button>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-preview portfolio-preview-mobile">
      <div className="portfolio-mobile-phone">
        <div className="portfolio-mobile-notch"></div>

        <small>BrandByWebeara</small>

        <h4>
          Grow
          <br />
          <span>Online.</span>
        </h4>

        <div className="portfolio-mobile-box"></div>

        <div className="portfolio-mobile-line"></div>
        <div className="portfolio-mobile-line portfolio-short"></div>

        <button type="button">EXPLORE</button>
      </div>
    </div>
  );
}

/* =========================================================
   PORTFOLIO PAGE
========================================================= */

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const goHome = (section = "") => {
    setMenuOpen(false);

    if (section) {
      navigate(`/#${section}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="portfolio-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar portfolio-navbar">
        <div className="container nav-inner">

          <button
            type="button"
            className="portfolio-brand-button"
            onClick={() => goHome()}
            aria-label="Go to homepage"
          >
            <div className="brand-logo">
              <span>W</span>
            </div>

            <div>
              <div className="brand-name">
                Brand<span>By</span>Webeara
              </div>

              <div className="brand-tagline">
                YOUR BRAND. OUR CREATION.
              </div>
            </div>
          </button>

          <nav
            className={`portfolio-nav ${
              menuOpen ? "portfolio-nav-open" : ""
            }`}
          >
            <button type="button" onClick={() => goHome()}>
              Home
            </button>

            <button type="button" onClick={() => goHome("services")}>
              Services
            </button>

            <button type="button" onClick={() => goHome("about")}>
              About
            </button>

            <button
              type="button"
              className="portfolio-nav-active"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </button>

            <button type="button" onClick={() => (window.location.href = "/pricing")}>
              Pricing
            </button>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="portfolio-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
              <ArrowRight size={14} />
            </Link>
          </nav>

          <Link
            to="/contact"
            className="portfolio-start-btn"
          >
            Get Started
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            className="portfolio-menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-hero">

        <div className="portfolio-container portfolio-hero-inner">

          <div className="portfolio-hero-left">

            <button
              type="button"
              className="portfolio-back-home"
              onClick={() => goHome()}
            >
              <ArrowLeft size={14} />
              Back to Home
            </button>

            <div className="portfolio-gold-label">
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
              landing pages and digital projects created for
              modern businesses and brands.
            </p>

          </div>

          <div className="portfolio-hero-visual">

            <div className="portfolio-mini-browser">

              <div className="portfolio-browser-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="portfolio-mini-browser-content">

                <small>BRANDBYWEBEARA</small>

                <h3>
                  Grow Your
                  <br />
                  <span>Business Online</span>
                </h3>

                <div className="portfolio-mini-button">
                  GET STARTED
                </div>

              </div>

            </div>

            <div className="portfolio-mini-phone">

              <div className="portfolio-mini-notch"></div>

              <small>BrandBy</small>

              <strong>
                Grow
                <br />
                Online
              </strong>

              <div className="portfolio-mini-phone-box"></div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="portfolio-work">

        <div className="portfolio-container">

          <div className="portfolio-work-heading">

            <div>
              <div className="portfolio-gold-label">
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
                type="button"
                key={filter}
                className={
                  activeFilter === filter ? "active" : ""
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}

          </div>

          {/* PROJECT GRID */}

          <div className="portfolio-projects-grid">

            {filteredProjects.map((project, index) => (

              <article
                className="portfolio-project-card"
                key={project.id}
              >

                <div className="portfolio-project-preview">

                  <ProjectPreview type={project.type} />

                  <span className="portfolio-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    className="portfolio-preview-arrow"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </button>

                </div>

                <div className="portfolio-project-info">

                  <div className="portfolio-project-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <button
                    type="button"
                    className="portfolio-view-project"
                    onClick={() => navigate("/contact")}
                  >
                    View Project
                    <ArrowRight size={13} />
                  </button>

                </div>

              </article>

            ))}

          </div>

          {/* BOTTOM INFO */}

          <div className="portfolio-bottom-info">

            <div>
              <Globe size={18} />
              <span>Modern & Responsive</span>
            </div>

            <div>
              <Code2 size={18} />
              <span>Clean Development</span>
            </div>

            <div>
              <Smartphone size={18} />
              <span>Mobile Friendly</span>
            </div>

            <div>
              <BarChart3 size={18} />
              <span>Business Focused</span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="portfolio-cta">

        <div className="portfolio-container">

          <div className="portfolio-cta-inner">

            <div>

              <small>HAVE A PROJECT IN MIND?</small>

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
              className="portfolio-cta-button"
            >
              Start Your Project
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer portfolio-footer">

        <div className="container footer-top">

          <button
            type="button"
            className="portfolio-footer-brand"
            onClick={() => goHome()}
          >
            <div className="brand-logo">
              <span>W</span>
            </div>

            <div>
              <div className="brand-name">
                Brand<span>By</span>Webeara
              </div>

              <div className="brand-tagline">
                YOUR BRAND. OUR CREATION.
              </div>
            </div>
          </button>

          <div className="footer-links">

            <button type="button" onClick={() => goHome()}>
              Home
            </button>

            <button
              type="button"
              onClick={() => goHome("services")}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => goHome("about")}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
            >
              Portfolio
            </button>

            <button
              type="button"
              onClick={() => goHome("pricing")}
            >
              Pricing
            </button>

            <Link to="/contact">
              Contact
            </Link>

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