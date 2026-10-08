import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Facebook,
  Globe,
  Instagram,
  Laptop,
  MapPin,
  Menu,
  MessageCircle,
  PenTool,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
  Megaphone,
} from "lucide-react";

const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code2 size={28} />,
      number: "01",
      title: "Website Development",
      description:
        "Professional, fast and responsive websites designed to build trust and turn visitors into customers.",
      features: [
        "Business Websites",
        "Landing Pages",
        "E-Commerce Websites",
        "Mobile Responsive Design",
        "WordPress, Wix & Shopify",
        "React & Next.js",
      ],
    },
    {
      icon: <Megaphone size={28} />,
      number: "02",
      title: "Meta Ads",
      description:
        "Reach the right audience on Facebook and Instagram with campaigns focused on leads, enquiries and growth.",
      features: [
        "Facebook Advertising",
        "Instagram Advertising",
        "Lead Generation",
        "Audience Targeting",
        "Campaign Setup",
        "Ad Creative Strategy",
      ],
    },
    {
      icon: <MapPin size={28} />,
      number: "03",
      title: "Google Business Profile",
      description:
        "Make your local business easier to find on Google and help nearby customers discover your services.",
      features: [
        "Profile Setup",
        "Profile Optimization",
        "Business Information",
        "Local SEO Basics",
        "Photos & Updates",
        "Review Strategy",
      ],
    },
    {
      icon: <ShoppingBag size={28} />,
      number: "04",
      title: "E-Commerce Listing",
      description:
        "Get your products professionally listed and optimized on popular marketplaces.",
      features: [
        "Amazon Listing",
        "Flipkart Listing",
        "Meesho Listing",
        "Product Titles",
        "Product Descriptions",
        "Listing Optimization",
      ],
    },
    {
      icon: <Rocket size={28} />,
      number: "05",
      title: "Online Business Setup",
      description:
        "Take your offline business online with the essential digital tools needed to start growing.",
      features: [
        "Website Setup",
        "Google Business",
        "Social Media Setup",
        "WhatsApp Business",
        "Online Enquiry System",
        "Digital Strategy",
      ],
    },
    {
      icon: <PenTool size={28} />,
      number: "06",
      title: "Graphic & Brand Design",
      description:
        "Create a strong and professional visual identity that makes your business memorable.",
      features: [
        "Logo Design",
        "Social Media Posts",
        "Business Banners",
        "Business Cards",
        "Ad Creatives",
        "Brand Identity",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discuss",
      text: "We understand your business, goals and requirements.",
    },
    {
      number: "02",
      title: "Plan",
      text: "We create the right digital strategy for your business.",
    },
    {
      number: "03",
      title: "Build",
      text: "We design and develop your digital presence.",
    },
    {
      number: "04",
      title: "Launch",
      text: "We make everything ready and launch your project.",
    },
    {
      number: "05",
      title: "Grow",
      text: "We help you improve, optimize and grow continuously.",
    },
  ];

  const technologies = [
    "WordPress",
    "Wix",
    "Shopify",
    "Webflow",
    "Framer",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
  ];

  return (
    <div className="services-page">
      {/* ================= NAVBAR ================= */}
<header className="navbar">
  <div className="container nav-inner">

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

    <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

      <a
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="/services"
        onClick={() => setMenuOpen(false)}
      >
        Services
      </a>

      <a
        href="/about"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>

      <a
        href="/portfolio"
        onClick={() => setMenuOpen(false)}
      >
        Portfolio
      </a>

      <a
        href="/pricing"
        onClick={() => setMenuOpen(false)}
      >
        Pricing
      </a>

      <a
        href="/contact"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

      <a
        href="/contact"
        className="nav-cta"
        onClick={() => setMenuOpen(false)}
      >
        Get Started
        <ArrowRight size={15} />
      </a>

    </nav>

    <button
      className="menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
      type="button"
    >
      {menuOpen ? <X /> : <Menu />}
    </button>

  </div>
</header>

      {/* ================= HERO ================= */}
      <section className="services-hero">
        <div className="services-hero-glow glow-one"></div>
        <div className="services-hero-glow glow-two"></div>

        <div className="services-container services-hero-grid">
          <div className="services-hero-content">
            <div className="services-eyebrow">
              <span></span>
              OUR SERVICES
            </div>

            <h1>
              Everything You Need
              <br />
              To <span>Grow Online.</span>
            </h1>

            <p>
              From websites and branding to advertising and online business
              setup, we help businesses build a strong digital presence and
              get more customers.
            </p>

            <div className="services-hero-buttons">
              <a href="/contact" className="services-primary-btn">
                Get Started
                <ArrowRight size={18} />
              </a>

              <a href="/portfolio" className="services-secondary-btn">
                View Our Work
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="services-hero-trust">
              <div className="trust-item">
                <Check size={16} />
                <span>Professional</span>
              </div>

              <div className="trust-item">
                <Check size={16} />
                <span>Mobile Friendly</span>
              </div>

              <div className="trust-item">
                <Check size={16} />
                <span>Growth Focused</span>
              </div>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-dashboard">
              <div className="dashboard-top">
                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="dashboard-url">
                  brandbywebeara.com
                </div>
              </div>

              <div className="dashboard-body">
                <div className="dashboard-sidebar">
                  <div className="sidebar-logo">W</div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="dashboard-main">
                  <div className="dashboard-welcome">
                    <div>
                      <small>DIGITAL GROWTH</small>
                      <h3>Your Business Online</h3>
                    </div>

                    <div className="dashboard-icon">
                      <Sparkles size={18} />
                    </div>
                  </div>

                  <div className="dashboard-cards">
                    <div className="mini-card">
                      <Globe size={20} />
                      <strong>Website</strong>
                      <small>Online Presence</small>
                    </div>

                    <div className="mini-card">
                      <Target size={20} />
                      <strong>Marketing</strong>
                      <small>Reach Customers</small>
                    </div>

                    <div className="mini-card">
                      <ShoppingBag size={20} />
                      <strong>E-Commerce</strong>
                      <small>Sell Online</small>
                    </div>

                    <div className="mini-card">
                      <Zap size={20} />
                      <strong>Growth</strong>
                      <small>Grow Faster</small>
                    </div>
                  </div>

                  <div className="dashboard-chart">
                    <div className="chart-header">
                      <span>Business Growth</span>
                      <strong>+84%</strong>
                    </div>

                    <div className="chart-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="chart-bars">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-service-card card-one">
              <Globe size={18} />
              <div>
                <strong>Website</strong>
                <small>Online</small>
              </div>
            </div>

            <div className="floating-service-card card-two">
              <Megaphone size={18} />
              <div>
                <strong>Marketing</strong>
                <small>Reach More</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-main">
        <div className="services-container">
          <div className="services-section-heading">
            <div className="services-eyebrow dark">
              <span></span>
              WHAT WE DO
            </div>

            <h2>
              Digital Services Built
              <br />
              For <span>Real Growth.</span>
            </h2>

            <p>
              Everything your business needs to build, promote and grow its
              online presence.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.number}>
                <div className="service-card-top">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature) => (
                    <div className="service-feature" key={feature}>
                      <Check size={15} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="service-card-link">
                  Get Started
                  <ArrowUpRight size={17} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS GROWTH ================= */}
      <section className="services-growth">
        <div className="services-container services-growth-grid">
          <div className="growth-content">
            <div className="services-eyebrow">
              <span></span>
              MORE THAN JUST A WEBSITE
            </div>

            <h2>
              Your Customers
              <br />
              Are <span>Already Online.</span>
            </h2>

            <p>
              Your digital presence is often the first impression customers
              have of your business. We help you make that impression count.
            </p>

            <a href="/contact" className="services-primary-btn">
              Start Growing
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="growth-benefits">
            <div className="growth-benefit">
              <div className="benefit-icon">
                <Globe size={22} />
              </div>

              <div>
                <h3>Professional Online Presence</h3>
                <p>Make your business look trustworthy and professional.</p>
              </div>
            </div>

            <div className="growth-benefit">
              <div className="benefit-icon">
                <Users size={22} />
              </div>

              <div>
                <h3>More Customer Enquiries</h3>
                <p>Make it easier for customers to contact your business.</p>
              </div>
            </div>

            <div className="growth-benefit">
              <div className="benefit-icon">
                <Target size={22} />
              </div>

              <div>
                <h3>Better Brand Image</h3>
                <p>Build a strong and memorable identity for your business.</p>
              </div>
            </div>

            <div className="growth-benefit">
              <div className="benefit-icon">
                <Rocket size={22} />
              </div>

              <div>
                <h3>Business Growth</h3>
                <p>Use digital tools to reach more people and grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="services-process">
        <div className="services-container">
          <div className="services-section-heading center">
            <div className="services-eyebrow dark">
              <span></span>
              OUR PROCESS
            </div>

            <h2>
              Simple Process.
              <br />
              <span>Powerful Results.</span>
            </h2>

            <p>
              We keep the process simple, transparent and focused on your
              business goals.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-item" key={item.number}>
                <div className="process-number">{item.number}</div>

                <div className="process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {index !== process.length - 1 && (
                  <ArrowRight className="process-arrow" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="services-tech">
        <div className="services-container">
          <div className="services-tech-heading">
            <div>
              <div className="services-eyebrow">
                <span></span>
                TOOLS & TECHNOLOGIES
              </div>

              <h2>
                Built With The
                <br />
                <span>Right Technology.</span>
              </h2>
            </div>

            <p>
              We use modern platforms and technologies to create fast,
              scalable and professional digital experiences.
            </p>
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <div className="technology-item" key={technology}>
                <Code2 size={17} />
                <span>{technology}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="services-cta-glow"></div>

        <div className="services-container services-cta-inner">
          <div className="services-cta-icon">
            <Rocket size={28} />
          </div>

          <div>
            <div className="services-eyebrow">
              <span></span>
              READY TO GROW?
            </div>

            <h2>
              Let's Build Your
              <br />
              <span>Digital Presence.</span>
            </h2>

            <p>
              Tell us about your business and let's create a digital strategy
              that works for you.
            </p>
          </div>

          <div className="services-cta-buttons">
            <a href="/contact" className="services-primary-btn">
              Get Started
              <ArrowRight size={18} />
            </a>

            <a href="/pricing" className="services-secondary-btn">
              View Pricing
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
<footer className="footer">
  <div className="container footer-top">

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

    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </div>

    <div className="socials">
      <a href="/contact">
        <Facebook size={17} />
      </a>

      <a href="/contact">
        <Instagram size={17} />
      </a>

      <a href="/contact">
        <MessageCircle size={17} />
      </a>
    </div>

  </div>

  <div className="container footer-bottom">
    <span>
      © {new Date().getFullYear()} BrandByWebeara. All rights reserved.
    </span>

    <span>
      Built with modern technology.
    </span>
  </div>
</footer>
    </div>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

export default Services;