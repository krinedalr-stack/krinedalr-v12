// app/page.jsx

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="hero"
        style={{
          // 👇 Background image from /public/hero-krinedalr.jpg
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url('/hero-krinedalr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container hero-inner">
          <div>
            <div className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</div>
            <h1>
              KRINEDAL-<span className="hero-accent-r">R</span>
            </h1>
            <p className="hero-lead">
              24/7 storm damage call-out, full roof renewals and{" "}
              <strong>luxury tiling</strong> for homes and rental properties.
              Snow, rain or storm won’t stop us.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+353831762475">
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

            <p className="hero-footnote">
              *Response time depends on location &amp; weather conditions.
            </p>
          </div>

          <aside className="hero-card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="hero-card-text">
              Red emergency line when your roof is leaking, tiles are down or
              trees have damaged the property.
            </p>
            <ul className="hero-card-list">
              <li>Storm make-safe &amp; temporary cover</li>
              <li>Priority for elderly &amp; vulnerable clients</li>
              <li>Photos &amp; report for insurers or landlords</li>
            </ul>
            <p className="hero-card-note">
              Snow, rain or storm won’t stop us – it only changes how we work.
            </p>
          </aside>
        </div>
      </section>

      {/* SERVICES – ROOF & TILING */}
      <section className="section section-alt">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency roof make-safe, to full roof renewals and
            hotel-standard luxury tiling, we keep homes and rentals safe,
            watertight and ready to move into.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after damage, then plan permanent repairs when
                the weather settles. Temporary covers, leak tracing and urgent
                repairs to stop further damage.
              </p>
            </div>

            <div className="card">
              <h3>Full Roof Change</h3>
              <p>
                Complete roof renewals with modern materials, insulation and
                proper ventilation. Ideal for ageing roofs, heavy leaks or
                upgrading before selling a property.
              </p>
            </div>

            <div className="card">
              <h3>Luxury Bathroom &amp; Kitchen Tiling</h3>
              <p>
                Premium tiling with marble-style finishes, feature walls and
                polished details. Clean lines, laser straight joints and
                long-lasting grout for a showroom feel.
              </p>
            </div>

            <div className="card">
              <h3>Landlord &amp; Sale-Ready Makeovers</h3>
              <p>
                Freshen interiors and exteriors between tenants or before a
                sale: paint, small repairs, feature tiling and tidy-up works to
                boost buyer and tenant confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORD SECTION */}
      <section className="section landlords">
        <div className="container landlords-inner">
          <div>
            <h2>Landlord-Friendly Pricing &amp; Reporting</h2>
            <p className="section-intro">
              Ideal for single rentals or portfolios. We understand the balance
              between protecting your asset, keeping tenants happy and watching
              the budget.
            </p>

            <ul className="landlords-list">
              <li>Fair, transparent rates with options for regular clients</li>
              <li>Invoices suitable for tax &amp; accounts</li>
              <li>Photos before &amp; after each job</li>
              <li>Respect for tenants, neighbours &amp; management companies</li>
            </ul>

            <p className="landlords-note">
              Ask in person or by email for landlord pricing – we’ll build a
              plan around your properties instead of one-size-fits-all.
            </p>
          </div>

          <div className="card landlords-card">
            <h3>Recently for Our Landlords</h3>
            <ul>
              <li>
                <strong>Luxury bathroom tiling</strong> last week – “just
                phenomenal, clean, fast and professional.”
              </li>
              <li>
                Emergency roof leak in heavy rain – we arrived around midnight
                to make the home safe and watertight.
              </li>
              <li>
                Full roof renewal on a rental – finished between tenancies, with
                before/after photos for the owner.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WEATHER & STORM READINESS */}
      <section className="section section-alt">
        <div className="container">
          <h2>Ireland Weather &amp; Storm Readiness</h2>
          <p className="section-intro">
            We monitor Met Éireann warnings daily so we know how safely we can
            work on roofs and exteriors. Snow, rain or storm won’t stop us – but
            it will change how we work on your roof.
          </p>

          <div className="grid weather-grid">
            <div className="weather-pill weather-green">
              <span className="weather-label">Green</span>
              <span className="weather-text">
                Normal conditions – routine work &amp; inspections.
              </span>
            </div>
            <div className="weather-pill weather-yellow">
              <span className="weather-label">Yellow</span>
              <span className="weather-text">
                Wind or rain – extra care on roofs, some work rescheduled.
              </span>
            </div>
            <div className="weather-pill weather-orange">
              <span className="weather-label">Orange</span>
              <span className="weather-text">
                Strong winds – emergency storm call-outs only.
              </span>
            </div>
            <div className="weather-pill weather-red">
              <span className="weather-label">Red</span>
              <span className="weather-text">
                Severe weather – life-safety first. We still take calls and
                plan the earliest safe visit.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <h2>What Clients Say</h2>
          <p className="section-intro">
            We’re building our Google reviews with every job – here’s the kind
            of feedback we aim for on every call-out and project.
          </p>

          <div className="grid reviews-grid">
            <div className="card mini">
              <p>
                “Full bathroom luxury tiling finished last week – just
                phenomenal. Clean, fast and professional. The place looks like a
                hotel now.”
              </p>
              <p className="review-name">– Homeowner in Meath</p>
            </div>

            <div className="card mini">
              <p>
                “We had a roof leak in heavy rain – they arrived around midnight
                to take care of us, made it safe and came back for full repairs
                after the storm.”
              </p>
              <p className="review-name">– Family in Dublin</p>
            </div>

            <div className="card mini">
              <p>
                “Great communication, clear photos and invoices that work for
                our accountant. Tenants happy, landlord happy.”
              </p>
              <p className="review-name">– Portfolio landlord</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-alt">
        <div className="container contact-strip">
          <div>
            <h2>Need help or a same-day quote?</h2>
            <p>
              The fastest way in a storm is to ring the 24/7 line. For planned
              projects, send photos and details by email and we’ll come back
              with options.
            </p>
          </div>
          <div className="cta-buttons">
            <a className="btn btn-primary" href="tel:+353831762475">
              Call 24/7 Storm Line
            </a>
            <a
              className="btn btn-outline"
              href="mailto:krinedalr@gmail.com?subject=Quote%20request"
            >
              Email krinedalr@gmail.com
            </a>
          </div>
        </div>

        <footer className="footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Krinedal-R · Ireland</span>
            <span>Built with warm homes &amp; safe roofs in mind.</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
