import React, { useState, useEffect, useRef } from "react";
import Header from "../subComponent/Header";
import Footer from "../subComponent/Footer";
import "./styles/contact.css";

const offices = [
  {
    region: "North America",
    flag: "🇺🇸",
    country: "USA",
    address: "1312 17th Street Unit #229, Denver, CO 80202, United States",
    phone: "+17202639280",
    lat: 39.7503005,
    lng: -104.9966673,
    mapUrl:
      "https://www.google.com/maps/place/1312+17th+St+%23229,+Denver,+CO+80202,+USA/@39.7503005,-104.9992369,842m/data=!3m2!1e3!4b1!4m5!3m4!1s0x876c78db305fc9a7:0xc7a52cc0ba35f056!8m2!3d39.7503005!4d-104.9966673?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    region: "Asia Pacific",
    flag: "🇮🇳",
    country: "India",
    address: "R R Towers, 4th Floor, Plot No. 188 & 189, Phase 11, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033, India",
    phone: null,
    lat: 17.4373213,
    lng: 78.3785711,
    mapUrl:
      "https://www.google.com/maps/search/R+R+Towers,+4th+Floor,+Plot+No.+188+%26+189,+Phase+11,+Kavuri+Hills,+Madhapur,+Hyderabad,+Telangana+500033,+India/@17.4373213,78.3785711,4179m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  {
    region: "Asia Pacific",
    flag: "🇸🇬",
    country: "Singapore",
    address: "12 Marina Boulevard, #17-01 Tower 3, Marina Bay Financial Centre, Singapore 018982",
    phone: "+6565497044, +6565497001",
    lat: 1.2790221,
    lng:103.8544967,
    mapUrl:
      "https://www.google.com/maps/place/MBFC+Tower+3/@1.2790221,103.8519271,1095m/data=!3m3!1e3!4b1!5s0x31da190fd645f1b5:0x7017a250d3c167f6!4m6!3m5!1s0x31da190e334a518f:0xcad303181bf53c50!8m2!3d1.2790221!4d103.8544967!16s%2Fg%2F1z264r2dn?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  {
    region: "Asia Pacific",
    flag: "🇲🇾",
    country: "Malaysia",
    address:" Level 28, The Gardens South Tower, Mid Valley City, Lingkaran Syed Putra, 59200 Kuala Lumpur, Malaysia",
    phone: null,
    lat: 3.1173993,
    lng: 101.6754828,
    mapUrl:
      "https://www.google.com/maps/place/Regus+-+Kuala+Lumpur,+The+Gardens/@3.1174207,101.6651831,4369m/data=!3m3!1e3!4b1!5s0x31cc09df42258ac7:0xd4f1421d98b283b2!4m6!3m5!1s0x31cc498ee708edff:0x76a3d798387ac123!8m2!3d3.1173993!4d101.6754828!16s%2Fg%2F11b7q4s3w5?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  {
    region: "Asia Pacific",
    flag: "🇵🇭",
    country: "Philippines",
    address:" Unit 301, 164 L. Gruet Street, Brgy Maytunas San Juan City, Philippines 1500",
    phone: null,
    lat: 14.5971806,
    lng: 121.0187338,
    mapUrl:
      "https://www.google.com/maps/search/+Unit+301,+164+L.+Gruet+Street,+Brgy+Maytunas+San+Juan+City,+Philippines+1500/@14.5971806,121.0187338,8479m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  {
    region: "Asia Pacific",
    flag: "🇦🇺",
    country: "Australia",
    address: " 8 Beulah Road, Norwood SA 5067, Adelaide, Australia",
    phone: null,
    lat: -34.9188849,
    lng: 138.6238139,
    mapUrl:
      "https://www.google.com/maps/place/8+Beulah+Rd,+Norwood+SA+5067,+Australia/@-34.9188849,138.6212443,898m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ab0c948b2cc037d:0x25497971c5aa4199!8m2!3d-34.9188849!4d138.6238139!16s%2Fg%2F11c1zbhtbf?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  {
    region: "Global",
    flag: "🇬🇧",
    country: "United Kingdom",
    address:"8 61A, Bath Road, Reading, RG302 BB, United Kingdom",
    phone: null,
    lat: 51.446929,
    lng: -1.0014178,
    mapUrl:
      "https://www.google.com/maps/search/8+61A,+Bath+Road,+Reading,+RG302+BB,+United+Kingdom/@51.446929,-1.0014178,387m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const ContactPage = () => {
  const [activeOffice, setActiveOffice] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate hero on mount
    if (heroRef.current) {
      setTimeout(() => heroRef.current.classList.add("contact-visible"), 100);
    }
    // Intersection observer for office cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("contact-visible");
        });
      },
      { threshold: 0.12 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const selectedOffice = offices[activeOffice];

  return (
    <>
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero__glow" aria-hidden="true" />
        <div className="contact-hero__inner contact-fade-up">
          <span className="contact-hero__chip">Global Presence</span>
          <h1 className="contact-hero__title">
            Let's Build Something <span className="contact-hero__accent">Extraordinary</span>
          </h1>
          <p className="contact-hero__sub">
            Reach out to our teams across 8 offices worldwide. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ─────────────────────────────────────────────────── */}
      <section className="contact-grid-section">
        <div className="contact-container">
          <div className="contact-grid">

            {/* ── FORM ────────────────────────────────────────────────── */}
            <div className="contact-form-wrap">
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>Our experts will get back to you shortly.</p>
              </div>

              {submitted && (
                <div className="contact-success">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Message sent! We'll be in touch soon.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="John Doe"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="john@company.com"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company" name="company" type="text"
                      placeholder="Your Company"
                      value={formData.company} onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}>
                      <option value="">Select a topic</option>
                      <option value="geospatial">Geospatial Services</option>
                      <option value="digital">Digital Transformation</option>
                      <option value="software">Software Services</option>
                      <option value="products">Products Demo</option>
                      <option value="partnerships">Partnerships</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form__group contact-form__group--full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows="5" required
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="contact-submit">
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>

            {/* ── QUICK CONTACT INFO ──────────────────────────────────── */}
            <div className="contact-info-wrap">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:info@inovaantage.com">info@inovaantage.com</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.37 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.9a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Call Us (USA)</h4>
                  <a href="tel:+17202639280">+1 720 263 9280</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4>Response Time</h4>
                  <span>Within 24 business hours</span>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://www.linkedin.com/company/inovaantage/" target="_blank" rel="noreferrer" className="contact-social__link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://twitter.com/inovaantage" target="_blank" rel="noreferrer" className="contact-social__link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ" target="_blank" rel="noreferrer" className="contact-social__link" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f172a" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES + MAP ────────────────────────────────────────────────── */}
      <section className="contact-offices-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-chip">Our Locations</span>
            <h2>Offices Around the World</h2>
            <p>Click any office to locate it on the map</p>
          </div>

          <div className="contact-offices-layout">
            {/* Office Cards */}
            <div className="contact-office-list">
              {offices.map((office, i) => (
                <button
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className={`contact-office-card contact-fade-up ${activeOffice === i ? "contact-office-card--active" : ""}`}
                  style={{ transitionDelay: `${i * 0.05}s` }}
                  onClick={() => setActiveOffice(i)}
                >
                  <div className="contact-office-card__top">
                    <span className="contact-office-card__flag">{office.flag}</span>
                    <div>
                      <p className="contact-office-card__region">{office.region}</p>
                      <h4 className="contact-office-card__country">{office.country}</h4>
                    </div>
                    {activeOffice === i && (
                      <span className="contact-office-card__badge">Selected</span>
                    )}
                  </div>
                  <p className="contact-office-card__addr">{office.address}</p>
                  {office.phone && (
                    <p className="contact-office-card__phone">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.37 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.9a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                      {office.phone}
                    </p>
                  )}
                </button>
              ))}
            </div>

            {/* Map Panel */}
            <div className="contact-map-panel">
              <div className="contact-map-label">
                <span>{selectedOffice.flag}</span>
                <strong>{selectedOffice.country}</strong>
                <span className="contact-map-label__addr">{selectedOffice.address}</span>
              </div>
              <div className="contact-map-frame">
                <iframe
                  key={activeOffice}
                  title={`Map – ${selectedOffice.country}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedOffice.address)}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={selectedOffice.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-map-open"
              >
                Open in Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
