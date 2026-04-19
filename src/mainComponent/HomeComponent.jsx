import React, { useEffect, useRef, useState } from 'react';
import Header from '../subComponent/Header';
import Footer from '../subComponent/Footer';
import Partners from '../subComponent/Partners';
import LeadersSection from '../subComponent/LeadersSection';
import DigitalTransformation from '../subComponent/DigitalTransformations';
import UltraPremiumMap from '../subComponent/UltraPremiumMap';
import CoreValues from '../subComponent/CoreValues';

const HomePage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set(['hero']));
  const sectionRefs = {
    about: useRef(null),
    aboutText: useRef(null),
    aboutHighlight: useRef(null),
    verticalsHeader: useRef(null),
    verticalsCards: [useRef(null), useRef(null), useRef(null)],
    casesHeader: useRef(null),
    casesCards: [useRef(null), useRef(null), useRef(null), useRef(null)],
    leaders: useRef(null),
    ceosVision: useRef(null)
  };

  useEffect(() => {
    // Hero section - load immediately
    const heroContent = document.getElementById('hero-reveal');
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add('visible');
      }, 300);
    }

    // Function to check if element is in viewport
    const isInViewport = (element, offset = 100) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - offset) &&
        rect.bottom >= offset
      );
    };

    // Function to load visible sections
    const loadVisibleSections = () => {
      const newVisibleSections = new Set(visibleSections);

      // Check each section and add to visible set if in viewport
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (Array.isArray(ref)) {
          ref.forEach((itemRef, index) => {
            if (itemRef.current && isInViewport(itemRef.current) && !newVisibleSections.has(`${key}-${index}`)) {
              newVisibleSections.add(`${key}-${index}`);
              itemRef.current.classList.add('visible');
            }
          });
        } else {
          if (ref.current && isInViewport(ref.current) && !newVisibleSections.has(key)) {
            newVisibleSections.add(key);
            ref.current.classList.add('visible');
          }
        }
      });

      setVisibleSections(newVisibleSections);
    };

    // Initial check
    setTimeout(loadVisibleSections, 100);

    // Add scroll event listener
    let scrolling = false;
    const handleScroll = () => {
      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(() => {
          loadVisibleSections();
          scrolling = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', loadVisibleSections);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', loadVisibleSections);
    };
  }, []); // Empty dependency array for mount-only effect

  useEffect(() => {

    const cards = document.querySelectorAll(".scroll-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach(card => observer.observe(card));

  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="video-hero-wrapper">

          {/* Animated Tech Background */}
          <div className="tech-background">
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/hero_video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Overlay */}
          <div className="hero-overlay"></div>

          <section className="hero-section">
            <div className="container hero-content">

              <div className="hero-badge">
                IT / OT Solutions · Global Delivery Model
              </div>

              <h1>
                Driving <span>Digital Transformation</span>
                <br /> in Critical Infrastructure
              </h1>

              <p className="hero-sub">
                Data-driven platforms powering Telecom, Transportation, Utilities & Smart Infrastructure —
                delivering innovation from UK to Australia.
              </p>

              <div className="hero-buttons">
                <a href="#" className="btn btn-primary">
                  <i className="fa-regular fa-compass"></i> Explore Solutions
                </a>

                <a href="#" className="btn btn-outline">
                  <i className="fa-regular fa-user"></i> Meet Our Leaders
                </a>
              </div>

            </div>
          </section>
        </div>

        <section className="about-section" id="about">
          <div className="container hidden-fade" ref={sectionRefs.aboutText}>
            <div className="about-header "  >
              <h2>About INOVAANTAGE</h2>
              <p>
                Delivering scalable IT/OT solutions across telecom, utilities,
                transportation, and logistics — enabling digital transformation
                through innovation and data-driven strategies.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>10+</h3>
                <span>Utility Engagements</span>
              </div>

              <div className="stat-card">
                <h3>6+</h3>
                <span>Countries Served</span>
              </div>

              <div className="stat-card">
                <h3>24/7</h3>
                <span>Global Support</span>
              </div>
            </div>

            <div className="about-main">
              <div className="about-text">
                <p>
                  INOVAANTAGE is a seasoned and highly proficient IT/OT solutions company,
                  delivering robust and scalable solutions across telecommunications,
                  transportation, utilities, and logistics sectors.
                </p>

                <p>
                  We specialize in enabling data-driven digital transformation, helping
                  organizations enhance operational performance, streamline processes,
                  and achieve long-term efficiency through innovative, technology-led
                  strategies.
                </p>

                <p>
                  With a diverse portfolio of products and services, we provide customized
                  solutions including GIS, ADMS, SCADA, OSS/BSS, project management,
                  workforce management, and asset management for electric, water, gas,
                  and fibre industries.
                </p>

                <p>
                  We are recognized for our expertise in migrating from ArcMap Geometric
                  Network to ArcGIS Pro & Utility Network, leveraging advanced geospatial
                  technologies to improve spatial intelligence and operational efficiency.
                </p>

                <p>
                  Our proprietary tool, rUNr, revolutionizes ESRI data migration by
                  automating the transition to Utility Network with exceptional accuracy
                  and speed.
                </p>

                <p>
                  Operating across the UK, Australia, Malaysia, Singapore, India, and
                  the USA, we offer global delivery with 24/7 support, ensuring timely
                  implementation and seamless customer experiences worldwide.
                </p>
              </div>

              <div className="about-highlight">
                <i className="fa-solid fa-chart-line"></i>
                <h3>Global IT/OT Transformation Leaders</h3>
                <p>
                  Driving innovation with GIS, SCADA, OSS/BSS, and advanced
                  geospatial solutions across industries.
                </p>
              </div>
            </div>

          </div>
        </section>
        <CoreValues reference={sectionRefs.aboutHighlight} />
        <Partners />
        <DigitalTransformation />
        <section className="verticals-section" id="verticals">
          <div className="container">
            <div
              className="section-header hidden-fade"
              ref={sectionRefs.verticalsHeader}
            >
              <h2>Industries We Transform</h2>
              <p style={{ color: "white" }}>Deep domain expertise across three essential sectors</p>
            </div>
            <div className="vert-grid">
              <div
                className="vert-card hidden-fade"
                ref={sectionRefs.verticalsCards[0]}
              >
                <div className="vert-icon"><i class="fas fa-satellite"></i></div>
                <h3>Telecom</h3>
                <p>Cutting‑edge technology for modern networks.</p>
              </div>
              <div
                className="vert-card hidden-fade"
                ref={sectionRefs.verticalsCards[1]}
              >
                <div className="vert-icon"><i className="fa-solid fa-truck-fast"></i></div>
                <h3>Transportation & Logistics</h3>
                <p>Digitizing road data, asset management for national providers.</p>
              </div>
              <div
                className="vert-card hidden-fade"
                ref={sectionRefs.verticalsCards[2]}
              >
                <div className="vert-icon"><i className="fa-solid fa-bolt"></i></div>
                <h3>Utilities</h3>
                <p>Smart grids, data integrity & OT security.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">

          <div className="case-header">
            <h2>Success in Action</h2>
            <p>Real results for real infrastructure challenges</p>
          </div>

          <div className="scroll-cards">

            {/* Card 1 */}
            <div className="scroll-card left">
              <div className="card">

                <div className="card-image">
                  <img src="/assets/Road_transport.png" alt="Road Data Digitization" />
                  <h4>Road Data Digitization</h4>
                </div>

                <div className="card-overlay">
                  <p>
                    Public Australian company – National location data modernization
                  </p>
                </div>
                <a className="card-link"> View Case Study <i className="fa-solid fa-arrow-right"></i> </a>
              </div>
            </div>


            {/* Card 2 */}
            <div className="scroll-card right">
              <div className="card">

                <div className="card-image">
                  <img src="/assets/rail_transport.png" alt="Asset Management" />
                  <h4>Asset Management Integration</h4>
                </div>

                <div className="card-overlay">
                  <p>
                    A leading railroad transportation company in Southeast Asia
                  </p>
                </div>
                <a className="card-link"> View Case Study <i className="fa-solid fa-arrow-right"></i> </a>
              </div>
            </div>


            {/* Card 3 */}
            <div className="scroll-card left">
              <div className="card">

                <div className="card-image">
                  <img src="/assets/port_management.png" alt="Port Management" />
                  <h4>Port Management System</h4>
                </div>

                <div className="card-overlay">
                  <p>
                    Disaster Management system (AOMS) on HERE platform
                  </p>
                </div>
                <a className="card-link"> View Case Study <i className="fa-solid fa-arrow-right"></i> </a>
              </div>
            </div>

          </div>

        </section>
        <LeadersSection sectionRefs={sectionRefs} />

        <section className="ceo-section">

          <div className="ceo-container hidden-fade" ref={sectionRefs.ceosVision}>
            <div className="ceo-image">
              <img src="/leaders/CEO.png" alt="CEO" />
            </div>
            <div className="ceo-content">
              <h2 className="ceo-title">CEO's Vision</h2>

              <p>
                The world around us has changed more in the past two decades than perhaps
                in the past century. Things are moving so fast that predicting how
                businesses will operate and influence our lives is becoming increasingly
                difficult. And the development that we see all around us has also brought
                fresh challenges.
              </p>

              <p>
                What has not changed, however, is the human mind’s undying curiosity
                to cross one frontier of knowledge after another.
              </p>

              <p>
                In the industrialized society that we live in today, information
                technology plays a role that’s broader and deeper than anything before.
                It impacts the way people live, work, play, grow and interact.
              </p>

              <p>
                Inovaantage has been creating solutions that directly or indirectly
                serve the resources and utilities we all use on a daily basis. Within
                that space, Inovaantage has been specializing in solutions for
                power, telecom, transportation and logistics.
              </p>

              <p>
                We feel honored to be part of multiple mission-critical projects.
                Our success lies in delivering quality solutions and reaffirming
                our commitment to making this planet a better place for everyone.
              </p>

            </div>

          </div>

        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
