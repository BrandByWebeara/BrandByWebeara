
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Eye,
  Facebook,
  Instagram,
  MousePointerClick,
  Play,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "Reach", value: "12,450", change: "People reached", icon: Eye },
  { label: "Impressions", value: "18,920", change: "Ad displays", icon: BarChart3 },
  { label: "Link clicks", value: "684", change: "Ad interactions", icon: MousePointerClick },
  { label: "Leads", value: "86", change: "Sample conversions", icon: Users },
];

const creatives = [
  {
    number: "01",
    type: "Instagram Feed",
    objective: "Product awareness",
    title: "Make your brand impossible to ignore.",
    description: "Designed to stop the scroll and capture attention.",
    className: "mbd-creative-feed",
    label: "YOUR BRAND",
    button: "SHOP NOW",
  },
  {
    number: "02",
    type: "Stories & Reels",
    objective: "Reach & engagement",
    title: "Your next customer is one scroll away.",
    description: "Vertical-first creative designed for mobile audiences.",
    className: "mbd-creative-story",
    label: "GROW YOUR BRAND",
    button: "DISCOVER MORE",
  },
  {
    number: "03",
    type: "Lead Generation",
    objective: "Enquiries & leads",
    title: "Ready to grow your business?",
    description: "A clear offer and call to action built to encourage enquiries.",
    className: "mbd-creative-lead",
    label: "LET'S TALK",
    button: "GET A FREE QUOTE",
  },
];

const workflow = [
  ["01", "Strategy & research", "We understand your offer, ideal customers, competitors and campaign goals."],
  ["02", "Audience & campaign setup", "We plan targeting, campaign objectives, placements and budget structure."],
  ["03", "Ad creatives & copy", "We prepare ad concepts, messaging and calls to action for your audience."],
  ["04", "Launch & optimization", "We monitor performance and identify opportunities to improve campaigns."],
  ["05", "Reporting & insights", "We review campaign metrics and use the findings to plan the next steps."],
];

export default function MarketingDemo() {
  return (
    <main className="mbd-page">
      <div className="mbd-topbar">
        <Link to="/portfolio" className="mbd-back">
          <ArrowRight size={16} className="mbd-back-icon" />
          Back to Portfolio
        </Link>
        <div className="mbd-brand">
          <span className="mbd-brand-mark">W</span>
          <span>BrandByWebeara</span>
        </div>
        <Link to="/contact" className="mbd-top-contact">
          Let's Talk <ArrowUpRight size={15} />
        </Link>
      </div>

      <section className="mbd-hero">
        <div className="mbd-hero-copy">
          <div className="mbd-eyebrow">
            <span className="mbd-live-dot" />
            DIGITAL ADVERTISING SERVICES
          </div>

          <h1>
            Turn attention into
            <span> business growth.</span>
          </h1>

          <p className="mbd-hero-description">
            Strategic Facebook and Instagram advertising designed to help
            businesses reach the right audience, generate enquiries and
            measure campaign performance.
          </p>

          <div className="mbd-platforms">
            <span><Facebook size={17} /> Facebook Ads</span>
            <span><Instagram size={17} /> Instagram Ads</span>
          </div>

          <div className="mbd-hero-actions">
            <Link to="/contact" className="mbd-primary-btn">
              Get a Free Ads Strategy <ArrowRight size={17} />
            </Link>
            <a href="#campaign-dashboard" className="mbd-secondary-btn">
              Explore Campaigns <ChevronRight size={17} />
            </a>
          </div>

          <div className="mbd-trust-line">
            <CheckCircle2 size={16} />
            Strategy · Creative · Targeting · Optimization
          </div>
        </div>

        <div className="mbd-hero-visual">
          <div className="mbd-orb mbd-orb-one" />
          <div className="mbd-orb mbd-orb-two" />

          <div className="mbd-floating-label mbd-floating-top">
            <span className="mbd-mini-icon"><Target size={17} /></span>
            <span><strong>Audience first</strong><small>Campaign strategy</small></span>
          </div>

          <div className="mbd-ad-preview">
            <div className="mbd-ad-preview-head">
              <div className="mbd-ad-avatar">W</div>
              <div className="mbd-ad-account">
                <strong>Your Brand</strong>
                <span>Sponsored · <GlobeIcon /></span>
              </div>
              <span className="mbd-ad-menu">•••</span>
            </div>

            <div className="mbd-ad-preview-copy">
              <span>YOUR NEXT BIG MOVE</span>
              <h3>Get your brand<br />seen by more people.</h3>
              <p>Reach the right audience with smarter digital advertising.</p>
            </div>

            <div className="mbd-ad-art">
              <div className="mbd-art-circle mbd-art-circle-one" />
              <div className="mbd-art-circle mbd-art-circle-two" />
              <div className="mbd-art-label">GROW<br />FASTER.</div>
              <div className="mbd-art-small">YOUR BRAND. YOUR MOMENT.</div>
              <div className="mbd-art-pill">LET'S GROW <ArrowUpRight size={13} /></div>
            </div>

            <div className="mbd-ad-preview-footer">
              <div><strong>Sponsored campaign</strong><span>Example ad creative</span></div>
              <span className="mbd-preview-cta">Learn more <ArrowUpRight size={14} /></span>
            </div>
            <div className="mbd-social-actions">
              <span>♡ Like</span><span>◯ Comment</span><span>↗ Share</span>
            </div>
          </div>

          <div className="mbd-floating-label mbd-floating-bottom">
            <span className="mbd-mini-icon mbd-mini-green"><TrendingUp size={17} /></span>
            <span><strong>Measure what matters</strong><small>Track campaign performance</small></span>
          </div>
        </div>
      </section>

      <section className="mbd-dashboard-section" id="campaign-dashboard">
        <div className="mbd-section-heading">
          <div>
            <span className="mbd-section-kicker">CAMPAIGN PERFORMANCE</span>
            <h2>Every click tells a story.</h2>
            <p>A sample dashboard showing the types of metrics we can track and review.</p>
          </div>
          <div className="mbd-demo-badge"><span /> DEMO DATA · NOT REAL CAMPAIGN RESULTS</div>
        </div>

        <div className="mbd-dashboard">
          <div className="mbd-dashboard-head">
            <div className="mbd-dashboard-title">
              <span className="mbd-dashboard-icon"><BarChart3 size={19} /></span>
              <div><strong>Campaign overview</strong><small>Illustrative performance report</small></div>
            </div>
            <span className="mbd-period">Sample reporting period <ChevronRight size={14} /></span>
          </div>

          <div className="mbd-metrics-grid">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div className="mbd-metric-card" key={metric.label}>
                  <div className="mbd-metric-top">
                    <span>{metric.label}</span>
                    <Icon size={17} />
                  </div>
                  <strong className="mbd-metric-value">{metric.value}</strong>
                  <span className="mbd-metric-note">{metric.change}</span>
                </div>
              );
            })}
          </div>

          <div className="mbd-dashboard-bottom">
            <div className="mbd-chart-card">
              <div className="mbd-chart-heading">
                <div><strong>Illustrative activity trend</strong><small>Example visual only — not historical results</small></div>
                <span className="mbd-chart-key"><i /> Sample activity</span>
              </div>
              <div className="mbd-chart">
                <div className="mbd-chart-ylabels"><span>High</span><span>Medium</span><span>Low</span></div>
                <div className="mbd-chart-plot">
                  <div className="mbd-chart-gridline mbd-gridline-one" />
                  <div className="mbd-chart-gridline mbd-gridline-two" />
                  <div className="mbd-chart-gridline mbd-gridline-three" />
                  <svg viewBox="0 0 600 160" preserveAspectRatio="none" role="img" aria-label="Illustrative campaign activity line chart">
                    <defs>
                      <linearGradient id="mbdChartFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#7868ff" stopOpacity=".28" />
                        <stop offset="100%" stopColor="#7868ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,128 C35,115 45,120 75,100 S125,108 150,83 S195,92 225,72 S270,88 300,62 S345,75 375,49 S420,66 450,38 S490,51 525,26 S570,36 600,10 L600,160 L0,160 Z" fill="url(#mbdChartFill)" />
                    <path d="M0,128 C35,115 45,120 75,100 S125,108 150,83 S195,92 225,72 S270,88 300,62 S345,75 375,49 S420,66 450,38 S490,51 525,26 S570,36 600,10" fill="none" stroke="#8d7cff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="mbd-chart-xlabels"><span>Day 1</span><span>Day 3</span><span>Day 5</span><span>Day 7</span></div>
                </div>
              </div>
            </div>

            <div className="mbd-optimization-card">
              <span className="mbd-optimization-icon"><Zap size={20} /></span>
              <span className="mbd-section-kicker">OUR APPROACH</span>
              <h3>Test. Learn. Improve.</h3>
              <p>Campaign decisions should be based on tracked results, business goals and ongoing testing—not guesswork.</p>
              <ul>
                <li><CheckCircle2 size={15} /> Audience and placement review</li>
                <li><CheckCircle2 size={15} /> Creative and copy testing</li>
                <li><CheckCircle2 size={15} /> Budget and performance review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mbd-creatives-section">
        <div className="mbd-section-heading mbd-creatives-heading">
          <div>
            <span className="mbd-section-kicker">CREATIVE STUDIO</span>
            <h2>Ads made to stop the scroll.</h2>
            <p>Example creative concepts for different campaign goals. These are illustrative mockups, not live advertisements.</p>
          </div>
          <span className="mbd-creative-count">03 CONCEPTS</span>
        </div>

        <div className="mbd-creatives-grid">
          {creatives.map((creative) => (
            <article className="mbd-creative-card" key={creative.number}>
              <div className="mbd-creative-meta">
                <span>{creative.type}</span><span>{creative.number}</span>
              </div>

              <div className={`mbd-creative-art ${creative.className}`}>
                <div className="mbd-creative-brand"><span>W</span> {creative.label}</div>
                <div className="mbd-creative-shape mbd-shape-a" />
                <div className="mbd-creative-shape mbd-shape-b" />
                <div className="mbd-creative-content">
                  <span className="mbd-creative-eyebrow">MADE FOR YOUR NEXT CHAPTER</span>
                  <h3>{creative.title}</h3>
                  <p>{creative.description}</p>
                  <span className="mbd-creative-button">{creative.button} <ArrowUpRight size={14} /></span>
                </div>
                <span className="mbd-creative-watermark">SAMPLE AD</span>
              </div>

              <div className="mbd-creative-details">
                <div><span>Campaign objective</span><strong>{creative.objective}</strong></div>
                <span className="mbd-concept-tag">Concept design</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mbd-workflow-section">
        <div className="mbd-workflow-intro">
          <span className="mbd-section-kicker">HOW WE WORK</span>
          <h2>From first click to better decisions.</h2>
          <p>We structure each campaign around your business objectives, audience and available budget.</p>
          <Link to="/contact" className="mbd-text-link">
            Discuss your campaign <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mbd-workflow-list">
          {workflow.map(([number, title, description]) => (
            <div className="mbd-workflow-item" key={number}>
              <span className="mbd-workflow-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <CheckCircle2 className="mbd-workflow-check" size={20} />
            </div>
          ))}
        </div>
      </section>

      <section className="mbd-final-cta">
        <div className="mbd-cta-decoration mbd-cta-decoration-one" />
        <div className="mbd-cta-decoration mbd-cta-decoration-two" />
        <div className="mbd-cta-content">
          <span className="mbd-section-kicker">LET'S BUILD YOUR CAMPAIGN</span>
          <h2>Ready to put your business in front of the right people?</h2>
          <p>Tell us about your business and goals. Let's discuss a suitable Facebook and Instagram ads strategy.</p>
          <Link to="/contact" className="mbd-primary-btn mbd-cta-btn">
            Get in Touch <ArrowRight size={17} />
          </Link>
        </div>
        <div className="mbd-cta-icon"><Target size={52} strokeWidth={1.2} /><span><Play size={15} fill="currentColor" /></span></div>
      </section>

      <footer className="mbd-footer">
        <Link to="/portfolio" className="mbd-footer-brand"><span className="mbd-brand-mark">W</span> BrandByWebeara</Link>
        <p>YOUR BRAND. OUR CREATION.</p>
        <Link to="/contact">Start a project <ArrowUpRight size={14} /></Link>
      </footer>
    </main>
  );
}

function GlobeIcon() {
  return <span className="mbd-globe-dot">●</span>;
}
