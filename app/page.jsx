// app/page.jsx

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</p>

              <h1>
                KRINEDAL<span className="hero-r">-R</span>
              </h1>

              <p className="hero-lead">
                24/7 storm damage call-out, full roof renewals and{" "}
                <strong>luxury tiling</strong> for homes and rental properties.
                Snow, rain or storm won’t stop us.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="tel:0831762475">
                  Call 24/7 Storm Line
                </a>
                <a
                  className="btn btn-outline"
                  href="mailto:krinedalr@gmail.com?subject=Quote%20request"
                >
                  Request a quote by email
                </a>
              </div>

              <ul className="hero-bullets">
                <li>Emergency storm make-safe within hours*</li>
                <li>Full roof change &amp; leak tracing</li>
                <li>Luxury bathroom &amp; kitchen tiling</li>
                <li>Landlord-ready refresh between tenants</li>
              </ul>

              <p className="hero-note">
                *Response time depends on location &amp; weather conditions.
              </p>
            </div>

            <aside className="hero-card">
              <h2>24/7 Storm Call-Out</h2>
              <p>
                Red emergency line when your roof is leaking, tiles are down or
                trees have damaged the property.
              </p>
              <ul className="hero-card-list">
                <li>Storm make-safe &amp; temporary cover</li>
                <li>Priority for elderly &amp; vulnerable clients</li>
                <li>Photos &amp; report for insurers</li>
              </ul>
              <p className="hero-card-note">
                Snow, rain or storm won’t stop us – it only changes how we work
                on your roof.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section section-alt">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency roof make-safe, to full roof renewals and
            hotel-standard luxury tiling, we keep homes and rentals safe,
            watertight and ready to move into.
          </p>

          <div className="grid services-grid">
            <article className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after damage, then plan permanent repairs once
                the weather settles.
              </p>
            </article>

            <article className="card">
              <h3>Full Roof Renewal</h3>
              <p>
                Complete tear-off and new roof systems, leak tracing and
                long-term protection for Irish weather.
              </p>
            </article>

            <article className="card">
              <h3>Luxury Bathroom &amp; Kitchen Tiling</h3>
              <p>
                Premium tile layouts with clean lines, marble-style finishes and
                easy-to-clean grout for modern living.
              </p>
            </article>

            <article className="card">
              <h3>Sale-Ready Makeover</h3>
              <p>
                Freshen exteriors, small repairs and premium tiling touches to
                boost buyer confidence and rental value.
              </p>
            </article>

            <article className="card wide">
              <h3>Landlord-Friendly Service</h3>
              <p>
                Fast turnarounds between tenants, clear photos before &amp;
                after and work scheduled around your portfolio.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LANDLORD PRICING */}
      <section className="section landlords">
        <div className="container landlords-inner">
          <div>
            <h2>Landlord-Friendly Pricing</h2>
            <p className="section-intro">
              Fair, transparent rates with options for regular clients and
              portfolio owners. Ask in person or by email for landlord pricing –
              we’ll build a plan around your properties.
            </p>
            <ul className="list">
              <li>Invoices suitable for tax &amp; accounts</li>
              <li>Photos before &amp; after each job</li>
              <li>Respect for tenants &amp; neighbours</li>
              <li>Flexible scheduling between check-out &amp; check-in</li>
            </ul>
          </div>

          <aside className="card landlord-card">
            <h3>Popular Landlord Jobs</h3>
            <ul className="list small">
              <li>End-of-tenancy freshen-up &amp; painting</li>
              <li>Bathroom &amp; kitchen tiling upgrades</li>
              <li>Exterior maintenance &amp; gutter clearing</li>
              <li>Storm damage inspections &amp; reports</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* WEATHER & STORM READINESS */}
      <section className="section section-alt">
        <div className="container">
          <h2>Ireland Weather &amp; Storm Readiness</h2>
          <p className="section-intro">
            We monitor Met Éireann warnings daily. Snow, rain or storm won’t
            stop us – but it will change how we work on your roof.
          </p>

          <div className="weather-strip">
            <div className="weather-pill green">
              <span className="label">Green</span>
              <span className="text">
                Normal conditions – routine work &amp; inspections.
              </span>
            </div>
            <div className="weather-pill yellow">
              <span className="label">Yellow</span>
              <span className="text">
                Extra care on roofs – wind or heavy rain expected.
              </span>
            </div>
            <div className="weather-pill orange">
              <span className="label">Orange</span>
              <span className="text">
                Storm conditions – emergency &amp; make-safe work only.
              </span>
            </div>
            <div className="weather-pill red">
              <span className="label">Red</span>
              <span className="text">
                Extreme weather – life-safety first, services subject to
                on-scene risk assessment.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <h2>What People Say</h2>
          <p className="section-intro">
            Real feedback you’d expect to see in Google reviews when the work is
            done right.
          </p>

          <div className="grid reviews-grid">
            <article className="card review">
              <p className="review-text">
                “We had a roof leak in heavy rain – they arrived at midnight to
                take care of us. Temporary cover that night, full repair a few
                days later. Couldn’t ask for better service.”
              </p>
              <p className="review-name">— Emergency Storm Call-Out</p>
            </article>

            <article className="card review">
              <p className="review-text">
                “Krinedal-R tiled our full bathroom in a luxury marble style.
                Clean, fast and professional from start to finish – the room
                looks like a hotel now.”
              </p>
              <p className="review-name">— Luxury Bathroom Tiling</p>
            </article>

            <article className="card review">
              <p className="review-text">
                “As landlords we need things done quickly between tenants.
                Krinedal-R handle painting, small repairs and checks so the
                place is ready on time, every time.”
              </p>
              <p className="review-name">— Landlord Client</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <div className="container contact-inner">
          <div>
            <h2>Need help or a same-day quote?</h2>
            <p>Email us or call the storm line and we’ll talk through options.</p>
          </div>
          <div className="contact-buttons">
            <a className="btn btn-primary" href="tel:0831762475">
              Call 24/7 Storm Line
            </a>
            <a
              className="btn btn-outline"
              href="mailto:krinedalr@gmail.com?subject=Krinedal-R%20enquiry"
            >
              Email Krinedal-R
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Krinedal-R Property Care</span>
          <span>Serving Meath, Louth, Dublin &amp; nearby counties.</span>
        </div>
      </footer>
    </main>
  );
}
