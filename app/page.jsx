// app/page.jsx
import CallButtons from "../components/CallButtons";
import WeatherStrip from "../components/Weather";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div>
            <p className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</p>
            <h1>
              KRINEDAL-<span className="hero-accent">R</span>
            </h1>
            <p className="hero-lead">
              24/7 storm damage call-out, <strong>full roof renewals</strong> and{" "}
              <strong>luxury tiling</strong> for homes and rental properties. Snow, rain
              or storm won’t stop us.
            </p>

            <CallButtons />

            <ul className="hero-bullets">
              <li>Emergency storm make-safe within hours*</li>
              <li>Full roof change, leak tracing & storm repairs</li>
              <li>Luxury bathroom & kitchen tiling</li>
              <li>Landlord-ready refresh between tenants</li>
            </ul>

            <p className="hero-note">
              *Response time depends on location & weather conditions.
            </p>
          </div>

          <aside className="hero-card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="hero-card-text">
              Red emergency support when the roof is leaking, tiles are down or trees
              have damaged the property.
            </p>
            <ul className="hero-card-list">
              <li>Storm make-safe within hours</li>
              <li>Priority for elderly & vulnerable clients</li>
              <li>Photos & report for insurance claims</li>
            </ul>
            <p className="hero-card-note">
              Snow, rain or storm won’t stop us – it only changes how we work on your
              roof.
            </p>
          </aside>
        </div>
      </section>

      {/* WEATHER STRIP */}
      <WeatherStrip />

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From full roof renewals to luxury bathroom tiling, we keep rental and owner-
            occupied homes in top condition – with landlord-friendly pricing and clear
            communication.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Full Roof Change & Leak Tracing</h3>
              <p>
                Complete roof replacements, storm damage repairs and precise leak
                tracing. We source quality materials and leave roofs ready for the next
                winter, not just the next shower.
              </p>
            </div>

            <div className="card">
              <h3>Luxury Bathroom & Kitchen Tiling</h3>
              <p>
                Premium tiling for bathrooms, ensuites, splashbacks and kitchens.
                Straight lines, clean grout and a luxury finish that makes the whole
                property feel brand new.
              </p>
            </div>

            <div className="card">
              <h3>Landlord-Ready Refresh</h3>
              <p>
                Interior & exterior painting, minor repairs and deep clean-up to bring
                properties back to “ready to let” condition between tenants or before a
                sale.
              </p>
            </div>

            <div className="card">
              <h3>Exterior Care & Power Washing</h3>
              <p>
                Driveways, patios and paths power washed, gutters cleared and fascia &
                soffits cleaned so the property looks cared for from the kerb.
              </p>
            </div>

            <div className="card">
              <h3>Emergency Storm Make-Safe</h3>
              <p>
                Loose tiles, fallen branches, damaged gutters and temporary waterproofing
                to keep water out until a full repair can be completed.
              </p>
            </div>

            <div className="card">
              <h3>Landlord Packages</h3>
              <p>
                Bundled pricing for regular landlords – roof checks, small repairs,
                painting and tiling upgrades discussed on site so you always know the
                cost upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className="section">
        <div className="container landlords">
          <div className="landlords-copy">
            <h2>Landlord & Managing Agent Friendly</h2>
            <p className="section-intro">
              We understand that empty properties cost money. Our goal is simple –
              handle the jobs quickly, document the work clearly and keep your tenants
              happy so you can focus on the numbers.
            </p>

            <ul className="landlords-list">
              <li>Photos & summaries for your records or insurance</li>
              <li>Clear, written pricing before work starts</li>
              <li>
                Flexible scheduling – keys with agents, access arranged directly with
                tenants
              </li>
              <li>Options to refresh between tenancies or prepare for sale</li>
            </ul>
          </div>

          <aside className="card landlords-card">
            <h3>Why Landlords Call Krinedal-R</h3>
            <ul>
              <li>24/7 storm line for urgent roof issues</li>
              <li>Respect for tenants & neighbours</li>
              <li>Trade-level finishes on premium tiling & painting</li>
              <li>One point of contact – Kristaps, 15+ years in operations</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-alt">
        <div className="container">
          <h2>Recent Feedback</h2>
          <p className="section-intro">
            We’re just getting started building our online reviews, but this is what
            clients are already saying about Krinedal-R.
          </p>

          <div className="grid reviews-grid">
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <h3>Luxury Bathroom Tiling</h3>
              <p>
                “Krinedal-R tiled our full bathroom last week. The finish is phenomenal –
                clean lines, perfect falls and everything left spotless. Fast and
                professional from start to finish.”
              </p>
              <p className="review-meta">— Homeowner in Co. Meath</p>
            </article>

            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <h3>Midnight Roof Leak</h3>
              <p>
                “We had a roof leak in heavy rain. They arrived close to midnight,
                stopped the water coming in and came back the next day with a permanent
                repair. Couldn’t ask for better service.”
              </p>
              <p className="review-meta">— Family in North Dublin</p>
            </article>

            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <h3>Landlord Refresh Between Tenants</h3>
              <p>
                “Full repaint, new tiling in the kitchen and small repairs done while the
                property was empty. Keys collected from the agent and returned with
                photos. Very easy to work with.”
              </p>
              <p className="review-meta">— Landlord client</p>
            </article>
          </div>

          <p className="reviews-note">
            Google reviews coming soon – in the meantime we’re happy to share references
            and photos of recent projects.
          </p>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <h3>Ready to talk about your roof or tiling?</h3>
            <p>
              Call the 24/7 storm line any time, or email for a quote on planned work
              such as full roof changes, bathroom tiling or landlord refresh projects.
            </p>
          </div>
          <div className="footer-actions">
            <a className="btn btn-primary" href="tel:0831762475">
              Call 24/7 Storm Line
            </a>
            <a
              className="btn btn-outline"
              href="mailto:krinedalr@gmail.com?subject=Krinedal-R%20enquiry"
            >
              Request a quote by email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {new Date().getFullYear()} Krinedal-R. All rights reserved.</span>
            <span>Snow, rain or storm won’t stop us.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
