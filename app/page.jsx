"use client";

import { useEffect, useMemo, useState } from "react";

/** Inline SVG flag so desktop never shows "IE" */
function IrelandFlag({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="14"
      viewBox="0 0 60 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ireland flag"
      role="img"
    >
      <rect width="60" height="42" fill="#fff" />
      <rect width="20" height="42" x="0" fill="#169B62" />
      <rect width="20" height="42" x="40" fill="#FF883E" />
      <rect
        x="0.5"
        y="0.5"
        width="59"
        height="41"
        fill="none"
        stroke="rgba(0,0,0,0.15)"
      />
    </svg>
  );
}

function PeopleCultureModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>KRINEDAL-R — Our People &amp; Culture Policy</h2>
        <p className="muted">Built on standards • Run by systems • Powered by people</p>
        <hr />

        <div className="k-block">
          <div className="k-title">1. Leadership philosophy</div>
          <p>Leadership is service. We remove obstacles and protect dignity.</p>
          <ul className="k-list">
            <li>Clear systems, calm decisions</li>
            <li>Respect always</li>
            <li>Standards lived daily</li>
            <li>Support growth</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">2. Respect is non-negotiable</div>
          <ul className="k-list">
            <li>
              Zero tolerance: bullying, intimidation, discrimination, abuse of
              authority
            </li>
            <li>Skill can be taught. Character is required.</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">3. Clear pay • clear hours • clear rules</div>
          <ul className="k-list">
            <li>Transparent rates and working hours</li>
            <li>No unpaid labour</li>
            <li>Honest communication</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">4. Training &amp; development</div>
          <p>
            We invest in training, safety certs, and workmanship. Mistakes are
            handled through improvement, not humiliation.
          </p>
        </div>

        <div className="k-block">
          <div className="k-title">5. Safety before speed</div>
          <ul className="k-list">
            <li>Risk assessments, planning, correct equipment</li>
            <li>Right to stop unsafe work — without fear</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">6. Accountability both ways</div>
          <p>
            People are accountable fairly — and leadership is accountable for
            planning, support and decisions.
          </p>
        </div>

        <div className="k-block">
          <div className="k-title">7. No-ego culture</div>
          <p>Titles don’t impress us. Work ethic, attitude and consistency do.</p>
        </div>

        <div className="k-block">
          <div className="k-title">8. Long-term thinking</div>
          <p>We build stable work, better living standards and pride in workmanship.</p>
        </div>

        <hr />
        <p>
          <strong>Built on standards. Run by systems. Powered by people.</strong>
        </p>

        <div className="close-row">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [pcOpen, setPcOpen] = useState(false);

  const SERVICES = [
    "Emergency storm make-safe within hours*",
    "Full roof change & leak tracing",
    "Luxury bathroom & kitchen tiling",
    "Flooring installation (laminate, vinyl & engineered wood)",
    "Garage flooring systems (rubber / PVC tiles / resin-coated floors)",
    "Marble-look & decorative floor coatings",
    "Outdoor concrete stairs & entrance upgrades (integrated lighting)",
    "Landlord-ready refresh between tenants",
  ];

  // ===== Calculators (locked rates) =====
  const [roofArea, setRoofArea] = useState("");
  const roofRate = 45;

  const [tileArea, setTileArea] = useState("");
  const tileRate = 48;

  const [floorArea, setFloorArea] = useState("");
  const floorRate = 26;

  const roofTotal = roofArea ? (Number(roofArea) * roofRate).toFixed(0) : "";
  const tileTotal = tileArea ? (Number(tileArea) * tileRate).toFixed(0) : "";
  const floorTotal = floorArea ? (Number(floorArea) * floorRate).toFixed(0) : "";

  // ===== Weather status =====
  const [weatherStatus, setWeatherStatus] = useState("green");
  const [weatherWarnings, setWeatherWarnings] = useState([]);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [weatherError, setWeatherError] = useState("");
  const [fetchedAt, setFetchedAt] = useState("");

  const weatherUI = useMemo(() => {
    const map = {
      green: {
        label: "GREEN – normal conditions",
        textClass: "green-text",
        chipClass: "weather-chip weather-chip-green",
      },
      yellow: {
        label: "YELLOW – be aware",
        textClass: "yellow-text",
        chipClass: "weather-chip weather-chip-yellow",
      },
      orange: {
        label: "ORANGE – take action",
        textClass: "orange-text",
        chipClass: "weather-chip weather-chip-orange",
      },
      red: {
        label: "RED – danger to life",
        textClass: "red-text",
        chipClass: "weather-chip weather-chip-red",
      },
    };
    return map[weatherStatus] || map.green;
  }, [weatherStatus]);

  async function loadWeather() {
    try {
      setWeatherError("");
      const res = await fetch("/api/weather-status", { cache: "no-store" });
      const json = await res.json();
      if (!json?.ok) setWeatherError(json?.error || "Weather unavailable");

      setWeatherStatus(json?.status || "green");
      setWeatherWarnings(Array.isArray(json?.warnings) ? json.warnings : []);
      setFetchedAt(json?.fetchedAt || "");
      setWeatherLoaded(true);
    } catch {
      setWeatherError("Weather unavailable");
      setWeatherLoaded(true);
    }
  }

  useEffect(() => {
    loadWeather();
    const id = setInterval(loadWeather, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // ===== Secure Contact Form (with Autofill + file upload) =====
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [filesLabel, setFilesLabel] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMsg("");

    try {
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);

      // simple anti-bot
      if (fd.get("website")) return;

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Failed");

      setSubmitMsg("Sent ✅ We’ll get back to you shortly.");
      setFilesLabel("");
      formEl.reset();
    } catch {
      setSubmitMsg("Could not send right now. Please call 083 176 2475 or WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="topbar-brand">
              KRINEDAL-<span className="hero-r">R</span>
            </div>
            <small className="topbar-sub">
              <IrelandFlag className="flag" /> PREMIUM PROPERTY CARE ACROSS IRELAND ☘️ — Built on standards • Run by systems • Powered by people
            </small>
          </div>

          <div className="topbar-actions">
            <button className="btn btn-outline" onClick={() => setPcOpen(true)}>
              People &amp; Culture
            </button>
            <a href="tel:0831762475" className="btn btn-primary">
              Call
            </a>
            <a
              href="https://wa.me/353831762475"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              WhatsApp
            </a>
            <a href="#estimate" className="btn btn-outline">
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* PEOPLE & CULTURE MODAL */}
      <PeopleCultureModal open={pcOpen} onClose={() => setPcOpen(false)} />

      {/* HERO */}
      <section className="hero">
        <span className="shamrock shamrock-left">☘️</span>
        <span className="shamrock shamrock-right">☘️</span>

        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              KRINEDAL-<span className="hero-r">R</span>
            </h1>

            <p className="hero-tag">
              <IrelandFlag className="flag" /> PREMIUM PROPERTY CARE ACROSS IRELAND{" "}
              <span>☘️</span>
            </p>
            <p className="hero-subline">Built on standards • Run by systems • Powered by people</p>

            <p className="hero-lead">
              24/7 storm damage call-out, full roof renewals and{" "}
              <span className="hero-strong">luxury tiling</span> for homes and rental
              properties. Snow, rain or storm won&apos;t stop us.
            </p>

            <p className="hero-weather-label">Current Ireland weather status:</p>
            <div className="hero-weather-row">
              <span className={weatherUI.chipClass}>
                {weatherLoaded ? weatherUI.label : "Loading weather…"}
              </span>
              <span className="hero-weather-shamrock">☘️</span>
            </div>

            <div className="hero-actions">
              <a href="tel:0831762475" className="btn btn-primary">
                Call 24/7 Storm Line
              </a>
              <a
                href="https://wa.me/353831762475"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                WhatsApp us now
              </a>
              <a
                href="https://www.instagram.com/krinedalr/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>
            </div>

            <ul className="hero-bullets">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <p className="hero-note">
              *Response time depends on location &amp; weather conditions.
            </p>
          </div>

          <aside className="hero-side-card">
            <h2>Fast, respectful property care</h2>
            <p>
              From emergency leaks at midnight to full bathroom tiling that looks
              like a hotel – we keep your home safe, dry and beautifully finished.
            </p>
            <div className="hero-side-list">
              <p>✓ 24/7 emergency line</p>
              <p>✓ Photos before &amp; after each job</p>
              <p>✓ Clear pricing and written scope</p>
            </div>
          </aside>
        </div>
      </section>

      {/* STORM + WEATHER */}
      <section className="section section-alt">
        <div className="container grid-2">
          <div className="card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="muted">
              Red warning, heavy rain or leaking roof – we respond fast, day or night.
            </p>

            <a href="tel:0831762475" className="btn btn-storm">
              🚨 24/7 STORM EMERGENCY LINE
            </a>

            {/* ✅ RESTORED PRICING (ONLY THIS ADDED) */}
            <div className="callout-pricing">
              <div className="callout-title">Emergency call-out fee guide</div>

              <div className={`callout-row green ${weatherStatus === "green" ? "active" : ""}`}>
                <span className="left">GREEN</span>
                <span className="right">€250 – €350</span>
              </div>

              <div className={`callout-row yellow ${weatherStatus === "yellow" ? "active" : ""}`}>
                <span className="left">YELLOW</span>
                <span className="right">€350 – €450</span>
              </div>

              <div className={`callout-row orange ${weatherStatus === "orange" ? "active" : ""}`}>
                <span className="left">ORANGE</span>
                <span className="right">€450 – €550</span>
              </div>

              <div className={`callout-row red ${weatherStatus === "red" ? "active" : ""}`}>
                <span className="left">RED</span>
                <span className="right">€550 – €1000</span>
              </div>

              <div className="callout-foot">
                Includes call-out + make-safe only. Final price confirmed before work.
              </div>
            </div>

            <p className="muted small">
              Elderly emergency call-outs: <strong>50% discount</strong> on the call-out fee.
            </p>
          </div>

          <div className="card">
            <h2>Ireland Weather Status</h2>

            <p className="muted small" style={{ marginTop: 8 }}>
              Current:{" "}
              <strong className={weatherUI.textClass}>
                {weatherStatus.toUpperCase()} warning
              </strong>
            </p>

            {weatherError ? (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                ⚠️ {weatherError}
              </p>
            ) : (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                Auto-updated from Met Éireann warnings
                {fetchedAt && (
                  <span> • Last check: {new Date(fetchedAt).toLocaleString()}</span>
                )}
              </p>
            )}

            {weatherWarnings.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <p
                  className="muted small"
                  style={{ fontWeight: 700, marginBottom: 6 }}
                >
                  Latest warnings:
                </p>
                <ul className="list" style={{ marginTop: 0 }}>
                  {weatherWarnings.slice(0, 3).map((w, idx) => (
                    <li key={w.id || w.headline || idx}>
                      <strong style={{ textTransform: "uppercase" }}>{w.level}</strong>
                      {w.headline ? ` – ${w.headline}` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="muted small" style={{ marginTop: 12 }}>
              Follow{" "}
              <a
                href="https://m.facebook.com/profile.php?id=61581354904730&name=xhp_nt__fb__action__open_user"
                target="_blank"
                rel="noreferrer"
                className="brand-inline"
              >
                Krinedal-R on Facebook
              </a>{" "}
              for live updates.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container reviews-grid">
          <article className="card review-card">
            <p className="review-label">★★★★★ CUSTOMER FEEDBACK</p>
            <p className="review-text">
              “Krinedal-R did our full luxury bathroom tiling last week – Chris just
              phenomenal. Clean, fast and extremely professional. Couldn&apos;t be
              happier.”
            </p>
            <p className="review-author">— Aoife, Navan</p>
          </article>

          <article className="card review-card">
            <p className="review-text">
              “We had a roof leak in heavy rain, Chris arrived close to 3Am in the
              midnight, to make the house safe. Snow, rain and storm didn&apos;t stop
              him. Trust 100% saved number - completed, insurance claim report was
              issued within couple hours. Can’t imagine better service. Thank you
              Chris.”
            </p>
            <p className="review-author">— Patrick, Dublin</p>
          </article>
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="section section-alt">
        <div className="container grid-3">
          <div className="card">
            <h2>Roofing cost idea (rough guide)</h2>
            <p className="muted small">
              Handy calculator to get a feel for budget. Final prices always confirmed after inspection.
            </p>

            <label className="field-label">
              Roof area (m²)
              <input
                type="number"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
                className="field-input"
                min="0"
                inputMode="decimal"
              />
            </label>

            <p className="muted small" style={{ marginTop: 8 }}>
              Rate per m²: <strong>€{roofRate}</strong>
            </p>
            <p className="calc-result">
              Rough roofing total: {roofTotal ? <strong>€{roofTotal}</strong> : "— enter size above"}
            </p>
            <p className="muted smallest">
              Typical full roof renewal often falls between <strong>€5,800–€10,000</strong> depending on size, materials and access.
            </p>
          </div>

          <div className="card">
            <h2>Luxury tiling cost idea</h2>
            <p className="muted small">
              For hotel-style bathrooms and premium finishes. Labour only, tiles &amp; materials separate.
            </p>

            <label className="field-label">
              Tiled area (m²)
              <input
                type="number"
                value={tileArea}
                onChange={(e) => setTileArea(e.target.value)}
                className="field-input"
                min="0"
                inputMode="decimal"
              />
            </label>

            <p className="muted small" style={{ marginTop: 8 }}>
              Rate per m²: <strong>€{tileRate}</strong>
            </p>
            <p className="calc-result">
              Rough tiling total: {tileTotal ? <strong>€{tileTotal}</strong> : "— enter size above"}
            </p>
            <p className="muted smallest">
              Premium luxury tiling often ranges <strong>€42–€58 per m²</strong>; this calculator uses <strong>€48 per m²</strong>.
            </p>
          </div>

          <div className="card">
            <h2>Flooring cost idea</h2>
            <p className="muted small">
              Rough guide for laminate, vinyl and engineered wood flooring. Final prices always confirmed after inspection.
            </p>

            <label className="field-label">
              Floor area (m²)
              <input
                type="number"
                value={floorArea}
                onChange={(e) => setFloorArea(e.target.value)}
                className="field-input"
                min="0"
                inputMode="decimal"
              />
            </label>

            <p className="muted small" style={{ marginTop: 8 }}>
              Rate per m²: <strong>€{floorRate}</strong>
            </p>
            <p className="calc-result">
              Rough flooring total: {floorTotal ? <strong>€{floorTotal}</strong> : "— enter size above"}
            </p>
            <p className="muted smallest">
              Flooring labour often ranges <strong>€18–€45 per m²</strong>. This calculator uses <strong>€26 per m²</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section id="estimate" className="section section-form">
        <div className="container">
          <div className="form-card">
            <h2>Request a Free Estimate</h2>
            <p className="form-sub">
              Tell us a bit about your project and we&apos;ll come back with options and a rough budget.
            </p>

            <form onSubmit={onSubmit}>
              {/* Honeypot */}
              <input type="text" name="website" style={{ display: "none" }} autoComplete="off" tabIndex={-1} />

              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="Name" type="text" placeholder="Full name" required autoComplete="name" />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="Phone" type="tel" placeholder="+353" required autoComplete="tel" inputMode="tel" />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="Email" type="email" placeholder="you@email.com" required autoComplete="email" inputMode="email" />
                </div>
              </div>

              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="eircode">Eircode</label>
                  <input id="eircode" name="Eircode" type="text" placeholder="e.g. C15 XXXX" required autoComplete="postal-code" />
                </div>

                <div className="field">
                  <label htmlFor="town">Town / County</label>
                  <input id="town" name="Town/County" type="text" placeholder="e.g. Navan, Co. Meath" required autoComplete="address-level2" />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="service">Type of work</label>
                  <select id="service" name="Service" autoComplete="off">
                    <option>Storm / leak emergency</option>
                    <option>Full roof renewal</option>
                    <option>Roof repair</option>
                    <option>Luxury bathroom tiling</option>
                    <option>Kitchen tiling</option>
                    <option>Flooring installation (laminate / vinyl / engineered wood)</option>
                    <option>Garage flooring systems (rubber / tiles / resin-coated)</option>
                    <option>Marble-look &amp; decorative floor coatings</option>
                    <option>Outdoor concrete stairs</option>
                    <option>Front entrance upgrade</option>
                    <option>Exterior lighting installation</option>
                    <option>Painting &amp; fresh-up</option>
                    <option>Landlord end-of-tenancy</option>
                    <option>Other (describe below)</option>
                  </select>
                </div>
              </div>

              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input id="date" name="Preferred date" type="date" required />
                </div>

                <div className="field">
                  <label htmlFor="time">Preferred time</label>
                  <input id="time" name="Preferred time" type="time" required />
                </div>
              </div>

              {/* Upload photos/files */}
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="files">Upload photos / files (optional)</label>
                  <input
                    id="files"
                    name="files"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx,.heic"
                    onChange={(e) => {
                      const list = Array.from(e.target.files || []);
                      setFilesLabel(list.length ? `${list.length} file(s) selected` : "");
                    }}
                  />
                  {filesLabel && (
                    <p className="muted smallest" style={{ marginTop: 6 }}>
                      {filesLabel}
                    </p>
                  )}
                  <p className="muted smallest" style={{ marginTop: 6 }}>
                    Tip: You can also send photos by WhatsApp if easier.
                  </p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="details">Tell us a bit about the job</label>
                  <textarea
                    id="details"
                    name="Details"
                    placeholder="Size of area, issues, photos available, access, etc."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-storm" disabled={submitting}>
                  {submitting ? "Sending…" : "Send estimate request"}
                </button>

                {/* ✅ FIXED: WHITE TEXT UNDER RED BUTTON */}
                <p className="submit-tip">
                  Thank you for contacting us — our team member will be in touch shortly.
                  In case of emergency call <strong>083 176 2475</strong>.
                </p>

                {submitMsg && (
                  <p className="muted small" style={{ marginTop: 10 }}>
                    {submitMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="section section-dark">
        <div className="container">
          <div className="card card-dark">
            <h2>Booking &amp; Payment</h2>
            <ul className="list">
              <li>Clear written scope agreed before starting</li>
              <li>Digital invoice &amp; payment by bank transfer</li>
              <li>Photos provided for your records on request</li>
            </ul>

            <p className="muted small" style={{ marginTop: 12 }}>
              <strong>Materials &amp; Payment:</strong> For most projects, the customer pays for all necessary materials up front
              (tiles, flooring, timber, concrete, lighting, membranes, fixings, skips, etc.). Labour is paid after the job is completed and the work is signed off.
              For larger jobs, staged payments may apply and will be agreed in writing before we start.
            </p>
          </div>

          <footer className="footer">
            <div className="footer-brand">
              <span className="footer-name">
                KRINEDAL-<span className="hero-r">R</span>
              </span>
              <p className="muted footer-line">
                Premium property care, storm or sunshine – Ireland-wide.
              </p>
              <p className="footer-dna">Built on standards • Run by systems • Powered by people</p>
            </div>

            <div className="footer-contact">
              <p>
                Phone: <strong>083 176 2475</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:krinedalr@outlook.com">krinedalr@outlook.com</a> /{" "}
                <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
              </p>
              <p>
                Web:{" "}
                <a href="https://www.krinedalr.ie" target="_blank" rel="noreferrer">
                  www.krinedalr.ie
                </a>
              </p>
              <p>
                Facebook:{" "}
                <a
                  href="https://m.facebook.com/profile.php?id=61581354904730&name=xhp_nt__fb__action__open_user"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit our page
                </a>{" "}
                • Instagram:{" "}
                <a href="https://www.instagram.com/krinedalr/" target="_blank" rel="noreferrer">
                  @krinedalr
                </a>
              </p>

              <div className="footer-buttons">
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
                <button className="btn footer-call" onClick={() => setPcOpen(true)}>
                  People &amp; Culture
                </button>
              </div>
            </div>
          </footer>
        </div>

        {/* FLOATING BUTTONS */}
        <div className="float-stack">
          <a
            href="https://wa.me/353831762475"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-wa"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            💬
          </a>
          <a
            href="https://m.me/61581354904730"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-msgr"
            aria-label="Messenger"
            title="Messenger"
          >
            📘
          </a>
          <a
            href="https://www.instagram.com/krinedalr/"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-ig"
            aria-label="Instagram"
            title="Instagram"
          >
            📸
          </a>
          <a
            href="mailto:krinedalr@outlook.com"
            className="float-btn float-mail"
            aria-label="Email"
            title="Email"
          >
            ✉️
          </a>
        </div>
      </section>
    </main>
  );
}
