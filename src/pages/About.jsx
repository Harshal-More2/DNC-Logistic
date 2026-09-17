import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero">

        <div className="about-hero-bg">
          <img
            src="/images/abt.jpg"
            alt="DNC Logistics"
          />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-inner">

          <div className="about-hero-left">

            <div className="about-hero-label">
              <span></span>
              ABOUT DNC LOGISTICS
            </div>

            <h1>
              More Than
              <br />
              <strong>Moving Cargo.</strong>
            </h1>

            <p>
              We build the connections that keep global
              business moving — reliably, efficiently
              and without unnecessary complexity.
            </p>

            <div className="about-hero-meta">
              <span>HOME</span>
              <b>/</b>
              <strong>ABOUT US</strong>
            </div>

          </div>


          <div className="about-hero-right">

            <div className="about-hero-card">

              <div className="about-card-top">
                <span>DNC LOGISTICS LLP</span>
                <span>01</span>
              </div>

              <div className="about-card-main">
                <strong>25+</strong>
                <p>
                  YEARS OF
                  <br />
                  EXPERIENCE
                </p>
              </div>

              <div className="about-card-line"></div>

              <div className="about-card-bottom">
                <span>EST. 1998</span>
                <span>INDIA · GLOBAL</span>
              </div>

            </div>

          </div>

        </div>


        <div className="about-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>
      {/* ================= COMPANY STORY ================= */}
      <section className="about-story">

        <div className="about-story-inner">

          {/* LEFT IMAGE */}
          <div className="story-visual">

            <div className="story-image">
              <img
                src="/images/abt1.jpg"
                alt="DNC Logistics operations"
              />
            </div>

            <div className="story-image-label">
              <span>01</span>
              <p>EXPERIENCE<br />IN MOTION</p>
            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div className="story-content">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              Built on experience.
              <br />
              <strong>Driven by movement.</strong>
            </h2>

            <p className="story-intro">
              DNC Logistics LLP is built on decades of industry experience,
              operational knowledge and a simple belief — logistics should
              make business easier.
            </p>

            <p>
              With industry experience dating back to 1998, our journey
              officially began in 2008 as Sai Global Logistics. In 2019,
              we evolved into DNC Logistics LLP, marking a new chapter
              in our growth.
            </p>

            <p>
              Since then, we have continued to develop reliable logistics
              solutions focused on precision, transparency and long-term
              customer relationships.
            </p>


            {/* CREDENTIALS */}
            <div className="story-credentials">

              <div className="credential">
                <strong>1998</strong>
                <span>Industry<br />Experience</span>
              </div>

              <div className="credential">
                <strong>2008</strong>
                <span>Business<br />Journey</span>
              </div>

              <div className="credential">
                <strong>2019</strong>
                <span>DNC Logistics<br />LLP</span>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= OUR JOURNEY ================= */}
      <section className="about-journey">

        <div className="journey-top">

          <div>
            <span className="section-label">OUR JOURNEY</span>

            <h2>
              Built over years.
              <br />
              <strong>Driven by progress.</strong>
            </h2>
          </div>

          <p>
            From our beginnings to where we are today, every milestone
            represents our commitment to creating better logistics
            experiences.
          </p>

        </div>


        <div className="journey-track">

          <div className="journey-progress"></div>

          {/* 1998 */}
          <div className="journey-block">

            <div className="journey-year">
              <span>01</span>
              1998
            </div>

            <div className="journey-content">
              <span>THE BEGINNING</span>
              <h3>Industry Experience</h3>
              <p>
                Our journey in the logistics industry began with a strong
                foundation of experience and operational knowledge.
              </p>
            </div>

          </div>


          {/* 2008 */}
          <div className="journey-block">

            <div className="journey-year">
              <span>02</span>
              2008
            </div>

            <div className="journey-content">
              <span>SAI GLOBAL LOGISTICS</span>
              <h3>A New Journey</h3>
              <p>
                We officially began our business journey as Sai Global
                Logistics, expanding our capabilities and customer network.
              </p>
            </div>

          </div>


          {/* 2019 */}
          <div className="journey-block">

            <div className="journey-year">
              <span>03</span>
              2019
            </div>

            <div className="journey-content">
              <span>DNC LOGISTICS LLP</span>
              <h3>A New Identity</h3>
              <p>
                We rebranded as DNC Logistics LLP, creating a stronger
                platform for the next phase of our growth.
              </p>
            </div>

          </div>


          {/* TODAY */}
          <div className="journey-block">

            <div className="journey-year">
              <span>04</span>
              TODAY
            </div>

            <div className="journey-content">
              <span>THE FUTURE</span>
              <h3>Moving Forward</h3>
              <p>
                We continue to build dependable logistics solutions with
                technology, experience and customer-focused operations.
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* ================= OUR FEATURES ================= */}
      <section className="about-features">

        <div className="features-inner">

          {/* LEFT CONTENT */}
          <div className="features-content">

            <span className="section-label">
              OUR FEATURES
            </span>

            <h2>
              Your Trusted Logistics
              <br />
              <strong>Partner Since 2008</strong>
            </h2>

            <div className="features-list">

              <div className="feature-item">
                <div className="feature-number">01</div>

                <div className="feature-text">
                  <h3>Fast Export Shipment Clearance :</h3>

                  <p>
                    We clear export shipments within 1 to 5 hours,
                    ensuring swift and reliable service for all your
                    international shipments.
                  </p>
                </div>

                <div className="feature-arrow">↗</div>
              </div>


              <div className="feature-item">
                <div className="feature-number">02</div>

                <div className="feature-text">
                  <h3>Efficient Import Shipment Clearance :</h3>

                  <p>
                    We clear import shipments within 3 days of arrival,
                    ensuring that your goods move without delay through
                    customs.
                  </p>
                </div>

                <div className="feature-arrow">↗</div>
              </div>


              <div className="feature-item">
                <div className="feature-number">03</div>

                <div className="feature-text">
                  <h3>DPD Shipment Clearance in 48hrs :</h3>

                  <p>
                    For DPD shipments, we ensure clearance within 48 hours
                    of arrival, making sure your goods stay on track for
                    quick delivery.
                  </p>
                </div>

                <div className="feature-arrow">↗</div>
              </div>


              <div className="feature-item">
                <div className="feature-number">04</div>

                <div className="feature-text">
                  <h3>Expertise in Capital Goods :</h3>

                  <p>
                    We specialize in both first-hand and second-hand
                    capital goods, including machinery and project cargo,
                    ensuring safe and efficient handling of your valuable
                    assets.
                  </p>
                </div>

                <div className="feature-arrow">↗</div>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="features-visual">

            <img
              src="/images/S2.jpg"
              alt="DNC Logistics"
            />

            <div className="features-visual-overlay">
              <span>LOGISTICS EXPERTISE</span>
              <strong>
                Precision in
                <br />
                every shipment.
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="vision-mission">

        <div className="vision-mission-inner">

          <div className="vm-intro">
            <span className="section-label">OUR DIRECTION</span>

            <h2>
              Built around
              <br />
              <strong>purpose.</strong>
            </h2>
          </div>

          <div className="vm-description">
            <p>
              Our vision and mission guide the way we build,
              operate and grow as a logistics partner.
            </p>
          </div>


          <div className="vm-grid">

            {/* VISION */}
            <div className="vm-block">

              <div className="vm-block-top">
                <span>01</span>
                <small>OUR VISION</small>
              </div>

              <h3>Our Vision</h3>

              <p>
                To be one of the largest international logistics
                solution provider to our customers with tailored,
                innovative and scalable solution which reduce their
                costs and increase their competitiveness.
              </p>

            </div>


            {/* MISSION */}
            <div className="vm-block">

              <div className="vm-block-top">
                <span>02</span>
                <small>OUR MISSION</small>
              </div>

              <h3>Our Mission</h3>

              <p>
                Aiming to be a leading, innovative, and sustainable
                provider of integrated supply chain solutions,
                connecting businesses and communities effectively
                and efficiently.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ================= SERVICES TEASER ================= */}
      <section className="about-services-teaser">

        <div className="services-teaser-inner">

          <div className="services-teaser-text">

            <span className="section-label">
              WHAT WE DO
            </span>

            <h2>
              More than moving cargo.
              <br />
              <strong>We move business forward.</strong>
            </h2>

            <p>
              Explore our end-to-end logistics services designed to
              keep your shipments moving smoothly, efficiently and
              reliably.
            </p>

            <a href="/services" className="services-teaser-btn">
              Explore Our Services
              <span>→</span>
            </a>

          </div>


          <div className="services-teaser-items">

            <div className="teaser-item">
              <span>01</span>
              <strong>Air Freight</strong>
              <em>↗</em>
            </div>

            <div className="teaser-item">
              <span>02</span>
              <strong>Sea Freight</strong>
              <em>↗</em>
            </div>

            <div className="teaser-item">
              <span>03</span>
              <strong>Road Transport</strong>
              <em>↗</em>
            </div>

            <div className="teaser-item">
              <span>04</span>
              <strong>Custom Clearance</strong>
              <em>↗</em>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

export default About;