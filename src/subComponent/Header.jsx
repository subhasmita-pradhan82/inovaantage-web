import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div class="container header-inner">
                <div class="logo-block">
                    <img style={{width:'250px'}} src='/assets/inovaantage-logo-new.png'/>
                </div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#verticals">Verticals</a>
                    <a href="#leaders">Leaders</a>
                    <a href="#contact">Contact</a>
                </div>
                <a href="#contact" class="btn header-cta"><i class="fa-regular fa-envelope" style={{marginRight: "8px"}}></i>Contact Us</a>
            </div>
        </div>
    )
}

export default Header