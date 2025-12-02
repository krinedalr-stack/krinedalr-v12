// app/page.jsx

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-overlay">
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="hero-tagline">
                PREMIUM PROPERTY CARE ACROSS IRELAND ☘️
              </p>

              <h1 className="hero-title">
                KRINEDAL-<span className="hero-r">R</span>
              </h1>

              <p className="hero-lead">
                Making homes safe, dry & beautifully finished.
              </p>

              <p className="hero-sub">
                Luxury bathroom tiling, full roof renewals, interior & exterior
                painting and 24/7 storm damage response. Snow, rain or storm –
                we don&apos;t stop until your home is protected.
              </p>

              <div className="hero-actions">
                <a href="tel:0831762475" className="btn btn-primary">
                  Call 083 176 2475
                </a>
                <a
                  href="https://wa.me/353831762475"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us now
                </a>
                <a href="#estimate" className="btn btn-ghost">
                  Request free estimate
                </a>
              </div>

              <ul className="hero-bullets">
                <li>Emergency storm make-safe within hours*</li>
                <li>Luxury bathroom & kitchen tiling</li>
                <li>Full roof change & leak tracing</li>
                <li>Landlord-ready refresh between tenants</li>
              </ul>

              <p className="hero-footnote">
                *Response time depends on location & weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW CARD */}
      <section className="section section-alt">
        <div className="container">
          <div className="review-card">
            <p className="review-label">RECENT GOOGLE-STYLE FEEDBACK</p>
            <p className="review-stars">★★★★★</p>
            <p className="review-text">
              “Krinedal-R did our full luxury bathroom tiling last week – just
              phenomenal. Clean, fast and extremely professional. Couldn&apos;t
              be happier.”
            </p>
            <p className="review-author">— Aoife, Navan</p>
          </div>
        </div>
      </section>

      {/* WHAT KRINEDAL-R CAN DO */}
      <section className="section section-light" id="services">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency roof make-safe, to full roof renewals and hotel-
            standard luxury tiling, we keep homes and rentals safe, watertight
            and ready to move into.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after damage, then plan permanent repairs when
                the weather settles.
              </p>
              <ul>
                <li>24/7 storm call-out</li>
                <li>Temporary make-safe &amp; leak stop</li>
                <li>Photos &amp; report for insurers</li>
              </ul>
            </div>

            <div className="card">
              <h3>Luxury Bathroom &amp; Tiling</h3>
              <p>
                Premium tiling for bathrooms, kitchens and feature areas –
                aligned, level and built to last.
              </p>
              <ul>
                <li>Luxury bathroom tiling</li>
                <li>Floor &amp; wall tiling</li>
                <li>Feature patterns &amp; herringbone</li>
              </ul>
            </div>

            <div className="card">
              <h3>Roofing &amp; Exterior Care</h3>
              <p>
                Keep the roof, gutters and exterior in top condition with
                repairs and cleaning.
              </p>
              <ul>
                <li>Roof repairs &amp; renewals</li>
                <li>Gutter repair &amp; cleaning</li>
                <li>Power washing &amp; exterior paint</li>
              </ul>
            </div>

            <div className="card">
              <h3>Move-Out &amp; Sale-Ready Fresh-Ups</h3>
              <p>
                Perfect for landlords and sellers – fresh, clean and ready for
                the next chapter.
              </p>
              <ul>
                <li>Patch repairs &amp; repaint</li>
                <li>Deep clean &amp; silicone refresh</li>
                <li>Light upgrade works</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WEATHER READINESS */}
      <section className="section section-soft" id="weather">
        <div className="container">
          <h2>Ireland Weather &amp; Storm Readiness</h2>
          <p className="section-intro">
            We monitor Met Éireann warnings daily. Snow, rain or storm won&apos;t
            stop us – but it will change how we work on your roof.
          </p>

          <div className="weather-grid">
            <div className="weather-pill weather-pill-green">
              <span className="weather-label">Green</span>
              <span className="weather-text">
                Normal conditions – routine work &amp; inspections.
              </span>
            </div>

            <div className="weather-pill weather-pill-yellow">
              <span className="weather-label">Yellow</span>
              <span className="weather-text">
                Wind or rain – extra care on roofs &amp; access.
              </span>
            </div>

            <div className="weather-pill weather-pill-orange">
              <span className="weather-label">Orange</span>
              <span className="weather-text">
                Severe weather – limited emergency make-safe only.
              </span>
            </div>

            <div className="weather-pill weather-pill-red">
              <span className="weather-label">Red</span>
              <span className="weather-text">
                Extreme conditions – we pause work until it&apos;s safe.
              </span>
            </div>
          </div>

          <p className="weather-note">
            Follow Krinedal-R on Facebook for our latest local storm updates and
            safety tips.
          </p>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section className="section section-alt" id="estimate">
        <div className="container estimate-grid">
          <div>
            <h2>Request a Free Estimate</h2>
            <p className="section-intro">
              Tell us a bit about the job and we&apos;ll reply with an estimate
              range by email. For larger projects we&apos;ll arrange a site
              visit.
            </p>

            <form
              className="estimate-form"
              action="mailto:krinedalr@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label>
                Your name
                <input type="text" name="name" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Phone
                <input type="tel" name="phone" />
              </label>

              <label>
                Service needed
                <select name="service">
                  <option>Storm / roof emergency</option>
                  <option>Roof repairs / renewal</option>
                  <option>Luxury bathroom tiling</option>
                  <option>Kitchen / floor tiling</option>
                  <option>Painting &amp; fresh-up</option>
                  <option>Landlord refresh between tenants</option>
                  <option>Other property works</option>
                </select>
              </label>

              <label>
                Tell us a bit about the job
                <textarea
                  name="details"
                  placeholder="Size of area, issues, photos available, access, etc."
                  rows={4}
                />
              </label>

              <button type="submit" className="btn btn-primary full-width">
                Send estimate request
              </button>
            </form>
          </div>

          <div>
            <div className="card mini">
              <h3>Typical Price Ranges (Guide Only)</h3>
              <ul>
                <li>Luxury bathroom tiling labour: €35 – €50 per m²</li>
                <li>Roof tile / slate replacement: from €12 – €18 per tile</li>
                <li>Minor roof repairs: usually €80 – €160</li>
                <li>Interior room repaint: from €220 – €320</li>
              </ul>
              <p className="card-note">
                Final price always agreed in writing before work starts. Landlord
                &amp; repeat-customer discounts available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING & PAYMENT */}
      <section className="section section-dark" id="booking">
        <div className="container">
          <div className="card card-dark">
            <h2>Booking &amp; Payment</h2>
            <ul>
              <li>Materials-first options available for new projects.</li>
              <li>Clear written scope agreed before starting.</li>
              <li>Digital invoice &amp; payment by bank transfer.</li>
              <li>Photos provided for your records on request.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-logo">
              KRINEDAL-<span className="hero-r">R</span>
            </p>
            <p className="footer-text">
              Premium property care, storm or sunshine – Ireland-wide.
            </p>
          </div>

          <div className="footer-contact">
            <p className="footer-text">
              Phone: <a href="tel:0831762475">083 176 2475</a>
            </p>
            <p className="footer-text">
              Email:{" "}
              <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
            </p>
            <div className="footer-buttons">
              <a href="tel:0831762475" className="btn btn-footer">
                Call
              </a>
              <a
                href="https://wa.me/353831762475"
                className="btn btn-footer whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
