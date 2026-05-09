// import React from 'react'

// const Footer = () => {
//     return (
//         <footer className="corporate-footer">
//             <div className="footer-container">

//                 <div className="footer-col company">
//                     {/* <img src="https://inovaantage.com/wp-content/uploads/2023/08/inovaantage-logo-footer1.png" class="footer-logo" alt="Inovaantage Logo" /> */}

//                     <img
//                         style={{ width: "250px" }}
//                         src="/assets/removebg-logo.png"
//                         alt="Inovaantage"
//                     />

//                     <p className="footer-about">
//                         Delivering cutting-edge digital transformation solutions across
//                         geospatial, big data, and enterprise services globally.
//                     </p>

//                     <div className="social-icons">
//                         <a href="https://www.linkedin.com/company/inovaantage/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
//                         <a href="https://twitter.com/inovaantage" target="_blank"><i className="fab fa-twitter"></i></a>
//                         <a href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ" target="_blank"><i className="fab fa-youtube"></i></a>
//                     </div>
//                 </div>
//                 <div className="footer-col">
//                     <h4>North America</h4>

//                     <div className="location-card">
//                         <h5>🇺🇸 USA</h5>
//                         <p>473 E Carnegie Dr #200<br />San Bernardino, CA 92408,<br /> United States</p>
//                         <span>+1 720 263 9280</span>
//                     </div>

//                     <h4>Global Offices</h4>

//                     <div className="location-card">
//                         <h5>🇬🇧 United Kingdom</h5>
//                         <p> 167-169 Great Portland Street <br />London, UK</p>
//                     </div>

//                 </div>

//                 <div className="footer-col">
//                     <h4>Asia Pacific</h4>

//                     <div className="location-card">
//                         <h5>🇮🇳 India - Hyderabad</h5>
//                         <p>R R Towers, 4th Floor, Kavuri Hills,<br />Madhapur, Telangana 500033</p>
//                     </div>

//                     <div className="location-card">
//                         <h5>🇮🇳 India - Delhi</h5>
//                         <p>R R Towers, 4th Floor, Kavuri Hills,<br />Madhapur, Telangana 500033</p>
//                     </div>

//                     <div className="location-card">
//                         <h5>🇸🇬 Singapore</h5>
//                         <p>60 Paya Lebar Road, #07-54<br />Singapore 409051</p>
//                         <span>+65 6549 7044</span>
//                     </div>

//                 </div>

//                 <div className="footer-col">
//                     <h4>Asia Pacific</h4>

//                     <div className="location-card">
//                         <h5>🇲🇾 Malaysia</h5>
//                         <p>Level 28, The Gardens South Tower,<br />Kuala Lumpur</p>
//                     </div>

//                     <div className="location-card">
//                         <h5>🇵🇭 Philippines</h5>
//                         <p>Unit 301, 164 L. Gruet Street,<br />San Juan City 1500</p>
//                     </div>

//                     <div className="location-card">
//                         <h5>🇦🇺 Australia</h5>
//                         <p>8 Beulah Road, Norwood SA 5067<br />Adelaide</p>
//                     </div>
//                 </div>

//             </div>

//             <div className="footer-bottom">
//                 <p>© 2026 Inovaantage. All Rights Reserved.</p>
//             </div>
//         </footer>
//     )
// }

// export default Footer;













































import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.05 }
    );
    const sections = footerRef.current?.querySelectorAll('[data-section]');
    sections?.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const vis = (key, delay = '0s') => ({
    opacity: visibleSections.has(key) ? 1 : 0,
    transform: visibleSections.has(key) ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
  });

  const solutions = [
    { name: 'ConduitPro', desc: 'Network Conduit Management', href: '/products/conduitpro' },
    { name: 'UNGRID', desc: 'Utility Network Intelligence', href: '/products/UNGRID' },
    { name: 'Energize & De-energize', desc: 'Power Switching Workflows', href: '/products/energize-deenergize' },
    { name: 'GIS Platform', desc: 'Geospatial Data Solutions', href: '/products' },
    { name: 'Big Data Analytics', desc: 'Enterprise Data Intelligence', href: '/products' },
    { name: 'Smart Grid Solutions', desc: 'Energy Network Automation', href: '/products' },
  ];

  const company = [
    { name: 'About Us', href: '/' },
    { name: 'Our Leadership', href: '/' },
    { name: 'Partners & Clients', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'News & Insights', href: '/' },
    { name: 'CSR Initiatives', href: '/' },
  ];

  const industries = [
    { name: 'Utilities & Energy', icon: '⚡' },
    { name: 'Water Management', icon: '💧' },
    { name: 'Transportation', icon: '🚉' },
    { name: 'Smart Cities', icon: '🏙️' },
    { name: 'Telecommunications', icon: '📡' },
    { name: 'Government & Public', icon: '🏛️' },
  ];

  const offices = [
    { flag: '🇺🇸', country: 'United States', address: '473 E Carnegie Dr #200, San Bernardino, CA 92408', phone: '+1 720 263 9280' },
    { flag: '🇬🇧', country: 'United Kingdom', address: '167–169 Great Portland Street, London, W1W 5PE', phone: null },
    { flag: '🇸🇬', country: 'Singapore', address: '60 Paya Lebar Road #07-54, Singapore 409051', phone: '+65 6549 7044' },
    { flag: '🇮🇳', country: 'India', address: 'Kavuri Hills, Madhapur, Hyderabad, Telangana 500033', phone: null },
    { flag: '🇲🇾', country: 'Malaysia', address: 'Level 28, The Gardens South Tower, Kuala Lumpur', phone: null },
    { flag: '🇦🇺', country: 'Australia', address: '8 Beulah Road, Norwood SA 5067, Adelaide', phone: null },
  ];

  const certs = [
    { label: 'ISO 27001', sub: 'Information Security' },
    { label: 'ISO 9001', sub: 'Quality Management' },
    { label: 'CMMI L3', sub: 'Process Maturity' },
    { label: 'SOC 2', sub: 'Type II Certified' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .ifooter { background:rgba(17, 6, 6, 0.4); color:#c8d6e5; font-family:'Sora',sans-serif; position:relative; overflow:hidden; }
        .ifooter::before { content:''; display:block; height:3px; background:linear-gradient(90deg,transparent 0%,#E2780E 30%,#f59e0b 50%,#E2780E 70%,transparent 100%); }
        .ifooter__gridbg { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(226,120,14,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(226,120,14,.03) 1px,transparent 1px); background-size:48px 48px; }
        .ifooter__glow { position:absolute; width:600px; height:600px; border-radius:50%; pointer-events:none; }
        .ifooter__glow--tl { top:-200px; left:-100px; background:radial-gradient(circle,rgba(226,120,14,.06) 0%,transparent 70%); }
        .ifooter__glow--br { bottom:-200px; right:-100px; background:radial-gradient(circle,rgba(0,196,180,.05) 0%,transparent 70%); }

        /* Newsletter */
        .inews { position:relative; z-index:2; border-bottom:1px solid rgba(255,255,255,.07); padding:52px 0; }
        .inews__inner { max-width:1320px; margin:0 auto; padding:0 48px; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
        .inews__text h3 { font-size:22px; font-weight:600; color:#fff; margin-bottom:6px; letter-spacing:-.3px; }
        .inews__text p { font-size:14px; color:#8ea4bc; }
        .inews__form { display:flex; background:rgba(255,255,255,.05); border:1px solid rgba(226,120,14,.25); border-radius:10px; overflow:hidden; min-width:380px; transition:border-color .3s; }
        .inews__form:focus-within { border-color:rgba(226,120,14,.7); box-shadow:0 0 0 3px rgba(226,120,14,.1); }
        .inews__form input { flex:1; background:transparent; border:none; outline:none; padding:14px 20px; font-size:14px; color:#e8f0f8; font-family:'Sora',sans-serif; }
        .inews__form input::placeholder { color:#607388; }
        .inews__form button { background:linear-gradient(135deg,#E2780E,#f59e0b); color:#fff; border:none; cursor:pointer; padding:14px 28px; font-size:13px; font-weight:600; font-family:'Sora',sans-serif; white-space:nowrap; transition:opacity .2s; }
        .inews__form button:hover { opacity:.88; }
        .inews__ok { color:#34d399; font-size:14px; font-weight:500; display:flex; align-items:center; gap:8px; }

        /* Body */
        .ifooter__body { position:relative; z-index:2; max-width:1320px; margin:0 auto; padding:72px 48px 56px; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:56px; }

        /* Brand */
        .ibrand__logo { width:200px; margin-bottom:20px; }
        .ibrand__tag { font-size:13.5px; line-height:1.75; color:#8ea4bc; margin-bottom:28px; max-width:300px; }
        .ibrand__stats { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:32px; }
        .istat { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); border-radius:10px; padding:14px 16px; transition:background .25s; }
        .istat:hover { background:rgba(226,120,14,.07); border-color:rgba(226,120,14,.2); }
        .istat__num { font-size:22px; font-weight:700; color:#E2780E; font-family:'JetBrains Mono',monospace; line-height:1; margin-bottom:4px; }
        .istat__lbl { font-size:11px; color:#607388; text-transform:uppercase; letter-spacing:.8px; font-weight:500; }
        .isocial { display:flex; gap:10px; }
        .isocial a { width:38px; height:38px; border-radius:9px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.09); display:flex; align-items:center; justify-content:center; text-decoration:none; color:#8ea4bc; font-size:15px; transition:all .25s; }
        .isocial a:hover { background:rgba(226,120,14,.15); border-color:rgba(226,120,14,.4); color:#E2780E; transform:translateY(-3px); }

        /* Nav columns */
        .icol__hdg { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:1.4px; color:#E2780E; margin-bottom:22px; display:flex; align-items:center; gap:8px; }
        .icol__hdg::after { content:''; flex:1; height:1px; background:rgba(226,120,14,.25); }
        .inav { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:4px; }
        .inav li a { display:flex; flex-direction:column; padding:7px 0; text-decoration:none; color:#8ea4bc; font-size:13.5px; border-bottom:1px solid rgba(255,255,255,.04); transition:color .2s,padding-left .2s; position:relative; }
        .inav li a:hover { color:#e8f0f8; padding-left:8px; }
        .inav li a::before { content:''; position:absolute; left:0; top:50%; transform:translateY(-50%) scaleX(0); width:3px; height:60%; background:#E2780E; border-radius:2px; transition:transform .2s; }
        .inav li a:hover::before { transform:translateY(-50%) scaleX(1); }
        .inav li a .isub { font-size:11px; color:#4a6278; margin-top:1px; }
        .inav li a:hover .isub { color:#607388; }

        /* Industries */
        .iind { display:flex; flex-direction:column; gap:8px; }
        .iind__item { display:flex; align-items:center; gap:10px; padding:8px 12px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-radius:8px; font-size:13px; color:#8ea4bc; transition:all .2s; }
        .iind__item:hover { background:rgba(226,120,14,.08); border-color:rgba(226,120,14,.2); color:#c8d6e5; transform:translateX(4px); }

        /* Contact mini */
        .icont { display:flex; flex-direction:column; gap:12px; }
        .icont a { font-size:13px; color:#8ea4bc; text-decoration:none; display:flex; align-items:center; gap:8px; }
        .icont a:hover { color:#E2780E; }
        .icont .imono { font-family:'JetBrains Mono',monospace; }

        /* Offices */
        .ioff { position:relative; z-index:2; border-top:1px solid rgba(255,255,255,.07); padding:48px 0; }
        .ioff__inner { max-width:1320px; margin:0 auto; padding:0 48px; }
        .ioff__hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:32px; }
        .ioff__title { font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1.5px; color:#607388; }
        .ioff__sub { font-size:13px; color:#4a6278; }
        .ioff__grid { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; }
        .ioff__card { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-radius:10px; padding:16px; transition:all .3s; }
        .ioff__card:hover { background:rgba(226,120,14,.06); border-color:rgba(226,120,14,.2); transform:translateY(-4px); box-shadow:0 8px 32px rgba(0,0,0,.3); }
        .ioff__flag { font-size:20px; margin-bottom:8px; display:block; }
        .ioff__ctry { font-size:13px; font-weight:600; color:#c8d6e5; margin-bottom:6px; }
        .ioff__addr { font-size:11px; color:#4a6278; line-height:1.6; margin-bottom:6px; }
        .ioff__ph { font-size:11px; color:#E2780E; font-family:'JetBrains Mono',monospace; font-weight:500; }

        /* Certs */
        .icerts { position:relative; z-index:2; border-top:1px solid rgba(255,255,255,.06); padding:28px 0; }
        .icerts__inner { max-width:1320px; margin:0 auto; padding:0 48px; display:flex; align-items:center; gap:40px; flex-wrap:wrap; }
        .icerts__lbl { font-size:11px; text-transform:uppercase; letter-spacing:1.2px; color:#4a6278; font-weight:600; white-space:nowrap; }
        .icerts__list { display:flex; gap:12px; flex-wrap:wrap; flex:1; }
        .icert { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:8px; padding:8px 14px; transition:all .25s; }
        .icert:hover { background:rgba(226,120,14,.07); border-color:rgba(226,120,14,.25); }
        .icert__ico { width:20px; height:20px; background:linear-gradient(135deg,#E2780E,#f59e0b); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; flex-shrink:0; color:white; font-weight:700; }
        .icert strong { display:block; font-size:12px; font-weight:600; color:#c8d6e5; font-family:'JetBrains Mono',monospace; }
        .icert span { display:block; font-size:10px; color:#4a6278; }

        /* Bottom */
        .ifooter__bot { position:relative; z-index:2; border-top:1px solid rgba(255,255,255,.07); padding:24px 0; }
        .ifooter__bot-inner { max-width:1320px; margin:0 auto; padding:0 48px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:20px; }
        .ifooter__copy { font-size:13px; color:#4a6278; }
        .ifooter__copy strong { color:#8ea4bc; }
        .ifooter__legal { display:flex; gap:24px; flex-wrap:wrap; }
        .ifooter__legal a { font-size:12px; color:#4a6278; text-decoration:none; transition:color .2s; }
        .ifooter__legal a:hover { color:#E2780E; }
        .ifooter__slogan { font-size:12px; color:#2e4055; font-family:'JetBrains Mono',monospace; letter-spacing:.5px; }

        @media(max-width:1100px){
          .ifooter__body{grid-template-columns:1fr 1fr;gap:40px;}
          .ioff__grid{grid-template-columns:repeat(3,1fr);}
        }
        @media(max-width:768px){
          .ifooter__body{grid-template-columns:1fr;padding:48px 24px 40px;}
          .inews__inner{flex-direction:column;align-items:flex-start;padding:0 24px;}
          .inews__form{min-width:unset;width:100%;}
          .ioff__grid{grid-template-columns:repeat(2,1fr);}
          .ioff__inner,.icerts__inner,.ifooter__bot-inner{padding:0 24px;}
          .ibrand__stats{grid-template-columns:repeat(4,1fr);}
          .ifooter__bot-inner{flex-direction:column;align-items:flex-start;}
        }
        @media(max-width:480px){
          .ioff__grid{grid-template-columns:1fr;}
          .ibrand__stats{grid-template-columns:1fr 1fr;}
        }
      `}</style>

      <footer className="ifooter" ref={footerRef}>
        <div className="ifooter__gridbg" />
        <div className="ifooter__glow ifooter__glow--tl" />
        <div className="ifooter__glow ifooter__glow--br" />

        {/* Newsletter */}
        <div className="inews" data-section="news" style={vis('news')}>
          <div className="inews__inner">
            <div className="inews__text">
              <h3>Stay Ahead of the Curve</h3>
              <p>Insights on digital transformation, GIS innovations, and utility intelligence — delivered monthly.</p>
            </div>
            {subscribed ? (
              <div className="inews__ok">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                Thank you! You're subscribed.
              </div>
            ) : (
              <form className="inews__form" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Enter your work email" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                <button type="submit">Subscribe →</button>
              </form>
            )}
          </div>
        </div>

        {/* Main Body */}
        <div className="ifooter__body">

          {/* Brand */}
          <div data-section="brand" style={vis('brand')}>
            <img src="/assets/removebg-logo.png" alt="Inovaantage" className="ibrand__logo" />
            <p className="ibrand__tag">
              Delivering cutting-edge digital transformation across geospatial intelligence,
              big data analytics, and enterprise utility solutions — empowering 40+ utilities worldwide.
            </p>
            <div className="ibrand__stats">
              {[['20+', 'Years of Excellence'], ['40+', 'Global Clients'], ['10+', 'Countries'], ['500+', 'Professionals']].map(([n, l]) => (
                <div className="istat" key={l}>
                  <div className="istat__num">{n}</div>
                  <div className="istat__lbl">{l}</div>
                </div>
              ))}
            </div>
            <div className="isocial">
              <a href="https://www.linkedin.com/company/inovaantage/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://twitter.com/inovaantage" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
              </a>
              <a href="mailto:info@inovaantage.com" aria-label="Email">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div data-section="sol" style={vis('sol', '0.1s')}>
            <h4 className="icol__hdg">Solutions</h4>
            <ul className="inav">
              {solutions.map(s => (
                <li key={s.name}><a href={s.href}>{s.name}<span className="isub">{s.desc}</span></a></li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div data-section="co" style={vis('co', '0.2s')}>
            <h4 className="icol__hdg">Company</h4>
            <ul className="inav">
              {company.map(c => (
                <li key={c.name}><a href={c.href}>{c.name}</a></li>
              ))}
            </ul>
            <div style={{ marginTop: '32px' }}>
              <h4 className="icol__hdg">Contact</h4>
              <div className="icont">
                <a href="mailto:info@inovaantage.com">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
                  info@inovaantage.com
                </a>
                <a href="tel:+17202639280" className="imono">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" /></svg>
                  +1 720 263 9280
                </a>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div data-section="ind" style={vis('ind', '0.3s')}>
            <h4 className="icol__hdg">Industries</h4>
            <div className="iind">
              {industries.map(i => (
                <div className="iind__item" key={i.name}>
                  <span style={{ fontSize: '15px' }}>{i.icon}</span>
                  <span>{i.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="ioff" data-section="off" style={vis('off')}>
          <div className="ioff__inner">
            <div className="ioff__hdr">
              <span className="ioff__title">🌐 Global Presence</span>
              <span className="ioff__sub">Delivering excellence across 10+ countries</span>
            </div>
            <div className="ioff__grid">
              {offices.map(o => (
                <div className="ioff__card" key={o.country}>
                  <span className="ioff__flag">{o.flag}</span>
                  <div className="ioff__ctry">{o.country}</div>
                  <div className="ioff__addr">{o.address}</div>
                  {o.phone && <div className="ioff__ph">{o.phone}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="icerts" data-section="cert" style={vis('cert')}>
          <div className="icerts__inner">
            <span className="icerts__lbl">Certifications &amp; Compliance</span>
            <div className="icerts__list">
              {certs.map(c => (
                <div className="icert" key={c.label}>
                  <div className="icert__ico">✓</div>
                  <div><strong>{c.label}</strong><span>{c.sub}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom bar */}
        <div className="ifooter__bot">
          <div className="ifooter__bot-inner">
            <p className="ifooter__copy">© 2026 <strong>Inovaantage Pvt. Ltd.</strong> All Rights Reserved.</p>
            <div className="ifooter__legal">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">Cookie Policy</a>
              <a href="/">Accessibility</a>
              <a href="/">Sitemap</a>
            </div>
            {/* <div className="ifooter__slogan">// Powering the Future of Infrastructure</div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
