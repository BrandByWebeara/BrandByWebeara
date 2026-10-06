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

  // ================= CONTACT DETAILS =================
  const phoneNumber = "8957689571";
  const whatsappNumber = "918957689571";
  const emailAddress = "brandbywebeara@protonmail.com";

  // ================= FORM SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappMessage = `Hello BrandByWebeara,

I would like to enquire about your services.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Project Details:
${message}

Thank you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    // Open WhatsApp with enquiry details
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    // Reset form
    e.currentTarget.reset();
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

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="/#services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="/#about"
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

                <strong>
                  Let's grow your business
                </strong>

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


            {/* ================= LEFT INFO ================= */}
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


                {/* ================= WHATSAPP ================= */}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bb-contact-info-item"
                >

                  <div className="bb-contact-info-icon">
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <small>WhatsApp</small>
                    <strong>Let's discuss your project</strong>
                  </div>

                </a>


                {/* ================= EMAIL ================= */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="bb-contact-info-item"
                >

                  <div className="bb-contact-info-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <small>Email</small>
                    <strong>Send us your enquiry</strong>
                  </div>

                </a>


                {/* ================= PHONE ================= */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="bb-contact-info-item"
                >

                  <div className="bb-contact-info-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <small>Phone</small>
                    <strong>Available for business enquiries</strong>
                  </div>

                </a>


                {/* ================= LOCATION ================= */}
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


              {/* ================= CONTACT NOTE ================= */}
              <div className="bb-contact-note">

                <div className="bb-contact-note-icon">
                  ✦
                </div>

                <div>
                  <strong>
                    Your Brand. Our Creation.
                  </strong>

                  <p>
                    Let's turn your idea into a professional online presence.
                  </p>
                </div>

              </div>

            </div>


            {/* ================= FORM ================= */}
            <div className="bb-contact-form-card">

              <div className="bb-contact-label">
                SEND AN ENQUIRY
              </div>

              <h2>
                Tell Us About Your Project
              </h2>

              <p>
                Fill in the details below and we'll get back to you soon.
              </p>


              {/* ================= SUCCESS MESSAGE ================= */}
              {submitted && (
                <div className="bb-contact-success">

                  <div>
                    <Check size={18} />
                  </div>

                  <span>
                    Thank you! Your enquiry has been prepared on WhatsApp.
                  </span>

                </div>
              )}


              <form onSubmit={handleSubmit}>


                {/* ================= NAME + EMAIL ================= */}
                <div className="bb-contact-form-row">

                  <div className="bb-contact-field">

                    <label htmlFor="contact-name">
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />

                  </div>


                  <div className="bb-contact-field">

                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                    />

                  </div>

                </div>


                {/* ================= PHONE ================= */}
                <div className="bb-contact-field">

                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />

                </div>


                {/* ================= SERVICE ================= */}
                <div className="bb-contact-field">

                  <label htmlFor="contact-service">
                    What do you need?
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Meta Ads">
                      Meta Ads
                    </option>

                    <option value="Google Business Profile">
                      Google Business Profile
                    </option>

                    <option value="E-Commerce Listing">
                      E-Commerce Listing
                    </option>

                    <option value="Graphic & Brand Design">
                      Graphic & Brand Design
                    </option>

                    <option value="Online Business Setup">
                      Online Business Setup
                    </option>

                    <option value="Complete Digital Growth">
                      Complete Digital Growth
                    </option>

                  </select>

                </div>


                {/* ================= PROJECT MESSAGE ================= */}
                <div className="bb-contact-field">

                  <label htmlFor="contact-message">
                    Tell us about your project
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your business, project or requirements..."
                    required
                  ></textarea>

                </div>


                {/* ================= SUBMIT ================= */}
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


          {/* ================= FOOTER BRAND ================= */}
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


          {/* ================= FOOTER LINKS ================= */}
          <div className="footer-links">

            <a href="/">
              Home
            </a>

            <a href="/#services">
              Services
            </a>

            <a href="/#about">
              About
            </a>

            <a href="/portfolio">
              Portfolio
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>


          {/* ================= SOCIALS ================= */}
          <div className="socials">

            <a
              href="/contact"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>

            <a
              href="/contact"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>

          </div>

        </div>


        {/* ================= FOOTER BOTTOM ================= */}
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

