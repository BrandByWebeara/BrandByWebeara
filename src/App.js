import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Services from "./Services";
import About from "./About";
import MarketingDemo from "./MarketingDemo";
import GoogleBusinessDemo from "./GoogleBusinessDemo";
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
  Play,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";

import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/brandbywebeara@protonmail.com",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Unable to send enquiry. Please check your internet connection and try again.");
  }
};

  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Website Development",
      text: "Modern, fast & responsive websites built with powerful modern technologies.",
    },
    {
      icon: <Target size={28} />,
      title: "Meta Ads",
      text: "Targeted Facebook & Instagram campaigns designed to bring customers and sales.",
    },
    {
      icon: <MapPin size={28} />,
      title: "Google Business Profile",
      text: "Get found on Google Maps & Search. Improve your local visibility and trust.",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "E-Commerce Listing",
      text: "List your products on Amazon, Flipkart, Meesho and start selling online.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Online Business Setup",
      text: "Complete online setup including website, ads, listings and customer support.",
    },
    {
      icon: <PenTool size={28} />,
      title: "Graphic & Brand Design",
      text: "Logos, banners, social media creatives and more to make your brand stand out.",
    },
  ];

  const process = [
    {
      number: "01",
      icon: <MessageCircle size={25} />,
      title: "Discuss Your Needs",
      text: "You tell us about your business and goals.",
    },
    {
      number: "02",
      icon: <PenTool size={25} />,
      title: "Plan & Strategy",
      text: "We create a custom plan for your growth.",
    },
    {
      number: "03",
      icon: <Code2 size={25} />,
      title: "Build & Setup",
      text: "Website, ads, listings & everything you need.",
    },
    {
      number: "04",
      icon: <Rocket size={25} />,
      title: "Launch",
      text: "We go live and start getting customers.",
    },
    {
      number: "05",
      icon: <Zap size={25} />,
      title: "Support & Grow",
      text: "We keep optimizing for better results.",
    },
  ];

  const projects = [
    {
      type: "E-Commerce Store",
      title: "Online Store Setup",
      icon: <ShoppingBag size={38} />,
      tags: ["Amazon", "Flipkart", "Meesho"],
    },
    {
      type: "Business Website",
      title: "Modern Business Website",
      icon: <Laptop size={38} />,
      tags: ["React", "Responsive", "Vercel"],
    },
    {
      type: "Meta Ads Campaign",
      title: "Facebook & Instagram Ads",
      icon: <Target size={38} />,
      tags: ["Facebook", "Instagram", "Ads"],
    },
    {
      type: "Google Business",
      title: "Google Business Listing",
      icon: <MapPin size={38} />,
      tags: ["Maps", "GBP", "SEO"],
    },
  ];

  const faqs = [
    {
      q: "How much time does it take to build a website?",
      a: "Depending on the requirements, a basic business website can usually be planned and completed within a few working days.",
    },
    {
      q: "Do you manage Meta Ads too?",
      a: "Yes. We can help with Facebook and Instagram ad setup, creatives, targeting and campaign management.",
    },
    {
      q: "Can you list my products on Amazon, Flipkart & Meesho?",
      a: "Yes. We help businesses with product listing and online marketplace setup.",
    },
    {
      q: "What if I don't have a website yet?",
      a: "No problem. We can start from the beginning and build your online presence according to your business needs.",
    },
    {
      q: "Do you offer support after the project is completed?",
      a: "Yes. We provide support and can continue helping with updates, optimization and online growth.",
    },
  ];

  return (
    <div className="app">
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
            <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
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

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Digital Growth Agency
            </div>

            <h1>
              We Build Your Online
              <br />
              Presence & <span>Grow</span>
              <br />
              <span>Your Business</span>
            </h1>

            <p className="hero-text">
              From website development to Meta ads, Google Business listing,
              and e-commerce marketplace listing — we handle everything to
              take your business online and get you customers.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get Started Now <ArrowRight size={18} />
              </a>

              <a href="#work" className="btn btn-outline">
                <Play size={15} fill="currentColor" />
                Watch Video
              </a>
            </div>

            <div className="hero-services">
              <div className="mini-service">
                <div className="mini-icon"><Globe size={20} /></div>
                <div>
                  <strong>Website Development</strong>
                  <small>Free Tools & Modern Tech</small>
                </div>
              </div>

              <div className="mini-service">
                <div className="mini-icon"><Target size={20} /></div>
                <div>
                  <strong>Meta Ads</strong>
                  <small>Facebook & Instagram</small>
                </div>
              </div>

              <div className="mini-service">
                <div className="mini-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Google Business</strong>
                  <small>GBP Listing & SEO</small>
                </div>
              </div>

              <div className="mini-service">
                <div className="mini-icon"><ShoppingBag size={20} /></div>
                <div>
                  <strong>E-Commerce</strong>
                  <small>Amazon | Flipkart | Meesho</small>
                </div>
              </div>
            </div>
          </div>

          {/* HERO VISUAL - CSS CREATED */}
          <div className="hero-visual">
            <div className="success-note">
              <span>Your Success</span>
              <strong>is Our Mission</strong>
              <div className="arrow-line">↘</div>
            </div>

            <div className="platform platform-meta">
              <div className="platform-icon meta">∞</div>
            </div>

            <div className="platform platform-google">
              <div className="google-g">G</div>
            </div>

            <div className="platform platform-amazon">
              <div className="amazon-a">a</div>
              <div className="amazon-smile">⌣</div>
            </div>

            <div className="platform platform-meesho">
              <span>M</span>
            </div>

            <div className="platform platform-flipkart">
              <span>F</span>
            </div>

            <div className="desk">
              <div className="desk-surface"></div>
            </div>

            <div className="laptop">
              <div className="laptop-screen">
                <div className="screen-top">
                  <span>BrandByWebeara</span>
                  <span className="screen-menu">● ● ●</span>
                </div>

                <div className="screen-content">
                  <div className="screen-copy">
                    <small>Grow Your Business</small>
                    <strong>Online.</strong>
                    <div className="screen-btn">Get Started</div>
                  </div>

                  <div className="screen-chart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="laptop-base">
                <div></div>
              </div>
            </div>

            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-logo">BW</div>
                <strong>Grow Online</strong>
                <div className="phone-line"></div>
                <div className="phone-line short"></div>
                <div className="phone-card"></div>
                <div className="phone-nav">
                  <span>⌂</span>
                  <span>◎</span>
                  <span>◉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-light" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <div className="office-card">
              <div className="office-laptop">
                <div className="office-screen">
                  <div className="office-logo">BW</div>
                  <strong>BrandByWebeara</strong>
                  <small>Your Brand. Our Creation.</small>
                </div>
              </div>
              <div className="coffee">☕</div>
              <div className="plant">🌿</div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">About Us</div>
            <h2>Who We Are</h2>

            <p>
              BrandByWebeara is a digital growth agency helping businesses
              go online and grow. We provide complete online solutions —
              from website development, Meta ads, Google Business listing,
              to e-commerce marketplace listings and more.
            </p>

            <div className="stats">
              <div className="stat">
                <strong>100+</strong>
                <span>Happy Clients</span>
              </div>
              <div className="stat">
                <strong>200+</strong>
                <span>Projects Completed</span>
              </div>
              <div className="stat">
                <strong>5+</strong>
                <span>Platforms Supported</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section-dark" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">Our Services</div>
              <h2>What We Do</h2>
              <p>Everything you need to build, grow and manage your online business.</p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" className="circle-arrow">
                  <ArrowUpRight size={17} />
                </a>
              </div>
            ))}
          </div>

          <div className="tech-strip">
            <div>
              <strong>Tech Stack We Use</strong>
              <span>Fast. Modern. Free. Built with powerful tools.</span>
            </div>

            <div className="tech-list">
              <span>◉ VS Code</span>
<span>⚡ Supabase</span>
<span>▲ Vercel</span>
<span>● GitHub</span>
<span>▣ HTML/CSS/JS</span>
<span>〰 Tailwind CSS</span>
<span>W WordPress</span>
<span>W Wix</span>
<span>🛍 Shopify</span>
<span>◈ Webflow</span>
<span>✦ Framer</span>
<span>⚛ React</span>
<span>▲ Next.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section-light">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">Our Process</div>
            <h2>How It Works</h2>
            <p>Simple steps. Big results.</p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <React.Fragment key={index}>
                <div className="process-item">
                  <div className="process-number">{item.number}</div>
                  <div className="process-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                {index !== process.length - 1 && (
                  <div className="process-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work section-dark" id="work">
        <div className="container">
          <div className="section-heading work-heading">
            <div>
              <div className="section-label">Our Work</div>
              <h2>Recent Projects</h2>
              <p>We’ve helped many businesses go online and grow.</p>
            </div>

            <a href="/portfolio" className="small-btn">
              View All Projects <ArrowRight size={15} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className={`project-image project-${index}`}>
                  <div className="project-window">
                    <div className="window-dots">● ● ●</div>
                    <div className="project-big-icon">{project.icon}</div>
                    <strong>{project.title}</strong>
                  </div>
                </div>

                <div className="project-info">
                  <small>{project.type}</small>
                  <div className="tag-list">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <p>Complete setup & professional online presence.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why section-light" id="pricing">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">Why Choose Us</div>
            <h2>Why BrandByWebeara?</h2>
            <p>We don't just build websites or run ads — we build your online success.</p>
          </div>

          <div className="why-grid">
            {[
              ["End-to-End Solutions", "From website to sales, we handle it all.", <Sparkles />],
              ["Affordable Pricing", "Top quality services at the best price.", <Star />],
              ["On-Time Delivery", "Your time matters. We respect it.", <Zap />],
              ["Free & Open Source Tools", "Built with VS Code, Supabase, Vercel & GitHub.", <Code2 />],
              ["Transparent Process", "No hidden charges, full clarity.", <Check />],
              ["Dedicated Support", "We are always here for your help.", <Users />],
            ].map((item, index) => (
              <div className="why-card" key={index}>
                <div className="why-icon">{item[2]}</div>
                <div>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grow-text">
            <span>Let's</span>
            <strong>Grow Together</strong>
            <div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">Testimonials</div>
              <h2>What Our Clients Say</h2>
            </div>
          </div>

          <div className="testimonial-grid">
            {[
              {
                name: "Amit Sharma",
                role: "E-Commerce Business Owner",
                text: "BrandByWebeara helped me list my products online and improve my sales. Very professional service.",
              },
              {
                name: "Neha Verma",
                role: "Local Business Owner",
                text: "Their website and Meta ads service is amazing. I’m getting more leads and customers every day.",
              },
              {
                name: "Rohit Kumar",
                role: "Service Provider",
                text: "Very professional and supportive team. They built my business website using modern technology.",
              },
            ].map((review, index) => (
              <div className="testimonial-card" key={index}>
                <div className="client">
                  <div className="avatar">{review.name.charAt(0)}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.role}</small>
                  </div>
                </div>

                <div className="stars">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>

                <p>“{review.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section className="contact-section section-light" id="contact">
        <div className="container contact-grid">
          <div className="faq">
            <div className="section-label">FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <p>Here are some common questions about our services.</p>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={openFaq === index ? "rotate" : ""}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

         <div className="contact-box">
  <div className="section-label">Get In Touch</div>

  <h2>Let's Work Together</h2>

  <p>
    Have a project in mind? Fill out the form and we'll get back to
    you soon.
  </p>

  {submitted && (
  <div className="bb-contact-success">
    <div>
      <Check size={18} />
    </div>
    <span>Thank you! Your enquiry has been received.</span>
  </div>
)}

<form onSubmit={handleSubmit}>
  <input
    type="hidden"
    name="_subject"
    value="New Enquiry - BrandByWebeara"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <div className="form-row">
    <input
      type="text"
      name="Your Name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="Email Address"
      placeholder="Your Email"
      required
    />
  </div>

  <select
    name="Service Required"
    required
    defaultValue=""
  >
    <option value="" disabled>
      Select Service
    </option>

    <option>Website Development</option>
    <option>Meta Ads</option>
    <option>Google Business Profile</option>
    <option>E-Commerce Listing</option>
    <option>Graphic Design</option>
    <option>Online Business Setup</option>
  </select>

  <textarea
    name="Project Details"
    placeholder="Tell us about your project..."
    rows="5"
    required
  ></textarea>

  <button
    type="submit"
    className="btn btn-primary submit-btn"
  >
    Send Message <ArrowRight size={18} />
  </button>
</form>
</div>
        </div>
      </section>

      {/* FOOTER */}
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
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="socials">
            <a href="/contact"><Facebook size={17} /></a>
            <a href="/contact"><Instagram size={17} /></a>
            <a href="/contact"><MessageCircle size={17} /></a>
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

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketing-demo" element={<MarketingDemo />} />
        <Route path="/google-business-demo" element={<GoogleBusinessDemo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;