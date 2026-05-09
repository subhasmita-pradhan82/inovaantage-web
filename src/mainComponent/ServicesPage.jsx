import React, { useState, useEffect, useRef } from "react";
import Header from "../subComponent/Header";
import Footer from "../subComponent/Footer";
import "./styles/Services.css";

// ── DATA ─────────────────────────────────────────────────────────────────────

const OFFERINGS = [
  {
    id: "geospatial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: "Geospatial Services",
    tag: "Location Intelligence",
    headline: "Modern, mission-critical geospatial solutions",
    subline: "For utilities, telecoms, and infrastructure operators — built for cloud-first platforms, data-driven decision-making, and zero operational disruption.",
    capabilities: [
      {
        title: "ArcGIS Pro & Utility Network Migration",
        desc: "Structured, low-risk migration from legacy GIS and Geometric Network to Esri ArcGIS Pro and Utility Network with near-zero data loss.",
        impact: "Faster migrations, reduced operational risk, future-ready GIS platforms",
      },
      {
        title: "Geospatial Data Management",
        desc: "Enterprise-grade management of spatial data ensuring accuracy, usability, and long-term scalability with governance and auditability built-in.",
        impact: "Trusted data, improved decision-making, and reduced data risk",
      },
      {
        title: "Survey & Field Data Capture",
        desc: "High-accuracy field data capture using GNSS, LiDAR, UAV, and mobile techniques designed for direct system ingestion — no manual rework.",
        impact: "Reliable field data, reduced rework, and faster asset onboarding",
      },
      {
        title: "GIS Development & System Implementation",
        desc: "Custom GIS applications (web, desktop, mobile) with utility-specific workflows, ERP/ADMS/OMS integration, and performance tuning.",
        impact: "GIS platforms that users adopt, trust, and rely on daily",
      },
      {
        title: "Advanced Geospatial Analytics",
        desc: "Spatial analytics converting location data into operational and strategic insight — enabling smarter planning, risk management, and network optimisation.",
        impact: "Actionable location intelligence at enterprise scale",
      },
    ],
  },
  {
    id: "cots",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: "COTS Implementation",
    tag: "Enterprise Platforms",
    headline: "Enterprise-grade implementation of mission-critical commercial platforms",
    subline: "Delivered with confidence, control, and continuity — bridging the gap between vendor software and real-world operational needs.",
    capabilities: [
      {
        title: "Workforce Management (WFM) Systems",
        desc: "End-to-end WFM implementation and configuration — designed around utility and telecom field realities, not generic workflows, with strong adoption focus.",
        impact: "Improved productivity, better field utilisation, higher service reliability",
      },
      {
        title: "Operations Support Systems (OSS)",
        desc: "OSS configuration for network monitoring, fault management, service provisioning, and integration with BSS, GIS, inventory, and network platforms.",
        impact: "Improved network visibility, faster service rollout, reduced operational cost",
      },
      {
        title: "Business Support Systems (BSS)",
        desc: "Billing, revenue, and customer management implementation with end-to-end view from service activation to revenue realisation.",
        impact: "Reduced revenue leakage, improved billing accuracy, enhanced customer trust",
      },
      {
        title: "SCADA Systems",
        desc: "Secure, resilient SCADA deployment with IT/OT integration, real-time monitoring, and security-first compliance hardening.",
        impact: "Increased reliability, improved operational control, reduced downtime",
      },
      {
        title: "Advanced Distribution Management Systems (ADMS)",
        desc: "ADMS configuration for real-time monitoring and control, integrated with SCADA, DERMS, GIS, and outage systems.",
        impact: "Smarter, more resilient distribution network operations",
      },
    ],
  },
  {
    id: "software",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: "Software Services",
    tag: "Engineering Excellence",
    headline: "Enterprise-grade software for mission-critical operations",
    subline: "Deep domain expertise and strong engineering foundation helping organisations reduce risk, accelerate digital transformation, and maximise technology ROI.",
    capabilities: [
      {
        title: "Custom Software Development",
        desc: "Design and build of enterprise applications using modern, secure, scalable architectures with domain-led engineering and long-term maintainability focus.",
        impact: "Software that fits your business, scales with growth, and stands the test of time",
      },
      {
        title: "Digital Transformation & Modernisation",
        desc: "End-to-end transformation of legacy systems into cloud-native or hybrid platforms — driven by business continuity, not just technology refresh.",
        impact: "Faster innovation, reduced technical debt, future-ready digital platforms",
      },
      {
        title: "GIS & Utility Network Services",
        desc: "Specialist implementation, migration, and optimisation of ESRI Utility Network and GIS platforms with proprietary tooling for complex network data.",
        impact: "Trusted, regulation-ready GIS systems supporting operational and planning decisions",
      },
      {
        title: "Data Migration, Integration & ETL",
        desc: "Secure, automated, high-accuracy data migration using FME and custom frameworks — automation-first with near-zero data loss.",
        impact: "Confidence in data integrity, faster migrations, reduced manual effort",
      },
      {
        title: "Software Upgrade & Cutover Assurance",
        desc: "Structured planning and execution of software upgrades and system cutovers ensuring minimal downtime and zero disruption to critical operations.",
        impact: "Predictable, risk-controlled cutovers with zero operational disruption",
      },
    ],
  },
  {
    id: "managed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Managed Services",
    tag: "Operational Assurance",
    headline: "Operate with confidence. Scale with control.",
    subline: "Trusted operational partnership — taking ownership of complex IT, data, and platform operations to ensure stability, security, performance, and continuous optimisation.",
    capabilities: [
      {
        title: "Cloud Managed Services",
        desc: "Comprehensive cloud operations with 24×7 monitoring, FinOps, disaster recovery, and compliance — built for mission-critical regulated environments.",
        impact: "Lower cloud risk, predictable costs, improved resilience, confident scale",
      },
      {
        title: "DevOps Managed Services",
        desc: "CI/CD pipeline management, Infrastructure as Code, containerisation with Docker and Kubernetes — designed for enterprise-scale, regulated systems.",
        impact: "Faster time-to-market, improved release stability, higher engineering productivity",
      },
      {
        title: "Service Desk Managed Services",
        desc: "24×7 multi-channel IT support with incident and problem management, root-cause analysis, and performance reporting — enterprise-grade, not basic helpdesk.",
        impact: "Reduced downtime, improved user satisfaction, predictable IT operations",
      },
      {
        title: "End-to-End (E2E) Managed Services",
        desc: "Holistic ownership across infrastructure, applications, data, security, and operations — one partner, one operating model, complete accountability.",
        impact: "Business continuity, resilience, and scale without fragmented vendor management",
      },
    ],
  },
];

const PRODUCTS = [
  {
    id: "rUNr",
    name: "rUNr®",
    tagline: "Automated Utility Network Migration Platform",
    badge: "99.99% accuracy",
    color: "#E2780E",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    desc: "Inovaantage's proprietary enterprise-grade GIS data migration platform, purpose-built to automate migration from legacy ESRI Geometric Network into ESRI Utility Network with near-perfect accuracy.",
    highlights: ["70–90% reduction in migration timelines", "Elimination of manual correction teams", "Repeatable, auditable, production-ready outputs", "Multi-platform: Geometric Network, GE Smallworld, bespoke GIS"],
    outcomes: "Migrate with certainty. Operate with confidence.",
  },
  {
    id: "ConduitPro",
    name: "ConduitPro®",
    tagline: "Intelligent Conduit & Utility Network Management",
    badge: "ESRI Native",
    color: "#0057A3",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    desc: "Purpose-built conduit and duct network management platform solving one of the most persistent challenges in utility and telecom networks — accurate, usable, scalable conduit data within the ESRI Utility Network.",
    highlights: ["Multi-level conduit hierarchy management", "Association & containment intelligence", "Utility Network rule enforcement", "Data quality validation & migration support"],
    outcomes: "Master conduit complexity. Unlock Utility Network value.",
  },
  {
    id: "energize",
    name: "Energize & Deenergize",
    tagline: "GIS-Based Outage Management System",
    badge: "Real-Time OMS",
    color: "#00b4ff",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    desc: "Cutting-edge GIS-based Outage Management System empowering electrical distribution utilities to monitor, manage, and restore electrical outages efficiently — enhancing reliability and customer satisfaction.",
    highlights: ["GIS-integrated real-time outage tracking", "Automated detection & smart notifications", "Fault analysis & load management", "Crew dispatch & workflow optimisation"],
    outcomes: "Respond faster. Operate smarter. Deliver exceptional service.",
  },
  {
    id: "fueerza",
    name: "Fueerza",
    tagline: "Intelligent Field Force Management",
    badge: "Mobile-First",
    color: "#10b981",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    desc: "Powerful Field Force Management System enabling organisations to plan, track, and optimise field activities in real-time — with mobile access, offline capabilities, and customisable workflows.",
    highlights: ["Task planning & automated scheduling", "Real-time GPS tracking & monitoring", "Mobile access with offline capabilities", "Customisable workflows & data capture"],
    outcomes: "Manage field workforce smarter, faster, more efficiently.",
  },
  {
    id: "sld",
    name: "SLD Platform",
    tagline: "Electrical Schematic Management",
    badge: "GIS-Synced",
    color: "#8b5cf6",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="15" y1="3" x2="15" y2="21"/>
      </svg>
    ),
    desc: "Intelligent Electrical Schematic Platform enabling creation, management, and visualisation of Single Line Diagrams with full GIS synchronisation — bridging schematic design and spatial data.",
    highlights: ["GIS-integrated SLD synchronisation", "Intelligent automated diagramming", "Real-time updates & version control", "Advanced network visualisation & analysis"],
    outcomes: "Accurate, GIS-synced SLDs for smarter network operations.",
  },
];

const VERTICALS = [
  {
    id: "utility",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    name: "Utilities",
    headline: "Digital Transformation for Utility Operators",
    subline: "Empowering utility companies to embrace digital transformation, operational efficiency, and sustainable growth.",
    solutions: [
      { title: "Home Energy Management (HEMS)", desc: "Customer dashboards, innovation labs, and analytics driving sustainable energy adoption and data-driven energy management." },
      { title: "Supplier Management System (SMS)", desc: "Centralised supplier oversight automating procurement, performance monitoring, and compliance for reduced operational risk." },
      { title: "Smart Billing Solutions", desc: "Automated billing, customisable models, and real-time insights — proven for utilities with 8M+ customers." },
      { title: "Network Management — DialVaantage", desc: "SCADA/HMI integration, IoT connectivity, and remote meter reading for improved network uptime and accuracy." },
      { title: "Cybersecurity Solutions", desc: "Risk assessment, threat detection, incident recovery, and compliance to safeguard critical utility operations." },
      { title: "Smart Meter Rollout & AMI Integration", desc: "Siemens MDMS & Oracle ESB integration supporting billing, energy accounting, demand response, and customer care." },
      { title: "GIS & Electrical Schematic Solutions", desc: "Spatial intelligence and SLD management enabling accurate network planning, design, and operations." },
    ],
    stats: [{ val: "8M+", label: "Customers served" }, { val: "6", label: "Countries deployed" }, { val: "99.9%", label: "Uptime delivered" }],
  },
  {
    id: "telecom",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
        <circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
      </svg>
    ),
    name: "Telecom",
    headline: "Modernising Telecom Network Operations",
    subline: "Empowering telecom operators to modernise network operations, optimise asset management, and deliver exceptional customer experiences.",
    solutions: [
      { title: "Property & Network Asset Management", desc: "Centralised asset repository with workflow automation and seamless IT integration — from acquisition to decommissioning." },
      { title: "OSS/BSS Integration", desc: "Unified operations and business support systems with visual network representation, intelligent cable management, and service lifecycle automation." },
      { title: "AssetVaantage Platform", desc: "In-house built telecom asset management with proactive maintenance scheduling, emergency preparedness, and cloud-ready scalability." },
      { title: "Inventory Management System (IMS)", desc: "Real-time stock visibility, automated replenishment, and lifecycle management across warehouses and field locations." },
      { title: "Geographic Information Management (GIMS)", desc: "Interactive network maps integrating GIS with OSS/BSS and AssetVaantage for location-based planning and real-time field updates." },
    ],
    stats: [{ val: "5G", label: "Ready architecture" }, { val: "360°", label: "Network visibility" }, { val: "Zero", label: "Vendor lock-in" }],
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeOffering, setActiveOffering] = useState("geospatial");
  const [activeVertical, setActiveVertical] = useState("utility");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, e.target.dataset.section]));
          }
        });
      },
      { threshold: 0.08 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reg = (id) => (el) => { sectionRefs.current[id] = el; };
  const vis = (id) => visibleSections.has(id);

  const activeOfferingData = OFFERINGS.find((o) => o.id === activeOffering);
  const activeVerticalData = VERTICALS.find((v) => v.id === activeVertical);

  return (
    <>
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="svc-hero__bg">
          <div className="svc-hero__grid" />
          <div className="svc-hero__orb svc-hero__orb--1" />
          <div className="svc-hero__orb svc-hero__orb--2" />
          <div className="svc-hero__orb svc-hero__orb--3" />
        </div>
        <div className="svc-container svc-hero__inner">
          <div className="svc-hero__eyebrow">Services & Solutions</div>
          <h1 className="svc-hero__title">
            Powering Digital Infrastructure<br />
            <span className="svc-hero__accent">Across Every Domain</span>
          </h1>
          <p className="svc-hero__sub">
            From geospatial intelligence and COTS implementation to managed cloud operations
            and field force automation — Inovaantage delivers end-to-end technology solutions
            for utilities, telecoms, and infrastructure operators worldwide.
          </p>
          <div className="svc-hero__pills">
            {["Geospatial", "COTS", "Software", "Managed Services", "Products", "Utilities", "Telecom"].map((t) => (
              <span key={t} className="svc-pill">{t}</span>
            ))}
          </div>
        </div>
        <div className="svc-hero__scroll-hint">
          <span>Explore</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── OFFERINGS (tabbed) ────────────────────────────────────────── */}
      <section
        className={`svc-section svc-offerings ${vis("offerings") ? "svc-visible" : ""}`}
        ref={reg("offerings")} data-section="offerings"
      >
        <div className="svc-container">
          <div className="svc-section-header">
            <span className="svc-chip svc-chip--orange">Digital Offerings</span>
            <h2>Our Service Portfolio</h2>
            <p>Four pillars of deep domain expertise, engineered for complexity</p>
          </div>

          {/* Tab Nav */}
          <div className="svc-tab-nav">
            {OFFERINGS.map((o) => (
              <button
                key={o.id}
                className={`svc-tab-btn ${activeOffering === o.id ? "svc-tab-btn--active" : ""}`}
                onClick={() => setActiveOffering(o.id)}
              >
                <span className="svc-tab-btn__icon">{o.icon}</span>
                <span>{o.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="svc-tab-content" key={activeOffering}>
            <div className="svc-tab-header">
              <div>
                <span className="svc-chip svc-chip--blue">{activeOfferingData.tag}</span>
                <h3 className="svc-tab-title">{activeOfferingData.headline}</h3>
                <p className="svc-tab-sub">{activeOfferingData.subline}</p>
              </div>
            </div>
            <div className="svc-capabilities">
              {activeOfferingData.capabilities.map((cap, i) => (
                <div className="svc-cap-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="svc-cap-card__num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="svc-cap-card__body">
                    <h4>{cap.title}</h4>
                    <p>{cap.desc}</p>
                    <div className="svc-cap-card__impact">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {cap.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
      <section
        className={`svc-section svc-products ${vis("products") ? "svc-visible" : ""}`}
        ref={reg("products")} data-section="products"
      >
        <div className="svc-container">
          <div className="svc-section-header">
            <span className="svc-chip svc-chip--orange">Proprietary Products</span>
            <h2>Purpose-Built Technology</h2>
            <p>Inovaantage-engineered platforms solving the hardest problems in utility and telecom networks</p>
          </div>

          <div className="svc-products-grid">
            {PRODUCTS.map((product, i) => (
              <div
               id={product.id}
  className="svc-product-card"
                key={product.id}
                style={{ "--p-color": product.color, animationDelay: `${i * 0.1}s` }}
              >
                <div className="svc-product-card__top">
                  <div className="svc-product-card__icon">{product.icon}</div>
                  <span className="svc-product-card__badge">{product.badge}</span>
                </div>
                <h3 className="svc-product-card__name">{product.name}</h3>
                <p className="svc-product-card__tagline">{product.tagline}</p>
                <p className="svc-product-card__desc">{product.desc}</p>
                <ul className="svc-product-card__list">
                  {product.highlights.map((h, j) => (
                    <li key={j}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="svc-product-card__outcome">
                  <em>"{product.outcomes}"</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERTICALS ─────────────────────────────────────────────────── */}
      <section
        className={`svc-section svc-verticals ${vis("verticals") ? "svc-visible" : ""}`}
        ref={reg("verticals")} data-section="verticals"
      >
        <div className="svc-container">
          <div className="svc-section-header">
            <span className="svc-chip svc-chip--blue">Industry Verticals</span>
            <h2>Deep Sector Expertise</h2>
            <p>Tailored solutions for the industries where reliability and precision are non-negotiable</p>
          </div>

          {/* Vertical Toggle */}
          <div className="svc-vertical-toggle">
            {VERTICALS.map((v) => (
              <button
                key={v.id}
                className={`svc-vtoggle-btn ${activeVertical === v.id ? "svc-vtoggle-btn--active" : ""}`}
                onClick={() => setActiveVertical(v.id)}
              >
                <span className="svc-vtoggle-btn__icon">{v.icon}</span>
                {v.name}
              </button>
            ))}
          </div>

          {/* Vertical Content */}
          <div className="svc-vertical-content" key={activeVertical}>
            <div className="svc-vertical-intro">
              <div className="svc-vertical-intro__text">
                <h3>{activeVerticalData.headline}</h3>
                <p>{activeVerticalData.subline}</p>
                <div className="svc-vertical-stats">
                  {activeVerticalData.stats.map((s, i) => (
                    <div key={i} className="svc-stat">
                      <span className="svc-stat__val">{s.val}</span>
                      <span className="svc-stat__label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="svc-vertical-solutions">
              {activeVerticalData.solutions.map((sol, i) => (
                <div className="svc-sol-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="svc-sol-card__dot" />
                  <div>
                    <h4>{sol.title}</h4>
                    <p>{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INOVAANTAGE ───────────────────────────────────────────── */}
      <section
        className={`svc-section svc-why ${vis("why") ? "svc-visible" : ""}`}
        ref={reg("why")} data-section="why"
      >
        <div className="svc-container">
          <div className="svc-section-header">
            <span className="svc-chip svc-chip--orange">Why Inovaantage</span>
            <h2>The Inovaantage Difference</h2>
            <p>What sets us apart in every engagement</p>
          </div>
          <div className="svc-why-grid">
            {[
              {
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                title: "Mission-Critical Focus",
                desc: "We operate in environments where failure is not an option. Every engagement is designed for reliability, resilience, and regulatory confidence.",
              },
              {
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
                title: "Deep Domain Expertise",
                desc: "Decades of combined experience in utilities, telecoms, and infrastructure means we understand your operational reality — not just the technology.",
              },
              {
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
                title: "Automation-First Delivery",
                desc: "Proprietary platforms like rUNr® and ConduitPro® demonstrate our belief in repeatable, auditable, industrialised solutions — not manual approaches.",
              },
              {
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                title: "Global Delivery Capability",
                desc: "Offices across USA, India, Singapore, Malaysia, Philippines, Australia, and UK — we operate at global scale with local expertise.",
              },
              {
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "Outcome Accountability",
                desc: "We don't just deliver systems — we assure outcomes. Business impact, user adoption, and operational success are built into every engagement.",
              },
              {
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
                title: "Proprietary Innovation",
                desc: "Inovaantage builds and owns its technology — rUNr®, ConduitPro®, Fueerza, AssetVaantage, GIMS — giving clients sustainable competitive advantage.",
              },
            ].map((item, i) => (
              <div className="svc-why-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="svc-why-card__icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className={`svc-cta ${vis("cta") ? "svc-visible" : ""}`}
        ref={reg("cta")} data-section="cta"
      >
        <div className="svc-cta__glow" />
        <div className="svc-container svc-cta__inner">
          <h2>Ready to Transform Your Operations?</h2>
          <p>Talk to our experts about your specific challenges — we'll design a solution that fits.</p>
          <div className="svc-cta__actions">
            <a href="/contact" className="svc-btn-primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="/products" className="svc-btn-ghost">
              Explore Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
