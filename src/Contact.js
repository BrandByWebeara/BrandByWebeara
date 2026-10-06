import React from "react";
import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

function Contact() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bb-contact-page">

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

            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="/#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>

            <a href="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>

            <a href="/contact" onClick={() => setMenuOpen(false)}>
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


      {/* ================= CONTACT HERO ================= */}
      <main>

        <section className="bb-contact-hero">
          <div className="bb-contact-glow bb-contact-glow-one"></div>
          <div className="bb-contact-glow bb-contact-glow-two"></div>

          <div className="container bb-contact-hero-inner">

            <div className="bb-contact-heading">

              <div className="bb-contact-label">
                <span></span>
                GET IN TOUCH
              </div>

              <h1>
                Let's Build
                <br />
                Something <span>Great.</span>
              </h1>

              <p>
                Have a project in mind or want to take your business online?
                Tell us what you need and our team will get back to you.
              </p>

              <div className="bb-contact-points">

                <div>
                  <div className="bb-contact-point-icon">
                    <Check size={15} />
                  </div>
                  <span>Fast Response</span>
                </div>

                <div>
                  <div className="bb-contact-point-icon">
                    <Check size={15} />
                  </div>
                  <span>Professional Support</span>
                </div>

                <div>
                  <div className="bb-contact-point-icon">
                    <Check size={15} />
                  </div>
                  <span>Custom Solutions</span>
                </div>

              </div>

            </div>

            <div className="bb-contact-hero-card">

              <div className="bb-contact-card-top">
                <span>START A PROJECT</span>

                <div className="bb-contact-card-dot"></div>
              </div>

              <div className="bb-contact-card-line"></div>

              <div className="bb-contact-card-content">
                <strong>Let's grow your business</strong>

                <p>
                  Website, ads, Google Business, e-commerce or complete
                  online setup.
                </p>

                <div className="bb-contact-card-services">
                  <span>Website</span>
                  <span>Meta Ads</span>
                  <span>E-Commerce</span>
                  <span>Branding</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= CONTACT CONTENT ================= */}
        <section className="bb-contact-section">

          <div className="container bb-contact-grid">

            {/* LEFT INFO */}
            <div className="bb-contact-info">

              <div className="bb-contact-label">
                CONTACT US
              </div>

              <h2>
                We'd Love To
                <br />
                <span>Hear From You.</span>
              </h2>

              <p>
                Whether you're starting a new business, improving your
                existing online presence, or looking for more customers,
                we're here to help.
              </p>


              <div className="bb-contact-info-list">

                <div className="bb-contact-info-item">
                  <div className="bb-contact-info-icon">
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <small>WhatsApp</small>
                    <strong>Let's discuss your project</strong>
                  </div>
                </div>


                <div className="bb-contact-info-item">
                  <div className="bb-contact-info-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <small>Email</small>
                    <strong>Send us your enquiry</strong>
                  </div>
                </div>


                <div className="bb-contact-info-item">
                  <div className="bb-contact-info-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <small>Phone</small>
                    <strong>Available for business enquiries</strong>
                  </div>
                </div>


                <div className="bb-contact-info-item">
                  <div className="bb-contact-info-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <small>Location</small>
                    <strong>India</strong>
                  </div>
                </div>

              </div>


              <div className="bb-contact-note">
                <div className="bb-contact-note-icon">
                  ✦
                </div>

                <div>
                  <strong>Your Brand. Our Creation.</strong>
                  <p>
                    Let's turn your idea into a professional online presence.
                  </p>
                </div>
              </div>

            </div>


            {/* FORM */}
            <div className="bb-contact-form-card">

              <div className="bb-contact-label">
                SEND AN ENQUIRY
              </div>

              <h2>Tell Us About Your Project</h2>

              <p>
                Fill in the details below and we'll get back to you soon.
              </p>


              {submitted && (
                <div className="bb-contact-success">
                  <div>
                    <Check size={18} />
                  </div>

                  <span>
                    Thank you! Your enquiry has been received.
                  </span>
                </div>
              )}


              <form
                action="https://formsubmit.co/brandbywebeara@protonmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >

                {/* FormSubmit settings */}
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


                <div className="bb-contact-form-row">

                  <div className="bb-contact-field">
                    <label>Your Name</label>

                    <input
                      type="text"
                      name="Your Name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>


                  <div className="bb-contact-field">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="Email Address"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                </div>


                <div className="bb-contact-field">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>


                <div className="bb-contact-field">
                  <label>What do you need?</label>

                  <select
                    name="Service Required"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Website Development</option>
                    <option>Meta Ads</option>
                    <option>Google Business Profile</option>
                    <option>E-Commerce Listing</option>
                    <option>Graphic & Brand Design</option>
                    <option>Online Business Setup</option>
                    <option>Complete Digital Growth</option>
                  </select>
                </div>


                <div className="bb-contact-field">
                  <label>Tell us about your project</label>

                  <textarea
                    name="Project Details"
                    rows="6"
                    placeholder="Tell us about your business, project or requirements..."
                    required
                  ></textarea>
                </div>


                <button
                  type="submit"
                  className="bb-contact-submit"
                >
                  Send Enquiry
                  <ArrowRight size={18} />
                </button>


                <small className="bb-contact-form-bottom">
                  We respect your privacy and will only use your details
                  to contact you regarding your enquiry.
                </small>

              </form>

            </div>

          </div>

        </section>

      </main>


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
            <a href="/#services">Services</a>
            <a href="/#about">About</a>
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
            © 2026 BrandByWebeara. All rights reserved.
          </span>

          <span>
            Built with modern technology.
          </span>
        </div>

      </footer>

    </div>
  );
}

export default Contact;

