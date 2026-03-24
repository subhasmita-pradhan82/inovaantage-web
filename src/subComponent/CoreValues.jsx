import React from 'react'

const CoreValues = ({reference}) => {
    return (
        <section className="core-values-section">
            <div className="container hidden-fade" ref={reference}>

                <div className="section-header">
                    <h2>Our Core Values</h2>
                    <p>
                        The foundation of our success lies in strong principles that guide our
                        culture, innovation, and commitment to excellence.
                    </p>
                </div>

                <div className="values-grid">

                    <div className="value-card">
                        <div className="icon">📈</div>
                        <h3>Customer Delivery Growth</h3>
                        <p>
                            We set high standards and consistently exceed expectations by
                            delivering quality-driven solutions that create long-term value
                            for our clients and stakeholders.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="icon">⚖️</div>
                        <h3>Integrity First</h3>
                        <p>
                            Transparency, accountability, and ethics define our approach.
                            We prioritize honesty and trust in every engagement.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="icon">🤝</div>
                        <h3>Relationship Focus</h3>
                        <p>
                            We build long-lasting partnerships with clients, employees, and
                            stakeholders by fostering collaboration and mutual respect.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="icon">✅</div>
                        <h3>Outcome-Oriented Results</h3>
                        <p>
                            Our focus is on delivering measurable outcomes that drive
                            performance, efficiency, and sustainable growth.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="icon">⚙️</div>
                        <h3>Process & Innovation</h3>
                        <p>
                            We embrace advanced technologies and optimized processes to
                            deliver scalable, efficient, and future-ready solutions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CoreValues