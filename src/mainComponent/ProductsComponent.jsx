import React, { useEffect, useRef, useState } from 'react';
import Header from '../subComponent/Header';
import Footer from '../subComponent/Footer';
import '../mainComponent/styles/products.css';

const products = [
  {
    id: 'conduitpro',
    name: 'ConduitPro',
    category: 'Field Operations',
    tagline: 'Network Conduit Management',
    description:
      'ConduitPro streamlines the complete lifecycle of underground and overhead conduit infrastructure. From design to maintenance, field crews get real-time visibility into conduit occupancy, routing, and capacity — eliminating guesswork on the ground.',
    features: [
      'Real-time conduit occupancy tracking',
      'GIS-integrated route planning',
      'Mobile-first field workflows',
      'Automated conflict detection',
      'Asset lifecycle reporting',
    ],
    icon: '🔌',
    accent: '#F37021',
  },
  {
    id: 'energize-deenergize',
    name: 'Energize & De-energize',
    category: 'Field Operations',
    tagline: 'Power Switching Workflows',
    description:
      'A guided, safety-first solution for managing high-voltage switching operations. Operators follow structured switching sequences with built-in safety interlocks, reducing human error during energize and de-energize events across the power grid.',
    features: [
      'Step-by-step switching sequences',
      'Safety interlock enforcement',
      'Digital permit-to-work integration',
      'Real-time crew coordination',
      'Audit trail & compliance logs',
    ],
    icon: '⚡',
    accent: '#E2780E',
  },
  {
    id: 'UNGRID',
    name: 'UNGRID',
    category: 'Field Operations',
    tagline: 'Utility Network Intelligence Platform',
    description:
      'UNGRID is an intelligent platform that delivers end-to-end visibility across utility networks. By fusing geospatial data with real-time operational feeds, UNGRID empowers planners and operators to make faster, smarter decisions about network health and capacity.',
    features: [
      'Unified network data layer',
      'Predictive fault analytics',
      'Capacity planning dashboards',
      'Automated outage impact analysis',
      'Multi-utility asset management',
    ],
    icon: '🌐',
    accent: '#0057A3',
  },
  {
    id: 'fueerza',
    name: 'Fueerza',
    category: 'Enterprise Tools',
    tagline: 'Field Force Automation',
    description:
      'Fueerza connects dispatch to doorstep — orchestrating field technicians, work orders, and job progress in one intelligent platform. Dynamic scheduling adapts to real-time conditions, ensuring SLAs are met while operational costs are kept lean.',
    features: [
      'AI-powered scheduling & dispatch',
      'Real-time field agent tracking',
      'Dynamic work order management',
      'Customer communication automation',
      'Performance analytics dashboard',
    ],
    icon: '⚙️',
    accent: '#F37021',
  },
  {
    id: 'rUNr',
    name: 'rUNr',
    category: 'Enterprise Tools',
    tagline: 'Route Optimization Engine',
    description:
      'rUNr calculates the most efficient routes for field teams and delivery operations using advanced algorithms. It factors in live traffic, job priority, crew skill sets, and equipment availability — saving hours every day across large fleets.',
    features: [
      'Multi-constraint route optimization',
      'Live traffic & incident adaptation',
      'Fleet capacity management',
      'Last-mile delivery intelligence',
      'Carbon footprint reporting',
    ],
    icon: '🗺️',
    accent: '#E2780E',
  },
  {
    id: 'sld',
    name: 'SLD',
    category: 'Enterprise Tools',
    tagline: 'Single Line Diagram Tool',
    description:
      'SLD digitizes the creation, versioning, and real-time synchronization of single line diagrams for electrical networks. Engineers can annotate live network states directly on diagrams, and changes propagate instantly to all stakeholders.',
    features: [
      'Auto-generated SLD from GIS data',
      'Real-time state synchronization',
      'Version control & change history',
      'Collaborative annotation tools',
      'Export to IEC & IEEE standards',
    ],
    icon: '📐',
    accent: '#0057A3',
  },
];

const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), index * 100);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`product-card ${revealed ? 'revealed' : ''}`}
      style={{ '--accent': product.accent }}
    >
      <div className="product-card__header">
        <div className="product-card__icon-wrap">
          <span className="product-card__icon">{product.icon}</span>
        </div>
        <div className="product-card__meta">
          <span className="product-card__category">{product.category}</span>
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__tagline">{product.tagline}</p>
        </div>
      </div>

      <p className="product-card__desc">{product.description}</p>

      <ul className="product-card__features">
        {product.features.map((f) => (
          <li key={f}>
            <span className="feature-dot" />
            {f}
          </li>
        ))}
      </ul>

      <div className="product-card__footer">
        <a href={`/products/${product.id}`} className="product-card__cta">
          Learn More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 200);
  }, []);

  const fieldOps = products.filter((p) => p.category === 'Field Operations');
  const enterprise = products.filter((p) => p.category === 'Enterprise Tools');

  return (
    <>
      <Header />
      <main className="products-page">

        {/* ── HERO ── */}
        <section className={`products-hero ${heroVisible ? 'visible' : ''}`} ref={heroRef}>
          <div className="products-hero__bg" aria-hidden="true">
            <div className="hero-orb hero-orb--1" />
            <div className="hero-orb hero-orb--2" />
            <div className="hero-grid" />
          </div>
          <div className="products-hero__content">
            <span className="products-hero__eyebrow">Our Product Suite</span>
            <h1 className="products-hero__title">
              Purpose-Built for <br />
              <span className="gradient-text">Utility &amp; Field Operations</span>
            </h1>
            <p className="products-hero__sub">
              Six specialised products engineered to modernise the way utilities, telecoms,
              and infrastructure companies plan, operate, and maintain their networks.
            </p>
            <div className="products-hero__ctas">
              <a href="/contact" className="btn-primary-hero">Request a Demo</a>
              <a href="#field-ops" className="btn-ghost-hero">Explore Products ↓</a>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="stats-bar">
          {[
            { value: '6', label: 'Products' },
            { value: '20+', label: 'Countries Deployed' },
            { value: '200+', label: 'Enterprise Clients' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((s) => (
            <div className="stat-item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── FIELD OPS ── */}
        <section className="products-section" id="field-ops">
          <div className="products-section__header">
            <div className="section-pill">Field Operations</div>
            <h2>Control &amp; Visibility in the Field</h2>
            <p>Products designed for crew safety, network awareness and infrastructure precision.</p>
          </div>
          <div className="products-grid">
            {fieldOps.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── ENTERPRISE ── */}
        <section className="products-section products-section--alt">
          <div className="products-section__header">
            <div className="section-pill">Enterprise Tools</div>
            <h2>Efficiency at Enterprise Scale</h2>
            <p>Intelligent automation, optimisation and diagramming tools for operations teams.</p>
          </div>
          <div className="products-grid">
            {enterprise.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="products-cta">
          <div className="products-cta__inner">
            <h2>Ready to transform your operations?</h2>
            <p>Our team will tailor the right product combination for your organisation's needs.</p>
            <div className="products-cta__btns">
              <a href="/contact" className="btn-primary-hero">Talk to an Expert</a>
              <a href="/digital-transformation-services/implementation-cots" className="btn-ghost-hero">View Services</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
