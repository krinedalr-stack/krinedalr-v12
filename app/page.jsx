// app/page.jsx
import CallButtons from '../components/CallButtons';
import Weather from '../components/Weather';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</p>

              <h1 className="hero-title">
                KRINEDAL<span className="brand-r">-R</span>
              </h1>

              <p className="hero-lead">
                24/7 storm damage call-out, full roof renewals and{' '}
                <strong>luxury tiling</strong> for homes and rental properties.
                Snow, rain or storm won’t stop us.
              </p>

              <CallButtons />

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

            <div className="hero-panel">
              <h2>24/7 Storm Call-Out</h2>
              <p>
                Red emergency line when your roof is leaking, tiles are down or
                trees have damaged the property.
              </p>
              <ul>
                <li>Storm make-safe &amp; temporary cover</li>
                <li>Priority for elderly &amp; vulnerable clients</li>
                <li>Photos &amp; report for insurers</li>
              </ul>
              <p className="hero-panel-footer">
                Snow, rain or storm won’t stop us – it just changes how we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency roof make-safe, to full roof renewals and
            hotel-standard luxury tiling – we keep homes and rentals safe,
            watertight and ready to move into.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after damage, then plan permanent repairs once
                the weather settles. We keep you updated with photos and clear
                explanations.
              </p>
            </div>

            <div className="card">
              <h3>Full Roof Change &amp; Tracing</h3>
              <p>
                Full roof renewals, leak tracing and modern waterproofing.
                Designed for Ireland’s rain, wind and coastal conditions.
              </p>
            </div>

            <div className="card">
              <h3>Luxury Bathroom &amp; Kitchen Tiling</h3>
              <p>
                Premium tiling finishes that feel like a hotel. Clean lines,
                neat silicone, perfect levels – we treat every bathroom as a
                showroom.
              </p>
            </div>

            <div className="card">
              <h3>Sale-Ready &amp; Tenant-Ready Makeover</h3>
              <p>
                Freshen exteriors, small repairs and interior touch-ups so your
                property photographs beautifully and welcomes new tenants in
                comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className="section section-alt">
        <div className="container landlords">
          <div>
            <h2>Landlord-Friendly Service &amp; Pricing</h2>
            <p className="section-intro">
              Fair, transparent rates with options for regular clients and
              portfolio owners. We respect tenants, neighbours and your time.
            </p>

            <ul className="list">
              <li>Invoices suitable for tax &amp; accounts</li>
              <li>Photos before &amp; after each job</li>
              <li>Clear communication, no surprises</li>
              <li>Respect for tenants &amp; neighbours</li>
            </ul>

            <p className="section-intro small">
              Ask in person or by email for landlord pricing – we’ll build a
              plan around your properties.
            </p>
          </div>

          <div className="card landlord-highlight">
            <h3>Recent Feedback</h3>
            <p className="quote">
              “Full luxury bathroom tiling done last week – absolutely
              phenomenal. Clean, fast and professional from start to finish.”
            </p>
            <p className="quote">
              “We had a bad roof leak in heavy rain. They arrived just after
              midnight to make the house safe. Couldn’t ask for better help.”
            </p>
            <p className="review-footer">— Google-style reviews, Krinedal-R clients</p>
          </div>
        </div>
      </section>

      {/* WEATHER / STORM READINESS */}
      <section className="section">
        <div className="container">
          <h2>Ireland Weather &amp; Storm Readiness</h2>
          <p className="section-intro">
            We monitor Met Éireann warnings daily. Snow, rain or storm won’t
            stop us, but it will change how we work on your roof.
          </p>

          <Weather />
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="section section-alt footer">
        <div className="container footer-inner">
          <div>
            <h2>Need help or a quote?</h2>
            <p>
              Call our 24/7 storm line or email us and we’ll get back as soon as
              possible.
            </p>
            <CallButtons />

            <p className="footer-details">
              Email:{' '}
              <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
              <br />
              Phone: <a href="tel:+353831762475">083 176 2475</a>
            </p>
          </div>

          <div className="footer-right">
            <p className="footer-brand">Krinedal-R Property Maintenance</p>
            <p className="footer-note">
              Storms, leaks and wear happen. Our job is to make your property
              feel like home again – safe, dry and comfortable.
            </p>
            <p className="footer-copy">
              © {new Date().getFullYear()} Krinedal-R. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
