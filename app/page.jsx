// app/page.jsx
"use client";

import { useState } from "react";

const PHONE_DISPLAY = "083 176 2475";
const PHONE_TEL = "0831762475";
const WHATSAPP_URL = "https://wa.me/353831762475";

export default function Home() {
  const [roofArea, setRoofArea] = useState("");
  const [roofEstimate, setRoofEstimate] = useState(null);

  const [tileArea, setTileArea] = useState("");
  const [tileType, setTileType] = useState("floor");
  const [tileEstimate, setTileEstimate] = useState(null);

  function handleRoofCalc(e) {
    e.preventDefault();
    const m2 = parseFloat(roofArea);
    if (isNaN(m2) || m2 <= 0) {
      setRoofEstimate(null);
      return;
    }
    // mid-range pricing for full roof renewals (labour only estimate)
    const min = m2 * 90;
    const max = m2 * 120;
    setRoofEstimate({ min: Math.round(min), max: Math.round(max) });
  }

  function handleTileCalc(e) {
    e.preventDefault();
    const m2 = parseFloat(tileArea);
    if (isNaN(m2) || m2 <= 0) {
      setTileEstimate(null);
      return;
    }
    let minRate, maxRate;
    if (tileType === "floor") {
      // luxury floor tiling labour
      minRate = 32;
      maxRate = 40;
    } else {
      // luxury bathroom/wall tiling labour
      minRate = 35;
      maxRate = 45;
    }
    const min = m2 * minRate;
    const max = m2 * maxRate;
    setTileEstimate({ min: Math.round(min), max: Math.round(max) });
  }

  return (
    <main>
      {/* Floating contact buttons */}
      <div className="floating-buttons">
        <a href={`tel:${PHONE_TEL}`} className="float-btn float-call">
          Call
        </a>
        <a href={WHATSAPP_URL} target="_blank" className="float-btn float-wa">
          WhatsApp
        </a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <p className="hero-tag">Premium Property Care Across Ireland ☘️</p>
            <h1>
              <span className="hero-logo">
                KRINEDAL-<span className="hero-logo-r">R</span>
              </span>
              <span className="hero-title-sub">
                Making homes safe, dry & beautifully finished.
              </span>
            </h1>
            <p className="hero-lead">
              Luxury bathroom tiling, full roof renewals, interior & exterior
              painting and 24/7 storm damage response. Snow, rain or storm –
              <strong> we don&apos;t stop</strong> until your home is protected.
            </p>

            <div className="hero-actions">
              <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" className="btn btn-outline">
                WhatsApp us now
              </a>
              <a href="#quote" className="btn btn-soft">
                Request free estimate
              </a>
            </div>

            <ul className="hero-bullets">
              <li>Full roof renewals & emergency storm repairs</li>
              <li>Luxury bathroom & marble-effect tiling</li>
              <li>Landlord-ready fresh-ups & end-of-tenancy works</li>
            </ul>

            <div className="hero-weather">
              <div className="hero-weather-header">
                <span className="hero-weather-title">Today&apos;s Ireland Status</span>
                <span className="hero-weather-sub">
                  Example warning – always follow official Met Éireann advice.
                </span>
              </div>
              <div className="weather-pills">
                <div className="weather-pill">
                  <span className="weather-dot green" />
                  <span>Green – Normal</span>
                </div>
                <div className="weather-pill">
                  <span className="weather-dot yellow" />
                  <span>Yellow – Advisory</span>
                </div>
                <div className="weather-pill active">
                  <span className="weather-dot orange" />
                  <span>Orange – Heavy rain & strong winds (West & Midlands)</span>
                </div>
                <div className="weather-pill">
                  <span className="weather-dot red" />
                  <span>Red – Do not travel (Official alerts only)</span>
                </div>
              </div>

              <button className="btn btn-storm">
                🚨 24/7 Storm Red Warning Call-Out
              </button>
              <p className="hero-storm-note">
                If your roof is leaking, tiles are missing or you&apos;ve had storm
                damage – call immediately. We respond day or night.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <p className="hero-card-kicker">Luxury tiling & roof renewals</p>
              <h2>Need a quote this week?</h2>
              <p className="hero-card-text">
                We specialise in high-end bathrooms, full roof upgrades and
                landlord-ready property care.
              </p>
              <ul className="hero-card-list">
                <li>Free visual estimate from photos</li>
                <li>Materials-first option for new projects</li>
                <li>Clear pricing, no hidden extras</li>
              </ul>
              <p className="hero-card-note">
                Call, WhatsApp or use the form below – we&apos;ll reply the same day
                where possible.
              </p>
            </div>

            <div className="hero-review">
              <p className="hero-review-title">Recent Google-style feedback</p>
              <div className="hero-review-stars">★★★★★</div>
              <p className="hero-review-text">
                “Krinedal-R did our full luxury bathroom tiling last week – just
                phenomenal. Clean, fast and extremely professional. Couldn&apos;t be
                happier.”
              </p>
              <p className="hero-review-name">— Aoife, Navan</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-light">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            From urgent storm call-outs to carefully detailed luxury bathrooms,
            Krinedal-R covers the key things landlords and homeowners worry
            about most.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Luxury Bathroom & Home Tiling</h3>
              <p>
                Premium floor and wall tiling, marble-look bathrooms, walk-in
                showers and feature walls with sharp, straight lines and
                long-lasting finishes.
              </p>
              <ul className="card-list">
                <li>Luxury bathroom tiling</li>
                <li>Kitchen splashbacks & floors</li>
                <li>Herringbone & special patterns</li>
                <li>High-spec grouting & silicone</li>
              </ul>
            </div>

            <div className="card">
              <h3>Roof Repairs & Full Roof Renewals</h3>
              <p>
                From a single leaking area to a full roof replacement, we work
                safely and cleanly to secure your home in Irish weather.
              </p>
              <ul className="card-list">
                <li>Tile & slate replacement</li>
                <li>Full roof renewals</li>
                <li>Chimney & ridge repairs</li>
                <li>Gutters, fascia & soffits</li>
              </ul>
            </div>

            <div className="card">
              <h3>24/7 Storm & Emergency Call-Outs</h3>
              <p>
                When storms hit, we&apos;re ready. Emergency make-safe, temporary
                cover and follow-up repairs so you can sleep without buckets on
                the floor.
              </p>
              <ul className="card-list">
                <li>Emergency leak stopping</li>
                <li>Temporary roof covering</li>
                <li>Storm debris & safety checks</li>
                <li>Snow, rain & storm – we come</li>
              </ul>
            </div>

            <div className="card">
              <h3>Painting & Landlord Fresh-Ups</h3>
              <p>
                Freshen properties between tenants or before sale – painting,
                repairs, silicone renewal and small fixes that make a big
                difference.
              </p>
              <ul className="card-list">
                <li>Interior & exterior painting</li>
                <li>End-of-tenancy refresh</li>
                <li>Patch repairs & touch-ups</li>
                <li>Pre-sale presentation work</li>
              </ul>
            </div>

            <div className="card">
              <h3>Exterior Care & Power Washing</h3>
              <p>
                Keep the outside as sharp as the inside – driveways, patios,
                paths and garden tidy-ups for homes and rentals.
              </p>
              <ul className="card-list">
                <li>Power & soft washing</li>
                <li>Driveway & patio cleaning</li>
                <li>Garden cut & clear</li>
                <li>Hedge & small shrub trimming</li>
              </ul>
            </div>

            <div className="card">
              <h3>Landlord & Portfolio Support</h3>
              <p>
                A single point of contact for maintenance, emergencies and
                fresh-ups – so your tenants stay safe and your properties stay
                compliant.
              </p>
              <ul className="card-list">
                <li>Priority response for landlords</li>
                <li>Proof-of-work photo reports</li>
                <li>Fast invoicing for tax & accounts</li>
                <li>Portfolio/volume pricing – contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="section section-alt">
        <div className="container calculators">
          <div className="calc-left">
            <h2>Roofing & Tiling Smart Estimators</h2>
            <p className="section-intro">
              These tools give a rough guide based on typical labour rates for
              quality work in Ireland. Final quotes are always confirmed after
              viewing photos or visiting the property.
            </p>
          </div>

          <div className="calc-grid">
            <div className="card">
              <h3>Full Roof Renewal Estimator</h3>
              <form onSubmit={handleRoofCalc} className="calc-form">
                <label>
                  Approximate roof area (m²)
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    placeholder="e.g. 110"
                  />
                </label>
                <button type="submit" className="btn btn-small">
                  Estimate roof labour cost
                </button>
              </form>
              {roofEstimate && (
                <p className="calc-result">
                  Approx. labour:{" "}
                  <strong>
                    €{roofEstimate.min} – €{roofEstimate.max}
                  </strong>{" "}
                  (final price depends on structure, access & materials)
                </p>
              )}
            </div>

            <div className="card">
              <h3>Luxury Tiling Estimator</h3>
              <form onSubmit={handleTileCalc} className="calc-form">
                <label>
                  Tiled area (m²)
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={tileArea}
                    onChange={(e) => setTileArea(e.target.value)}
                    placeholder="e.g. 18"
                  />
                </label>

                <label>
                  Type of tiling
                  <select
                    value={tileType}
                    onChange={(e) => setTileType(e.target.value)}
                  >
                    <option value="floor">Floor Tiling (living / hallway)</option>
                    <option value="bathroom">
                      Bathroom / Shower Walls (luxury finish)
                    </option>
                  </select>
                </label>

                <button type="submit" className="btn btn-small">
                  Estimate tiling labour cost
                </button>
              </form>
              {tileEstimate && (
                <p className="calc-result">
                  Approx. labour:{" "}
                  <strong>
                    €{tileEstimate.min} – €{tileEstimate.max}
                  </strong>{" "}
                  (pattern, tiles & preparation may adjust final price)
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORD / HOMEOWNER SECTION */}
      <section className="section section-light">
        <div className="container landlords">
          <div>
            <h2>For Homeowners & Landlords</h2>
            <p className="section-intro">
              Whether it&apos;s your own family home or a rental property, you need
              someone who turns up, communicates clearly and does the job right
              the first time.
            </p>

            <div className="grid landlord-grid">
              <div className="card mini">
                <h3>Homeowners</h3>
                <ul className="card-list">
                  <li>Honest advice and clear expectations</li>
                  <li>Quality-focused workmanship</li>
                  <li>Respect for your home & neighbours</li>
                  <li>Before & after photos on request</li>
                </ul>
              </div>
              <div className="card mini">
                <h3>Landlords & Agents</h3>
                <ul className="card-list">
                  <li>24/7 emergency call-out for tenants</li>
                  <li>End-of-tenancy fresh-ups & repairs</li>
                  <li>Photo reports for your records</li>
                  <li>
                    Landlord pricing:{" "}
                    <strong>please contact directly to discuss</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card landlord-info">
            <h3>Fast Call-Out Pricing (Customers)</h3>
            <ul className="card-list">
              <li>Standard daytime call-out: from €50</li>
              <li>24/7 emergency call-out (private): from €150</li>
              <li>Storm make-safe (high-risk roof work): from €350</li>
            </ul>
            <p className="card-note">
              Each situation is different – we&apos;ll confirm costs before
              starting where safely possible. Landlords: portfolio / repeat work
              discounts available privately.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-alt">
        <div className="container">
          <h2>People We&apos;ve Helped</h2>
          <p className="section-intro">
            A small sample of the type of feedback we aim for on every job.
          </p>

          <div className="grid reviews-grid">
            <div className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                “We had a bad roof leak during heavy rain. Krinedal-R arrived
                close to midnight to make it safe, then came back in daylight
                and fixed it properly. Genuine lads.”
              </p>
              <p className="review-name">— Patrick, Co. Meath</p>
            </div>

            <div className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                “Full luxury bathroom tiling done last week. Just phenomenal –
                lines perfect, everything clean and finished to a really high
                standard. Highly recommend.”
              </p>
              <p className="review-name">— Claire, Dublin</p>
            </div>

            <div className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                “Krinedal-R freshened a rental between tenants – painting,
                small repairs, silicone and garden tidy. Turned it around fast
                and the place looked ready for photos.”
              </p>
              <p className="review-name">— John, Landlord</p>
            </div>
          </div>

          <p className="reviews-footer">
            Follow us on Facebook for updates, weather alerts and recent
            projects – just search <strong>Krinedal-R</strong>.
          </p>
        </div>
      </section>

      {/* APPOINTMENT / QUOTE FORM */}
      <section id="quote" className="section section-light">
        <div className="container quote-grid">
          <div>
            <h2>Request a Call-Back or Free Estimate</h2>
            <p className="section-intro">
              Send a quick summary of what you need – tiling, roofing, painting
              or storm damage – and we&apos;ll come back with next steps. You
              can also send photos by WhatsApp for a faster estimate.
            </p>

            <form
              className="quote-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! This form is a front-end demo only. Please email krinedalr@gmail.com or WhatsApp with your details."
                );
              }}
            >
              <label>
                Your name
                <input type="text" name="name" placeholder="Your full name" />
              </label>
              <label>
                Phone or email
                <input
                  type="text"
                  name="contact"
                  placeholder="Best number or email"
                />
              </label>
              <label>
                Service type
                <select name="service">
                  <option>Luxury bathroom tiling</option>
                  <option>Kitchen / floor tiling</option>
                  <option>Roof repair / renewal</option>
                  <option>Storm damage / emergency</option>
                  <option>Painting & fresh-up</option>
                  <option>Landlord property care</option>
                  <option>Other (describe below)</option>
                </select>
              </label>
              <label>
                Preferred date & time (approx)
                <input type="datetime-local" name="datetime" />
              </label>
              <label>
                Tell us a bit about the job
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Size of area, issues, photos available, access, etc."
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send estimate request
              </button>
            </form>
          </div>

          <div className="card card-side">
            <h3>Booking & Payment</h3>
            <ul className="card-list">
              <li>Materials-first options available for new projects</li>
              <li>Clear written scope agreed before starting</li>
              <li>Digital invoice & payment by bank transfer</li>
              <li>Photos provided for your records on request</li>
            </ul>
            <p className="card-note">
              Straight payment integration (card/IBAN) can be added in the
              future – for now we keep it simple and direct.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-main">
            <p className="footer-logo">
              KRINEDAL-<span className="hero-logo-r">R</span>
            </p>
            <p className="footer-tagline">
              Premium property care, storm or sunshine – Ireland-wide.
            </p>
          </div>
          <div className="footer-contact">
            <p>
              Phone: <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
            </p>
            <p>
              Web:{" "}
              <a href="https://www.krinedalr.ie" target="_blank">
                www.krinedalr.ie
              </a>
            </p>
          </div>
          <div className="footer-extra">
            <p>Based in Co. Meath – operating across Ireland.</p>
            <p className="footer-small">
              © {new Date().getFullYear()} Krinedal-R. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
