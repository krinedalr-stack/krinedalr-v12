// app/page.jsx
import CallButtons from '../components/CallButtons';
import Weather from '../components/Weather';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div>
            <div className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</div>
            <h1>
              KRINEDAL<span className="hero-r">-R</span>
            </h1>
            <p className="hero-lead">
              24/7 storm damage call-out,{' '}
              <strong>full roof renewals</strong> and{' '}
              <strong>luxury tiling</strong> for homes and rental properties.
              Snow, rain or storm won&apos;t stop us.
            </p>

            <CallButtons />

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
              <li>Photos &amp; report for insurers</li>
            </ul>
            <p className="hero-card-note">Snow, rain or storm won&apos;t stop us.</p>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency make-safe to high-end finishes, we look after the
            whole property so you can relax.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after damage, trace the leak and plan permanent
                repairs when the weather settles.
              </p>
            </div>

            <div className="card">
              <h3>Full Roof Renewals</h3>
              <p>
                Complete roof change with modern materials, insulation upgrades
                and clean site hand-over.
              </p>
            </div>

            <div className="card">
              <h3>Luxury Bathroom &amp; Kitchen Tiling</h3>
              <p>
                Large-format porcelain, marble-look and feature walls for
                bathrooms and kitchens that feel like a hotel.
              </p>
            </div>

            <div className="card">
              <h3>Sale-Ready / New Tenant Makeover</h3>
              <p>
                Freshen interiors &amp; exteriors, paintwork and details so the
                property feels bright, safe and welcoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORD SECTION */}
      <section className="section landlords-section">
        <div className="container landlords">
          <div>
            <h2>Landlord-Friendly Property Care</h2>
            <p className="section-intro">
              Keep your portfolio storm-ready and tenant-ready with one
              contact, clear communication and work you&apos;re proud to show.
            </p>

            <ul className="landlords-list">
              <li>Fair, transparent rates for regular clients</li>
              <li>Invoices suitable for tax &amp; accounts</li>
              <li>Photos before &amp; after each job</li>
              <li>Respect for tenants &amp; neighbours</li>
            </ul>

            <p className="landlords-note">
              Ask in person or by email for landlord pricing – we&apos;ll build
              a plan around your properties.
            </p>
          </div>

          <aside className="card landlords-card">
            <h3>Landlord-Friendly Pricing</h3>
            <p>
              Packages for portfolio owners, letting agents and single-property
              landlords.
            </p>
            <ul>
              <li>Pre-storm inspections &amp; gutter care</li>
              <li>Priority on the 24/7 storm line</li>
              <li>Freshen-up painting between tenants</li>
              <li>Smart scheduling to minimise vacancy</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* WEATHER STRIP */}
      <section className="section section-alt">
        <div className="container">
          <Weather />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <p className="section-intro">
            A few examples from recent work – bathroom tiling, roof repairs and
            emergency storm call-outs.
          </p>
          <div className="grid reviews-grid">
            <div className="card mini review-card">
              <p className="review-text">
                “Krinedal-R did our full luxury bathroom tiling last week – just
                phenomenal. Clean, fast and professional.”
              </p>
              <p className="review-name">– Homeowner in Meath</p>
            </div>
            <div className="card mini review-card">
              <p className="review-text">
                “We had a roof leak in heavy rain – they arrived close to
                midnight to make it safe and kept us updated with photos.”
              </p>
              <p className="review-name">– Family in Dublin</p>
            </div>
            <div className="card mini review-card">
              <p className="review-text">
                “Reliable for landlord refresh jobs between tenants – great
                communication and the houses feel like home again.”
              </p>
              <p className="review-name">– Landlord in Kildare</p>
            </div>
          </div>

          <div className="reviews-footer">
            ★★★★★ Strong Google-style reviews look great here – ready for when
            you start collecting them.
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <div className="container contact-strip-inner">
          <div>
            <h2>Need help or a same-day quote?</h2>
            <p>
              Call the 24/7 storm line or send photos by email and we&apos;ll
              come back with options.
            </p>
          </div>
          <CallButtons />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Krinedal-R. Built on trust.</span>
          <span>Snow, rain or storm won&apos;t stop us.</span>
        </div>
      </footer>
    </main>
  );
}
