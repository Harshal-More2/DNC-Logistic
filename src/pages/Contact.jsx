import "./Contact.css";
import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [formStatus, setFormStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipients = "darshan@dnclogisticsllp.com,sales@dnclogisticsllp.com";
    const subject = encodeURIComponent(`New Enquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;

    setFormStatus("Your email draft was opened. Please click send in your mail app.");
    setStatusType("success");
    setFormData(INITIAL_FORM);
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">

        <div className="contact-hero-bg"></div>

        <div className="contact-hero-content">
          <span className="section-label">GET IN TOUCH</span>

          <h1>
            Let's move your
            <strong> cargo forward.</strong>
          </h1>

          <p>
            Have a shipment requirement or need logistics support?
            Our team is ready to help you find the right solution.
          </p>

          <div className="contact-breadcrumb">
            <span>Home</span>
            <b>/</b>
            <strong>Contact</strong>
          </div>
        </div>

        <div className="contact-hero-number">
          <span>DNCL</span>
          <strong>01</strong>
        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="contact-info-section">

        <div className="contact-info-header">

          <div>
            <span className="section-label">CONTACT DNC</span>

            <h2>
              Let's talk about
              <strong> your logistics.</strong>
            </h2>
          </div>

          <p>
            Whether you need shipment clearance, transportation,
            warehousing or specialized cargo support, we're here
            to make the process simple.
          </p>

        </div>


        <div className="contact-info-grid">

          {/* PHONE */}
          <div className="contact-info-card">

            <span className="contact-card-number">01</span>

            <div className="contact-icon">☎</div>

            <span>CALL US</span>

            <h3>+91 93207 09951</h3>
            <p>+91 98206 64388</p>

          </div>


          {/* EMAIL */}
          <div className="contact-info-card">

            <span className="contact-card-number">02</span>

            <div className="contact-icon">@</div>

            <span>EMAIL US</span>

            <h3>darshan@dnclogisticsllp.com</h3>
            <p>sales@dnclogisticsllp.com</p>

          </div>


          {/* OFFICE */}
          <div className="contact-info-card">

            <span className="contact-card-number">03</span>

            <div className="contact-icon">⌖</div>

            <span>VISIT US</span>

            <h3>Mumbai Office</h3>

            <p>
              402, 4th Floor, Fly Colour Building,<br />
              Near Mulund Check Naka Bus Depot,<br />
              DDU Marg, Mulund West,<br />
              Mumbai - 400080
            </p>

          </div>

        </div>

      </section>


      {/* ================= FORM + MAP ================= */}
      <section className="contact-form-section">

        <div className="contact-form-wrapper">


          {/* ================= LEFT : FORM ================= */}
          <div className="contact-form-content">

            <span className="section-label">
              SEND AN ENQUIRY
            </span>

            <h2>
              Tell us what
              <strong> you need.</strong>
            </h2>

            <p>
              Share your shipment requirements with us and
              our team will get back to you.
            </p>


            <form className="contact-form" onSubmit={handleSubmit}>

              {/* NAME + PHONE */}
              <div className="form-row">

                <div className="form-group">

                  <label>Your Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}
              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>


              {/* SERVICE */}
              <div className="form-group">

                <label>Service Required</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Road Transport</option>
                  <option>Custom Clearance</option>
                  <option>Warehousing</option>
                  <option>Project Cargo</option>

                </select>

              </div>


              {/* MESSAGE */}
              <div className="form-group">

                <label>Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your shipment..."
                  required
                ></textarea>

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit"
              >
                Send Enquiry
                <span>→</span>
              </button>

              {formStatus && (
                <p className={`contact-form-status ${statusType}`}>
                  {formStatus}
                </p>
              )}

            </form>

          </div>


          {/* ================= RIGHT : MAP ================= */}
          <div className="contact-map-side">

            <div className="contact-map-image">

              {/* GOOGLE MAP */}
              <iframe
                title="DNC Logistics Mumbai Office"
                src="https://www.google.com/maps?q=402,+4th+Floor,+Fly+Colour+Bldg,+Near+Mulund+Check+Naka+Bus+Depot,+DDU+Marg,+Mulund,+Mumbai-400080&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>


              {/* MAP OVERLAY */}
              <div className="map-overlay"></div>


              {/* OFFICE CARD */}
              <div className="map-card">

                <span>OUR OFFICE</span>

                <h3>
                  Mumbai,<br />
                  India
                </h3>

                <p>
                  402, 4th Floor, Fly Colour Building,<br />
                  Near Mulund Check Naka Bus Depot,<br />
                  DDU Marg, Mulund West,<br />
                  Mumbai - 400080
                </p>

                <a
                  href="https://www.google.com/maps/search/402,+4th+Floor,+Fly+Colour+Bldg,+Near+Mulund+Check+Naka+Bus+Depot,+DDU+Marg,+Mulund,+Mumbai-400+080"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps ↗
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Contact;