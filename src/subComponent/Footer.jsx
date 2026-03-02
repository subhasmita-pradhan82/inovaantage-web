import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="footer-main">
                    <div class="logo-block">
                        <img style={{ width: '250px' }} src='/assets/inovaantage-logo-new.png' />
                    </div>
                    <div class="footer-cta">
                        <h4><span>Get in touch</span> today</h4>
                        <div class="contact-email">
                            <i class="fa-regular fa-envelope"></i>
                            <span>info@innovantage.com</span>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div>© 2025 INNOVANTAGE · All rights reserved</div>
                    <div class="footer-links"><a href="#">Privacy</a><a href="#">Contact</a><a href="#">Leaders</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;