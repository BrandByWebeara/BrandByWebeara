import React from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Project One",
    category: "Website",
    description: "Modern and responsive business website.",
    image: "/projects/project-1.jpg",
    link: "#",
  },
  {
    title: "Project Two",
    category: "E-Commerce",
    description: "Professional online store with a clean user experience.",
    image: "/projects/project-2.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    category: "Landing Page",
    description: "High-converting landing page for a modern business.",
    image: "/projects/project-3.jpg",
    link: "#",
  },
  {
    title: "Project Four",
    category: "Website",
    description: "Clean and professional website for a growing brand.",
    image: "/projects/project-4.jpg",
    link: "#",
  },
  {
    title: "Project Five",
    category: "Branding",
    description: "Creative digital presence designed for a modern brand.",
    image: "/projects/project-5.jpg",
    link: "#",
  },
  {
    title: "Project Six",
    category: "Web Design",
    description: "Modern website interface with a premium visual style.",
    image: "/projects/project-6.jpg",
    link: "#",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">

      {/* Portfolio Hero */}
      <section className="portfolio-hero">
        <div className="container">

          <Link to="/" className="portfolio-back">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <p className="portfolio-eyebrow">
            OUR PORTFOLIO
          </p>

          <h1>
            Projects We've <span>Built.</span>
          </h1>

          <p className="portfolio-description">
            Explore our latest websites, e-commerce stores,
            landing pages and digital projects.
          </p>

        </div>
      </section>

      {/* All Projects */}
      <section className="portfolio-projects">
        <div className="container">

          <div className="portfolio-heading">
            <div>
              <p className="portfolio-small-title">
                FEATURED WORK
              </p>

              <h2>
                Our Recent <span>Projects</span>
              </h2>
            </div>

            <p>
              A collection of websites and digital experiences
              we've created for businesses and brands.
            </p>
          </div>

          <div className="portfolio-grid">

            {projects.map((project, index) => (
              <div className="portfolio-card" key={index}>

                {/* Project Image */}
                <div className="portfolio-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="portfolio-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Project Details */}
                <div className="portfolio-info">

                  <span className="portfolio-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-view"
                  >
                    View Project
                    <ArrowUpRight size={18} />
                  </a>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">

          <p className="portfolio-cta-label">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's build something
            <span> amazing.</span>
          </h2>

          <p>
            Ready to turn your idea into a professional
            digital experience?
          </p>

          <Link
            to="/#contact"
            className="btn btn-primary"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Portfolio;