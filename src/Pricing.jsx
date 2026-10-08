import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Facebook,
  Globe,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  PenTool,
  Rocket,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
  Crown,
  Layers,
  Store,
  Megaphone,
} from "lucide-react";


function Pricing() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(null);

  const packages = [
    {
      name: "Starter",
      price: "₹12,999",
      subtitle: "Perfect for new businesses getting online.",
      icon: <Rocket size={25} />,
      className: "starter",
      features: [
        "Professional Landing Page / 3–5 Page Website",
        "Mobile Responsive Design",
        "Contact & Enquiry Form",
        "WhatsApp Integration",
        "Google Business Profile Setup",
        "1 Marketplace Listing — Meesho",
        "Basic SEO Setup",
        "Social Media Integration",
        "Basic Logo Design",
        "1 Month Support",
      ],
      note: "Best for new & local businesses",
    },

    {
      name: "Growth",
      price: "₹24,999",
      subtitle: "Best for growing businesses and lead generation.",
      icon: <Target size={25} />,
      className: "growth",
      popular: true,
      features: [
        "Professional Website — Up to 8–10 Pages",
        "Premium UI / UX Design",
        "Google Business Profile Setup + Optimization",
        "2 Marketplace Listings — Meesho + Flipkart",
        "Meta Ads Campaign Setup",
        "2 Social Media Creatives",
        "Basic SEO + Analytics Setup",
        "Logo + Brand Kit",
        "WhatsApp Integration",
        "2 Months Support",
      ],
      note: "Most Popular",
    },

    {
      name: "Business",
      price: "₹39,999",
      subtitle: "For established businesses and serious growth.",
      icon: <Crown size={25} />,
      className: "business",
      features: [
        "Premium Website — Up to 12–15 Pages",
        "Premium UI / UX + Custom Design",
        "Google Business Profile Optimization",
        "3 Marketplace Listings",
        "Meesho + Amazon + Flipkart",
        "Meta + Google Ads Setup & Management",
        "3–5 Social Media Creatives",
        "Advanced SEO Setup",
        "Logo + Brand Kit + Ad Creative",
        "Analytics + Conversion Tracking",
        "3 Months Support",
      ],
      note: "Complete digital growth solution",
    },

    {
      name: "Custom",
      price: "₹59,999+",
      subtitle: "For e-commerce, large businesses and unique requirements.",
      icon: <Sparkles size={25} />,
      className: "custom",
      features: [
        "Fully Custom Website / Web Application",
        "E-Commerce Setup",
        "Shopify / WooCommerce",
        "Marketplace Listing — 3+ Platforms",
        "Meta + Google Ads Management",
        "Advanced SEO & Conversion Optimization",
        "Complete Branding & Design",
        "Product Upload / Inventory Support",
        "Custom Integrations",
        "Priority Support",
        "Tailored To Your Business",
      ],
      note: "Custom quote based on requirements",
    },
  ];

  const individualServices = [
    {
      icon: <Globe size={21} />,
      title: "Website Development",
      items: [
        ["Landing Page", "₹4,999"],
        ["Business Website", "₹11,999"],
        ["Premium Website", "₹25,999"],
        ["E-Commerce", "₹30,000+"],
      ],
    },
    {
      icon: <MapPin size={21} />,
      title: "Google Business Profile",
      items: [
        ["Setup", "₹2,499"],
        ["Setup + Optimization", "₹4,999"],
        ["Monthly Management", "₹2,999/mo"],
      ],
    },
    {
      icon: <Megaphone size={21} />,
      title: "Meta & Google Ads",
      items: [
        ["Meta Campaign Setup", "₹2,999"],
        ["Meta Ads Management", "₹5,999/mo"],
        ["Meta + Google Ads", "₹9,999/mo"],
      ],
      note: "Ad spend is separate.",
    },
    {
      icon: <PenTool size={21} />,
      title: "Graphic & Brand Design",
      items: [
        ["Logo", "₹1,999"],
        ["Logo + Brand Kit", "₹4,999"],
        ["Social Creatives", "₹2,999+"],
        ["Ad Creative", "₹499–₹999/design"],
      ],
    },
  ];

  const marketplacePlans = [
    {
      icon: <ShoppingBag size={21} />,
      platform: "Meesho",
      products: "40 Products",
      price: "₹7,999",
    },
    {
      icon: <Store size={21} />,
      platform: "Amazon",
      products: "40 Products",
      price: "₹15,999",
    },
    {
      icon: <Layers size={21} />,
      platform: "Flipkart",
      products: "40 Products",
      price: "₹19,999",
    },
  ];

  const faqs = [
    {
      q: "Is marketplace listing included in the package?",
      a: "Yes. The marketplace platforms mentioned in each package are included according to that package. Additional products or platforms can be added separately.",
    },
    {
      q: "Is Amazon, Flipkart or Meesho seller account included?",
      a: "We can help with the setup and listing process. Seller account approval, GST requirements, documents and platform charges are subject to the respective marketplace requirements.",
    },
    {
      q: "Is Meta Ads budget included?",
      a: "No. Our service/management fee is separate. The advertising budget paid to Meta or Google is paid separately by the client.",
    },
    {
      q: "Can I choose my own marketplace platforms?",
      a: "Yes. For custom requirements, you can choose the platforms according to your business needs.",
    },
    {
      q: "Can I buy only one service?",
      a: "Yes. You don't have to purchase a complete package. You can choose individual services from our A La Carte pricing.",
    },
  ];

  return (
    <div className="pricing-page">

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
                  <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
                  <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
                  <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
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
      

      {/* ================= HERO ================= */}
      <section className="pricing-hero">

        <div className="pricing-glow pricing-glow-one"></div>
        <div className="pricing-glow pricing-glow-two"></div>

        <div className="container pricing-hero-inner">

          <div className="pricing-eyebrow">
            <span></span>
            Simple Plans. Powerful Digital Growth.
          </div>

          <h1>
            Choose Your Perfect
            <br />
            <span>Digital Growth Package</span>
          </h1>

          <p>
            From website development and Google Business to advertising,
            branding and marketplace listings — choose the solution that
            fits your business.
          </p>

          <div className="pricing-hero-pills">
            <span>
              <Check size={15} />
              Transparent Pricing
            </span>

            <span>
              <Check size={15} />
              No Hidden Charges
            </span>

            <span>
              <Check size={15} />
              Dedicated Support
            </span>
          </div>

        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="pricing-packages section-light">

        <div className="container">

          <div className="section-heading center pricing-heading">
            <div className="section-label">Our Packages</div>

            <h2>
              Choose What Your Business Needs
            </h2>

            <p>
              Start small, grow faster and upgrade whenever your business needs more.
            </p>
          </div>

          <div className="pricing-grid">

            {packages.map((pkg, index) => (
              <div
                className={`pricing-card ${pkg.className} ${
                  pkg.popular ? "popular" : ""
                }`}
                key={index}
              >

                {pkg.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <div className="pricing-card-top">

                  <div className="pricing-icon">
                    {pkg.icon}
                  </div>

                  <div>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.subtitle}</p>
                  </div>

                </div>

                <div className="price">
                  <span>{pkg.price}</span>
                  <small> / one time</small>
                </div>

                <div className="pricing-divider"></div>

                <h4>INCLUDES</h4>

                <ul className="pricing-features">

                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-check">
                        <Check size={14} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <div className="package-note">
                  {pkg.note}
                </div>

                <Link
                  to="/contact"
                  className="pricing-btn"
                >
                  Get Started
                  <ArrowRight size={17} />
                </Link>

              </div>
            ))}

          </div>

          <div className="pricing-bottom-note">
            <Check size={18} />
            <span>
              Need something different? We can create a custom package
              according to your business requirements.
            </span>

            <Link to="/contact">
              Talk To Us <ArrowRight size={15} />
            </Link>
          </div>

        </div>

      </section>

      {/* ================= MARKETPLACE ================= */}
      <section className="marketplace-section section-dark">

        <div className="container">

          <div className="section-heading center marketplace-heading">

            <div className="section-label">
              E-Commerce Marketplace
            </div>

            <h2>
              Sell Your Products Online
            </h2>

            <p>
              Get your products listed on India's popular marketplaces
              and start reaching more customers.
            </p>

          </div>

          <div className="marketplace-grid">

            {marketplacePlans.map((item, index) => (
              <div
                className="marketplace-card"
                key={index}
              >

                <div className="marketplace-icon">
                  {item.icon}
                </div>

                <div className="marketplace-content">
                  <h3>{item.platform}</h3>
                  <span>{item.products}</span>
                </div>

                <div className="marketplace-price">
                  {item.price}
                  <small>/month</small>
                </div>

              </div>
            ))}

          </div>

          <div className="custom-marketplace">

            <div className="custom-marketplace-icon">
              <Sparkles size={24} />
            </div>

            <div>
              <h3>Custom Marketplace Listing</h3>

              <p>
                2 Platforms + 80 Product Listings
              </p>
            </div>

            <strong>
              ₹30,000
              <small>/month</small>
            </strong>

            <Link to="/contact">
              Get Custom Quote
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="marketplace-other">

            <span>
              Other Platforms
            </span>

            <p>
              Need listing on another marketplace?
              <Link to="/contact"> Contact us →</Link>
            </p>

          </div>

        </div>

      </section>

      {/* ================= INDIVIDUAL SERVICES ================= */}
      <section className="individual-section section-light">

        <div className="container">

          <div className="section-heading center">

            <div className="section-label">
              A La Carte
            </div>

            <h2>
              Individual Services
            </h2>

            <p>
              Don't need a complete package? Choose only the services you need.
            </p>

          </div>

          <div className="individual-grid">

            {individualServices.map((service, index) => (
              <div
                className="individual-card"
                key={index}
              >

                <div className="individual-title">

                  <div className="individual-icon">
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                </div>

                <div className="individual-list">

                  {service.items.map((item, itemIndex) => (
                    <div
                      className="individual-row"
                      key={itemIndex}
                    >
                      <span>{item[0]}</span>
                      <strong>{item[1]}</strong>
                    </div>
                  ))}

                </div>

                {service.note && (
                  <div className="service-note">
                    * {service.note}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="pricing-why section-dark">

        <div className="container">

          <div className="section-heading center">

            <div className="section-label">
              Why Choose Us
            </div>

            <h2>
              Why BrandByWebeara?
            </h2>

            <p>
              We don't just build websites or run ads —
              we build your online success.
            </p>

          </div>

          <div className="pricing-why-grid">

            {[
              [
                <Sparkles />,
                "End-to-End Solutions",
                "Website, ads, listings and branding under one roof.",
              ],
              [
                <StarIcon />,
                "Affordable Pricing",
                "Professional digital services at practical prices.",
              ],
              [
                <Zap />,
                "On-Time Delivery",
                "We respect your time and keep the process clear.",
              ],
              [
                <Code2 />,
                "Modern Technology",
                "Built with modern tools and reliable technology.",
              ],
              [
                <Check />,
                "Transparent Process",
                "Clear pricing and no unnecessary hidden charges.",
              ],
              [
                <Users />,
                "Dedicated Support",
                "We're here to help you after the project too.",
              ],
            ].map((item, index) => (
              <div
                className="pricing-why-card"
                key={index}
              >

                <div className="pricing-why-icon">
                  {item[0]}
                </div>

                <div>
                  <h3>{item[1]}</h3>
                  <p>{item[2]}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="pricing-faq section-light">

        <div className="container pricing-faq-container">

          <div className="pricing-faq-intro">

            <div className="section-label">
              FAQ
            </div>

            <h2>
              Questions Before You Start?
            </h2>

            <p>
              Here are some common questions about our packages,
              marketplace listing and digital services.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary pricing-contact-btn"
            >
              Ask Us Anything
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="pricing-faq-list">

            {faqs.map((faq, index) => (

              <div
                className={`pricing-faq-item ${
                  openFaq === index ? "open" : ""
                }`}
                key={index}
              >

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                >

                  <span>{faq.q}</span>

                  <ChevronDown
                    size={19}
                    className={
                      openFaq === index
                        ? "faq-chevron rotate"
                        : "faq-chevron"
                    }
                  />

                </button>

                {openFaq === index && (
                  <div className="pricing-faq-answer">
                    {faq.a}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="pricing-cta">

        <div className="container">

          <div className="pricing-cta-box">

            <div className="pricing-cta-content">

              <div className="section-label">
                Ready To Grow?
              </div>

              <h2>
                Let's Build Something
                <span> Great Together.</span>
              </h2>

              <p>
                Tell us about your business and we'll recommend
                the right package for you.
              </p>

            </div>

            <Link
              to="/contact"
              className="pricing-cta-btn"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

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
                 <a href="/#home">Home</a>
                 <a href="/services">Services</a>
                 <a href="/#about">About</a>
                 <a href="/portfolio">Portfolio</a>
                 <a href="/contact">Contact</a>
               </div>
     
               <div className="socials">
                 <a href="#contact"><Facebook size={17} /></a>
                 <a href="#contact"><Instagram size={17} /></a>
                 <a href="#contact"><MessageCircle size={17} /></a>
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


/* Small helper component */
function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Pricing;