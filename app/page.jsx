// app/page.jsx
import CallButtons from '../components/CallButtons';
import Weather from '../components/Weather';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          {/* Left side – main pitch */}
          <div>
            <div className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</div>
            <h1>
              KRINEDAL-<span className="brand-r">R</span>
            </h1>

            <p className="hero-lead">
              24/7 storm damage call-out, full roof renewals and{' '}
              <strong>luxury tiling</strong> for homes and rental properties. Snow, rain or storm
              won’t stop us.
            </p>

            <CallButtons variant="hero" />

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

          {/* Right side – storm call-out card */}
          <aside className="hero-card">
            <h2>24/7 Storm Call-Out</h2>
            <p>
              Red emergency line when your roof is leaking, tiles are down or trees have damaged
              the property.
            </p>
            <ul>
              <li>Storm make-safe &amp; temporary cover</li>
              <li>Priority for elderly &amp; vulnerable clients</li>
              <li>Photos &amp; report for insurers</li>
            </ul>
            <small>Snow, rain or storm won’t stop us – but it can change how we work.</small>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt" id="services">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency roof make-safe, to full roof renewals and hotel-standard luxury tiling,
            we keep homes and rentals safe, watertight and ready to move into.
          </p>

          <div className="services-grid">
            <article className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after damage, then plan permanent repairs when the weather
                settles.
              </p>
              <ul>
                <li>Leak tracing &amp; repair</li>
                <li>Damaged tile replacement</li>
                <li>Roofline, gutters &amp; downpipes</li>
              </ul>
            </article>

            <article className="card">
              <h3>Luxury Bathroom &amp; Kitchen Tiling</h3>
              <p>
                Marble-look, porcelain or feature walls – clean lines, perfect cuts and premium
                silicone finishes.
              </p>
              <ul>
                <li>Luxury bathroom tiling</li>
                <li>Kitchen splashbacks &amp; floors</li>
                <li>Grout refresh &amp; re-silicone</li>
              </ul>
            </article>

            <article className="card landlord">
              <h3>Landlord-Friendly Pricing</h3>
              <p>
                Fair, transparent rates with options for regular clients and portfolio owners. Ideal
                for turn-arounds between tenants or sale-ready makeovers.
              </p>
              <ul>
                <li>Invoices suitable for tax &amp; accounts</li>
                <li>Photos before &amp; after each job</li>
                <li>Respect for tenants &amp; neighbours</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* WEATHER STATUS */}
      <Weather />

      {/* REVIEWS */}
      <section className="section section-alt" id="reviews">
        <div className="container">
          <h2>Amazing Service &amp; Real Results</h2>
          <p className="section-intro">
            A few words from homeowners and landlords who trusted Krinedal-R with their properties.
          </p>

          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-header">
                <span className="review-name">Laura • Homeowner</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <div className="review-tag">Luxury bathroom tiling</div>
              <p>
                “We had a full bathroom done in marble-effect tiles – just phenomenal. Clean, fast
                and professional from start to finish.”
              </p>
            </article>

            <article className="review-card">
              <div className="review-header">
                <span className="review-name">Michael • Landlord</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <div className="review-tag">Emergency roof leak</div>
              <p>
                “We had a roof leak in heavy rain – they arrived close to midnight to make the roof
                safe and came back to finish the repair. Couldn’t ask for better service.”
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section id="contact" className="contact-strip">
        <div className="container contact-inner">
          <div>
            <h2>Need help or a same-day quote?</h2>
            <p>
              Call anytime on <strong>083 176 2475</strong> or email{' '}
              <strong>krinedalr@gmail.com</strong>.
            </p>
          </div>

          <CallButtons />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Krinedal-R Property Maintenance.</span>
          <span>Premium property care · Snow, rain or storm won’t stop us.</span>
        </div>
      </footer>
    </main>
  );
}
