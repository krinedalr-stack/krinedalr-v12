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
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
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
            <li>Zero tolerance: bullying, intimidation, discrimination, abuse of authority</li>
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
            We invest in training, safety certs, and workmanship. Mistakes are handled
            through improvement, not humiliation.
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
          <p>People are accountable fairly — and leadership is accountable for planning, support and decisions.</p>
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
          <button className="btn" onClick={onClose}>Close</button>
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

  const [refreshingWeather, setRefreshingWeather] = useState(false);
  const [lastWeatherOkAt, setLastWeatherOkAt] = useState(0);

  const weatherUI = useMemo(() => {
    const map = {
      green: { label: "GREEN – normal conditions", textClass: "green-text", chipClass: "weather-chip weather-chip-green" },
      yellow: { label: "YELLOW – be aware", textClass: "yellow-text", chipClass: "weather-chip weather-chip-yellow" },
      orange: { label: "ORANGE – take action", textClass: "orange-text", chipClass: "weather-chip weather-chip-orange" },
      red: { label: "RED – danger to life", textClass: "red-text", chipClass: "weather-chip weather-chip-red" },
    };
    return map[weatherStatus] || map.green;
  }, [weatherStatus]);

  async function loadWeather({ manual = false } = {}) {
    try {
      if (manual) setRefreshingWeather(true);
      setWeatherError("");

      const res = await fetch(`/api/weather-status?_=${Date.now()}`, { cache: "no-store" });
      const json = await res.json().catch(() => ({}));

      if (!json?.ok) setWeatherError(json?.error || "Weather unavailable");

      const nextStatus = json?.status || "green";
      setWeatherStatus(nextStatus);
      setWeatherWarnings(Array.isArray(json?.warnings) ? json.warnings : []);
      setFetchedAt(json?.fetchedAt || "");
      setWeatherLoaded(true);

      if (json?.ok) setLastWeatherOkAt(Date.now());
    } catch {
      setWeatherError("Weather unavailable");
      setWeatherLoaded(true);
    } finally {
      if (manual) setRefreshingWeather(false);
    }
  }

  useEffect(() => {
    loadWeather();
    const id = setInterval(loadWeather, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!weatherLoaded) return;
    const id = setInterval(() => {
      const tooLong = lastWeatherOkAt && Date.now() - lastWeatherOkAt > 20 * 60 * 1000;
      if (tooLong) {
        setWeatherStatus("green");
        setWeatherError("Weather feed delayed — showing safe default (GREEN) until refreshed.");
      }
    }, 60 * 1000);
    return () => clearInterval(id);
  }, [weatherLoaded, lastWeatherOkAt]);

  // ===== Secure Contact Form (Estimate) =====
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

      if (fd.get("website")) return;

      fd.set("FormType", "Estimate");

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

  // ===== Membership form =====
  const [membershipSubmitting, setMembershipSubmitting] = useState(false);
  const [membershipMsg, setMembershipMsg] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Diamond");
  const [selectedBilling, setSelectedBilling] = useState("Yearly");
  const [agreeMembership, setAgreeMembership] = useState(false);

  const PLAN_PRICING = {
    Bronze: { yearly: 199, monthly: 19 },
    Silver: { yearly: 399, monthly: 39 },
    Gold: { yearly: 549, monthly: 55 },
    Diamond: { yearly: 799, monthly: 79 },
  };

  const planPriceLabel = (plan) => {
    const p = PLAN_PRICING[plan];
    if (!p) return "";
    return `€${p.yearly} / year • €${p.monthly} / month`;
  };

  function scrollToMembershipApplication(plan = "Diamond") {
    setSelectedPlan(plan);
    setSelectedBilling("Yearly");
    setMembershipMsg("");
    setTimeout(() => {
      const el = document.getElementById("membership-application");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function scrollToSiteTerms() {
    setTimeout(() => {
      const el = document.getElementById("site-terms");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  async function onMembershipSubmit(e) {
    e.preventDefault();
    setMembershipSubmitting(true);
    setMembershipMsg("");

    try {
      if (!agreeMembership) {
        setMembershipMsg("Please tick the agreement box to submit.");
        return;
      }

      const formEl = e.currentTarget;
      const fd = new FormData(formEl);

      if (fd.get("website")) return;

      fd.set("FormType", "Membership");
      fd.set("Plan", selectedPlan);
      fd.set("Billing", selectedBilling);
      fd.set("AgreedToTerms", "YES");

      const p = PLAN_PRICING[selectedPlan];
      if (p) {
        fd.set("PlanPriceYearly", `€${p.yearly}`);
        fd.set("PlanPriceMonthly", `€${p.monthly}`);
      }

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Failed");

      setMembershipMsg("Application sent ✅ We’ll confirm coverage & availability shortly.");
      setAgreeMembership(false);
      formEl.reset();
    } catch {
      setMembershipMsg("Could not send right now. Please call 083 176 2475 or WhatsApp.");
    } finally {
      setMembershipSubmitting(false);
    }
  }

  // ✅ Strict RED policy (insurer-friendly)
  const RED_POLICY_LINE =
    "During RED warnings: we operate, but KRINEDAL-R does not deploy employees/subcontractors. The company owner attends where access is possible. Delays only when access is blocked (fallen trees, flooding, Garda/ambulance/emergency road closures, severe hazards).";

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
            <a href="tel:0831762475" className="btn btn-primary">Call</a>
            <a href="https://wa.me/353831762475" target="_blank" rel="noreferrer" className="btn btn-outline">
              WhatsApp
            </a>
            <a href="#estimate" className="btn btn-outline">Get Quote</a>
            <button type="button" className="btn btn-outline" onClick={() => scrollToMembershipApplication("Diamond")}>
              Memberships
            </button>
            <button type="button" className="btn btn-outline" onClick={scrollToSiteTerms}>
              Website Terms
            </button>
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
              <IrelandFlag className="flag" /> PREMIUM PROPERTY CARE ACROSS IRELAND <span>☘️</span>
            </p>

            <p className="hero-subline">Built on standards • Run by systems • Powered by people</p>

            <p className="hero-lead">
              24/7 storm damage call-out, full roof renewals and{" "}
              <span className="hero-strong">luxury tiling</span> for homes and rental properties.
              Snow, rain or storm won&apos;t stop us.
            </p>

            <p className="hero-weather-label">Current Ireland weather status:</p>
            <div className="hero-weather-row">
              <span className={weatherUI.chipClass}>
                {weatherLoaded ? weatherUI.label : "Loading weather…"}
              </span>
              <span className="hero-weather-shamrock">☘️</span>

              <button
                type="button"
                className="btn btn-weather"
                onClick={() => loadWeather({ manual: true })}
                disabled={refreshingWeather}
                aria-label="Refresh weather"
                title="Refresh weather"
              >
                {refreshingWeather ? "Refreshing…" : "↻ Refresh"}
              </button>
            </div>

            <div className="hero-actions">
              <a href="tel:0831762475" className="btn btn-primary">Call 24/7 Storm Line</a>
              <a href="https://wa.me/353831762475" target="_blank" rel="noreferrer" className="btn btn-outline">
                WhatsApp us now
              </a>
              <a href="https://www.instagram.com/krinedalr/" target="_blank" rel="noreferrer" className="btn btn-outline">
                Instagram
              </a>
              <button type="button" className="btn btn-outline" onClick={() => scrollToMembershipApplication("Diamond")}>
                View memberships
              </button>
            </div>

            <ul className="hero-bullets">
              {SERVICES.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <p className="hero-note">*Response time depends on location &amp; weather conditions.</p>
          </div>

          <aside className="hero-side-card">
            <h2>Fast, respectful property care</h2>
            <p>
              From emergency leaks at midnight to full bathroom tiling that looks like a hotel – we keep your home safe,
              dry and beautifully finished.
            </p>
            <div className="hero-side-list">
              <p>✓ 24/7 emergency line</p>
              <p>✓ Photos + written reports (on request / membership)</p>
              <p>✓ Clear pricing and written scope</p>
            </div>
          </aside>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section id="membership" className="section section-memberships">
        <div className="container">
          <div className="plans-head">
            <div>
              <div className="plans-title">Customer memberships</div>
              <p className="plans-sub">
                Designed for customers who want priority support and clear rules.
                Memberships are approved based on area coverage and current workload.
              </p>
              <p className="plans-sub smallest" style={{ marginTop: 6 }}>
                Note: Membership covers <strong>planning + priority + make-safe</strong> (fair use).
                Permanent repairs/materials are quoted separately.
              </p>
            </div>

            <div className="status-pill">
              <span className="status-label">Current status</span>
              <span className={`status-badge ${weatherStatus}`}>{weatherStatus.toUpperCase()}</span>
            </div>
          </div>

          <div className="plans-grid">
            {/* BRONZE */}
            <div className="plan">
              <div className="plan-kicker"><span className="plan-icon">🥉</span> BRONZE</div>
              <div className="plan-name">Bronze — planned support</div>
              <div className="plan-price">{planPriceLabel("Bronze")}</div>

              <ul>
                <li><strong>Priority booking</strong> for non-emergency jobs</li>
                <li><strong>Member schedule slot</strong> (faster than non-members)</li>
                <li><strong>Discounted inspection</strong> (1× per year, scheduled)</li>
                <li><strong>FREE call-out on GREEN</strong> warnings (make-safe / fair use)</li>
              </ul>

              <div className="plan-foot">Best for organised maintenance and reliable scheduling.</div>

              <div className="plan-actions">
                <button className="btn btn-outline" type="button" onClick={() => scrollToMembershipApplication("Bronze")}>
                  Apply
                </button>
              </div>
            </div>

            {/* SILVER */}
            <div className="plan">
              <div className="plan-kicker"><span className="plan-icon">🥈</span> SILVER</div>
              <div className="plan-name">Silver — faster response</div>
              <div className="plan-price">{planPriceLabel("Silver")}</div>

              <ul>
                <li><strong>Higher priority queue</strong> than Bronze</li>
                <li><strong>Emergency make-safe support</strong> (fair use)</li>
                <li><strong>FREE call-out on GREEN</strong> warnings</li>
                <li><strong>Discounted call-out</strong> on YELLOW / ORANGE</li>
              </ul>

              <div className="plan-foot">Great for families &amp; rentals that need faster support.</div>

              <div className="plan-actions">
                <button className="btn btn-outline" type="button" onClick={() => scrollToMembershipApplication("Silver")}>
                  Apply
                </button>
              </div>
            </div>

            {/* GOLD */}
            <div className="plan">
              <div className="plan-kicker"><span className="plan-icon">🥇</span> GOLD</div>
              <div className="plan-name">Gold — priority + reporting</div>
              <div className="plan-price">{planPriceLabel("Gold")}</div>

              <ul>
                <li><strong>Top priority queue</strong> (before Bronze/Silver)</li>
                <li><strong>FREE call-out on GREEN + YELLOW</strong> warnings</li>
                <li><strong>Discounted call-out</strong> on ORANGE</li>
                <li><strong>Annual inspection</strong> included (scheduled)</li>
              </ul>

              <div className="plan-foot">Ideal for landlords / multi-property owners who need documentation.</div>

              <div className="plan-actions">
                <button className="btn btn-outline" type="button" onClick={() => scrollToMembershipApplication("Gold")}>
                  Apply
                </button>
              </div>
            </div>

            {/* DIAMOND */}
            <div className="plan plan-highlight">
              <div className="plan-kicker"><span className="plan-icon">💎</span> DIAMOND</div>
              <div className="plan-name">Diamond — owner priority cover</div>
              <div className="plan-price">{planPriceLabel("Diamond")}</div>

              <ul>
                <li><strong>€0 call-out fee</strong> on <strong>GREEN / YELLOW / ORANGE / RED</strong></li>
                <li><strong>Owner priority contact</strong> + fastest scheduling</li>
                <li><strong>Emergency make-safe</strong> included (fair use)</li>
                <li><strong>Photos + written report</strong> included (insurance-ready)</li>
                <li><strong>Gutter cleaning 1× per year</strong> (scheduled, safe access rules apply)</li>
                <li><strong>Chimney cleaning 1× per year</strong> (scheduled, safe access rules apply)</li>
              </ul>

              <div className="plan-foot">
                ✅ Under Diamond, call-out fee is <strong>€0</strong> in all warning levels.
                <br />
                <span className="muted smallest" style={{ color: "#4b5563" }}>{RED_POLICY_LINE}</span>
              </div>

              <div className="plan-actions">
                <button className="btn btn-primary" type="button" onClick={() => scrollToMembershipApplication("Diamond")}>
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* SAVINGS / EXTRA SERVICES */}
          <div className="member-savings" style={{ marginTop: 22 }}>
            <div className="member-savings-title">Extra savings with memberships</div>
            <p className="member-savings-sub">
              Many customers pay separate companies for these jobs. With KRINEDAL-R memberships,
              you can save money and keep everything under one trusted contact.
            </p>

            <div className="savings-grid">
              <div className="savings-item">
                <div className="savings-name">Chimney cleaning</div>
                <div className="savings-row"><span>Typical market</span><strong>€120–€220</strong></div>
                <div className="savings-row"><span>With Diamond</span><strong>Included 1× / year*</strong></div>
              </div>

              <div className="savings-item">
                <div className="savings-name">Gutter cleaning</div>
                <div className="savings-row"><span>Typical market</span><strong>€90–€180</strong></div>
                <div className="savings-row"><span>With Diamond</span><strong>Included 1× / year*</strong></div>
              </div>

              <div className="savings-item">
                <div className="savings-name">Drain / pipe cleaning (basic)</div>
                <div className="savings-row"><span>Typical market</span><strong>€120–€260</strong></div>
                <div className="savings-row"><span>Members</span><strong>Discounted / quoted</strong></div>
              </div>

              <div className="savings-item">
                <div className="savings-name">Annual inspection report</div>
                <div className="savings-row"><span>Typical market</span><strong>€120–€250</strong></div>
                <div className="savings-row"><span>With Gold</span><strong>Included 1× / year*</strong></div>
              </div>
            </div>

            <p className="muted smallest" style={{ marginTop: 10 }}>
              *Included/discounted services depend on safe access and the specific property setup. If scaffolding, MEWP,
              specialist access, heavy blockages, or extra labour is required, that is quoted separately.
            </p>
          </div>

          {/* MEMBERSHIP APPLICATION */}
          <section id="membership-application" style={{ scrollMarginTop: 92 }}>
            <div className="form-card membership-form" style={{ marginTop: 22 }}>
              <h2>Membership application</h2>
              <p className="form-sub">Apply in 60 seconds. We’ll confirm coverage &amp; availability by phone / email.</p>

              <form onSubmit={onMembershipSubmit}>
                <input type="text" name="website" style={{ display: "none" }} autoComplete="off" tabIndex={-1} />

                <div className="form-grid two-col">
                  <div className="field">
                    <label htmlFor="m_name">Your name</label>
                    <input id="m_name" name="Name" type="text" placeholder="Full name" required autoComplete="name" />
                  </div>

                  <div className="field">
                    <label htmlFor="m_phone">Phone number</label>
                    <input id="m_phone" name="Phone" type="tel" placeholder="+353" required autoComplete="tel" inputMode="tel" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="m_email">Email</label>
                    <input id="m_email" name="Email" type="email" placeholder="you@email.com" required autoComplete="email" inputMode="email" />
                  </div>
                </div>

                <div className="form-grid two-col">
                  <div className="field">
                    <label htmlFor="m_eircode">Eircode</label>
                    <input id="m_eircode" name="Eircode" type="text" placeholder="e.g. C15 XXXX" required autoComplete="postal-code" />
                  </div>

                  <div className="field">
                    <label htmlFor="m_town">Town / County</label>
                    <input id="m_town" name="Town/County" type="text" placeholder="e.g. Navan, Co. Meath" required autoComplete="address-level2" />
                  </div>
                </div>

                <div className="form-grid two-col">
                  <div className="field">
                    <label htmlFor="m_plan">Plan</label>
                    <select id="m_plan" name="Plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} autoComplete="off">
                      <option>Bronze</option>
                      <option>Silver</option>
                      <option>Gold</option>
                      <option>Diamond</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="m_billing">Billing</label>
                    <select id="m_billing" name="Billing" value={selectedBilling} onChange={(e) => setSelectedBilling(e.target.value)} autoComplete="off">
                      <option>Yearly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="m_address">Address (optional)</label>
                    <input id="m_address" name="Address" type="text" placeholder="Street / Estate / House number" autoComplete="street-address" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="m_notes">Anything we should know?</label>
                    <textarea id="m_notes" name="Member notes" placeholder="Roof type, recurring leak, rental property, access, pets, etc." />
                  </div>
                </div>

                {/* TERMS (summary) */}
                <div className="form-grid">
                  <div className="field" style={{ gap: 8 }}>
                    <label style={{ marginBottom: 0 }}>Important membership terms (summary)</label>

                    <div className="terms-box">
                      <p style={{ marginBottom: 10 }}>
                        <strong>Non-refundable:</strong> Membership payments are non-refundable once activated, unless required by law.
                      </p>

                      <p style={{ marginBottom: 10 }}>
                        <strong>Fair use:</strong> Membership is for genuine property issues and emergency make-safe. Repeated non-urgent call-outs,
                        misuse, or abusive behaviour may lead to suspension/cancellation without refund.
                      </p>

                      <p style={{ marginBottom: 10 }}>
                        <strong>Emergency scope:</strong> “Make-safe” includes temporary steps to reduce immediate damage (e.g. tarping, temporary sealing,
                        isolating hazards). <strong>Materials, scaffolding, skips, specialist hire</strong> and permanent repairs are quoted separately.
                      </p>

                      <p style={{ marginBottom: 10 }}>
                        <strong>RED warning safety policy (strict):</strong> {RED_POLICY_LINE}
                      </p>

                      <p style={{ marginBottom: 0 }}>
                        Read the full Membership Terms &amp; Conditions below — and the Website Terms for general use of the site.
                      </p>
                    </div>

                    <label className="agree-row">
                      <input
                        type="checkbox"
                        checked={agreeMembership}
                        onChange={(e) => setAgreeMembership(e.target.checked)}
                        aria-label="Agree to membership terms"
                      />
                      I understand and agree to the membership terms above and the full Terms &amp; Conditions below.
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-emerald" disabled={membershipSubmitting}>
                    {membershipSubmitting ? "Sending…" : "Send membership application"}
                  </button>

                  <p className="submit-tip">
                    Once approved, we’ll confirm your plan and activation by phone/email. Emergency line: <strong>083 176 2475</strong>.
                  </p>

                  {membershipMsg && <p className="membership-msg">{membershipMsg}</p>}
                </div>
              </form>
            </div>

            {/* FULL MEMBERSHIP TERMS & CONDITIONS */}
            <div className="legal-card" style={{ marginTop: 18 }}>
              <h2>Membership Terms &amp; Conditions</h2>
              <p className="muted small" style={{ marginTop: 8 }}>
                These terms apply to all KRINEDAL-R memberships (Bronze/Silver/Gold/Diamond). Membership is a service agreement — not an insurance policy.
              </p>

              <div className="legal-grid">
                <div className="legal-block">
                  <div className="legal-title">1) Definitions</div>
                  <ul className="k-list">
                    <li><strong>Make-safe</strong>: temporary steps to reduce immediate damage or hazard.</li>
                    <li><strong>Permanent repair</strong>: full fix using materials/labour — always quoted separately.</li>
                    <li><strong>Fair use</strong>: reasonable use for genuine property issues (not repeated non-urgent call-outs).</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">2) Coverage &amp; approval</div>
                  <ul className="k-list">
                    <li>Memberships are approved based on coverage area and current workload.</li>
                    <li>We may decline or delay activation if we cannot maintain standards.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">3) Emergency response &amp; weather</div>
                  <ul className="k-list">
                    <li><strong>GREEN call-out fee:</strong> FREE for all active members (make-safe / fair use).</li>
                    <li><strong>Gold:</strong> free call-out on GREEN + YELLOW (fair use).</li>
                    <li><strong>Diamond:</strong> free call-out on GREEN/YELLOW/ORANGE/RED (fair use).</li>
                    <li><strong>RED warning safety policy (strict):</strong> {RED_POLICY_LINE}</li>
                    <li>If a delay occurs, we communicate the reason and the next possible arrival window.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">4) What is included</div>
                  <ul className="k-list">
                    <li>Priority planning/booking according to your plan.</li>
                    <li>Emergency make-safe actions within fair use.</li>
                    <li>Reports/photos where your plan includes them.</li>
                    <li>Included annual services (if your plan includes them) are scheduled and subject to safe access.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">5) What is not included</div>
                  <ul className="k-list">
                    <li>Materials (tiles, timber, membranes, fixings, etc.).</li>
                    <li>Skips, scaffolding, MEWP, specialist hire, engineer reports.</li>
                    <li>Full permanent repairs — quoted separately.</li>
                    <li>Gas/electrical works that require certified specialists.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">6) Payments &amp; refunds</div>
                  <ul className="k-list">
                    <li>Membership payments are <strong>non-refundable</strong> once activated, unless required by law.</li>
                    <li>Monthly or yearly billing options may be available as shown.</li>
                    <li>Missed payments may pause membership benefits until resolved.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">7) Fair use &amp; behaviour</div>
                  <ul className="k-list">
                    <li>Misuse, repeated non-urgent call-outs, or abusive behaviour may lead to suspension/cancellation without refund.</li>
                    <li>Access must be safe and reasonable (dogs secured, hazards disclosed, etc.).</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">8) Liability &amp; limits</div>
                  <ul className="k-list">
                    <li>We work to high standards, but we cannot guarantee outcomes where hidden defects exist.</li>
                    <li>Make-safe actions reduce damage risk but cannot eliminate all risk during extreme weather.</li>
                    <li>Any liability is limited to the work we carried out (subject to Irish law).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WEBSITE / COMPANY TERMS & CONDITIONS */}
            <div id="site-terms" className="legal-card" style={{ marginTop: 18, scrollMarginTop: 92 }}>
              <h2>Website &amp; Company Terms &amp; Conditions</h2>
              <p className="muted small" style={{ marginTop: 8 }}>
                These terms apply to general use of the KRINEDAL-R website and services (quotes, call-outs, bookings, communication).
              </p>

              <div className="legal-grid">
                <div className="legal-block">
                  <div className="legal-title">1) Quotes &amp; pricing</div>
                  <ul className="k-list">
                    <li>Website calculators are <strong>rough guides</strong> only and not binding quotations.</li>
                    <li>Final prices are confirmed after inspection / scope agreement.</li>
                    <li>Emergency call-out fees depend on distance, access and conditions.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">2) Safety &amp; duty of care (RED policy)</div>
                  <ul className="k-list">
                    <li><strong>Strict safety policy:</strong> KRINEDAL-R does not send employees/subcontractors during RED warnings.</li>
                    <li><strong>Reason:</strong> risk assessment, high hazards, duty of care to our staff and their families.</li>
                    <li><strong>Owner response:</strong> the company owner attends where access is possible.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">3) Delays outside our control</div>
                  <ul className="k-list">
                    <li>Delays may occur where access is blocked or unsafe.</li>
                    <li>Examples: fallen trees, flooded roads, Garda/ambulance/emergency service road blocks, major incidents.</li>
                    <li>We communicate the reason and next possible arrival window.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">4) Materials &amp; staged payments</div>
                  <ul className="k-list">
                    <li>For most projects, customers pay materials up front (tiles, timber, membranes, fixings, skips, etc.).</li>
                    <li>Labour is paid after completion unless staged payments are agreed in writing.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">5) Cancellations</div>
                  <ul className="k-list">
                    <li>If you cancel a booked visit last minute, a call-out/booking fee may still apply (time and travel reserved).</li>
                    <li>We may reschedule due to severe weather or safety risk.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">6) Photos, reports &amp; communication</div>
                  <ul className="k-list">
                    <li>Photos/reports are provided where agreed or where included in your membership level.</li>
                    <li>We may use photos internally for quality and records (not public marketing without permission).</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">7) Privacy</div>
                  <ul className="k-list">
                    <li>Form submissions are used only to respond to your request and manage service delivery.</li>
                    <li>We do not sell your data.</li>
                  </ul>
                </div>

                <div className="legal-block">
                  <div className="legal-title">8) General limitation</div>
                  <ul className="k-list">
                    <li>We are not responsible for hidden defects or pre-existing structural issues outside the visible scope.</li>
                    <li>Any liability is limited to the work we carried out, subject to Irish law.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* STORM + WEATHER */}
      <section className="section section-alt">
        <div className="container grid-2">
          <div className="card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="muted">Red warning, heavy rain or leaking roof – we respond fast, day or night.</p>

            <a href="tel:0831762475" className="btn btn-storm">🚨 24/7 STORM EMERGENCY LINE</a>

            <div style={{ marginTop: 14 }}>
              <p className="muted small" style={{ fontWeight: 800, marginBottom: 6 }}>
                Community support discounts
              </p>

              <p className="muted small" style={{ lineHeight: 1.55 }}>
                We help where we can — especially during storms. If you are <strong>elderly</strong> or a{" "}
                <strong>single parent</strong> and you are dealing with an urgent emergency (leaks, storm damage, unsafe roof),
                we offer:
              </p>

              <ul className="list" style={{ marginTop: 10 }}>
                <li><strong>50% OFF</strong> emergency call-out fee for <strong>elderly customers</strong></li>
                <li><strong>35% OFF</strong> emergency call-out fee for <strong>single parents</strong></li>
              </ul>

              <p className="muted smallest" style={{ marginTop: 10 }}>
                <strong>Important:</strong> Discounts apply to the <strong>call-out fee only</strong> and are intended for genuine
                emergency make-safe visits. Materials, skips, scaffolding, specialist hire and additional works are charged separately.
                Availability depends on weather, travel distance and workload.
              </p>

              <p className="muted smallest" style={{ marginTop: 10 }}>
                <strong>Safety note:</strong> {RED_POLICY_LINE}
              </p>
            </div>

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

              <div className="callout-foot">Includes call-out + make-safe only. Final price confirmed before work.</div>
            </div>
          </div>

          <div className="card">
            <h2>Ireland Weather Status</h2>

            <p className="muted small" style={{ marginTop: 8 }}>
              Current:{" "}
              <strong className={weatherUI.textClass}>{weatherStatus.toUpperCase()} warning</strong>
            </p>

            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                className="btn btn-weather"
                onClick={() => loadWeather({ manual: true })}
                disabled={refreshingWeather}
              >
                {refreshingWeather ? "Refreshing…" : "↻ Refresh weather"}
              </button>
            </div>

            {weatherError ? (
              <p className="muted smallest" style={{ marginTop: 8 }}>⚠️ {weatherError}</p>
            ) : (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                Auto-updated from Met Éireann warnings
                {fetchedAt && <span> • Last check: {new Date(fetchedAt).toLocaleString()}</span>}
              </p>
            )}

            {weatherWarnings.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <p className="muted small" style={{ fontWeight: 700, marginBottom: 6 }}>Latest warnings:</p>
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
              “Krinedal-R did our full luxury bathroom tiling last week – Chris just phenomenal.
              Clean, fast and extremely professional. Couldn&apos;t be happier.”
            </p>
            <p className="review-author">— Aoife, Navan</p>
          </article>

          <article className="card review-card">
            <p className="review-text">
              “We had a roof leak in heavy rain, Chris arrived close to 3Am in the midnight, to make the house safe.
              Snow, rain and storm didn&apos;t stop him. Trust 100% saved number - completed, insurance claim report was
              issued within couple hours. Can’t imagine better service. Thank you Chris.”
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
            <p className="muted small">Handy calculator to get a feel for budget. Final prices always confirmed after inspection.</p>

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

            <p className="muted small" style={{ marginTop: 8 }}>Rate per m²: <strong>€{roofRate}</strong></p>

            <p className="calc-result">
              Rough roofing total: {roofTotal ? <strong>€{roofTotal}</strong> : "— enter size above"}
            </p>

            <p className="muted smallest">
              Typical full roof renewal often falls between <strong>€5,800–€10,000</strong> depending on size, materials and access.
            </p>
          </div>

          <div className="card">
            <h2>Luxury tiling cost idea</h2>
            <p className="muted small">For hotel-style bathrooms and premium finishes. Labour only, tiles &amp; materials separate.</p>

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

            <p className="muted small" style={{ marginTop: 8 }}>Rate per m²: <strong>€{tileRate}</strong></p>

            <p className="calc-result">
              Rough tiling total: {tileTotal ? <strong>€{tileTotal}</strong> : "— enter size above"}
            </p>

            <p className="muted smallest">
              Premium luxury tiling often ranges <strong>€42–€58 per m²</strong>; this calculator uses <strong>€48 per m²</strong>.
            </p>
          </div>

          <div className="card">
            <h2>Flooring cost idea</h2>
            <p className="muted small">Rough guide for laminate, vinyl and engineered wood flooring. Final prices always confirmed after inspection.</p>

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

            <p className="muted small" style={{ marginTop: 8 }}>Rate per m²: <strong>€{floorRate}</strong></p>

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
                  {filesLabel && <p className="muted smallest" style={{ marginTop: 6 }}>{filesLabel}</p>}
                  <p className="muted smallest" style={{ marginTop: 6 }}>Tip: You can also send photos by WhatsApp if easier.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="details">Tell us a bit about the job</label>
                  <textarea id="details" name="Details" placeholder="Size of area, issues, photos available, access, etc." />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-storm" disabled={submitting}>
                  {submitting ? "Sending…" : "Send estimate request"}
                </button>

                <p className="submit-tip">
                  Thank you for contacting us — our team member will be in touch shortly. In case of emergency call <strong>083 176 2475</strong>.
                </p>

                {submitMsg && <p className="membership-msg" style={{ marginTop: 10 }}>{submitMsg}</p>}
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
              (tiles, flooring, timber, concrete, lighting, membranes, fixings, skips, etc.). Labour is paid after the job is completed.
              For larger jobs, staged payments may apply and will be agreed in writing before we start.
            </p>

            <p className="muted smallest" style={{ marginTop: 10 }}>
              <strong>Safety policy:</strong> {RED_POLICY_LINE}
            </p>
          </div>

          <footer className="footer">
            <div className="footer-brand">
              <span className="footer-name">KRINEDAL-<span className="hero-r">R</span></span>
              <p className="muted footer-line">Premium property care, storm or sunshine – Ireland-wide.</p>
              <p className="footer-dna">Built on standards • Run by systems • Powered by people</p>
            </div>

            <div className="footer-contact">
              <p>Phone: <strong>083 176 2475</strong></p>
              <p>
                Email:{" "}
                <a href="mailto:krinedalr@outlook.com">krinedalr@outlook.com</a> /{" "}
                <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
              </p>
              <p>
                Web:{" "}
                <a href="https://www.krinedalr.ie" target="_blank" rel="noreferrer">www.krinedalr.ie</a>
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
                <a href="https://www.instagram.com/krinedalr/" target="_blank" rel="noreferrer">@krinedalr</a>
              </p>

              <div className="footer-buttons">
                <a href="tel:0831762475" className="btn footer-call">Call</a>
                <a href="https://wa.me/353831762475" target="_blank" rel="noreferrer" className="btn footer-whatsapp">WhatsApp</a>
                <button className="btn footer-call" onClick={() => setPcOpen(true)}>People &amp; Culture</button>
                <button className="btn footer-call" onClick={scrollToSiteTerms}>Website Terms</button>
              </div>
            </div>
          </footer>
        </div>

        {/* FLOATING BUTTONS */}
        <div className="float-stack">
          <a href="https://wa.me/353831762475" target="_blank" rel="noreferrer" className="float-btn float-wa" aria-label="WhatsApp" title="WhatsApp">💬</a>
          <a href="https://m.me/61581354904730" target="_blank" rel="noreferrer" className="float-btn float-msgr" aria-label="Messenger" title="Messenger">📘</a>
          <a href="https://www.instagram.com/krinedalr/" target="_blank" rel="noreferrer" className="float-btn float-ig" aria-label="Instagram" title="Instagram">📸</a>
          <a href="mailto:krinedalr@outlook.com" className="float-btn float-mail" aria-label="Email" title="Email">✉️</a>
        </div>
      </section>
    </main>
  );
}
