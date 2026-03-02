import React, { useState, useEffect, useRef } from "react";

function LeadersSection() {
    const [index, setIndex] = useState(0);
    const [perView, setPerView] = useState(3);
    const [paused, setPaused] = useState(false);
    const [hoveredLeader, setHoveredLeader] = useState(null);
    const touchStart = useRef(0);

    const leaders = [
        {
            id: 1,
            name: "Dr. Sukanta",
            position: "CEO UK",
            image: "https://inovaantage.com/wp-content/uploads/2024/03/dr-sukanta-800x900-1.jpg",
            quote: "Technology connects people.",
            social: {
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            id: 2,
            name: "Subra",
            position: "Director - Singapore",
            image: "https://inovaantage.com/wp-content/uploads/2024/02/subra.gif",
            quote: "AI + humans = future.",
            social: {
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            id: 3,
            name: "Kharabela",
            position: "Director – India",
            image: "https://inovaantage.com/wp-content/uploads/2024/04/kharabela-team.jpg",
            quote: "Transform everything.",
            social: {
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            id: 4,
            name: "Peekay",
            position: "Director – Malaysia",
            image: "https://inovaantage.com/wp-content/uploads/2024/04/peekay-team.jpg",
            quote: "Scale smart.",
            social: {
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            id: 5,
            name: "Ganesh",
            position: "Risk Advisor",
            image: "https://inovaantage.com/wp-content/uploads/2024/04/ganesh-team.jpg",
            quote: "Strategy drives growth.",
            social: {
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            id: 6,
            name: "Dr. Ramanuj Banerjee",
            position: "Sales and Marketing Director APAC",
            image: "https://inovaantage.com/wp-content/uploads/2025/01/ramanuj.png",
            quote: "Understand users.",
            social: {}
        },
        {
            id: 7,
            name: "Kriti Jena",
            position: "Marketing Director",
            image: "https://inovaantage.com/wp-content/uploads/2024/11/kirti.jpg",
            quote: "Lead globally.",
            social: {}
        },
        {
            id: 8,
            name: "Ash (Ashis) Panigrahi",
            position: "Advisor",
            image: "https://inovaantage.com/wp-content/uploads/2024/11/Ash.png",
            quote: "Diversity innovates.",
            social: {}
        },
        {
            id: 9,
            name: "Gareth Stuart Brown",
            position: "Business Development Advisor",
            image: "https://inovaantage.com/wp-content/uploads/2025/01/gareth.png",
            quote: "Build sustainable tech.",
            social: {
                facebook: "https://www.facebook.com"
            }
        }
    ];;
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 600) setPerView(1);
            else if (window.innerWidth < 992) setPerView(2);
            else setPerView(3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const total = leaders.length;
    const next = () => setIndex(prev => (prev + 1) % total);
    const prev = () => setIndex(prev => (prev - 1 + total) % total);
    useEffect(() => {
        if (paused) return;
        const id = setInterval(next, 2500);
        return () => clearInterval(id);
    }, [paused]);
    const handleTouchStart = e => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchEnd = e => {
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (diff > 50) next();
        if (diff < -50) prev();
    };

    /* create visible slides dynamically */
    const visibleSlides = [];
    for (let i = 0; i < perView; i++) {
        visibleSlides.push(leaders[(index + i) % total]);
    }

    return (
        <section
            className="leaders-wrapper"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* <button className="arrow left" onClick={prev}>‹</button> */}

            <div
                className="leaders-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >

                <div class="leaders-text">
                    <h3>Our Leaders</h3>
                    <p>Experienced professionals guiding digital transformation across three continents. <br/> <span style={{color: "var(--primary)", fontWeight: "600"}}>Innovating to realise business value.</span></p>
                </div>
                <div className="leaders-track">

                    {visibleSlides.map(leader => (
                        <div
                            key={leader.id}
                            className="leader-card"
                            style={{ width: `${100 / perView}%` }}
                            onMouseEnter={() => setHoveredLeader(leader.id)}
                            onMouseLeave={() => setHoveredLeader(null)}
                        >
                            <div className="leader-image-container">

                                <img src={leader.image} alt={leader.name} />

                                <div className={`overlay ${hoveredLeader === leader.id ? "show" : ""}`}>
                                    <p>"{leader.quote}"</p>

                                    <div className="socials">
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </div>
                                </div>
                            </div>

                            <h4>{leader.name}</h4>
                            <span>{leader.position}</span>
                        </div>
                    ))}

                </div>
            </div>

            {/* <button className="arrow right" onClick={next}>›</button> */}
        </section>
    );
}

export default LeadersSection;