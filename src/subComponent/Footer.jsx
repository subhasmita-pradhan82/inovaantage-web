import React from 'react'

const Footer = () => {
    return (
        <footer class="corporate-footer">
            <div class="footer-container">

                <div class="footer-col company">
                    {/* <img src="https://inovaantage.com/wp-content/uploads/2023/08/inovaantage-logo-footer1.png" class="footer-logo" alt="Inovaantage Logo" /> */}

                      <img
                            style={{ width: "250px" }}
                            src="/assets/removebg-logo.png"
                            alt="Inovaantage"
                        />

                    <p class="footer-about">
                        Delivering cutting-edge digital transformation solutions across
                        geospatial, big data, and enterprise services globally.
                    </p>

                    <div class="social-icons">
                        <a href="https://www.linkedin.com/company/inovaantage/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/inovaantage" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>North America & India</h4>

                    <div class="location-card">
                        <h5>🇺🇸 USA</h5>
                        <p>473 E Carnegie Dr #200<br/>San Bernardino, CA 92408,<br /> United States</p>
                        <span>+1 720 263 9280</span>
                    </div>

                    <div class="location-card">
                        <h5>🇮🇳 India – Hyderabad</h5>
                        <p>R R Towers, 4th Floor, Kavuri Hills,<br/>Madhapur, Telangana 500033</p>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Asia Pacific</h4>

                    <div class="location-card">
                        <h5>🇸🇬 Singapore</h5>
                        <p>60 Paya Lebar Road, #07-54<br/>Singapore 409051</p>
                        <span>+65 6549 7044</span>
                    </div>

                    <div class="location-card">
                        <h5>🇲🇾 Malaysia</h5>
                        <p>Level 28, The Gardens South Tower,<br/>Kuala Lumpur</p>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>Global Offices</h4>

                    <div class="location-card">
                        <h5>🇵🇭 Philippines</h5>
                        <p>Unit 301, 164 L. Gruet Street,<br/>San Juan City 1500</p>
                    </div>

                    <div class="location-card">
                        <h5>🇦🇺 Australia</h5>
                        <p>8 Beulah Road, Norwood SA 5067<br/>Adelaide</p>
                    </div>

                    <div class="location-card">
                        <h5>🇬🇧 United Kingdom</h5>
                        <p>61A Bath Road, Reading RG30 2BB</p>
                    </div>
                </div>

            </div>

            <div class="footer-bottom">
                <p>© 2026 Inovaantage. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;