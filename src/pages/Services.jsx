import "./Services.css";

function Services() {
    return (
        <>

            <main className="services-page">

                {/* =====================================================
            HERO
        ===================================================== */}

                <section className="services-hero">

                    <div className="services-hero-bg"></div>

                    <div className="services-hero-content">

                        <span className="services-label">
                            OUR SERVICES
                        </span>

                        <h1>
                            Logistics built
                            <strong>around your cargo.</strong>
                        </h1>

                        <p>
                            From international freight and customs clearance to
                            transportation and warehousing, we provide dependable
                            solutions across the entire movement of your cargo.
                        </p>

                        <div className="services-breadcrumb">
                            <span>Home</span>
                            <b>/</b>
                            <strong>Services</strong>
                        </div>

                    </div>

                    <div className="services-hero-index">
                        <span>DNCL</span>
                        <strong>02</strong>
                    </div>

                </section>


                {/* =====================================================
            SERVICES SHOWCASE
        ===================================================== */}

                <section className="services-showcase">

                    <div className="services-showcase-header">

                        <div>

                            <span className="section-label">
                                OUR EXPERTISE
                            </span>

                            <h2>
                                Solutions for
                                <strong>every shipment.</strong>
                            </h2>

                        </div>

                        <p>
                            From the first mile to the final destination, our
                            logistics solutions are designed to keep your cargo
                            moving with confidence.
                        </p>

                    </div>


                    {/* =================================================
              SERVICES GRID
          ================================================= */}

                    {/* =================================================
    SERVICES GRID
================================================= */}

                    <div className="services-grid">


                        {/* SERVICE 01 */}

                        <article className="service-card">

                            <div className="service-card-image">
                                <img
                                    src="/images/S1.jpg"
                                    alt="International Freight Forwarding"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>01</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                ✈
                            </div>

                            <h3>
                                International
                                <strong>Freight Forwarding</strong>
                            </h3>

                            <p>
                                Reliable air and sea freight solutions connecting
                                your business to markets around the world.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                        {/* SERVICE 02 */}

                        <article className="service-card">

                            <div className="service-card-image">
                                <img
                                    src="/images/S2.jpg"
                                    alt="Customs Clearance"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>02</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                ◈
                            </div>

                            <h3>
                                Customs
                                <strong>Clearance</strong>
                            </h3>

                            <p>
                                Expert handling of customs documentation, duties,
                                regulations, and clearance procedures.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                        {/* SERVICE 03 */}

                        <article className="service-card">

                            <div className="service-card-image">
                                <img
                                    src="/images/S3.jpg"
                                    alt="Inland Transportation"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>03</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                ◫
                            </div>

                            <h3>
                                Inland
                                <strong>Transportation</strong>
                            </h3>

                            <p>
                                Efficient road transportation with reliable movement
                                of cargo across destinations.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                        {/* SERVICE 04 */}

                        <article className="service-card">

                            <div className="service-card-image">
                                <img
                                    src="/images/S4.jpg"
                                    alt="Warehousing and CFS Solutions"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>04</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                ▦
                            </div>

                            <h3>
                                Warehousing &
                                <strong>CFS Solutions</strong>
                            </h3>

                            <p>
                                Secure, flexible warehousing and cargo handling
                                solutions for international trade.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                        {/* SERVICE 05 */}

                        <article className="service-card">

                            <div className="service-card-image">
                                <img
                                    src="/images/S5.jpg"
                                    alt="Marine Insurance"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>05</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                ◉
                            </div>

                            <h3>
                                Marine
                                <strong>Insurance</strong>
                            </h3>

                            <p>
                                Cargo protection solutions designed to safeguard
                                your shipments against unexpected risks.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                        {/* SERVICE 06 */}

                        <article className="service-card">

                            <div className="service-card-image">
                                <img
                                    src="/images/S6.jpg"
                                    alt="Export Incentives"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>06</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                %
                            </div>

                            <h3>
                                Export
                                <strong>Incentives</strong>
                            </h3>

                            <p>
                                Guidance on export incentives, rebates, exemptions,
                                and government schemes.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                        {/* SERVICE 07 */}

                        <article className="service-card service-card-featured">

                            <div className="service-card-image">
                                <img
                                    src="/images/S7.jpg"
                                    alt="Total Logistics"
                                />
                            </div>

                            <div className="service-card-top">
                                <span>07</span>
                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-card-icon">
                                ◇
                            </div>

                            <h3>
                                Total
                                <strong>Logistics</strong>
                            </h3>

                            <p>
                                End-to-end logistics coordination bringing freight,
                                customs, transportation, and warehousing together.
                            </p>

                            <a href="/contact">
                                Explore service
                                <span>→</span>
                            </a>

                        </article>


                    </div>

                </section>


                {/* =====================================================
                    CTA
                 ===================================================== */}

                <section className="services-cta">

                    <div className="services-cta-bg"></div>

                    <div className="services-cta-content">

                        <span className="section-label">
                            READY TO MOVE?
                        </span>

                        <h2>
                            Your cargo deserves
                            <strong>a better journey.</strong>
                        </h2>

                        <p>
                            Tell us what you need to move. We'll help you
                            find the right logistics solution.
                        </p>

                        <a
                            href="/contact"
                            className="services-cta-button"
                        >
                            Get a Quote
                            <span>→</span>
                        </a>

                    </div>

                </section>

            </main>
        </>
    );
}

export default Services;