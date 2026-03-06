import React, { useState } from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="container header-inner">

                {/* Logo */}
                <div className="logo-block">
                    <a href="/">
                        <img
                            style={{ width: "250px" }}
                            src="/assets/INOVAANTAGE_logo_orange.jpg"
                            alt="Inovaantage"
                        />
                    </a>
                </div>

                {/* Navigation */}
                <ul className="nav-menu">

                    {/* Home */}
                    <li className="dropdown">
                        <a href="/">Home</a>
                        <ul className="dropdown-menu">
                            <li><a href="/about">About</a></li>
                            <li><a href="/core-values">Core Values</a></li>
                            <li><a href="/mission">Our Mission</a></li>
                            <li><a href="/vision">Vision</a></li>
                            <li><a href="/leaders">Leaders</a></li>
                            <li><a href="/ceo-vision">CEO’ Vision</a></li>
                        </ul>
                    </li>

                    {/* Offering */}
                    <li className="dropdown">
                        <a href="#">Offering</a>
                        <ul className="dropdown-menu">

                            {/* Services */}
                            <li className="dropdown-submenu">
                                <a href="/digital-transformation-services">Services</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/digital-transformation-services/geospatial-services">Geospatial Services</a></li>
                                    <li><a href="/digital-transformation-services/digital-services">Digital Services</a></li>
                                    <li><a href="/digital-transformation-services/managed-services">Managed Services</a></li>
                                    <li><a href="/digital-transformation-services/big-data-management">Big Data Management</a></li>
                                </ul>
                            </li>

                            {/* Products */}
                            <li className="dropdown-submenu">
                                <a href="/products">Products</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/products/caartera">Caartera</a></li>
                                    <li><a href="/products/inovaantage-data-migration-tool">Inovaantage Data Migration Tool (rUNr)</a></li>
                                    <li><a href="/products/conduit-pro-2">Conduit Pro</a></li>
                                </ul>
                            </li>

                        </ul>
                    </li>

                    {/* Industries */}
                    <li className="dropdown">
                        <a href="/industries">Industries</a>
                        <ul className="dropdown-menu">
                            <li><a href="/telecom">Telecom</a></li>
                            <li><a href="/utilities">Utilities</a></li>
                            <li><a href="/transportation">Transportation</a></li>
                            <li><a href="/healthcare">Healthcare</a></li>
                            <li><a href="/engineering">Engineering</a></li>
                        </ul>
                    </li>

                    {/* Contact */}
                    <li className="dropdown">
                        <a href="/contact">Contact Us</a>
                        <ul className="dropdown-menu">
                            <li><a href="/our-offices">Our Offices</a></li>

                            <li className="dropdown-submenu">
                                <a href="/careers">Careers</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/job-openings">Job Openings</a></li>
                                    <li className="dropdown-submenu">
                                        <a href="/life-at-inovaantage">Life at Inovaantage</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="/blog">Our Latest Blogs</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* Gallery */}
                    <li className="dropdown">
                        <a href="#">Gallery</a>
                        <ul className="dropdown-menu">
                            <li><a href="/inovaantage-clicks">Inovaantage Clicks</a></li>
                            <li><a href="/inovaantage-videos">Inovaantage Videos</a></li>
                            <li><a href="/inovaantage-posters">Inovaantage Posters</a></li>
                            <li><a href="/press-release">Press Release</a></li>
                        </ul>
                    </li>


                </ul>
                <a href="/contact" className="btn header-cta">
                    Contact Us
                </a>

            </div>
        </div>
    );
};

export default Header;