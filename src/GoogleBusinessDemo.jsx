
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Eye,
  Globe,
  MapPin,
  Menu,
  MessageCircle,
  MousePointerClick,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const business = {
  name: "Urban Cafe",
  category: "Cafe & Coffee Shop",
  address: "Hazratganj, Lucknow, Uttar Pradesh",
  phone: "+91 98765 43210",
  website: "urbancafe.example",
  hours: "9:00 AM – 10:00 PM",
};

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Profile Setup",
    text: "Set up your business information, category, contact details and service information.",
  },
  {
    icon: Search,
    title: "Local Search Optimization",
    text: "Improve profile information so potential customers can better understand your business.",
  },
  {
    icon: Camera,
    title: "Photos & Services",
    text: "Organize business photos, service descriptions, products and important details.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    text: "Review available profile performance data and identify opportunities for improvement.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We learn about your business, customers, location and goals.",
  },
  {
    number: "02",
    title: "Set Up",
    text: "We organize your profile details, categories, services and contact information.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "We improve your business description, photos and local profile information.",
  },
  {
    number: "04",
    title: "Improve",
    text: "We review available insights and recommend ongoing improvements.",
  },
];

function GoogleMark({ size = 34 }) {
  return (
    <span
      className="gbd-google-mark"
      style={{ width: size, height: size, fontSize: size * 0.9 }}
      aria-label="Google-inspired demo mark"
    >
      G
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="gbd-section-label">
      <span />
      {children}
    </div>
  );
}

function GoogleSearchPreview() {
  return (
    <div className="gbd-search-window">
      <div className="gbd-window-top">
        <div className="gbd-window-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="gbd-window-address">
          <ShieldCheck size={13} />
          Search preview · Demo
        </span>
      </div>

      <div className="gbd-search-body">
        <div className="gbd-search-brand">
          <GoogleMark size={31} />
          <span>Search</span>
        </div>

        <div className="gbd-search-input">
          <Search size={17} />
          <span>cafe near me</span>
          <span className="gbd-search-input-icon">
            <span />
          </span>
        </div>

        <div className="gbd-search-tabs">
          <span className="gbd-search-tab-active">All</span>
          <span>Maps</span>
          <span>Images</span>
          <span>More</span>
        </div>

        <div className="gbd-search-results-label">
          LOCAL BUSINESS PREVIEW
        </div>

        <div className="gbd-local-result">
          <div className="gbd-result-heading">
            <div className="gbd-result-logo">
              <span>U</span>
            </div>
            <div>
              <h4>{business.name}</h4>
              <span>{business.category}</span>
              <div className="gbd-rating">
                <b>4.8</b>
                <span className="gbd-stars">★★★★★</span>
                <small>Sample rating</small>
              </div>
            </div>
            <button
              type="button"
              className="gbd-more-button"
              aria-label="More business details"
            >
              ⋮
            </button>
          </div>

          <div className="gbd-result-image">
            <div className="gbd-cafe-illustration">
              <div className="gbd-cafe-awning">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="gbd-cafe-sign">URBAN CAFE</div>
              <div className="gbd-cafe-door" />
              <div className="gbd-cafe-window" />
              <div className="gbd-cafe-plant">✦</div>
            </div>
            <div className="gbd-photo-tag">
              <Camera size={12} /> Business photo preview
            </div>
          </div>

          <div className="gbd-result-actions">
            <div>
              <Phone size={16} />
              <span>Call</span>
            </div>
            <div>
              <Navigation size={16} />
              <span>Directions</span>
            </div>
            <div>
              <Globe size={16} />
              <span>Website</span>
            </div>
          </div>

          <div className="gbd-result-details">
            <div>
              <Clock3 size={15} />
              <span>
                <b className="gbd-open-text">Hours listed in demo</b>
                <br />
                {business.hours}
              </span>
            </div>
            <div>
              <MapPin size={15} />
              <span>{business.address}</span>
            </div>
            <div>
              <Phone size={15} />
              <span>{business.phone}</span>
            </div>
            <div>
              <Globe size={15} />
              <span>{business.website}</span>
            </div>
          </div>

          <div className="gbd-demo-notice">
            Illustrative listing only. This is not a live Google listing.
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessDashboard() {
  const metrics = [
    {
      icon: Eye,
      label: "Profile views",
      value: "2,480",
      change: "+18%",
    },
    {
      icon: Search,
      label: "Search appearances",
      value: "1,860",
      change: "+12%",
    },
    {
      icon: Phone,
      label: "Call actions",
      value: "124",
      change: "+9%",
    },
    {
      icon: Navigation,
      label: "Direction requests",
      value: "96",
      change: "+15%",
    },
  ];

  const checklist = [
    "Business name and category",
    "Address and service area",
    "Phone and website details",
    "Opening hours",
    "Business description",
    "Photos and service information",
  ];

  return (
    <div className="gbd-dashboard">
      <div className="gbd-dashboard-top">
        <div className="gbd-dashboard-title">
          <div className="gbd-dashboard-icon">
            <GoogleMark size={35} />
          </div>
          <div>
            <span className="gbd-dashboard-eyebrow">
              BUSINESS PROFILE
            </span>
            <h3>{business.name}</h3>
            <p>
              <MapPin size={13} /> Lucknow, India
            </p>
          </div>
        </div>
        <span className="gbd-demo-badge">DEMO DATA</span>
      </div>

      <div className="gbd-dashboard-nav">
        <span className="gbd-dashboard-nav-active">Overview</span>
        <span>Performance</span>
        <span>Services</span>
        <span>Photos</span>
      </div>

      <div className="gbd-dashboard-welcome">
        <div>
          <h4>Business performance</h4>
          <p>Example insights for a sample business profile.</p>
        </div>
        <span className="gbd-period">Illustrative data</span>
      </div>

      <div className="gbd-metrics-grid">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div className="gbd-metric-card" key={metric.label}>
              <div className="gbd-metric-icon">
                <Icon size={17} />
              </div>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>
                <TrendingUp size={12} />
                {metric.change} <em>sample</em>
              </small>
            </div>
          );
        })}
      </div>

      <div className="gbd-dashboard-bottom">
        <div className="gbd-chart-card">
          <div className="gbd-chart-heading">
            <div>
              <h4>Profile interactions</h4>
              <p>Illustrative weekly activity</p>
            </div>
            <BarChart3 size={19} />
          </div>

          <div className="gbd-chart">
            <div className="gbd-chart-y">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            <div className="gbd-chart-plot">
              <div className="gbd-chart-gridlines">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <svg
                viewBox="0 0 400 155"
                preserveAspectRatio="none"
                role="img"
                aria-label="Illustrative profile activity chart"
                className="gbd-chart-svg"
              >
                <defs>
                  <linearGradient id="gbd-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4285f4" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#4285f4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 125 C28 115 35 100 65 108 S108 74 132 88 S173 55 200 70 S240 40 265 58 S305 35 330 44 S375 12 400 20 L400 155 L0 155 Z"
                  fill="url(#gbd-chart-fill)"
                />
                <path
                  d="M0 125 C28 115 35 100 65 108 S108 74 132 88 S173 55 200 70 S240 40 265 58 S305 35 330 44 S375 12 400 20"
                  fill="none"
                  stroke="#4285f4"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          <div className="gbd-chart-days">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
          <p className="gbd-chart-disclaimer">
            Sample chart — not connected to Google Analytics or a live profile.
          </p>
        </div>

        <div className="gbd-checklist-card">
          <div className="gbd-checklist-heading">
            <div>
              <h4>Optimization checklist</h4>
              <p>Example setup checklist</p>
            </div>
            <ShieldCheck size={20} />
          </div>
          <div className="gbd-checklist-items">
            {checklist.map((item, index) => (
              <div key={item}>
                <CheckCircle2 size={16} />
                <span>{item}</span>
                <small>{index < 4 ? "Review" : "Add"}</small>
              </div>
            ))}
          </div>
          <div className="gbd-checklist-foot">
            <Sparkles size={15} />
            Tailored to your business needs
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalVisibility() {
  return (
    <div className="gbd-visibility-card">
      <div className="gbd-map-art">
        <div className="gbd-map-road gbd-road-one" />
        <div className="gbd-map-road gbd-road-two" />
        <div className="gbd-map-road gbd-road-three" />
        <div className="gbd-map-road gbd-road-four" />
        <div className="gbd-map-block gbd-map-block-one" />
        <div className="gbd-map-block gbd-map-block-two" />
        <div className="gbd-map-block gbd-map-block-three" />
        <div className="gbd-map-block gbd-map-block-four" />
        <div className="gbd-map-block gbd-map-block-five" />
        <div className="gbd-map-block gbd-map-block-six" />

        <div className="gbd-map-label gbd-map-label-one">HAZRATGANJ</div>
        <div className="gbd-map-label gbd-map-label-two">MAIN ROAD</div>

        <div className="gbd-map-pin">
          <MapPin size={22} fill="white" />
        </div>

        <div className="gbd-map-business">
          <div className="gbd-map-business-icon">U</div>
          <div>
            <strong>{business.name}</strong>
            <small>Sample business location</small>
          </div>
        </div>

        <div className="gbd-map-legend">
          <span />
          Illustrative map
        </div>
      </div>

      <div className="gbd-location-info">
        <div className="gbd-location-heading">
          <div className="gbd-location-icon">
            <MapPin size={22} />
          </div>
          <div>
            <span>BUSINESS LOCATION</span>
            <h3>Be visible in your local area</h3>
          </div>
        </div>

        <div className="gbd-location-row">
          <MapPin size={17} />
          <div>
            <strong>Business address</strong>
            <p>{business.address}</p>
          </div>
        </div>

        <div className="gbd-location-row">
          <Navigation size={17} />
          <div>
            <strong>Service area</strong>
            <p>Define the actual areas your business serves.</p>
          </div>
        </div>

        <div className="gbd-location-row">
          <Clock3 size={17} />
          <div>
            <strong>Business hours</strong>
            <p>{business.hours} (sample)</p>
          </div>
        </div>

        <div className="gbd-location-row">
          <Phone size={17} />
          <div>
            <strong>Customer contact</strong>
            <p>{business.phone} (demo number)</p>
          </div>
        </div>

        <div className="gbd-location-note">
          <ShieldCheck size={17} />
          <span>
            Accurate details help customers understand where and how
            to contact your business. Local rankings are not guaranteed.
          </span>
        </div>
      </div>
    </div>
  );
}

function GoogleBusinessDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="gbd-page">
      <style>{`
        .gbd-page {
          --gbd-navy: #101b36;
          --gbd-muted: #667085;
          --gbd-blue: #4285f4;
          --gbd-gold: #c99b55;
          color: #18233b;
          background: #fff;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }
        .gbd-page * { box-sizing: border-box; }
        .gbd-page a { text-decoration: none; }
        .gbd-container { width: min(1160px, calc(100% - 48px)); margin: 0 auto; }
        .gbd-header { background: rgba(255,255,255,.97); border-bottom: 1px solid #edf0f5; position: relative; z-index: 5; }
        .gbd-nav { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .gbd-brand { display: inline-flex; align-items: center; gap: 11px; color: var(--gbd-navy); flex-shrink: 0; }
        .gbd-brand-mark { display: grid; place-items: center; width: 42px; height: 42px; color: #fff; background: var(--gbd-navy); border-radius: 13px; font-weight: 850; font-size: 21px; }
        .gbd-brand-name { font-weight: 850; letter-spacing: -.5px; font-size: 17px; }
        .gbd-brand-name span { color: var(--gbd-gold); }
        .gbd-brand-tag { margin-top: 3px; color: #7a8395; font-size: 9px; font-weight: 750; letter-spacing: 1.15px; }
        .gbd-nav-links { display: flex; align-items: center; gap: 27px; }
        .gbd-nav-links a { color: #536078; font-size: 13px; font-weight: 650; transition: color .2s; }
        .gbd-nav-links a:hover { color: var(--gbd-blue); }
        .gbd-nav-cta, .gbd-primary-btn { display: inline-flex; justify-content: center; align-items: center; gap: 9px; background: var(--gbd-navy); color: #fff !important; border: 0; border-radius: 9px; padding: 13px 18px; font-size: 13px; font-weight: 750; transition: transform .2s, background .2s; }
        .gbd-nav-cta:hover, .gbd-primary-btn:hover { background: #263c69; transform: translateY(-2px); }
        .gbd-menu-toggle { display: none; background: #f4f6fa; color: var(--gbd-navy); border: 0; border-radius: 9px; padding: 9px; cursor: pointer; }
        .gbd-hero { position: relative; padding: 82px 0 86px; background: radial-gradient(ellipse at 83% 26%, rgba(66,133,244,.11), transparent 38%), linear-gradient(180deg, #f8faff 0%, #fff 100%); }
        .gbd-hero-grid { display: grid; grid-template-columns: .93fr 1.07fr; gap: 55px; align-items: center; }
        .gbd-kicker { display: inline-flex; align-items: center; gap: 9px; padding: 8px 12px; border-radius: 6px; background: #eef4ff; color: #3568bd; font-size: 10px; font-weight: 850; letter-spacing: 1.35px; }
        .gbd-kicker span { width: 7px; height: 7px; border-radius: 50%; background: #4285f4; }
        .gbd-hero h1 { color: var(--gbd-navy); margin: 23px 0 20px; font-size: clamp(38px, 4.4vw, 60px); letter-spacing: -2.7px; line-height: 1.09; font-weight: 850; }
        .gbd-hero h1 span { color: var(--gbd-blue); }
        .gbd-hero-copy { color: #657089; font-size: 15px; line-height: 1.85; max-width: 490px; margin: 0; }
        .gbd-hero-actions { display: flex; align-items: center; gap: 13px; flex-wrap: wrap; margin-top: 29px; }
        .gbd-secondary-btn { display: inline-flex; align-items: center; justify-content: center; gap: 9px; color: var(--gbd-navy); border: 1px solid #dce2ed; border-radius: 9px; padding: 12px 17px; font-size: 13px; font-weight: 750; background: #fff; }
        .gbd-secondary-btn:hover { border-color: #9cb9eb; background: #f8faff; }
        .gbd-trust-row { display: flex; gap: 18px; flex-wrap: wrap; margin-top: 25px; color: #6d7890; font-size: 11px; font-weight: 650; }
        .gbd-trust-row span { display: inline-flex; align-items: center; gap: 6px; }
        .gbd-trust-row svg { color: #23855c; }
        .gbd-google-mark { display: inline-grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: #fff; font-weight: 850; color: #4285f4; font-family: Arial, sans-serif; }
        .gbd-search-window { overflow: hidden; background: #fff; border: 1px solid #e4e8f0; border-radius: 17px; box-shadow: 0 25px 65px rgba(22,42,80,.13); }
        .gbd-window-top { height: 42px; display: flex; align-items: center; padding: 0 15px; gap: 14px; background: #f8f9fb; border-bottom: 1px solid #edf0f5; }
        .gbd-window-dots { display: flex; gap: 5px; }
        .gbd-window-dots i { width: 7px; height: 7px; background: #d2d7e1; border-radius: 50%; }
        .gbd-window-address { display: inline-flex; align-items: center; gap: 5px; color: #7b8496; font-size: 10px; }
        .gbd-search-body { padding: 19px 23px 22px; }
        .gbd-search-brand { display: flex; align-items: center; gap: 7px; color: #4d566a; font-size: 17px; font-weight: 600; margin-bottom: 16px; }
        .gbd-search-input { display: flex; align-items: center; gap: 10px; height: 42px; border: 1px solid #dfe4ed; border-radius: 24px; padding: 0 14px; color: #5b6478; font-size: 12px; box-shadow: 0 2px 5px rgba(30,50,80,.04); }
        .gbd-search-input svg { color: #778197; }
        .gbd-search-input-icon { margin-left: auto; width: 15px; height: 15px; border: 2px solid #4285f4; border-radius: 50%; position: relative; }
        .gbd-search-input-icon span { position: absolute; width: 7px; height: 2px; background: #4285f4; right: -5px; bottom: -3px; transform: rotate(45deg); }
        .gbd-search-tabs { display: flex; gap: 21px; border-bottom: 1px solid #edf0f4; color: #6c7589; font-size: 10px; margin-top: 15px; padding-bottom: 11px; }
        .gbd-search-tab-active { color: #4285f4; font-weight: 800; border-bottom: 2px solid #4285f4; margin-bottom: -12px; padding-bottom: 10px; }
        .gbd-search-results-label { margin: 16px 0 10px; font-size: 9px; font-weight: 800; letter-spacing: 1px; color: #8490a5; }
        .gbd-local-result { border: 1px solid #e7ebf2; border-radius: 12px; padding: 13px; }
        .gbd-result-heading { display: flex; align-items: flex-start; gap: 11px; }
        .gbd-result-logo { display: grid; place-items: center; width: 43px; height: 43px; flex-shrink: 0; border-radius: 11px; background: #f3e5d1; color: #8b6038; font-weight: 850; font-size: 22px; }
        .gbd-result-heading h4 { margin: 0 0 3px; font-size: 15px; color: #24314c; }
        .gbd-result-heading > div:nth-child(2) > span { color: #778197; font-size: 10px; }
        .gbd-rating { display: flex; align-items: center; flex-wrap: wrap; gap: 5px; margin-top: 5px; font-size: 10px; }
        .gbd-rating b { color: #414b60; }
        .gbd-stars { color: #f6ad26; letter-spacing: 1px; }
        .gbd-rating small { color: #929aab; }
        .gbd-more-button { margin-left: auto; border: 0; background: transparent; color: #8790a0; font-size: 21px; }
        .gbd-result-image { height: 143px; overflow: hidden; position: relative; margin-top: 13px; border-radius: 9px; background: linear-gradient(135deg,#d9e9e6,#f5e9d6); }
        .gbd-cafe-illustration { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(110deg,rgba(255,255,255,.14),transparent); }
        .gbd-cafe-sign { position: relative; z-index: 1; margin-top: 16px; padding: 5px 13px; background: #faf3e8; border: 2px solid #d4b78e; color: #715038; font-size: 9px; font-weight: 900; letter-spacing: 2px; }
        .gbd-cafe-awning { display: flex; position: relative; z-index: 2; height: 17px; }
        .gbd-cafe-awning i { display: block; width: 29px; background: #f8f3e9; border: 1px solid #cbb9a3; }
        .gbd-cafe-awning i:nth-child(even) { background: #a95e49; }
        .gbd-cafe-door { position: absolute; bottom: 0; left: 43%; height: 53px; width: 36px; border: 4px solid #f7f0e6; background: #b9c9bd; }
        .gbd-cafe-window { position: absolute; bottom: 0; right: 24%; height: 43px; width: 49px; border: 4px solid #f7f0e6; background: #d0dfd9; }
        .gbd-cafe-plant { position: absolute; right: 12%; bottom: 4px; color: #477d5e; font-size: 28px; }
        .gbd-photo-tag { position: absolute; left: 9px; bottom: 9px; display: flex; align-items: center; gap: 5px; padding: 6px 8px; background: rgba(255,255,255,.93); color: #5d6678; border-radius: 6px; font-size: 9px; }
        .gbd-result-actions { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-top: 12px; }
        .gbd-result-actions > div { display: flex; justify-content: center; align-items: center; gap: 6px; padding: 10px 5px; border: 1px solid #dce6f8; border-radius: 8px; color: #3975d1; font-size: 10px; font-weight: 750; }
        .gbd-result-details { display: grid; gap: 10px; margin-top: 14px; }
        .gbd-result-details > div { display: flex; align-items: flex-start; gap: 9px; color: #6c7588; font-size: 10px; line-height: 1.5; }
        .gbd-result-details svg { flex-shrink: 0; color: #71819b; }
        .gbd-open-text { color: #3b795a; font-weight: 700; }
        .gbd-demo-notice { margin-top: 13px; padding-top: 10px; border-top: 1px solid #edf0f5; color: #8b93a4; font-size: 9px; line-height: 1.5; }
        .gbd-section { padding: 92px 0; }
        .gbd-section-muted { background: #f7f9fc; }
        .gbd-section-heading { max-width: 690px; margin: 0 auto 43px; text-align: center; }
        .gbd-section-label { display: flex; align-items: center; justify-content: center; gap: 8px; color: #a77a37; font-size: 10px; font-weight: 850; letter-spacing: 1.7px; }
        .gbd-section-label > span { width: 7px; height: 7px; border-radius: 50%; background: var(--gbd-gold); }
        .gbd-section-heading h2 { margin: 17px 0 13px; color: var(--gbd-navy); font-size: clamp(29px, 3.3vw, 42px); letter-spacing: -1.5px; line-height: 1.2; }
        .gbd-section-heading h2 span { color: var(--gbd-blue); }
        .gbd-section-heading p { margin: 0; color: var(--gbd-muted); font-size: 14px; line-height: 1.8; }
        .gbd-feature-strip { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 35px; }
        .gbd-feature { display: flex; align-items: flex-start; gap: 13px; padding: 19px; background: #fff; border: 1px solid #e8edf5; border-radius: 12px; }
        .gbd-feature-icon { display: grid; place-items: center; width: 41px; height: 41px; flex-shrink: 0; background: #eef4ff; color: #3f78d5; border-radius: 10px; }
        .gbd-feature h3 { margin: 1px 0 7px; font-size: 14px; color: var(--gbd-navy); }
        .gbd-feature p { margin: 0; font-size: 12px; color: #707b90; line-height: 1.7; }
        .gbd-dashboard { background: #fff; border: 1px solid #e4e9f2; border-radius: 17px; padding: 24px; box-shadow: 0 18px 45px rgba(25,45,80,.06); }
        .gbd-dashboard-top { display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; }
        .gbd-dashboard-title { display: flex; align-items: center; gap: 12px; }
        .gbd-dashboard-icon { display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #e8edf5; border-radius: 12px; }
        .gbd-dashboard-eyebrow { color: #8b94a6; font-size: 9px; font-weight: 850; letter-spacing: 1.1px; }
        .gbd-dashboard-title h3 { margin: 4px 0; font-size: 17px; color: #24314c; }
        .gbd-dashboard-title p { display: flex; align-items: center; gap: 4px; margin: 0; color: #778197; font-size: 11px; }
        .gbd-demo-badge { padding: 7px 10px; color: #8b662d; background: #fff6e7; border: 1px solid #f2e0be; border-radius: 6px; font-size: 9px; font-weight: 850; letter-spacing: .8px; }
        .gbd-dashboard-nav { display: flex; gap: 24px; margin-top: 22px; border-bottom: 1px solid #e9edf4; overflow-x: auto; color: #778197; font-size: 11px; }
        .gbd-dashboard-nav span { padding: 0 0 12px; white-space: nowrap; }
        .gbd-dashboard-nav-active { color: #3978db; border-bottom: 2px solid #4285f4; font-weight: 800; }
        .gbd-dashboard-welcome { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin: 23px 0 15px; flex-wrap: wrap; }
        .gbd-dashboard-welcome h4 { margin: 0 0 5px; font-size: 16px; color: #27344d; }
        .gbd-dashboard-welcome p { margin: 0; color: #7b8598; font-size: 11px; }
        .gbd-period { padding: 8px 10px; background: #f7f9fc; border: 1px solid #e7ebf2; border-radius: 7px; font-size: 10px; color: #69758a; }
        .gbd-metrics-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 13px; }
        .gbd-metric-card { border: 1px solid #e7ebf2; border-radius: 11px; padding: 15px; min-width: 0; }
        .gbd-metric-icon { display: grid; place-items: center; width: 33px; height: 33px; background: #eef4ff; color: #3979dd; border-radius: 8px; margin-bottom: 12px; }
        .gbd-metric-card > span { display: block; color: #737e92; font-size: 10px; line-height: 1.5; min-height: 30px; }
        .gbd-metric-card > strong { display: block; color: #25324b; font-size: 25px; letter-spacing: -.8px; margin: 7px 0; }
        .gbd-metric-card > small { display: flex; align-items: center; gap: 3px; color: #23845c; font-size: 9px; font-weight: 800; flex-wrap: wrap; }
        .gbd-metric-card > small em { color: #98a0ae; font-style: normal; font-weight: 500; }
        .gbd-dashboard-bottom { display: grid; grid-template-columns: 1.1fr .9fr; gap: 16px; margin-top: 17px; }
        .gbd-chart-card, .gbd-checklist-card { padding: 18px; border: 1px solid #e7ebf2; border-radius: 12px; min-width: 0; }
        .gbd-chart-heading, .gbd-checklist-heading { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .gbd-chart-heading h4, .gbd-checklist-heading h4 { margin: 0 0 5px; font-size: 13px; color: #29364f; }
        .gbd-chart-heading p, .gbd-checklist-heading p { margin: 0; color: #8790a2; font-size: 10px; }
        .gbd-chart-heading > svg, .gbd-checklist-heading > svg { color: #4380e2; }
        .gbd-chart { display: flex; gap: 11px; margin-top: 20px; height: 145px; }
        .gbd-chart-y { display: flex; flex-direction: column; justify-content: space-between; padding-bottom: 2px; color: #9099a9; font-size: 9px; }
        .gbd-chart-plot { flex: 1; position: relative; min-width: 0; }
        .gbd-chart-gridlines { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-between; }
        .gbd-chart-gridlines i { border-top: 1px dashed #e6ebf3; }
        .gbd-chart-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
        .gbd-chart-days { display: flex; justify-content: space-between; margin: 8px 0 0 24px; color: #8a94a5; font-size: 9px; }
        .gbd-chart-disclaimer { color: #929aab; font-size: 9px; line-height: 1.5; margin: 13px 0 0; }
        .gbd-checklist-items { margin-top: 17px; display: grid; gap: 12px; }
        .gbd-checklist-items > div { display: flex; align-items: center; gap: 8px; font-size: 10px; color: #58647a; }
        .gbd-checklist-items svg { color: #4383e8; flex-shrink: 0; }
        .gbd-checklist-items small { margin-left: auto; color: #8792a5; font-size: 9px; }
        .gbd-checklist-foot { display: flex; align-items: center; gap: 7px; padding-top: 13px; margin-top: 16px; border-top: 1px solid #edf0f5; color: #7e6a47; font-size: 10px; }
        .gbd-visibility-card { display: grid; grid-template-columns: 1.08fr .92fr; overflow: hidden; background: #fff; border: 1px solid #e4e9f2; border-radius: 17px; box-shadow: 0 18px 45px rgba(25,45,80,.06); }
        .gbd-map-art { min-height: 400px; position: relative; overflow: hidden; background: #e9f0e7; }
        .gbd-map-road { position: absolute; background: #fffdf7; border: 1px solid #d8dfd2; }
        .gbd-road-one { height: 35px; width: 130%; top: 46%; left: -10%; transform: rotate(-24deg); }
        .gbd-road-two { width: 33px; height: 130%; left: 52%; top: -15%; transform: rotate(22deg); }
        .gbd-road-three { height: 22px; width: 130%; top: 73%; left: -12%; transform: rotate(13deg); }
        .gbd-road-four { width: 24px; height: 130%; left: 22%; top: -15%; transform: rotate(-30deg); }
        .gbd-map-block { position: absolute; background: #d7e4d0; border: 1px solid #c6d7bf; border-radius: 7px; }
        .gbd-map-block-one { width: 22%; height: 17%; top: 9%; left: 7%; }
        .gbd-map-block-two { width: 18%; height: 18%; top: 13%; right: 8%; }
        .gbd-map-block-three { width: 22%; height: 13%; bottom: 12%; left: 8%; }
        .gbd-map-block-four { width: 18%; height: 17%; bottom: 7%; right: 7%; }
        .gbd-map-block-five { width: 17%; height: 14%; top: 19%; left: 38%; }
        .gbd-map-block-six { width: 17%; height: 14%; bottom: 18%; left: 40%; }
        .gbd-map-label { position: absolute; color: #81917a; font-size: 9px; font-weight: 850; letter-spacing: 1px; }
        .gbd-map-label-one { top: 8%; left: 34%; }
        .gbd-map-label-two { right: 7%; top: 56%; transform: rotate(66deg); }
        .gbd-map-pin { position: absolute; top: 34%; left: 50%; display: grid; place-items: center; width: 49px; height: 49px; border-radius: 50% 50% 50% 8px; transform: translate(-50%,-50%) rotate(-45deg); background: #4285f4; border: 4px solid #fff; box-shadow: 0 8px 20px rgba(36,89,166,.25); }
        .gbd-map-pin svg { transform: rotate(45deg); color: #fff; }
        .gbd-map-business { position: absolute; top: 44%; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 10px; width: min(245px, 82%); padding: 12px; background: #fff; border-radius: 11px; box-shadow: 0 8px 26px rgba(30,55,50,.13); }
        .gbd-map-business-icon { display: grid; place-items: center; width: 37px; height: 37px; border-radius: 9px; background: #f3e5d1; color: #8b6038; font-weight: 850; font-size: 19px; }
        .gbd-map-business strong { display: block; font-size: 12px; color: #29364b; }
        .gbd-map-business small { display: block; margin-top: 4px; font-size: 9px; color: #8a94a3; }
        .gbd-map-legend { position: absolute; bottom: 16px; left: 16px; display: flex; align-items: center; gap: 7px; padding: 8px 10px; background: rgba(255,255,255,.92); border-radius: 7px; color: #7a8596; font-size: 9px; }
        .gbd-map-legend span { width: 7px; height: 7px; background: #c99b55; border-radius: 50%; }
        .gbd-location-info { padding: 30px; }
        .gbd-location-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 25px; }
        .gbd-location-icon { display: grid; place-items: center; width: 45px; height: 45px; border-radius: 12px; background: #eef4ff; color: #4285f4; flex-shrink: 0; }
        .gbd-location-heading span { color: #a77a37; font-size: 9px; font-weight: 850; letter-spacing: 1.2px; }
        .gbd-location-heading h3 { margin: 5px 0 0; color: var(--gbd-navy); font-size: 18px; line-height: 1.4; }
        .gbd-location-row { display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px solid #edf0f5; }
        .gbd-location-row > svg { margin-top: 2px; color: #4285f4; flex-shrink: 0; }
        .gbd-location-row strong { color: #33415b; font-size: 12px; }
        .gbd-location-row p { color: #778197; margin: 5px 0 0; font-size: 11px; line-height: 1.65; }
        .gbd-location-note { display: flex; align-items: flex-start; gap: 9px; padding: 13px; margin-top: 17px; border-radius: 9px; background: #f3f7ff; color: #64738d; font-size: 10px; line-height: 1.7; }
        .gbd-location-note svg { flex-shrink: 0; color: #4285f4; }
        .gbd-services-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .gbd-service-card { padding: 23px 19px; background: #fff; border: 1px solid #e5eaf2; border-radius: 13px; transition: transform .2s, box-shadow .2s, border-color .2s; }
        .gbd-service-card:hover { transform: translateY(-4px); border-color: #cbdaf5; box-shadow: 0 14px 30px rgba(28,53,93,.07); }
        .gbd-service-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 12px; color: #4285f4; background: #eef4ff; margin-bottom: 19px; }
        .gbd-service-card h3 { margin: 0 0 10px; color: #24314c; font-size: 14px; line-height: 1.5; }
        .gbd-service-card p { margin: 0; color: #727d91; font-size: 12px; line-height: 1.8; }
        .gbd-service-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 17px; color: #3975ce; font-size: 11px; font-weight: 800; }
        .gbd-process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .gbd-process-card { position: relative; padding: 22px; border: 1px solid #e5eaf2; border-radius: 12px; background: #fff; }
        .gbd-process-number { display: inline-block; margin-bottom: 24px; color: #c99b55; font-size: 12px; font-weight: 900; letter-spacing: 1.5px; }
        .gbd-process-card h3 { margin: 0 0 9px; color: #26344e; font-size: 16px; }
        .gbd-process-card p { margin: 0; color: #727d91; font-size: 12px; line-height: 1.8; }
        .gbd-process-arrow { position: absolute; top: 21px; right: 18px; color: #b4c0d2; }
        .gbd-info-banner { display: flex; align-items: flex-start; gap: 12px; max-width: 850px; margin: 30px auto 0; padding: 16px 18px; background: #fff8eb; border: 1px solid #f0e0c1; border-radius: 10px; color: #786443; font-size: 11px; line-height: 1.8; }
        .gbd-info-banner svg { flex-shrink: 0; margin-top: 2px; }
        .gbd-cta { padding: 0 0 85px; }
        .gbd-cta-inner { position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; gap: 30px; padding: 45px 48px; border-radius: 18px; background: linear-gradient(115deg,#111d39,#203c6a); }
        .gbd-cta-inner:after { content: ""; position: absolute; right: 16%; top: -100px; width: 310px; height: 310px; border-radius: 50%; border: 1px solid rgba(255,255,255,.12); box-shadow: 0 0 0 36px rgba(255,255,255,.025), 0 0 0 72px rgba(255,255,255,.02); pointer-events: none; }
        .gbd-cta-copy { position: relative; z-index: 1; max-width: 650px; }
        .gbd-cta-copy > span { color: #e5c58f; font-size: 10px; font-weight: 850; letter-spacing: 1.8px; }
        .gbd-cta-copy h2 { margin: 12px 0; color: #fff; font-size: clamp(27px,3vw,38px); letter-spacing: -1.2px; line-height: 1.25; }
        .gbd-cta-copy p { margin: 0; color: #c2ccdf; font-size: 13px; line-height: 1.8; }
        .gbd-cta-button { position: relative; z-index: 1; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 14px 18px; flex-shrink: 0; border-radius: 9px; background: #fff; color: #1c2b49; font-size: 12px; font-weight: 850; }
        .gbd-cta-button:hover { background: #eef4ff; }
        .gbd-footer { background: #0d1730; color: #fff; padding: 30px 0 20px; }
        .gbd-footer-top { display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; }
        .gbd-footer .gbd-brand { color: #fff; }
        .gbd-footer .gbd-brand-mark { background: #fff; color: #172443; }
        .gbd-footer .gbd-brand-tag { color: #a5b0c6; }
        .gbd-footer-links { display: flex; flex-wrap: wrap; gap: 19px; }
        .gbd-footer-links a { color: #b8c2d5; font-size: 11px; }
        .gbd-footer-links a:hover { color: #fff; }
        .gbd-footer-bottom { display: flex; justify-content: space-between; gap: 15px; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,.12); margin-top: 23px; padding-top: 18px; color: #8e9ab2; font-size: 10px; }
        @media (max-width: 1000px) {
          .gbd-nav-links { gap: 15px; }
          .gbd-hero-grid { gap: 28px; }
          .gbd-services-grid { grid-template-columns: repeat(2,1fr); }
          .gbd-metrics-grid { grid-template-columns: repeat(2,1fr); }
          .gbd-process-grid { grid-template-columns: repeat(2,1fr); }
          .gbd-dashboard-bottom { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .gbd-container { width: min(100% - 32px, 580px); }
          .gbd-nav { min-height: 69px; }
          .gbd-brand-mark { width: 38px; height: 38px; }
          .gbd-brand-name { font-size: 15px; }
          .gbd-brand-tag { font-size: 8px; }
          .gbd-menu-toggle { display: inline-flex; }
          .gbd-nav-links { display: none; position: absolute; top: 69px; left: 0; right: 0; flex-direction: column; align-items: stretch; gap: 0; padding: 10px 16px 18px; background: #fff; border-bottom: 1px solid #e5eaf2; box-shadow: 0 15px 25px rgba(20,40,70,.08); }
          .gbd-nav-links.gbd-menu-open { display: flex; }
          .gbd-nav-links a { padding: 13px 10px; }
          .gbd-nav-cta { margin-top: 5px; text-align: center; }
          .gbd-hero { padding: 54px 0 58px; }
          .gbd-hero-grid { grid-template-columns: 1fr; gap: 35px; }
          .gbd-hero h1 { font-size: clamp(38px,10vw,52px); letter-spacing: -1.8px; }
          .gbd-hero-copy { font-size: 13px; }
          .gbd-search-body { padding: 15px; }
          .gbd-result-image { height: 125px; }
          .gbd-section { padding: 65px 0; }
          .gbd-section-heading { margin-bottom: 29px; }
          .gbd-section-heading h2 { letter-spacing: -1px; }
          .gbd-feature-strip { grid-template-columns: 1fr; gap: 10px; }
          .gbd-dashboard { padding: 15px; }
          .gbd-dashboard-bottom { gap: 12px; }
          .gbd-metric-card { padding: 12px; }
          .gbd-metric-card > strong { font-size: 23px; }
          .gbd-visibility-card { grid-template-columns: 1fr; }
          .gbd-map-art { min-height: 300px; }
          .gbd-location-info { padding: 22px; }
          .gbd-services-grid { grid-template-columns: 1fr; }
          .gbd-service-card { padding: 20px; }
          .gbd-process-grid { grid-template-columns: 1fr; gap: 12px; }
          .gbd-process-card { padding: 19px; }
          .gbd-process-number { margin-bottom: 13px; }
          .gbd-cta { padding-bottom: 60px; }
          .gbd-cta-inner { align-items: flex-start; flex-direction: column; padding: 30px 24px; gap: 22px; }
          .gbd-cta-inner:after { right: -180px; }
          .gbd-footer-top { align-items: flex-start; flex-direction: column; }
          .gbd-footer-links { gap: 15px; }
          .gbd-footer-bottom { flex-direction: column; }
        }
        @media (max-width: 390px) {
          .gbd-container { width: calc(100% - 24px); }
          .gbd-hero h1 { font-size: 36px; }
          .gbd-hero-actions { align-items: stretch; flex-direction: column; }
          .gbd-hero-actions a { width: 100%; }
          .gbd-search-tabs { gap: 13px; }
          .gbd-result-actions { gap: 5px; }
          .gbd-result-actions > div { gap: 4px; font-size: 9px; }
          .gbd-metrics-grid { gap: 8px; }
          .gbd-metric-card > strong { font-size: 21px; }
          .gbd-dashboard-nav { gap: 17px; }
          .gbd-chart-card, .gbd-checklist-card { padding: 13px; }
        }
      `}</style>

      <header className="gbd-header" id="top">
        <div className="gbd-container gbd-nav">
          <Link to="/" className="gbd-brand" onClick={closeMenu}>
            <div className="gbd-brand-mark">W</div>
            <div>
              <div className="gbd-brand-name">
                Brand<span>By</span>Webeara
              </div>
              <div className="gbd-brand-tag">
                YOUR BRAND. OUR CREATION.
              </div>
            </div>
          </Link>

          <nav className={`gbd-nav-links ${menuOpen ? "gbd-menu-open" : ""}`}>
            <a href="#top" onClick={closeMenu}>Home</a>
            <a href="#search-preview" onClick={closeMenu}>Search Preview</a>
            <a href="#dashboard" onClick={closeMenu}>Dashboard</a>
            <a href="#local-visibility" onClick={closeMenu}>Local Visibility</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <Link to="/contact" className="gbd-nav-cta" onClick={closeMenu}>
              Get Started <ArrowRight size={15} />
            </Link>
          </nav>

          <button
            type="button"
            className="gbd-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="gbd-hero">
          <div className="gbd-container gbd-hero-grid">
            <div>
              <div className="gbd-kicker">
                <span />
                GOOGLE BUSINESS PROFILE SERVICES
              </div>

              <h1>
                Get Found on Google.
                <br />
                <span>Grow Locally.</span>
              </h1>

              <p className="gbd-hero-copy">
                Help customers discover your business with a clear,
                professional online presence. We help organize and
                optimize your Google Business Profile information
                so local customers can find the details they need.
              </p>

              <div className="gbd-hero-actions">
                <Link to="/contact" className="gbd-primary-btn">
                  Improve My Business Profile <ArrowRight size={16} />
                </Link>
                <a href="#search-preview" className="gbd-secondary-btn">
                  Explore Demo <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="gbd-trust-row">
                <span><CheckCircle2 size={15} /> Business information setup</span>
                <span><CheckCircle2 size={15} /> Local profile optimization</span>
              </div>
            </div>

            <div id="search-preview">
              <GoogleSearchPreview />
            </div>
          </div>
        </section>

        <section className="gbd-section">
          <div className="gbd-container">
            <div className="gbd-section-heading">
              <SectionLabel>GOOGLE SEARCH PREVIEW</SectionLabel>
              <h2>
                Make Your Business <span>Easy to Discover</span>
              </h2>
              <p>
                A sample local business listing showing how essential
                business details and customer actions can be presented.
                Actual Google search appearances may vary.
              </p>
            </div>

            <div className="gbd-feature-strip">
              <div className="gbd-feature">
                <div className="gbd-feature-icon"><Phone size={20} /></div>
                <div>
                  <h3>Easy Contact</h3>
                  <p>Keep your business phone and contact information accurate and easy to find.</p>
                </div>
              </div>

              <div className="gbd-feature">
                <div className="gbd-feature-icon"><Clock3 size={20} /></div>
                <div>
                  <h3>Clear Business Hours</h3>
                  <p>Show your regular hours and update special opening hours when needed.</p>
                </div>
              </div>

              <div className="gbd-feature">
                <div className="gbd-feature-icon"><Globe size={20} /></div>
                <div>
                  <h3>Website & Directions</h3>
                  <p>Make your website, location and customer contact options easy to understand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gbd-section gbd-section-muted" id="dashboard">
          <div className="gbd-container">
            <div className="gbd-section-heading">
              <SectionLabel>BUSINESS PROFILE DASHBOARD</SectionLabel>
              <h2>
                Understand Your <span>Business Performance</span>
              </h2>
              <p>
                A visual example of business profile insights, customer
                interactions and an optimization checklist. The dashboard
                below uses illustrative data, not live account analytics.
              </p>
            </div>

            <BusinessDashboard />
          </div>
        </section>

        <section className="gbd-section" id="local-visibility">
          <div className="gbd-container">
            <div className="gbd-section-heading">
              <SectionLabel>LOCAL VISIBILITY</SectionLabel>
              <h2>
                Help Nearby Customers <span>Find Your Business</span>
              </h2>
              <p>
                Accurate location details, relevant business information
                and a well-maintained profile help customers understand
                where you operate and how to reach you.
              </p>
            </div>

            <LocalVisibility />
          </div>
        </section>

        <section className="gbd-section gbd-section-muted" id="services">
          <div className="gbd-container">
            <div className="gbd-section-heading">
              <SectionLabel>WHAT WE CAN HELP WITH</SectionLabel>
              <h2>
                Complete <span>Google Business Services</span>
              </h2>
              <p>
                Practical support for local businesses that want their
                online information to be accurate, useful and professional.
              </p>
            </div>

            <div className="gbd-services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="gbd-service-card" key={service.title}>
                    <div className="gbd-service-icon">
                      <Icon size={23} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <Link to="/contact" className="gbd-service-link">
                      Discuss this service <ChevronRight size={14} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="gbd-section">
          <div className="gbd-container">
            <div className="gbd-section-heading">
              <SectionLabel>OUR PROCESS</SectionLabel>
              <h2>
                From Setup to <span>Ongoing Improvement</span>
              </h2>
              <p>
                A simple, transparent workflow focused on your business
                details, customer needs and long-term profile maintenance.
              </p>
            </div>

            <div className="gbd-process-grid">
              {steps.map((step, index) => (
                <article className="gbd-process-card" key={step.number}>
                  <span className="gbd-process-number">{step.number}</span>
                  {index < steps.length - 1 && (
                    <ArrowUpRight className="gbd-process-arrow" size={19} />
                  )}
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="gbd-info-banner">
              <ShieldCheck size={18} />
              <span>
                <strong>Important:</strong> Google controls its verification
                and ranking systems. We can help prepare and optimize profile
                information, but verification approval, search placement and
                specific results cannot be guaranteed. Business owners must
                have the appropriate access and approve their business details.
              </span>
            </div>
          </div>
        </section>

        <section className="gbd-cta">
          <div className="gbd-container">
            <div className="gbd-cta-inner">
              <div className="gbd-cta-copy">
                <span>READY TO IMPROVE YOUR LOCAL PRESENCE?</span>
                <h2>Let's Put Your Business on the Map.</h2>
                <p>
                  Tell us about your business and goals. We'll discuss
                  the right Google Business Profile setup and optimization
                  approach for your needs.
                </p>
              </div>

              <Link to="/contact" className="gbd-cta-button">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="gbd-footer">
        <div className="gbd-container">
          <div className="gbd-footer-top">
            <Link to="/" className="gbd-brand">
              <div className="gbd-brand-mark">W</div>
              <div>
                <div className="gbd-brand-name">
                  Brand<span>By</span>Webeara
                </div>
                <div className="gbd-brand-tag">
                  YOUR BRAND. OUR CREATION.
                </div>
              </div>
            </Link>

            <div className="gbd-footer-links">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="gbd-footer-bottom">
            <span>© 2026 BrandByWebeara. All rights reserved.</span>
            <span>Google Business Profile demo · Sample business information</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GoogleBusinessDemo;
