import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe,
  Menu,
  Rocket,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
  Facebook,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="about-page">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-inner">

          <a href="/" className="brand" onClick={closeMenu}>
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
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/services" onClick={closeMenu}>Services</a>
            <a href="/about" onClick={closeMenu}>About</a>
            <a href="/portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="/pricing" onClick={closeMenu}>Pricing</a>

            <a
              href="/contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              Get Started
              <ArrowRight size={14} />
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


      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="container">

          <div className="about-hero-content">

            <div className="section-label">
              ABOUT BRANDBYWEARa
            </div>

            <h1>
              We Build Brands
              <span> That Grow.</span>
            </h1>

            <p>
              BrandByWebeara is a digital growth agency helping businesses
              build a strong online presence, reach more customers and grow
              with the power of modern technology.
            </p>

            <div className="about-hero-buttons">
              <a href="/contact" className="about-primary-btn">
                Start Your Project
                <ArrowRight size={17} />
              </a>

              <a href="/services" className="about-secondary-btn">
                Explore Services
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>


          <div className="about-hero-visual">

            <div className="about-glow"></div>

            <div className="about-main-card">

              <div className="about-card-top">
                <span>BRANDBYWEARA</span>

                <div className="about-live">
                  <span></span>
                  Growing
                </div>
              </div>

              <div className="about-card-title">
                <span>Your Brand.</span>
                <strong>Our Creation.</strong>
              </div>

              <div className="about-mini-grid">

                <div className="about-mini-card">
                  <Globe size={19} />
                  <strong>Online</strong>
                  <span>Presence</span>
                </div>

                <div className="about-mini-card">
                  <Target size={19} />
                  <strong>Targeted</strong>
                  <span>Growth</span>
                </div>

                <div className="about-mini-card">
                  <Rocket size={19} />
                  <strong>Business</strong>
                  <span>Growth</span>
                </div>

                <div className="about-mini-card">
                  <Code2 size={19} />
                  <strong>Modern</strong>
                  <span>Technology</span>
                </div>

              </div>

              <div className="about-card-bottom">
                <span>Digital Growth Agency</span>
                <div className="about-card-line"></div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="about-who section-light">

        <div className="container">

          <div className="about-who-grid">

            <div className="about-who-content">

              <div className="section-label">
                WHO WE ARE
              </div>

              <h2>
                We Turn Ideas Into
                <span> Digital Growth.</span>
              </h2>

              <p>
                Every business deserves a strong digital presence. That's
                where BrandByWebeara comes in.
              </p>

              <p>
                We help local businesses, startups and growing brands take
                their business online through professional websites,
                advertising, Google Business optimization, marketplace
                listings and creative branding solutions.
              </p>

              <p>
                Our goal is simple — make your business look professional
                online and help you reach the right customers.
              </p>

              <div className="about-check-list">

                <div>
                  <Check size={15} />
                  <span>Professional Digital Presence</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Business-Focused Solutions</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Modern & Reliable Technology</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Transparent Process</span>
                </div>

              </div>

            </div>


            <div className="about-who-visual">

              <div className="about-orbit-card">

                <div className="orbit-center">
                  <div className="orbit-logo">W</div>
                  <span>BrandByWebeara</span>
                </div>

                <div className="orbit-item orbit-one">
                  <Globe size={18} />
                  <span>Website</span>
                </div>

                <div className="orbit-item orbit-two">
                  <Target size={18} />
                  <span>Marketing</span>
                </div>

                <div className="orbit-item orbit-three">
                  <Sparkles size={18} />
                  <span>Branding</span>
                </div>

                <div className="orbit-item orbit-four">
                  <Rocket size={18} />
                  <span>Growth</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}
      <section className="about-services section-dark">

        <div className="container">

          <div className="section-heading center">

            <div className="section-label">
              WHAT WE DO
            </div>

            <h2>
              Everything Your Business
              <span> Needs Online.</span>
            </h2>

            <p>
              From building your website to promoting your business,
              we provide practical digital solutions under one roof.
            </p>

          </div>


          <div className="about-services-grid">

            <div className="about-service-card">
              <div className="about-service-icon">
                <Code2 />
              </div>

              <span>01</span>

              <h3>Website Development</h3>

              <p>
                Modern, responsive and business-focused websites that
                make your brand look professional online.
              </p>

              <a href="/services">
                Learn More
                <ArrowUpRight size={15} />
              </a>
            </div>


            <div className="about-service-card">
              <div className="about-service-icon">
                <Target />
              </div>

              <span>02</span>

              <h3>Digital Marketing</h3>

              <p>
                Strategic Meta and Google advertising designed to help
                businesses reach the right audience.
              </p>

              <a href="/services">
                Learn More
                <ArrowUpRight size={15} />
              </a>
            </div>


            <div className="about-service-card">
              <div className="about-service-icon">
                <Globe />
              </div>

              <span>03</span>

              <h3>Google Business</h3>

              <p>
                We help businesses improve their Google presence and
                make it easier for local customers to find them.
              </p>

              <a href="/services">
                Learn More
                <ArrowUpRight size={15} />
              </a>
            </div>


            <div className="about-service-card">
              <div className="about-service-icon">
                <Sparkles />
              </div>

              <span>04</span>

              <h3>Brand & Graphic Design</h3>

              <p>
                Creative branding and graphic solutions that help your
                business create a memorable visual identity.
              </p>

              <a href="/services">
                Learn More
                <ArrowUpRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}
      <section className="about-why section-light">

        <div className="container">

          <div className="section-heading center">

            <div className="section-label">
              WHY BRANDBYWEARA
            </div>

            <h2>
              More Than Just
              <span> Digital Services.</span>
            </h2>

            <p>
              We focus on your business goals, not just on delivering
              another digital project.
            </p>

          </div>


          <div className="about-why-grid">

            <div className="about-why-card">
              <div className="about-why-number">01</div>
              <div className="about-why-icon">
                <Users />
              </div>
              <h3>Business First</h3>
              <p>
                We understand your business before creating a solution
                for it.
              </p>
            </div>


            <div className="about-why-card">
              <div className="about-why-number">02</div>
              <div className="about-why-icon">
                <Zap />
              </div>
              <h3>Simple & Fast</h3>
              <p>
                We keep the process simple, clear and focused on results.
              </p>
            </div>


            <div className="about-why-card">
              <div className="about-why-number">03</div>
              <div className="about-why-icon">
                <Code2 />
              </div>
              <h3>Modern Technology</h3>
              <p>
                We use modern tools and technologies to build reliable
                digital experiences.
              </p>
            </div>


            <div className="about-why-card">
              <div className="about-why-number">04</div>
              <div className="about-why-icon">
                <Target />
              </div>
              <h3>Growth Focused</h3>
              <p>
                Every solution is created with your long-term business
                growth in mind.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}
      <section className="about-approach section-dark">

        <div className="container">

          <div className="about-approach-grid">

            <div>

              <div className="section-label">
                OUR APPROACH
              </div>

              <h2>
                Simple Process.
                <span> Real Progress.</span>
              </h2>

              <p>
                We don't believe in complicated processes. We understand,
                plan, build and help your business grow.
              </p>

              <a href="/contact" className="about-approach-btn">
                Let's Work Together
                <ArrowRight size={16} />
              </a>

            </div>


            <div className="about-approach-steps">

              <div className="about-step">
                <div className="about-step-number">01</div>
                <div>
                  <h3>Understand</h3>
                  <p>
                    We understand your business, audience and goals.
                  </p>
                </div>
              </div>


              <div className="about-step">
                <div className="about-step-number">02</div>
                <div>
                  <h3>Plan</h3>
                  <p>
                    We create the right digital strategy for your needs.
                  </p>
                </div>
              </div>


              <div className="about-step">
                <div className="about-step-number">03</div>
                <div>
                  <h3>Build</h3>
                  <p>
                    We design and develop your digital presence.
                  </p>
                </div>
              </div>


              <div className="about-step">
                <div className="about-step-number">04</div>
                <div>
                  <h3>Grow</h3>
                  <p>
                    We help you improve, optimize and grow.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="about-stats section-light">

        <div className="container">

          <div className="about-stats-grid">

            <div className="about-stat">
              <strong>6+</strong>
              <span>Digital Services</span>
            </div>

            <div className="about-stat">
              <strong>100%</strong>
              <span>Business Focused</span>
            </div>

            <div className="about-stat">
              <strong>24/7</strong>
              <span>Digital Presence</span>
            </div>

            <div className="about-stat">
              <strong>1</strong>
              <span>Goal — Your Growth</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="about-cta">

        <div className="container">

          <div className="about-cta-box">

            <div className="about-cta-glow"></div>

            <div className="about-cta-content">

              <div className="section-label">
                LET'S BUILD SOMETHING GREAT
              </div>

              <h2>
                Ready to Take Your
                <span> Business Online?</span>
              </h2>

              <p>
                Let's create a digital presence that makes your business
                look professional and helps you grow.
              </p>

              <a href="/contact" className="about-cta-btn">
                Start Your Project
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container">

          <div className="footer-grid">

            <div className="footer-brand">

              <a href="/" className="brand">

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

              </a>

              <p>
                Digital Growth Agency helping businesses build their
                online presence and grow with modern digital solutions.
              </p>

              <div className="footer-socials">

                <a href="#" aria-label="Facebook">
                  <Facebook size={16} />
                </a>

                <a href="#" aria-label="Instagram">
                  <Instagram size={16} />
                </a>

                <a href="/contact" aria-label="Email">
                  <Mail size={16} />
                </a>

              </div>

            </div>


            <div className="footer-column">

              <h4>Quick Links</h4>

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/pricing">Pricing</a>

            </div>


            <div className="footer-column">

              <h4>Services</h4>

              <a href="/services">Website Development</a>
              <a href="/services">Meta Ads</a>
              <a href="/services">Google Business</a>
              <a href="/services">E-Commerce Listing</a>
              <a href="/services">Brand & Graphic Design</a>

            </div>


            <div className="footer-column footer-contact">

              <h4>Get In Touch</h4>

              <a href="/contact">
                <Mail size={15} />
                <span>Send an Enquiry</span>
              </a>

              <a href="/contact">
                <MapPin size={15} />
                <span>India</span>
              </a>

              <a href="/contact">
                <Globe size={15} />
                <span>Available Online</span>
              </a>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} BrandByWebeara. All rights reserved.
            </span>

            <span>
              Your Brand. Our Creation.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default About;