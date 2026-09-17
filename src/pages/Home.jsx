import "./Home.css";
import { useEffect, useState } from "react";

import {
  Anchor,
  Plane,
  Truck,
  Warehouse,
  ShieldCheck,
  Settings,
} from "lucide-react";


/* =========================================================
   ABOUT ANIMATION WORDS
========================================================= */

const words = [
  "reliability.",
  "trust.",
  "precision.",
  "excellence.",
];


function Home() {

  const [wordIndex, setWordIndex] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setWordIndex((prev) => (prev + 1) % words.length);

    }, 2500);

    return () => clearInterval(interval);

  }, []);
  return (
    <>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero">

        {/* Background Video */}

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/v2.mp4"
            type="video/mp4"
          />
        </video>


        {/* Overlay */}

        <div className="hero-overlay"></div>


        {/* Hero Container */}

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-eyebrow">
              GLOBAL LOGISTICS PARTNER
              <span></span>
            </div>


            <h1>
              Connecting
              <br />
              Businesses
              <br />
              <span>Worldwide</span>
            </h1>


            <p className="hero-description">
              At DNC Logistics LLP, we simplify global trade with reliable,
              cost-effective and end-to-end logistics solutions tailored
              for your business needs.
            </p>


            <div className="hero-buttons">

              <a
                href="/contact"
                className="hero-btn hero-btn-primary"
              >
                Get a Quote
                <span>→</span>
              </a>


              <a
                href="#services"
                className="hero-btn hero-btn-secondary"
              >
                Our Services
              </a>

            </div>


            {/* Hero Stats */}

            <div className="hero-stats">

              <div className="hero-stat">
                <strong>120+</strong>
                <span>Global Partners</span>
              </div>


              <div className="hero-stat">
                <strong>16+</strong>
                <span>Countries Served</span>
              </div>


              <div className="hero-stat">
                <strong>99.98%</strong>
                <span>On-Time Delivery</span>
              </div>

            </div>

          </div>


          {/* Floating Card */}

          <div className="hero-card hero-story-card">

            <div className="hero-card-image hero-story-visual">
              <span className="hero-story-number">25+</span>
              <span className="hero-story-years">YEARS<br />OF EXPERIENCE</span>
            </div>


            <div className="hero-card-content hero-story-content">

              <span className="hero-story-eyebrow">OUR STORY</span>

              <h3>
                Built on experience.
                <br />
                Driven by trust.
              </h3>

              <a
                href="/about"
                className="hero-card-arrow"
                aria-label="Explore Our Story"
              >
                →
              </a>

              <a href="/about" className="hero-story-link">
                Explore Our Story
                <span>→</span>
              </a>

            </div>


            <div className="hero-card-bottom hero-story-bottom">
              <span>1998</span>
              <i>—</i>
              <span>Present</span>
              <i>|</i>
              <span>Global Logistics</span>
            </div>

          </div>

        </div>


        {/* Right Side Navigation */}

        <div className="hero-side-nav">

          <div className="hero-side-item active">
            <span></span>
            SEA
          </div>


          <div className="hero-side-item">
            <span></span>
            AIR
          </div>


          <div className="hero-side-item">
            <span></span>
            LAND
          </div>


          <div className="hero-side-item">
            <span></span>
            CUSTOMS
          </div>


          <div className="hero-side-item">
            <span></span>
            WAREHOUSING
          </div>

        </div>


        {/* Scroll */}

        <div className="hero-scroll">

          <div className="hero-scroll-icon">
            ↓
          </div>

          <span>
            Scroll to explore
          </span>

          <div className="hero-scroll-line"></div>

        </div>

      </section>



      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section className="about-section">

        <div className="about-container">


          {/* IMAGE */}

          <div className="about-image-wrap">

            <div className="about-image">

              <img
                src="/images/abt1.jpg"
                alt="DNC Logistics"
              />

            </div>


            <div className="about-experience">

              <strong>
                25+
              </strong>

              <span>
                Years of
                <br />
                Experience
              </span>

            </div>


            <div className="about-image-label">

              <span>
                01
              </span>

              <p>
                Moving Businesses
                <br />
                Across Borders
              </p>

            </div>

          </div>



          {/* CONTENT */}

          <div className="about-content">

            <div className="about-label">

              ABOUT DNC

              <span></span>

            </div>


            <h2>

              Built on experience.
              <br />

              Driven by{" "}

              <span
                className="changing-word"
                key={wordIndex}
              >
                {words[wordIndex]}
              </span>

            </h2>


            <p className="about-lead">

              DNC Logistics LLP is a trusted logistics partner focused on
              making global trade simpler, more efficient and dependable.

            </p>


            <p className="about-description">

              With industry experience dating back to 1998, our journey has
              evolved through years of expertise, strong relationships and a
              commitment to delivering dependable logistics solutions.

            </p>


            {/* Highlights */}

            <div className="about-highlights">


              <div className="about-highlight">

                <div className="about-highlight-number">
                  01
                </div>

                <div>

                  <h3>
                    Global Connectivity
                  </h3>

                  <p>
                    Connecting businesses with reliable logistics
                    solutions across borders.
                  </p>

                </div>

              </div>


              <div className="about-highlight">

                <div className="about-highlight-number">
                  02
                </div>

                <div>

                  <h3>
                    End-to-End Solutions
                  </h3>

                  <p>
                    Integrated transportation, customs and supply
                    chain support under one roof.
                  </p>

                </div>

              </div>

            </div>


            <a
              href="/about"
              className="about-button"
            >
              Explore DNC
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        className="services-section"
        id="services"
      >

        <div className="services-container">


          {/* SERVICES HEADER */}

          <div className="services-top">


            <div>

              <div className="services-label">
                OUR SERVICES
              </div>


              <h2>

                End-to-End Logistics{" "}

                <span>
                  Solutions
                </span>

              </h2>

            </div>


            <a
              href="/services"
              className="services-view"
            >

              View All Services

              <span>
                →
              </span>

            </a>

          </div>



          {/* SERVICES GRID */}

          <div className="services-grid">


            {/* =================================================
                SERVICE 01
            ================================================= */}

            <a
              href="/services"
              className="service-card"
            >

              <div className="service-image">

                <img
                  src="/images/S1.jpg"
                  alt="International Freight Forwarding"
                />


                <div className="service-icon">

                  <Anchor
                    size={20}
                    strokeWidth={2}
                  />

                </div>

              </div>


              <div className="service-content">

                <h3>
                  International
                  <br />
                  Freight Forwarding
                </h3>


                <p>
                  Sea, air and land freight solutions to keep your
                  business moving globally.
                </p>


                <span className="service-link">

                  Learn More

                  <b>
                    →
                  </b>

                </span>

              </div>

            </a>



            {/* =================================================
                SERVICE 02
            ================================================= */}

            <a
              href="/services"
              className="service-card"
            >

              <div className="service-image">

                <img
                  src="/images/S2.jpg"
                  alt="Custom Clearance"
                />


                <div className="service-icon">

                  <Plane
                    size={20}
                    strokeWidth={2}
                  />

                </div>

              </div>


              <div className="service-content">

                <h3>
                  Custom Clearance
                  <br />
                  (Air & Sea)
                </h3>


                <p>
                  Hassle-free customs clearance with complete
                  documentation support.
                </p>


                <span className="service-link">

                  Learn More

                  <b>
                    →
                  </b>

                </span>

              </div>

            </a>



            {/* =================================================
                SERVICE 03
            ================================================= */}

            <a
              href="/services"
              className="service-card"
            >

              <div className="service-image">

                <img
                  src="/images/S3.jpg"
                  alt="Inland Transportation"
                />


                <div className="service-icon">

                  <Truck
                    size={20}
                    strokeWidth={2}
                  />

                </div>

              </div>


              <div className="service-content">

                <h3>
                  Inland
                  <br />
                  Transportation
                </h3>


                <p>
                  Reliable and cost-effective domestic transportation
                  across India.
                </p>


                <span className="service-link">

                  Learn More

                  <b>
                    →
                  </b>

                </span>

              </div>

            </a>



            {/* =================================================
                SERVICE 04
            ================================================= */}

            <a
              href="/services"
              className="service-card"
            >

              <div className="service-image">

                <img
                  src="/images/S4.jpg"
                  alt="Warehousing and CFS"
                />


                <div className="service-icon">

                  <Warehouse
                    size={20}
                    strokeWidth={2}
                  />

                </div>

              </div>


              <div className="service-content">

                <h3>
                  Warehousing
                  <br />
                  & CFS
                </h3>


                <p>
                  Secure storage and container freight station
                  facilities for your cargo.
                </p>


                <span className="service-link">

                  Learn More

                  <b>
                    →
                  </b>

                </span>

              </div>

            </a>



            {/* =================================================
                SERVICE 05
            ================================================= */}

            <a
              href="/services"
              className="service-card"
            >

              <div className="service-image">

                <img
                  src="/images/S5.jpg"
                  alt="Marine Insurance"
                />


                <div className="service-icon">

                  <ShieldCheck
                    size={20}
                    strokeWidth={2}
                  />

                </div>

              </div>


              <div className="service-content">

                <h3>
                  Marine
                  <br />
                  Insurance
                </h3>


                <p>
                  End-to-end cargo protection for a worry-free
                  shipping journey.
                </p>


                <span className="service-link">

                  Learn More

                  <b>
                    →
                  </b>

                </span>

              </div>

            </a>



            {/* =================================================
                SERVICE 06
            ================================================= */}

            <a
              href="/services"
              className="service-card"
            >

              <div className="service-image">

                <img
                  src="/images/S6.jpg"
                  alt="Export Solutions"
                />


                <div className="service-icon">

                  <Settings
                    size={20}
                    strokeWidth={2}
                  />

                </div>

              </div>


              <div className="service-content">

                <h3>
                  Incentives
                  <br />
                  (Export Schemes)
                </h3>


                <p>
                  Guidance on government incentives and export
                  benefits.
                </p>


                <span className="service-link">

                  Learn More

                  <b>
                    →
                  </b>

                </span>

              </div>

            </a>


          </div>

        </div>

      </section>
      {/* =====================================================
    INDUSTRIES SECTION
===================================================== */}

      <section
        className="industries-section"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          e.currentTarget.style.setProperty(
            "--mouse-x",
            `${e.clientX - rect.left}px`
          );

          e.currentTarget.style.setProperty(
            "--mouse-y",
            `${e.clientY - rect.top}px`
          );
        }}
      >
        {/* Cursor Glow */}
        <div className="industries-cursor-glow"></div>

        <div className="industries-container">

          <div className="industries-header">

            <div className="industries-title-wrap">

              <div className="industries-label">
                INDUSTRIES
              </div>

              <h2>
                Solutions for
                <br />
                <span>Every Industry</span>
              </h2>

            </div>


            <div className="industries-intro">

              <p>
                Tailored logistics solutions designed to meet the unique needs of
                diverse industries worldwide.
              </p>

              <a
                href="/services"
                className="industries-button"
              >
                Explore Industries
                <span>→</span>
              </a>

            </div>

          </div>


          {/* INDUSTRY CARDS */}

          <div className="industries-grid">

            <a href="/industries" className="industry-card">
              <div className="industry-icon">◉</div>
              <span>01</span>
              <h3>Automotive</h3>
              <p>Reliable logistics for automotive supply chains.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">✚</div>
              <span>02</span>
              <h3>
                Pharma &
                <br />
                Healthcare
              </h3>
              <p>Secure and dependable movement of critical goods.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">▣</div>
              <span>03</span>
              <h3>Electronics</h3>
              <p>Precision logistics for technology-driven businesses.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">◇</div>
              <span>04</span>
              <h3>
                Textile &
                <br />
                Apparel
              </h3>
              <p>Efficient logistics supporting global fashion supply chains.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">✣</div>
              <span>05</span>
              <h3>
                Machinery &
                <br />
                Industrial
              </h3>
              <p>Specialized transportation for industrial cargo.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">♢</div>
              <span>06</span>
              <h3>
                Food &
                <br />
                Beverages
              </h3>
              <p>Dependable logistics for fast-moving goods.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">▤</div>
              <span>07</span>
              <h3>
                Retail &
                <br />
                E-Commerce
              </h3>
              <p>Flexible logistics built for growing businesses.</p>
              <b>→</b>
            </a>


            <a href="/industries" className="industry-card">
              <div className="industry-icon">♙</div>
              <span>08</span>
              <h3>Oil & Gas</h3>
              <p>Reliable movement of specialized industrial cargo.</p>
              <b>→</b>
            </a>

          </div>


          <div className="industries-bottom">

            <span>
              08 INDUSTRIES
            </span>

            <div className="industries-arrows">
              <button>←</button>
              <button>→</button>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
    WHY CHOOSE DNC
===================================================== */}

      <section className="why-section">

        <div className="why-container">

          {/* LEFT CONTENT */}
          <div className="why-intro">

            <span className="section-label">
              WHY CHOOSE DNC
            </span>

            <h2>
              More Than Logistics.
              <br />
              <span>A Trusted Partnership.</span>
            </h2>

            <p>
              We deliver more than just logistics — we deliver peace of mind.
              With a customer-first approach, global expertise, and a commitment
              to excellence, DNC Logistics LLP is the partner you can rely on.
            </p>

            <a href="/about" className="why-button">
              Our Advantage
              <span>→</span>
            </a>

          </div>


          {/* CENTER ADVANTAGES */}
          <div className="why-features">

            <div className="why-feature">

              <div className="why-icon">▣</div>

              <div>
                <h3>Daily Reports</h3>
                <p>Stay informed at every step.</p>
              </div>

            </div>


            <div className="why-feature">

              <div className="why-icon">◇</div>

              <div>
                <h3>Enhanced Safety</h3>
                <p>Your cargo, our priority.</p>
              </div>

            </div>


            <div className="why-feature">

              <div className="why-icon">▣</div>

              <div>
                <h3>Own Transport Vehicles</h3>
                <p>Better control & timely delivery.</p>
              </div>

            </div>


            <div className="why-feature">

              <div className="why-icon">◷</div>

              <div>
                <h3>Timely Clearance</h3>
                <p>Quick and efficient processing.</p>
              </div>

            </div>


            <div className="why-feature">

              <div className="why-icon">⚙</div>

              <div>
                <h3>One Stop Solution</h3>
                <p>End-to-end logistics support.</p>
              </div>

            </div>


            <div className="why-feature">

              <div className="why-icon">♙</div>

              <div>
                <h3>Experienced Manpower</h3>
                <p>A skilled team you can trust.</p>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE CARD */}
          <div className="why-media">

            <img
              src="/images/img2.jpg"
              alt="DNC Logistics transportation"
            />

            <div className="why-media-text">
              <span>01</span>

              <h3>
                Moving Businesses
                <br />
                Across Borders
              </h3>

              <a href="/about">
                Explore
                <span>↗</span>
              </a>
            </div>

          </div>

        </div>

      </section>
      {/* =========================================================
    PROCESS SECTION
========================================================= */}

      <section className="process-section" id="process">

        <div className="process-header">
          <span>OUR PROCESS</span>

          <h2>
            How We Move
            <strong> Your Cargo.</strong>
          </h2>

          <p>
            A simple, transparent and reliable process designed
            to keep your shipments moving smoothly.
          </p>
        </div>


        <div className="process-timeline">

          {/* STEP 01 */}
          <div className="process-item">

            <div className="process-card">
              <span className="process-step">01</span>

              <h3>Receive</h3>

              <p>
                We receive your shipment requirements,
                verify the details and prepare everything
                for smooth processing.
              </p>
            </div>

            <div className="process-dot">
              <span>01</span>
            </div>

          </div>


          {/* STEP 02 */}
          <div className="process-item">

            <div className="process-card">
              <span className="process-step">02</span>

              <h3>Process</h3>

              <p>
                Our team handles documentation, planning
                and operational requirements to ensure
                accurate cargo movement.
              </p>
            </div>

            <div className="process-dot">
              <span>02</span>
            </div>

          </div>


          {/* STEP 03 */}
          <div className="process-item">

            <div className="process-card">
              <span className="process-step">03</span>

              <h3>Pick</h3>

              <p>
                Cargo is carefully selected, prepared and
                organized according to shipment requirements.
              </p>
            </div>

            <div className="process-dot">
              <span>03</span>
            </div>

          </div>


          {/* STEP 04 */}
          <div className="process-item">

            <div className="process-card">
              <span className="process-step">04</span>

              <h3>Custom Clearance</h3>

              <p>
                We manage documentation and customs
                compliance to keep your shipment moving
                without unnecessary delays.
              </p>
            </div>

            <div className="process-dot">
              <span>04</span>
            </div>

          </div>


          {/* STEP 05 */}
          <div className="process-item">

            <div className="process-card">
              <span className="process-step">05</span>

              <h3>Ship</h3>

              <p>
                Your cargo is securely dispatched through
                the most suitable transportation network
                for timely delivery.
              </p>
            </div>

            <div className="process-dot">
              <span>05</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT SECTION
      ===================================================== */}

      <section className="impact-section">

        <div className="impact-overlay"></div>


        <div className="impact-container">


          {/* INTRO */}

          <div className="impact-intro">

            <div className="impact-label">

              <span></span>

              OUR IMPACT

            </div>


            <h2>

              Numbers That
              <br />

              <span>Build Trust.</span>

            </h2>


            <p>

              Our performance reflects a commitment to reliability,
              precision and seamless logistics.

            </p>

          </div>



          {/* STATS */}

          <div className="impact-panel">


            <div className="impact-stat">

              <div className="impact-icon">
                ◉
              </div>

              <div>

                <strong>
                  99.97%
                </strong>

                <span>
                  Dispatch Accuracy
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ◎
              </div>

              <div>

                <strong>
                  120+
                </strong>

                <span>
                  Global Partners
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ◇
              </div>

              <div>

                <strong>
                  100%
                </strong>

                <span>
                  On-Time Performance
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ♙
              </div>

              <div>

                <strong>
                  6000+
                </strong>

                <span>
                  Yearly Orders
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ◎
              </div>

              <div>

                <strong>
                  16
                </strong>

                <span>
                  Countries Served
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ✣
              </div>

              <div>

                <strong>
                  9+
                </strong>

                <span>
                  Transport Vehicles
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ▦
              </div>

              <div>

                <strong>
                  4
                </strong>

                <span>
                  Strategic Cities
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <div className="impact-icon">
                ▣
              </div>

              <div>

                <strong>
                  16
                </strong>

                <span>
                  Containers Daily
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
    CTA SECTION
===================================================== */}

      <section
        className="cta-section"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          e.currentTarget.style.setProperty(
            "--mouse-x",
            `${e.clientX - rect.left}px`
          );

          e.currentTarget.style.setProperty(
            "--mouse-y",
            `${e.clientY - rect.top}px`
          );
        }}
      >

        {/* Cursor Glow */}
        <div className="cta-cursor-glow"></div>

        <div className="cta-container">

          {/* LEFT IMAGE */}
          <div className="cta-image">

            <img
              src="/images/S1.jpg"
              alt="Global logistics"
            />

            <div className="cta-image-overlay"></div>

          </div>


          {/* CENTER CONTENT */}
          <div className="cta-content">

            <div className="cta-label">
              READY TO MOVE FORWARD?
              <span></span>
            </div>

            <h2>
              Let's Simplify
              <br />
              Your <span>Logistics.</span>
            </h2>

            <p>
              Partner with DNC Logistics LLP and experience seamless,
              reliable and cost-effective logistics solutions.
            </p>

            <div className="cta-buttons">

              <a
                href="/contact#contact-form"
                className="cta-primary"
              >
                Get a Quote
                <span>→</span>
              </a>

              <a
                href="/contact#contact-form"
                className="cta-secondary"
              >
                Contact Us
              </a>

            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="cta-route">

            <div className="route-location route-start">
              <span></span>
              <small>Global Reach</small>
              <strong>Local Expertise</strong>
            </div>

            <div className="route-path">
              <span className="route-dot"></span>
              <div className="route-dashed"></div>
              <span className="route-arrow">✈</span>
            </div>

            <div className="route-text">
              Delivering
              <br />
              Possibilities
              <br />
              Worldwide.
            </div>

          </div>

        </div>

      </section>


    </>
  );
}


export default Home;