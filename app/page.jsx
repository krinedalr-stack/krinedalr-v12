// app/page.jsx
'use client';

import { useState } from 'react';
import CallButtons from '../components/CallButtons';
import Weather from '../components/Weather';

export default function HomePage() {
  // Simple roofing calculator
  const [roofArea, setRoofArea] = useState('');
  const [roofRate, setRoofRate] = useState(45); // €/m² example
  const roofEstimate =
    roofArea && roofRate ? (Number(roofArea) * Number(roofRate)).toFixed(0) : '';

  // Simple tiling calculator
  const [tileArea, setTileArea] = useState('');
  const [tileRate, setTileRate] = useState(65); // €/m² luxury rate
  const tileEstimate =
    tileArea && tileRate ? (Number(tileArea) * Number(tileRate)).toFixed(0) : '';

  return (
    <main>
      {/* HERO – OLD TOP, WITH BACKGROUND IMAGE */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="hero-tagline">
                PREMIUM PROPERTY CARE ACROSS IRELAND <span className="hero-clover">☘️</span>
              </p>

              <h1 className="hero-title">
                KRINEDAL-<span className="hero-r">R</span>
              </h1>

              <p className="hero-lead">
                24/7 storm damage call-out, full roof renewals and{' '}
                <strong>luxury tiling</strong> for homes and rental properties.
                Snow, rain or storm won’t stop us.
              </p>

              <div className="hero-actions">
                <a href="tel:0831762475" className="btn btn-primary">
                  Call 24/7 Storm Line
                </a>
                <a
                  href="mailto:krinedalr@gmail.com?subject=Quote%20request%20from%20website"
                  className="btn btn-secondary"
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
          </div>
        </div>
      </section>

      {/* 24/7 STORM CALLOUT CARD */}
      <section className="section section-alt">
        <div className="container">
          <div className="card big">
            <h2>24/7 Storm Call-Out</h2>
            <p>
              Red emergency line when your roof is leaking, tiles are down or trees have damaged
              the property. We secure the roof, make it safe and plan permanent repairs when the
              weather settles.
            </p>
            <ul>
              <li>Storm make-safe &amp; temporary cover</li>
              <li>Priority for elderly &amp; vulnerable clients</li>
              <li>Photos &amp; report for insurers on request</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="section">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From emergency roof make-safe, to full roof renewals and hotel-standard luxury tiling –
            we keep homes and rentals safe, watertight and ready to move into.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Storm &amp; Leak Response</h3>
              <p>
                Safely make-safe after storm damage, then plan permanent repairs when the weather
                allows.
              </p>
            </div>

            <div className="card">
              <h3>Luxury Bathroom &amp; Kitchen Tiling</h3>
              <p>
                High-end tiling, perfect lines and premium details. Ideal for forever homes and
                high-value rentals.
              </p>
            </div>

            <div className="card">
              <h3>Full Roof Renewals</h3>
              <p>
                Complete roof replacements, leak tracing and upgrades for older properties and
                extensions.
              </p>
            </div>

            <div className="card">
              <h3>Painting &amp; Fresh-Up</h3>
              <p>
                Interior &amp; exterior painting, silicone renewal and “between-tenant” refreshes so
                your property looks new again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE PRICE GUIDES / CALCULATORS */}
      <section className="section section-alt">
        <div className="container">
          <h2>Roofing &amp; Tiling Price Guides</h2>
          <p className="section-intro">
            Every job is different, but these guides help you feel the ballpark before we visit.
            Use the calculators for a rough idea – then request a proper written estimate.
          </p>

          <div className="grid calc-grid">
            {/* ROOFING CALC */}
            <div className="card">
              <h3>Roofing Estimate</h3>
              <p className="calc-help">
                Enter your roof area to get an approximate labour + standard materials figure.
              </p>

              <div className="calc-row">
                <label>
                  Roof area (m²)
                  <input
                    type="number"
                    min="0"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                  />
                </label>
                <label>
                  Rate €/m²
                  <input
                    type="number"
                    min="0"
                    value={roofRate}
                    onChange={(e) => setRoofRate(e.target.value)}
                  />
                </label>
              </div>

              <p className="calc-result">
                Rough total:{' '}
                {roofEstimate ? (
                  <strong>€{roofEstimate}</strong>
                ) : (
                  <span className="calc-placeholder">Enter area for an estimate</span>
                )}
              </p>

              <ul className="mini-list">
                <li>Minor roof repairs often €80 – €120</li>
                <li>Tile/slate replacement from €12 – €18 per tile</li>
                <li>Chimney sealing / waterproofing €120 – €180</li>
              </ul>
            </div>

            {/* TILING CALC */}
            <div className="card">
              <h3>Luxury Tiling Estimate</h3>
              <p className="calc-help">
                For high-end bathroom &amp; kitchen tiling. Materials not included in this rough
                guide.
              </p>

              <div className="calc-row">
                <label>
                  Tiled area (m²)
                  <input
                    type="number"
                    min="0"
                    value={tileArea}
                    onChange={(e) => setTileArea(e.target.value)}
                  />
                </label>
                <label>
                  Rate €/m²
                  <input
                    type="number"
                    min="0"
                    value={tileRate}
                    onChange={(e) => setTileRate(e.target.value)}
                  />
                </label>
              </div>

              <p className="calc-result">
                Rough total:{' '}
                {tileEstimate ? (
                  <strong>€{tileEstimate}</strong>
                ) : (
                  <span className="calc-placeholder">Enter area for an estimate</span>
                )}
              </p>

              <ul className="mini-list">
                <li>Luxury bathroom tiling: €35 – €45+ per m² labour</li>
                <li>Old tile removal &amp; floor levelling priced separately</li>
                <li>We always confirm final price on a home visit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE-STYLE REVIEW */}
      <section className="section">
        <div className="container">
          <div className="card review-card">
            <p className="review-label">Recent Google-style feedback</p>
            <p className="review-stars">★★★★★</p>
            <p className="review-text">
              “Krinedal-R did our full luxury bathroom tiling last week – just phenomenal. Clean,
              fast and extremely professional. Couldn&apos;t be happier.”
            </p>
            <p className="review-name">— Aoife, Navan</p>
          </div>
        </div>
      </section>

      {/* WEATHER SECTION (COLOURED BUTTONS) */}
      <Weather />

      {/* ESTIMATE FORM + BOOKING / PAYMENT */}
      <section className="section section-alt">
        <div className="container">
          <h2>Request a Free Estimate</h2>
          <p className="section-intro">
            Tell us a bit about your property and we&apos;ll reply with a rough estimate or arrange
            a site visit. No pressure, no hard sell.
          </p>

          <form
            className="estimate-form"
            action="mailto:krinedalr@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid form-grid">
              <label>
                Name
                <input type="text" name="name" required />
              </label>

              <label>
                Phone
                <input type="tel" name="phone" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Service needed
                <select name="service">
                  <option>Storm / roof leak</option>
                  <option>Full roof renewal</option>
                  <option>Luxury bathroom tiling</option>
                  <option>Kitchen tiling</option>
                  <option>Painting / fresh-up</option>
                  <option>Other / not sure yet</option>
                </select>
              </label>
            </div>

            <label className="estimate-notes">
              Tell us a bit about the job
              <textarea
                name="details"
                rows={4}
                placeholder="Size of area, issues, photos available, access, etc."
              />
            </label>

            <button type="submit" className="btn btn-primary wide">
              Send estimate request
            </button>
          </form>

          <div className="card booking-card">
            <h3>Booking &amp; Payment</h3>
            <ul>
              <li>Materials-first options available for new projects</li>
              <li>Clear written scope agreed before starting</li>
              <li>Digital invoice &amp; payment by bank transfer</li>
              <li>Photos provided for your records on request</li>
            </ul>
            <p className="booking-note">
              We keep payments simple and transparent – all details are clearly written on your
              invoice.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-main">
            <h2 className="footer-logo">
              KRINEDAL-<span className="hero-r">R</span>
            </h2>
            <p className="footer-text">
              Premium property care, storm or sunshine – Ireland-wide.
            </p>

            <p className="footer-text">
              Phone:{' '}
              <a href="tel:0831762475" className="footer-link">
                083 176 2475
              </a>
            </p>
            <p className="footer-text">
              Email:{' '}
              <a href="mailto:krinedalr@gmail.com" className="footer-link">
                krinedalr@gmail.com
              </a>
            </p>
            <p className="footer-text">
              Web:{' '}
              <a href="https://www.krinedalr.ie" className="footer-link">
                www.krinedalr.ie
              </a>
            </p>

            <p className="footer-text">
              Follow us on Facebook:{' '}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Krinedal-R
              </a>
            </p>
          </div>

          <div className="footer-actions">
            <a href="tel:0831762475" className="btn footer-call">
              Call
            </a>
            <a
              href="https://wa.me/353831762475"
              target="_blank"
              rel="noreferrer"
              className="btn footer-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <CallButtons />
      </footer>
    </main>
  );
}
