import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    // related search data
    const data = [
        "Geospatial Services",
        "Digital Services",
        "Managed Services",
        "Big Data Management",
        "Caartera",
        "Data Migration Tool",
        "Conduit Pro",
        "Telecom",
        "Healthcare",
        "Engineering"
    ];

    // search function
    const handleSearch = (value) => {
        setSearch(value);

        if (value.trim() === "") {
            setResults([]);
            return;
        }

        const filtered = data.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filtered);
    };
    return (
        <div className="header inova-nav">
            <div className="container header-inner">

                {/* Logo */}
                <div className="logo-block">
                    <a href="/">
                        <img
                            style={{ width: "250px" }}
                            src="/assets/dark_logo.png"
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
                            <li><a href="/ceo-vision">CEO' Vision</a></li>
                        </ul>
                    </li>

                    {/* Services */}
                            <li className="dropdown">
                                <a href="/Services">Services</a>
                                <ul className="dropdown-menu">
                                   <li><a href="/digital-transformation-services/geospatial-services">Geospatial Services</a></li>
                                    <li><a href="/digital-transformation-services/digital-services">Digital Services</a></li>
                                    <li><a href="/digital-transformation-services/managed-services">Managed Services</a></li>
                                    <li><a href="/digital-transformation-services/big-data-management">Big Data Management</a></li>
                                </ul>
                            </li>

                    {/* Products */}
                            <li className="dropdown">
                                <a href="/products">Products</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/products/caartera">Caartera</a></li>
                                    <li><a href="/products/inovaantage-data-migration-tool">Inovaantage Data Migration Tool (rUNr)</a></li>
                                    <li><a href="/products/conduit-pro-2">Conduit Pro</a></li>
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

                 {/* search */}
                <div className="search-box">
                    <input type="text" placeholder="Search..." value={search} onChange={(e) => handleSearch(e.target.value)}/>

                    {/* {Results dropdown */}
                    {results.length > 0 && (
                        <div className="search-results">
                            {results.map((item, index) => (
                                <div key={index} className="search-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <a href="/contact" className="btn header-cta">
                    Contact Us<MdArrowOutward />
                </a>

            </div>
        </div>
    );
};

export default Header;


