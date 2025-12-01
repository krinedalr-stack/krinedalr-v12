// app/page.jsx
import CallButtons from '../components/CallButtons';
import WeatherStrip from '../components/Weather';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</p>
            <h1>
              KRINEDAL<span className="hero-r">-R</span>
            </h1>

            <p className="hero-lead">
              24/7 storm damage call-out, full roof renewals and luxury tiling
              for homes and rental properties. Snow, rain or storm won’t stop us.
            </p>

            <CallButtons />

            <ul className="hero-bullets">
              <li>Emergency storm make-safe within hours*</li>
              <li>Full roof change & leak tracing</li>
              <li>Luxury bathroom & kitchen tiling</li>
              <li>Landlord-ready refresh between tenants</li>
            </ul>

            <p className="hero-footnote">
              *Response time depends on location & weather conditions.
            </p>
          </div>

          <aside className="hero-card">
            <h2>24/7 STORM CALL-OUT</h2>
            <p className="hero-card-text">
              Red emergency button for when the roof is leaking, tiles are down
              or trees have damaged the property.
            </p>
            <a className="hero-alert-btn" href="tel:0831762475">
              24/7 STORM CALL-OUT
            </a>
            <ul className="hero-card-list">
              <li>Storm make-safe from €350 (high-risk work)</li>
              <li>Priority for elderly & vulnerable customers</li>
              <li>Photos & report for insurance if required</li>
            </ul>
            <p className="hero-card-note">
              Snow, rain or storm – Krinedal-R keeps your property safe.
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
            From a brand-new roof to a luxury tiled bathroom, we handle the
            tough jobs that keep your home or rental safe, dry and ready to show.
          </p>

          <div className="grid services-grid">
            <article className="card">
              <h3>Full Roof Replacement</h3>
              <p>
                Complete strip and re-deck, felt, battens and new tiles or
                slates. High-quality materials with tidy, safe scaffolding and
                full site clean-up.
              </p>
            </article>

            <article className="card">
              <h3>Roof Repairs & Leak Tracing</h3>
              <p>
                Find and fix leaks, replace broken tiles, re-bed ridge tiles and
                make emergency temporary repairs during severe weather.
              </p>
            </article>

            <article className="card">
              <h3>Luxury Bathroom & Kitchen Tiling</h3>
              <p>
                Marble, porcelain, large-format and feature walls. Perfect
                layouts, clean grout lines and waterproofing done the right way.
              </p>
            </article>

            <article className="card">
              <h3>Landlord Turnover & Fresh-Ups</h3>
              <p>
                Interior & exterior painting, small repairs, silicone, re-tiling
                patches and deep clean-style finishing to get properties ready
                for new tenants or sale.
              </p>
            </article>

            <article className="card">
              <h3>Power Washing & Exterior Care</h3>
              <p>
                Driveways, patios, roofs and facades brought back to life with
                careful power washing and soft-wash treatments where needed.
              </p>
            </article>

            <article className="card">
              <h3>Storm Damage & Tree Impact</h3>
              <p>
                Make-safe of loose tiles, gutters, fascia and garden structures.
                Temporary tarping and timber work to protect the building until
                full repair.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className="section landlords-section">
        <div className="container landlords">
          <div>
            <h2>Landlord-Friendly Property Maintenance</h2>
            <p className="section-intro">
              One contact for storms, leaks, fresh paint and ready-to-rent
              finishes. We know how important fast, tidy work is for landlords.
            </p>

            <ul className="landlords-list">
              <li>24/7 emergency line just for your properties</li>
              <li>
                Turnover packs – painting, silicone, minor fixes, garden tidy
              </li>
              <li>Landlord-sensitive pricing for repeat work</li>
              <li>Photos & updates so you can approve from anywhere</li>
            </ul>

            <p className="landlords-note">
              Landlord pricing is tailored –{' '}
              <strong>ask in person or by email</strong> and we’ll build a plan
              around your portfolio.
            </p>
          </div>

          <aside className="card landlords-card">
            <h3>Talk To Us About Your Portfolio</h3>
            <p>
              Whether you manage one house or multiple rentals, Krinedal-R can
              become your go-to maintenance team.
            </p>
            <ul className="mini-list">
              <li>Priority call-out during storms</li>
              <li>Invoices that are easy for accounting</li>
            </ul>
            <a className="btn btn-primary full-width" href="mailto:hello@krinedalr.ie">
              Email landlord enquiries
            </a>
          </aside>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-alt">
        <div className="container">
          <h2>What Customers Say</h2>
          <p className="section-intro">
            Real feedback from recent work in Meath & surrounding counties.
          </p>

          <div className="grid reviews-grid">
            <article className="card review-card">
              <div className="review-header">
                <span className="review-name">Sinead M.</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <p className="review-text">
                “Had my full bathroom done in luxury porcelain tiles – the
                finish is just phenomenal. Clean, fast and professional from
                start to finish.”
              </p>
              <span className="review-badge">Luxury tiling</span>
            </article>

            <article className="card review-card">
              <div className="review-header">
                <span className="review-name">Patrick & Mary K.</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <p className="review-text">
                “We had a roof leak in heavy rain. Krinedal-R arrived around
                midnight to make the roof safe and came back next day for the
                full repair. Couldn’t ask for better.”
              </p>
              <span className="review-badge">24/7 storm call-out</span>
            </article>

            <article className="card review-card">
              <div className="review-header">
                <span className="review-name">Landlord Client</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <p className="review-text">
                “They handle painting, tiling and small repairs between tenants.
                Property is always handed back looking fresh and ready to rent.”
              </p>
              <span className="review-badge">Landlord refresh</span>
            </article>
          </div>

          <p className="reviews-footnote">
            Google Reviews integration coming soon – for now, ask us for recent
            photo examples of roofs and tiling projects.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta">
        <div className="container final-cta-inner">
          <div>
            <h2>Ready To Secure & Upgrade Your Property?</h2>
            <p>
              For emergency storm damage, full roof change or a luxury bathroom,
              Krinedal-R is one call away – day or night.
            </p>
          </div>
          <div className="final-cta-actions">
            <a className="btn btn-primary" href="tel:0831762475">
              Call 24/7 Storm Line
            </a>
            <a className="btn btn-outline" href="mailto:hello@krinedalr.ie">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="footer-brand">
              KRINEDAL<span className="hero-r">-R</span>
            </span>
            <p className="footer-text">
              Premium roofing, tiling & emergency storm repair across Ireland.
            </p>
          </div>
          <div className="footer-links">
            <a href="tel:0831762475">083 176 2475</a>
            <a href="mailto:hello@krinedalr.ie">hello@krinedalr.ie</a>
            <a href="https://www.krinedalr.ie" target="_blank" rel="noreferrer">
              www.krinedalr.ie
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
