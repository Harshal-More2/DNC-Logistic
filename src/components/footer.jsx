import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP FOOTER */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-logo">
              DNC <span>LOGISTICS LLP</span>
            </div>

            <p>
              With industry experience dating back to 1998, DNC Logistics LLP
              delivers reliable freight forwarding, customs clearance,
              transportation and warehousing solutions across India and
              worldwide.
            </p>

            <a href="#contact" className="footer-quote">
              Get a Quote
              <span>↗</span>
            </a>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h3>Services</h3>

            <a href="/services">Air Freight</a>
            <a href="/services">Sea Freight</a>
            <a href="/services">Road Transport</a>
            <a href="/services">Custom Clearance</a>
            <a href="/services">Warehousing</a>
            <a href="/services">Project Cargo</a>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/case-study">Case Study</a>
            <a href="/contact">Contact</a>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h3>Contact</h3>

            {/* Address */}
            <div className="contact-item">

              <span className="contact-icon">
                ⌖
              </span>

              <a
                href="https://www.google.com/maps?q=402E,+4th+Floor,+Fly+Colour+Building,+Near+Mulund+Check+Naka,+Mumbai-400080"
                target="_blank"
                rel="noreferrer"
              >
                402E, 4th Floor, Fly Colour Building,
                <br />
                Near Mulund Check Naka,
                <br />
                Mumbai - 400080.
              </a>

            </div>


            {/* Phone */}
            <div className="contact-item">

              <span className="contact-icon">
                ⌕
              </span>

              <div>

                <a href="tel:+919320709951">
                  +91-9320709951
                </a>

                <br />

                <a href="tel:+919820664388">
                  +91-9820664388
                </a>

              </div>

            </div>


            {/* Email */}
            <div className="contact-item">

              <span className="contact-icon">
                @
              </span>

              <div>

                <a href="mailto:darshan@dnclogisticsllp.com">
                  darshan@dnclogisticsllp.com
                </a>

                <br />

                <a href="mailto:sales@dnclogisticsllp.com">
                  sales@dnclogisticsllp.com
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* TRUST STRIP */}
        <div className="footer-trust">

          <div>
            <span>◎</span>
            Global Network
          </div>

          <div>
            <span>→</span>
            Fast Delivery
          </div>

          <div>
            <span>◇</span>
            Safe Cargo
          </div>

          <div>
            <span>▣</span>
            Customs Experts
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} DNC Logistics LLP.
            All Rights Reserved.
          </p>

          <p>
            Powered by{" "}
            <a
              href="https://saralinfosoft.com/"
              target="_blank"
              rel="noreferrer"
            >
              Saral Infosoft
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;