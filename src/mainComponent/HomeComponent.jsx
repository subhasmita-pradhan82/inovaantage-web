import React, { useEffect, useRef, useState } from 'react';
import Header from '../subComponent/Header';
import Footer from '../subComponent/Footer';
import Partners from '../subComponent/Partners';
import LeadersSection from '../subComponent/LeadersSection';
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
    leaders: useRef(null)
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

  return (
    <>
      <Header />
      <div>
        <div className="video-hero-wrapper">
          <video id="hero-video" autoPlay loop muted playsInline poster="https://via.placeholder.com/1280x720/0057A3/ffffff?text=INNOVANTAGE">
            <source src="https://videos.pexels.com/video-files/3129674/3129674-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/5775850/5775850-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
          <section className="hero-section">
            <div className="container hero-content hidden-fade" id="hero-reveal">
              <div className="hero-badge">IT/OT solutions · global footprint</div>
              <h1>Driving <span>Digital Transformation</span> in Critical Industries</h1>
              <div className="hero-sub">Data‑driven solutions for Telecom, Transportation, Utilities — from UK to Australia.</div>
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary"><i className="fa-regular fa-compass"></i> Explore Solutions</a>
                <a href="#" className="btn btn-secondary"><i className="fa-regular fa-user"></i> Meet Our Leaders</a>
              </div>
            </div>
          </section>
        </div>
        
        <section className="about-section" id="about">
          <div className="container about-grid">
            <div 
              className="about-text hidden-fade" 
              ref={sectionRefs.aboutText}
            >
              <h2>About INNOVANTAGE</h2>
              <p>We are a seasoned and highly proficient IT solutions company, dedicated to providing robust solutions to the telecommunications, transportation, and utilities sectors. With a strong focus on data‑driven strategies, we assist organizations in navigating their digital transformations and enhancing organizational performance.</p>
              <p>Since inception, we have made significant strides and established ourselves as a leading name in the IT/OT landscape. With a diverse portfolio, we deliver value through customized, technology‑driven innovations that exceed expectations.</p>
              <div className="global-stats">
                <div className="stat-item"><span className="stat-number">10+</span> <span className="stat-label">Utility engagements</span></div>
                <div className="stat-item"><span className="stat-number">6</span> <span className="stat-label">countries</span></div>
              </div>
            </div>
            <div 
              className="about-highlight hidden-fade" 
              ref={sectionRefs.aboutHighlight}
            >
              <i className="fa-solid fa-chart-line"></i>
              <h3>IT/OT landscape pioneers</h3>
              <p style={{ color: "#1e2a3a" }}>Operating in UK, Australia, Malaysia, Singapore, India, and the USA. Specializing in electricity, telecom, transport & logistics.</p>
            </div>
          </div>
        </section>
        <Partners/>
        <section className="verticals-section" id="verticals">
          <div className="container">
            <div 
              className="section-header hidden-fade" 
              ref={sectionRefs.verticalsHeader}
            >
              <h2>Industries We Transform</h2>
              <p style={{ color: "var(--primary)" }}>Deep domain expertise across three essential sectors</p>
            </div>
            <div className="vert-grid">
              <div 
                className="vert-card hidden-fade" 
                ref={sectionRefs.verticalsCards[0]}
              >
                <div className="vert-icon"><i className="fa-solid fa-tower-cell"></i></div>
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
          <div className="container">
            <div 
              className="section-header hidden-fade" 
              ref={sectionRefs.casesHeader}
            >
              <h2>Success in Action</h2>
              <p style={{ color: "var(--primary)" }}>Real results for real infrastructure challenges</p>
            </div>
            <div className="case-grid">
              <div 
                className="case-card hidden-fade" 
                ref={sectionRefs.casesCards[0]}
              >
                <div className="case-category"><i className="fa-regular fa-map"></i> Transportation And Logistics</div>
                <h4>Road Data Digitization</h4>
                <div className="case-client">Public Australian company – national location data</div>
                <a href="#" className="case-link">Read more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
              <div 
                className="case-card hidden-fade" 
                ref={sectionRefs.casesCards[1]}
              >
                <div className="case-category"><i className="fa-regular fa-gear"></i> Transportation And Logistics</div>
                <h4>Asset Management integration</h4>
                <div className="case-client">Leading railroad company, Southeast Asia</div>
                <a href="#" className="case-link">Read more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
              <div 
                className="case-card hidden-fade" 
                ref={sectionRefs.casesCards[2]}
              >
                <div className="case-category"><i className="fa-regular fa-map"></i> Road Data Digitization</div>
                <h4>National location data platform</h4>
                <div className="case-client">Phase II – Australian consortium</div>
                <a href="#" className="case-link">Read more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
              <div 
                className="case-card hidden-fade" 
                ref={sectionRefs.casesCards[3]}
              >
                <div className="case-category"><i className="fa-regular fa-train"></i> Rail & Logistics</div>
                <h4>Asset Management implementation</h4>
                <div className="case-client">SEA railroad: IoT + EAM</div>
                <a href="#" className="case-link">Read more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>
        
        <LeadersSection sectionRefs={sectionRefs}/>
      </div>
      <Footer />
      
      <style jsx>{`
        .hidden-fade {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .hidden-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default HomePage;