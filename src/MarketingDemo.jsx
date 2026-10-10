
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Facebook,
  Instagram,
  MousePointerClick,
  Target,
  TrendingUp,
  Users,
  MessageCircle,
  Zap,
} from "lucide-react";

const campaignMetrics = [
  { label: "Reach", value: "12,450", note: "Unique people reached", icon: Users },
  { label: "Impressions", value: "18,920", note: "Times ads were shown", icon: BarChart3 },
  { label: "Link Clicks", value: "684", note: "Clicks on the ad", icon: MousePointerClick },
  { label: "Leads", value: "86", note: "Sample enquiries", icon: Target },
];

const campaignSteps = [
  {
    number: "01",
    title: "Research & Strategy",
    text: "Understand the target audience, business goals and campaign objective.",
  },
  {
    number: "02",
    title: "Creative Design",
    text: "Create engaging ad visuals and compelling copy for Facebook and Instagram.",
  },
  {
    number: "03",
    title: "Campaign Setup",
    text: "Plan the audience, placements, budget and conversion tracking.",
  },
  {
    number: "04",
    title: "Optimize & Improve",
    text: "Review campaign performance and identify opportunities to improve results.",
  },
];

export default function MarketingDemo() {
  return (
    <main className="marketing-demo-page">
      <nav className="md-navbar">
        <Link to="/" className="md-brand">
          <span className="md-brand-icon">W</span>
          <span>
            BrandByWebeara
            <small>YOUR BRAND. OUR CREATION.</small>
          </span>
        </Link>

        <Link to="/portfolio" className="md-back-link">
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>
      </nav>

      <section className="md-hero">
        <div className="md-hero-copy">
          <span className="md-eyebrow">
            <span className="md-live-dot" />
            DIGITAL MARKETING CASE STUDY
          </span>

          <h1>
            Turn Attention Into
            <span> Real Opportunities.</span>
          </h1>

          <p>
            Strategic Facebook and Instagram advertising designed to help
            businesses reach the right audience, generate enquiries and
            grow their online presence.
          </p>

          <div className="md-hero-actions">
            <Link to="/contact" className="md-primary-btn">
              Start Your Campaign <ArrowRight size={18} />
            </Link>
            <a href="#campaign-results" className="md-secondary-btn">
              Explore Demo
            </a>
          </div>

          <div className="md-platforms">
            <span><Facebook size={17} /> Facebook Ads</span>
            <span><Instagram size={17} /> Instagram Ads</span>
          </div>
        </div>

        <div className="md-ad-stage">
          <div className="md-floating-label md-label-top">
            <TrendingUp size={18} />
            <span>Campaign Growth<small>Performance-focused strategy</small></span>
          </div>

          <article className="md-ad-card">
            <div className="md-ad-header">
              <div className="md-ad-avatar">W</div>
              <div>
                <strong>BrandByWebeara</strong>
                <small>Sponsored · Sample Ad</small>
              </div>
              <span className="md-ad-dots">•••</span>
            </div>

            <div className="md-ad-art">
              <span className="md-ad-kicker">YOUR BUSINESS, ONLINE</span>
              <h2>Make Your<br />Brand Stand Out.</h2>
              <p>Smart digital solutions for growing businesses.</p>
              <div className="md-ad-art-bottom">
                <span>GROW WITH CONFIDENCE</span>
                <ArrowUpRight size={23} />
              </div>
            </div>

            <div className="md-ad-caption">
              <div className="md-ad-social-icons">
                <Facebook size={17} />
                <Instagram size={17} />
              </div>
              <span>Build your digital presence with us.</span>
              <button type="button" onClick={() => window.location.href = "/contact"}>
                Get in Touch
              </button>
            </div>
          </article>

          <div className="md-floating-label md-label-bottom">
            <Target size={19} />
            <span>Targeted Advertising<small>Reach the right audience</small></span>
          </div>
        </div>
      </section>

      <section className="md-results" id="campaign-results">
        <div className="md-section-heading">
          <span className="md-eyebrow">CAMPAIGN OVERVIEW</span>
          <h2>Understand the <span>Performance.</span></h2>
          <p>A sample analytics dashboard showing the metrics we monitor in an advertising campaign.</p>
          <span className="md-sample-note">DEMO DATA · NOT ACTUAL CLIENT RESULTS</span>
        </div>

        <div className="md-metrics-grid">
          {campaignMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article className="md-metric-card" key={metric.label}>
                <div className="md-metric-top">
                  <span>{metric.label}</span>
                  <Icon size={20} />
                </div>
                <strong>{metric.value}</strong>
                <p>{metric.note}</p>
              </article>
            );
          })}
        </div>

        <div className="md-analytics-panel">
          <div>
            <span className="md-eyebrow">CAMPAIGN STRATEGY</span>
            <h3>Every click has a purpose.</h3>
            <p>
              We plan campaigns around business goals, test creative variations
              and use available performance data to guide improvements.
            </p>
          </div>
          <div className="md-goal-list">
            <span><CheckCircle2 size={18} /> Audience research</span>
            <span><CheckCircle2 size={18} /> Creative testing</span>
            <span><CheckCircle2 size={18} /> Lead tracking</span>
            <span><CheckCircle2 size={18} /> Performance optimization</span>
          </div>
        </div>
      </section>

      <section className="md-creatives">
        <div className="md-section-heading">
          <span className="md-eyebrow">CREATIVE DIRECTION</span>
          <h2>Ads That <span>Capture Attention.</span></h2>
          <p>Different creative approaches can support different business objectives.</p>
        </div>

        <div className="md-creative-grid">
          <article className="md-creative-card md-creative-purple">
            <span className="md-creative-tag">01 · BRAND AWARENESS</span>
            <div className="md-creative-art">
              <Zap size={35} />
              <h3>Be Seen.<br />Be Remembered.</h3>
              <p>Introduce your brand to the right audience.</p>
            </div>
            <div className="md-creative-footer">
              <span>Reach & Awareness</span>
              <ArrowUpRight size={19} />
            </div>
          </article>

          <article className="md-creative-card md-creative-orange">
            <span className="md-creative-tag">02 · LEAD GENERATION</span>
            <div className="md-creative-art">
              <MessageCircle size={35} />
              <h3>More Enquiries.<br />Better Connections.</h3>
              <p>Encourage interested customers to get in touch.</p>
            </div>
            <div className="md-creative-footer">
              <span>Leads & Enquiries</span>
              <ArrowUpRight size={19} />
            </div>
          </article>

          <article className="md-creative-card md-creative-green">
            <span className="md-creative-tag">03 · SALES CAMPAIGN</span>
            <div className="md-creative-art">
              <TrendingUp size={35} />
              <h3>Show Value.<br />Drive Action.</h3>
              <p>Promote products and guide customers towards purchase.</p>
            </div>
            <div className="md-creative-footer">
              <span>Sales & Conversions</span>
              <ArrowUpRight size={19} />
            </div>
          </article>
        </div>
      </section>

      <section className="md-process">
        <div className="md-section-heading">
          <span className="md-eyebrow">HOW WE WORK</span>
          <h2>From Strategy to <span>Optimization.</span></h2>
          <p>A clear process keeps every campaign focused on its objective.</p>
        </div>

        <div className="md-process-grid">
          {campaignSteps.map((step) => (
            <article className="md-process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="md-cta">
        <div className="md-cta-icon"><Target size={26} /></div>
        <span className="md-eyebrow">READY TO GROW?</span>
        <h2>Let's Build Your Next Campaign.</h2>
        <p>Tell us about your business and we'll discuss a suitable digital advertising strategy.</p>
        <Link to="/contact" className="md-primary-btn">
          Discuss Your Project <ArrowRight size={18} />
        </Link>
      </section>

      <footer className="md-footer">
        <Link to="/" className="md-footer-brand">BrandByWebeara</Link>
        <span>YOUR BRAND. OUR CREATION.</span>
        <Link to="/portfolio">Back to Portfolio <ArrowRight size={15} /></Link>
      </footer>
    </main>
  );
}
