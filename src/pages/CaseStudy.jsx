import "./CaseStudy.css";

function CaseStudy() {
  const caseStudies = [
    {
      number: "01",
      category: "CUSTOMS & COMPLIANCE",
      title:
        "How DNC Logistics helped one of India's oldest and largest PP bags manufacturers in Daman build competitive rates in the global market.",
      image: "/images/S1.jpg",

      need: `The client was facing a lot of problems with IGST refund-related issues. They required a customs house agent who could take care of all their IGST-related and advance licence-related issues and should be located at all the three ports, JNPT, ICD Mumbai and Hazira.`,

      solution: [
        "We DNC Logistics LLP identified the problem.",
        "We registered their firm with the customs ICEGATE system where they could see all the error codes regarding IGST errors and also approached the customs department to resolve the errors.",
        "Secondly, we educated and helped their staff on how to file the advance licences in DGFT."
      ],

      benefits: [
        "The client now knew where the IGST error was and how to see and rectify the error if it arrived.",
        "Connecting with DNC Logistics LLP gave them one point of solution for all their queries and allowed them to deal only with one C&F agent for all port shipments."
      ]
    },

    {
      number: "02",
      category: "FREIGHT OPTIMIZATION",
      title:
        "How DNC Logistics helped one of India's oldest and largest Agarbatti manufacturers build competitive rates in the global market.",
      image: "/images/S2.jpg",

      need: `The client was very much upset with the increase in sea freight rates due to the pandemic and exchange rates levied by the shipping line, with almost a difference of Rs. 2 to 3 per USD.`,

      solution: [
        "We DNC Logistics LLP identified the problem.",
        "We made annual/monthly contracts with major shipping lines for this particular client and froze their oceanic freight rates.",
        "Secondly, we asked the client to make the payment in US dollars to the shipping line, which also cleared their problem of exchange rate differences."
      ],

      benefits: [
        "The client was very happy as he got tension-free oceanic freight rates. Whether the rates shoot up or go down, he would get a fixed price for his container.",
        "The solution also saved him around Rs. 20 lakhs per month, which amounted to Rs. 2,40,00,000 annually."
      ]
    }
  ];

  return (
    <main className="case-study-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-study-hero">

        <div className="case-study-hero-image"></div>
        <div className="case-study-hero-overlay"></div>

        <div className="case-study-hero-content">

          <span className="case-study-label">
            CASE STUDIES
          </span>

          <h1>
            Real challenges.
            <strong>Real logistics solutions.</strong>
          </h1>

          <p>
            A closer look at how DNC Logistics solves complex
            logistics challenges and creates measurable value
            for its clients.
          </p>

          <div className="case-study-breadcrumb">
            <span>Home</span>
            <b>/</b>
            <strong>Case Study</strong>
          </div>

        </div>

        <div className="case-study-hero-number">
          <span>DNCL</span>
          <strong>03</strong>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="case-study-intro">

        <div className="case-study-intro-line"></div>

        <span className="section-label">
          OUR WORK
        </span>

        <h2>
          Logistics problems are
          <strong>business problems.</strong>
        </h2>

        <p>
          These case studies showcase how DNC Logistics combines
          industry knowledge, freight expertise and practical
          problem-solving to create better outcomes for its clients.
        </p>

      </section>


      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <section className="case-study-list">

        {caseStudies.map((study) => (
          <article
            className="case-study-item"
            key={study.number}
          >

            {/* IMAGE */}

            <div className="case-study-visual">

              <img
                src={study.image}
                alt={study.title}
              />

              <div className="case-study-visual-overlay"></div>

              <div className="case-study-number">
                {study.number}
              </div>

              <span className="case-study-category">
                {study.category}
              </span>

            </div>


            {/* CONTENT */}

            <div className="case-study-content">

              <span className="case-study-small-number">
                CASE {study.number}
              </span>

              <h2>
                {study.title}
              </h2>


              {/* DETAILS */}

              <div className="case-study-details">


                {/* NEED */}

                <div className="case-study-block">

                  <div className="case-study-block-heading">

                    <span>01</span>

                    <h3>
                      The Need
                    </h3>

                  </div>

                  <p>
                    {study.need}
                  </p>

                </div>


                {/* SOLUTION */}

                <div className="case-study-block">

                  <div className="case-study-block-heading">

                    <span>02</span>

                    <h3>
                      The Solution
                    </h3>

                  </div>

                  <ul>
                    {study.solution.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>


                {/* BENEFITS */}

                <div className="case-study-block case-study-benefits">

                  <div className="case-study-block-heading">

                    <span>03</span>

                    <h3>
                      The Benefits
                    </h3>

                  </div>

                  <ul>
                    {study.benefits.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

          </article>
        ))}

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="case-study-cta">

        <div className="case-study-cta-content">

          <span className="section-label">
            HAVE A LOGISTICS CHALLENGE?
          </span>

          <h2>
            Let's solve your
            <strong>next challenge.</strong>
          </h2>

          <p>
            Tell us about your shipment, challenge or requirement.
            Our team will help you find the right logistics solution.
          </p>

          <a
            href="/contact"
            className="case-study-cta-button"
          >
            Get a Quote
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default CaseStudy;