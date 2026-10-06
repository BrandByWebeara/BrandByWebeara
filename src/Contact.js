import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <p className="contact-small-title">GET IN TOUCH</p>

          <h1>
            Let's build something
            <span> amazing together.</span>
          </h1>

          <p className="contact-description">
            Have a project in mind, need a website, or want to grow your
            business online? Send me a message and I'll get back to you as
            soon as possible.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">✉</div>
              <div>
                <small>Email</small>
                <a href="mailto:brandbywebeara@portonmail.com">
                  brandbywebeara@portonmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">☎</div>
              <div>
                <small>Phone</small>
                <a href="tel:+918957689571">
                  +91 8957689571
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Business</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="service">What do you need? *</label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Website Development">
                  Website Development
                </option>
                <option value="E-commerce Website">
                  E-commerce Website
                </option>
                <option value="Landing Page">
                  Landing Page
                </option>
                <option value="Portfolio Website">
                  Portfolio Website
                </option>
                <option value="Website Redesign">
                  Website Redesign
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Estimated Budget</label>

              <select
                id="budget"
                name="budget"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your budget
                </option>
                <option value="Under ₹10,000">
                  Under ₹10,000
                </option>
                <option value="₹10,000 - ₹25,000">
                  ₹10,000 - ₹25,000
                </option>
                <option value="₹25,000 - ₹50,000">
                  ₹25,000 - ₹50,000
                </option>
                <option value="₹50,000+">
                  ₹50,000+
                </option>
                <option value="Not sure yet">
                  Not sure yet
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell me about your project *</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project, requirements, goals..."
                required
              ></textarea>
            </div>

            {/* Formspree subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Website Enquiry - BrandByWebeara"
            />

            {/* Reply-to email */}
            <input
              type="hidden"
              name="_replyto"
              value=""
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="contact-submit"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message →"}
            </button>

            {status === "success" && (
              <div className="form-success">
                ✓ Thank you! Your message has been sent successfully.
                I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="form-error">
                ✕ Something went wrong. Please try again or contact me
                directly by email.
              </div>
            )}

          </form>

        </div>

      </section>
    </div>
  );
};

export default Contact;

