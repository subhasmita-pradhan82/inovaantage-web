
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import "../mainComponent/styles/Header.css";
import { CgEditBlackPoint } from "react-icons/cg";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";
import { TbPointFilled } from "react-icons/tb";


// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const NAV_DATA = [
  {
    key: "home",
    label: "Home",
    href: "/",
    mega: false,
    items: [
      { label: "About", href: "/about", desc: "Who we are" },
      { label: "Core Values", href: "/core-values", desc: "What drives us" },
      { label: "Our Mission", href: "/mission",desc: "Purpose & vision" },
      { label: "Leaders", href: "/leaders", desc: "Meet the team" },
      { label: "CEO Vision", href: "/ceo-vision", desc: "Strategic direction" },
    ],
  },
  {
    key: "services",
    label: "Services",
    href: "#",
    mega: true,
    columns: [
      {
        heading: "Digital Transformation",
        items: [
          { label: "COTS Implementation", href: "/digital-transformation-services/implementation-cots", desc: "Enterprise software deployment" },
          { label: "Geospatial Services", href: "/digital-transformation-services/geospatial-services", desc: "Location intelligence solutions" },
        ],
      },
      {
        heading: "Technology",
        items: [
          { label: "Software Services", href: "/digital-transformation-services/software-services", desc: "Custom development & QA" },
          { label: "Managed Services", href: "/digital-transformation-services/managed-services", desc: "End-to-end IT management" },
        ],
      },
    ],
  },
  {
  key: "products",
  label: "Products",
  href: "#",
  mega: true,
  columns: [
    {
      heading: "Field Operations",
      items: [
        { label: "ConduitPro", href: "/services#ConduitPro", desc: "Network conduit management" },
        { label: "Energize & Deenergize", href: "/services#energize", desc: "Power switching workflows" },
        { label: "UNGRID", href: "/services#rUNr", desc: "Utility network intelligence platform" },
      ],
    },
    {
      heading: "Enterprise Tools",
      items: [
        { label: "Fueerza", href: "/services#fueerza", desc: "Field force automation" },
        { label: "rUNr", href: "/services#rUNr", desc: "Route optimization engine" },
        { label: "SLD", href: "/services#sld", desc: "Single line diagram tool" },
      ],
    },
  ],
},
  {
    key: "industries",
    label: "Industries",
    href: "#",
    mega: false,
    items: [
      { label: "Utilities", href: "/utilities", desc: "Energy & power sectors" },
      { label: "Telecom", href: "/telecom", desc: "Communications infrastructure" },
      { label: "Infrastructures", href: "/infrastructures", desc: "Civil & civil engineering" },
    ],
  },
  {
    key: "blog",
    label: "Blog",
    href: "#",
    mega: false,
    items: [
      { label: "Latest Posts", href: "/blog", desc: "News & insights" },
      { label: "Case Studies", href: "/blog/case-studies", desc: "Real-world results" },
      { label: "Whitepapers", href: "/blog/whitepapers", desc: "Technical deep-dives" },
    ],
  },
  {
    key: "gallery",
    label: "Gallery",
    href: "#",
    mega: false,
    items: [
      { label: "Projects", href: "/gallery", desc: "Our work in action" },
      { label: "Events", href: "/gallery/events", desc: "Company milestones" },
    ],
  },
  {
    key: "contact",
    label: "Contact",
    href: "#",
    mega: false,
    items: [
      { label: "Our Offices", href: "/our-offices", desc: "Find us globally" },
      { label: "Careers", href: "/careers", desc: "Join our team" },
    ],
  },
];

// ─── MAGNETIC EFFECT HOOK ─────────────────────────────────────────────────────
function useMagnetic(strength = 0.4) {
  const ref = useRef(null);
  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    gsap.to(ref.current, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
  }, [strength]);
  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  }, []);
  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────
const CTAButton = () => {
  const mag = useMagnetic(0.3);
  return (
    <Link to="/contact" className="cta-btn" aria-label="Get Started" {...mag}>
      <span className="cta-btn__text">Get Started</span>
      <span className="cta-btn__arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
        </svg>
      </span>
      <span className="cta-btn__glow" aria-hidden="true" />
   </Link>
  );
};

// ─── MEGA MENU ────────────────────────────────────────────────────────────────
const MegaMenu = ({ item, isOpen, menuRef }) => (
  <div
    ref={menuRef}
    className={`mega-menu ${isOpen ? "is-open" : ""}`}
    role="region"
    aria-label={`${item.label} submenu`}
  >
    <div className="mega-menu__inner">
      {item.columns.map((col, ci) => (
        <div key={ci} className="mega-menu__col">
          <p className="mega-menu__heading">{col.heading}</p>
          {col.items.map((sub, si) => (
            // <a key={si} href={sub.href} className="mega-menu__link" tabIndex={isOpen ? 0 : -1}>
            <Link key={si} to={sub.href} className="mega-menu__link" tabIndex={isOpen ? 0 : -1}>
              <span className="mega-menu__icon" aria-hidden="true">{sub.icon}</span>
              <span className="mega-menu__link-body">
                <span className="mega-menu__link-label">{sub.label}</span>
                <span className="mega-menu__link-desc">{sub.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>
);

// ─── SIMPLE DROPDOWN ──────────────────────────────────────────────────────────
const SimpleDropdown = ({ item, isOpen, menuRef }) => (
  <div
    ref={menuRef}
    className={`simple-drop ${isOpen ? "is-open" : ""}`}
    role="menu"
    aria-label={`${item.label} submenu`}
  >
    {item.items.map((sub, i) => (
      <Link key={i} to={sub.href} className="simple-drop__link"role="menuitem" tabIndex={isOpen ? 0 : -1}>
        <span className="simple-drop__icon" aria-hidden="true">{sub.icon}</span>
        <span className="simple-drop__body">
          <span className="simple-drop__label">{sub.label}</span>
          <span className="simple-drop__desc">{sub.desc}</span>
        </span>
     </Link>
    ))}
  </div>
);

// ─── NAV ITEM ─────────────────────────────────────────────────────────────────
const NavItem = ({ item, isOpen, onToggle }) => {
  const menuRef = useRef(null);
  const itemRef = useRef(null);
  const underlineRef = useRef(null);
  const hasDropdown = (item.items && item.items.length) || (item.columns && item.columns.length);

  // Animate open/close
  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      gsap.fromTo(menuRef.current,
  { opacity: 0, y: -20, scale: 0.95 },
  { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "expo.out" }
);
      // Stagger children
      const links = menuRef.current.querySelectorAll(".mega-menu__link, .simple-drop__link");
      gsap.fromTo(links,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.25, stagger: 0.05, ease: "power2.out", delay: 0.08 }
      );
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -8, scale: 0.97, duration: 0.2, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <li
      ref={itemRef}
      className={`nav-item ${isOpen ? "nav-item--open" : ""}`}
      // onMouseEnter={handleEnter}
      // onMouseLeave={handleLeave}
      role="none"
    >
      <button
        className="nav-item__btn"
        aria-haspopup={hasDropdown ? "true" : undefined}
        aria-expanded={hasDropdown ? isOpen : undefined}
        onClick={() => onToggle(item.key)}
      >
        <span className="nav-item__label">{item.label}</span>
        {hasDropdown && (
          <span className={`nav-item__chev ${isOpen ? "nav-item__chev--up" : ""}`} aria-hidden="true">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        )}
        <span ref={underlineRef} className="nav-item__underline" aria-hidden="true" />
      </button>

      {hasDropdown && (
        item.mega
          ? <MegaMenu item={item} isOpen={isOpen} menuRef={menuRef} />
          : <SimpleDropdown item={item} isOpen={isOpen} menuRef={menuRef} />
      )}
    </li>
  );
};

// ─── MOBILE MENU ──────────────────────────────────────────────────────────────
const MobileMenu = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (isOpen) {
      gsap.fromTo(overlayRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.45, ease: "power3.out" }
      );
      gsap.fromTo(linksRef.current.filter(Boolean),
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.2 }
      );
    } else {
      gsap.to(overlayRef.current, { x: "100%", duration: 0.35, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className={`mobile-overlay ${isOpen ? "mobile-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="mobile-overlay__header">
        <Link to="/" className="mobile-logo">
          <img src="/assets/dark_logo.png" alt="Inovaantage" style={{ width: 160 }}
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }} />
          <span style={{ display: "none", fontWeight: 900, fontSize: 22, color: "#fff", fontStyle: "italic" }}>Inovaantage</span>
        </Link>
        <button className="mobile-close" onClick={onClose} aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="mobile-nav">
        {NAV_DATA.map((item, i) => {
          const subs = item.items || (item.columns ? item.columns.flatMap(c => c.items) : []);
          return (
            <div key={item.key} ref={el => linksRef.current[i] = el} className="mobile-group">
              <button
                className="mobile-group__btn"
                onClick={() => setExpanded(expanded === item.key ? null : item.key)}
                aria-expanded={expanded === item.key}
              >
                {item.label}
                {subs.length > 0 && (
                  <span className={`mobile-group__chev ${expanded === item.key ? "mobile-group__chev--up" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                )}
              </button>
              {subs.length > 0 && expanded === item.key && (
                <div className="mobile-group__subs">
                  {subs.map((sub, si) => (
                    // <a key={si} href={sub.href} className="mobile-sub" onClick={onClose}>
                    <Link key={si} to={sub.href} className="mobile-sub" onClick={onClose}>
                      <span className="mobile-sub__icon">{sub.icon}</span>
                      <span>{sub.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <Link to="/contact" className="mobile-cta" onClick={onClose}>Get Started →</Link>
      </nav>
    </div>
  );
};

// ─── HEADER ───────────────────────────────────────────────────────────────────
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const headerRef = useRef(null);
  const navListRef = useRef(null);
  const glowRef = useRef(null);

  // Scroll behaviour
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        gsap.to(headerRef.current, {
          y: -100,
          opacity: 0.95,
          scale: 1,
          duration: 0.6,
          ease: "expo.out",
        });
      } else {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scale: 1,
          ease: "expo.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entry animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
    const items = navListRef.current?.querySelectorAll(".nav-item__btn");
    if (items) {
      tl.fromTo(items,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, []);

  // Animated gradient orb on glow bar
  useEffect(() => {
    if (!glowRef.current) return;
    gsap.to(glowRef.current, {
      backgroundPosition: "200% center",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const handleToggle = (key) => setActiveMenu(prev => prev === key ? null : key);
  const handleHover = (key) => setActiveMenu(key);
  const handleLeave = () => { };

  // Close on outside click
  useEffect(() => {
    const close = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setActiveMenu(null); setMobileOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
        role="banner"
      >
        {/* Animated glow bar */}
        <div ref={glowRef} className="header-glow-bar" aria-hidden="true" />

        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="Inovaantage Home">
            <img
              src="/assets/dark_logo.png"
              alt="Inovaantage"
              style={{ width: 200 }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <span className="header-logo__fallback" style={{ display: "none" }}>
              <span className="header-logo__text">Inovaantage</span>
              <span className="header-logo__dot" aria-hidden="true" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav" role="navigation" aria-label="Main navigation">
            <ul ref={navListRef} className="nav-list" role="menubar">
              {NAV_DATA.map((item) => (
                <NavItem
                  key={item.key}
                  item={item}
                  isOpen={activeMenu === item.key}
                  onToggle={handleToggle}
                />
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="header-right">
            <CTAButton />
            <button
              className={`hamburger ${mobileOpen ? "hamburger--open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className="hamburger__line" />
              <span className="hamburger__line" />
              <span className="hamburger__line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Backdrop */}
      {activeMenu && (
        <div
          className="nav-backdrop"
          onClick={() => setActiveMenu(null)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
