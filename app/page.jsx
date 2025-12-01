// app/page.jsx
import CallButtons from '../components/CallButtons';
import Weather from '../components/Weather';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <p className="hero-tag">PREMIUM PROPERTY CARE · IRELAND</p>
            <h1 className="hero-title">
              KRINEDAL<span className="hero-title-r">-R</span>
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

          <aside className="hero-card">
            <h2>24/7 Storm Call-Out</h2>
            <p>
              Red emergency line when your roof is leaking, tiles are down or
              trees have damaged the property.
            </p>
            <ul>
              <li>Storm make-safe &amp; temporary cover</li>
              <li>Priority for elderly &amp; vulnerable clients</li>
              <li>Photos &amp; report for insurance claims</li>
              <li>Snow, rain or storm won’t stop us</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* LUXURY TILING */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Luxury Bathroom &amp; Kitchen Tiling</h2>
          <p className="section-intro">
            High-end finishes for people who want their home or rental to feel
            premium – from large-format marble-effect tiles to detailed feature
            walls and perfect silicone lines.
          </p>

          <div className="grid services-grid">
            <article className="card">
              <h3>Full Bathroom Re-Tile</h3>
              <p>
                Strip-out, prep, waterproofing and premium tiling with aligned
                grout lines and laser-straight cuts.
              </p>
              <p className="card-highlight">
                “Did a full bathroom in luxury tiles last week – just
                phenomenal, clean, fast and professional.”
              </p>
            </article>

            <article className="card">
              <h3>Showpiece Kitchen Splashbacks</h3>
              <p>
                Herringbone, stacked or brick-bond layouts to match your
                worktops and cabinets.
              </p>
            </article>

            <article className="card">
              <h3>Hotel-Level Details</h3>
              <p>
                Mitred corners, neat edges and tidy finishing so everything
                looks straight out of a showroom.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className="section">
        <div className="container landlords">
          <div>
            <h2 className="section-title">Landlord &amp; Letting-Agent Ready</h2>
            <p className="section-intro">
              Quick, reliable turn-around between tenants. We look after the
              dirty work so you can hand over a fresh, rent-ready property.
            </p>

            <div className="grid mini-grid">
              <div className="card mini">
                <h3>Refresh Between Tenants</h3>
                <p>Painting, patch repairs, sealants and deep-clean level fixes.</p>
              </div>
              <div className="card mini">
                <h3>Storm &amp; Leak Response</h3>
                <p>
                  Safely make-safe after damage, then plan permanent repairs when
                  the weather settles.
                </p>
              </div>
              <div className="card mini">
                <h3>Sale-Ready Makeover</h3>
                <p>
                  Freshen exteriors, small repairs and premium tiling touches to
                  boost buyer confidence.
                </p>
              </div>
            </div>
          </div>

          <aside className="card landlord-panel">
            <h3>Landlord-Friendly Pricing</h3>
            <p>
              Fair, transparent rates with options for regular clients and
              portfolio owners.
            </p>
            <ul>
              <li>Invoices suitable for tax &amp; accounts</li>
              <li>Photos before &amp; after each job</li>
              <li>Respect for tenants &amp; neighbours</li>
            </ul>
            <p className="card-note">
              Ask in person or by email for landlord pricing – we’ll build a
              plan around your properties.
            </p>
          </aside>
        </div>
      </section>

      {/* WEATHER & STORM READINESS */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Ireland Weather &amp; Storm Readiness</h2>
          <p className="section-intro">
            We monitor Met Éireann warnings daily. Snow, rain or storm won’t stop
            us – but it will change how we work on your roof so we keep everyone
            safe.
          </p>

          <Weather />

          <div className="weather-badges">
            <div className="weather-chip green">
              <strong>Green</strong>
              <span> Normal conditions – routine work &amp; inspections.</span>
            </div>
            <div className="weather-chip yellow">
              <strong>Yellow</strong>
              <span> Wind or rain – extra care on roofs.</span>
            </div>
            <div className="weather-chip orange">
              <strong>Orange</strong>
              <span> Strong winds – make-safe work only.</span>
            </div>
            <div className="weather-chip red">
              <strong>Red</strong>
              <span> Dangerous storm – emergency call-outs only.</span>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <p className="section-intro">
            Real feedback from homeowners and landlords we look after. Add your
            Google review once we’ve helped you out.
          </p>

          <div className="grid reviews-grid">
            <article className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p>
                “We had a roof leak in heavy rain – Krinedal-R arrived near
                midnight to make the roof safe and stop the water coming in.
                Calm, professional and worth every cent.”
              </p>
              <p className="review-name">— Emergency Storm Call-Out Client</p>
            </article>

            <article className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p>
                “They did a full luxury bathroom tiling job for us last week –
                just phenomenal. Clean, fast and extremely professional. Looks
                like a boutique hotel now.”
              </p>
              <p className="review-name">— Homeowner in Meath</p>
            </article>

            <article className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p>
                “Great to have one contact for roof, tiling and landlord
                maintenance. Clear communication, photos of every job and happy
                tenants.”
              </p>
              <p className="review-name">— Landlord Client</p>
            </article>
          </div>

          <p className="reviews-footer">
            Google Reviews widget coming soon – for now, ask us for references
            and we’ll happily share them.
          </p>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <footer className="section footer">
        <div className="container footer-inner">
          <div>
            <h2 className="footer-title">Need help or a same-day quote?</h2>
            <p>
              Call any time for emergencies, or send photos by email and we’ll
              come back with options.
            </p>
          </div>
          <CallButtons />
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Krinedal-R. Built on trust, not shortcuts.</span>
        </div>
      </footer>
    </main>
  );
}
