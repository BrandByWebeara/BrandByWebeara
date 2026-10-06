```jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Facebook,
  Globe,
  Instagram,
  Menu,
  MessageCircle,
  Smartphone,
  X,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    category: "E-Commerce",
    type: "ecommerce",
    description:
      "A modern online store designed to turn visitors into customers.",
    tags: ["E-Commerce", "Responsive", "Modern UI"],
  },
  {
    id: 2,
    title: "Business Website",
    category: "Business",
    type: "business",
    description:
      "A professional business website built to create trust and generate leads.",
    tags: ["Business", "Corporate", "Responsive"],
  },
  {
    id: 3,
    title: "Meta Ads Campaign",
    category: "Marketing",
    type: "marketing",
    description:
      "A conversion-focused digital marketing campaign designed for growth.",
    tags: ["Meta Ads", "Marketing", "Growth"],
  },
  {
    id: 4,
    title: "Google Business Listing",
    category: "Business",
    type: "google",
    description:
      "Google Business optimization designed to improve local visibility.",
    tags: ["Google", "Local SEO", "Business"],
  },
  {
    id: 5,
    title: "Modern Landing Page",
    category: "Landing Page",
    type: "landing",
    description:
      "A clean landing page designed for strong conversions and engagement.",
    tags: ["Landing Page", "UI/UX", "Conversion"],
  },
  {
    id: 6,
    title: "Mobile Business App",
    category: "Mobile",
    type: "mobile",
    description:
      "A mobile-first digital experience designed for modern businesses.",
    tags: ["Mobile", "App UI", "Modern"],
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
      <div className="preview-window ecommerce-preview">
        <div className="preview-top">
          <span className="preview-logo">SHOP</span>
          <div className="preview-menu">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="ecommerce-content">
          <div>
            <small>NEW COLLECTION</small>
            <h4>Style & Modern</h4>
            <button>Shop Now</button>
          </div>

          <div className="product-shape">
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  if (type === "business") {
    return (
      <div className="preview-window business-preview">
        <div className="preview-top">
          <span className="preview-logo">BRAND</span>
          <div className="preview-menu">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="business-content">
          <div>
            <small>BUILD YOUR</small>
            <h4>Digital Presence</h4>
            <p>Grow your business online.</p>
            <button>Get Started</button>
          </div>

          <div className="business-person">
            <div className="person-head" />
            <div className="person-body" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="preview-window marketing-preview">
        <div className="marketing-phone">
          <div className="phone-notch" />
          <div className="phone-screen">
            <small>GROW ONLINE</small>
            <strong>+127%</strong>
            <span>Campaign Results</span>
          </div>
        </div>

        <div className="marketing-chart">
          <div className="bar bar-1" />
          <div className="bar bar-2" />
          <div className="bar bar-3" />
          <div className="bar bar-4" />
        </div>
      </div>
    );
  }

  if (type === "google") {
    return (
      <div className="preview-window google-preview">
        <div className="google-card">
          <div className="google-icon">G</div>
          <div>
            <strong>BrandByWebeara</strong>
            <small>Digital Growth Agency</small>
            <span>● Open · Online services</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "landing") {
    return (
      <div className="preview-window landing-preview">
        <div className="landing-copy">
          <small>TURN IDEAS INTO</small>
          <h4>Impact.</h4>
          <p>Build something people remember.</p>
          <button>Start Now</button>
        </div>

        <div className="landing-image">
          <div className="landing-circle" />
          <div className="landing-person" />
        </div>
      </div>
    );
  }

  return (
    <div className="preview-window mobile-preview">
      <div className="mobile-device">
        <div className="mobile-notch" />
        <div className="mobile-content">
          <small>YOUR BRAND</small>
          <h4>Grow Online</h4>
          <div className="mobile-line" />
          <div className="mobile-line short" />
          <button>Explore</button>
        </div>
      </div>

      <div className="mobile-glow-circle" />
    </div>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="brand">
            <div className="brand-logo">W</div>

            <div>
              <div className="brand-name">
                Brand<span>ByWebeara</span>
              </div>

              <div className="brand-tagline">
                YOUR BRAND. OUR CREATION.
              </div>
            </div>
          </Link>

          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#about">About</a>

            <Link to="/portfolio" className="active">
              Portfolio
            </Link>

            <a href="/#pricing">Pricing</a>
            <a href="/#contact">Contact</a>

            <a href="/#contact" className="nav-cta">
              Get Started
              <ArrowRight size={16} />
            </a>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-grid">
            <div className="portfolio-hero-content">
              <div className="portfolio-badge">
                <span />
                OUR PORTFOLIO
              </div>

              <h1>
                Creative Projects
                <br />
                That{" "}
                <span className="portfolio-gradient-text">Make Impact</span>
              </h1>

              <p>
                Explore our latest websites, e-commerce stores, landing pages and
                digital projects. We build solutions that help brands grow and
                succeed online.
              </p>

              <div className="portfolio-stats">
                <div>
                  <strong>50+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>30+</strong>
                  <span>Happy Clients</span>
                </div>

                <div>
                  <strong>5★</strong>
                  <span>Client Rating</span>
                </div>
              </div>
            </div>

            <div className="portfolio-hero-visual">
              <div className="hero-glow" />

              <div className="hero-browser">
                <div className="browser-top">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-address">brandbywebeara.com</div>
                </div>

                <div className="browser-screen">
                  <div className="screen-header">
                    <span>BrandByWebeara</span>
                    <div />
                  </div>

                  <div className="screen-content">
                    <small>BUILD YOUR</small>
                    <h3>Digital Presence</h3>
                    <p>Grow your brand online.</p>

                    <div className="screen-buttons">
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="screen-card">
                    <Code2 size={24} />
                    <strong>Modern Website</strong>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <Globe size={18} />
                <span>Web Design</span>
              </div>

              <div className="floating-card floating-card-two">
                <Smartphone size={18} />
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-work">
        <div className="container">
          <div className="portfolio-section-heading">
            <div>
              <span className="section-label">SELECTED WORK</span>

              <h2>
                Projects Built for
                <span> Growth.</span>
              </h2>
            </div>

            <p>
              Every project is designed with performance, usability and your
              business goals in mind.
            </p>
          </div>

          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <article className="portfolio-project-card" key={project.id}>
                <div className="portfolio-preview">
                  <ProjectPreview type={project.type} />

                  <div className="preview-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="portfolio-project-info">
                  <div className="portfolio-project-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <button className="view-project-btn">
                    View Project
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-features">
        <div className="container">
          <div className="portfolio-features-grid">
            <div className="portfolio-feature">
              <div className="feature-icon">
                <Code2 size={21} />
              </div>

              <div>
                <h3>Modern & Responsive</h3>
                <p>Beautiful on every device.</p>
              </div>
            </div>

            <div className="portfolio-feature">
              <div className="feature-icon">
                <Check size={21} />
              </div>

              <div>
                <h3>Clean Development</h3>
                <p>Fast & reliable code.</p>
              </div>
            </div>

            <div className="portfolio-feature">
              <div className="feature-icon">
                <Smartphone size={21} />
              </div>

              <div>
                <h3>Mobile Friendly</h3>
                <p>Perfect for every screen.</p>
              </div>
            </div>

            <div className="portfolio-feature">
              <div className="feature-icon">
                <ArrowUpRight size={21} />
              </div>

              <div>
                <h3>Business Focused</h3>
                <p>Designed for growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <div className="portfolio-cta-inner">
            <div>
              <span>LET'S BUILD SOMETHING GREAT</span>

              <h2>
                Ready to Start
                <br />
                Your Project?
              </h2>

              <p>Let's turn your ideas into a powerful digital experience.</p>
            </div>

            <a href="/#contact" className="portfolio-cta-button">
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div className="brand">
            <div className="brand-logo">W</div>

            <div>
              <div className="brand-name">
                Brand<span>ByWebeara</span>
              </div>

              <div className="brand-tagline">
                YOUR BRAND. OUR CREATION.
              </div>
            </div>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#about">About</a>
            <Link to="/portfolio">Portfolio</Link>
            <a href="/#contact">Contact</a>
          </div>

          <div className="socials">
            <a href="/#contact" aria-label="Facebook">
              <Facebook size={18} />
            </a>

            <a href="/#contact" aria-label="Instagram">
              <Instagram size={18} />
            </a>

            <a href="/#contact" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 BrandByWebeara. All rights reserved.</span>
          <span>Built with modern technology.</span>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
