// app/page.jsx (or wherever your HomePage lives)
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

/** SVG icons for floating buttons (real icons, no emojis) */
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#0b1120"
        d="M16 3C9.39 3 4 8.39 4 15c0 2.1.55 4.15 1.6 5.96L4 29l8.2-1.55A11.88 11.88 0 0 0 16 27c6.61 0 12-5.39 12-12S22.61 3 16 3z"
        opacity="0.15"
      />
      <path
        fill="#ffffff"
        d="M16 5.2c-5.39 0-9.8 4.41-9.8 9.8 0 1.92.56 3.79 1.62 5.4l-1.06 5.66 5.78-1.08A9.76 9.76 0 0 0 16 24.8c5.39 0 9.8-4.41 9.8-9.8S21.39 5.2 16 5.2zm5.55 13.43c-.24.68-1.37 1.3-1.9 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.95-.31-1.64-.61-2.87-1.24-4.75-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.57.82 1.97.89 2.12.07.15.12.34.02.54-.1.2-.15.34-.29.52-.14.18-.3.4-.43.54-.14.14-.28.29-.12.56.16.27.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.24 1.38.27.14.43.12.59-.07.16-.2.68-.79.87-1.06.18-.27.37-.22.61-.13.24.09 1.55.73 1.82.86.27.13.45.2.52.31.07.11.07.66-.17 1.34z"
      />
    </svg>
  );
}

function IconMessenger() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M16 4.5C9.37 4.5 4 9.44 4 15.54c0 3.48 1.75 6.59 4.49 8.62V27.5l3.25-1.79c1.33.38 2.76.59 4.26.59 6.63 0 12-4.94 12-10.96S22.63 4.5 16 4.5zm1.19 14.72-3.05-3.25-5.97 3.25 6.57-7.02 3.12 3.25 5.9-3.25-6.57 7.02z"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M20.4 6h-8.8A5.6 5.6 0 0 0 6 11.6v8.8A5.6 5.6 0 0 0 11.6 26h8.8A5.6 5.6 0 0 0 26 20.4v-8.8A5.6 5.6 0 0 0 20.4 6zm3.6 14.4a3.6 3.6 0 0 1-3.6 3.6h-8.8A3.6 3.6 0 0 1 8 20.4v-8.8A3.6 3.6 0 0 1 11.6 8h8.8A3.6 3.6 0 0 1 24 11.6v8.8z"
      />
      <path
        fill="#ffffff"
        d="M16 11.2A4.8 4.8 0 1 0 20.8 16 4.81 4.81 0 0 0 16 11.2zm0 7.6A2.8 2.8 0 1 1 18.8 16 2.81 2.81 0 0 1 16 18.8z"
      />
      <circle cx="21.2" cy="10.8" r="1.1" fill="#ffffff" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M6.5 9.5h19A2.5 2.5 0 0 1 28 12v8A2.5 2.5 0 0 1 25.5 22h-19A2.5 2.5 0 0 1 4 20v-8A2.5 2.5 0 0 1 6.5 9.5zm0 2 9.5 6 9.5-6v-.2h-19v.2zm19 2.3-9.1 5.7a1 1 0 0 1-1.1 0L6.5 13.8V20a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5v-6.2z"
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
            We invest in training, safety certs, and workmanship. Mistakes are handled through
            improvement, not humiliation.
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
            People are accountable fairly — and leadership is accountable for planning, support and
            decisions.
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

function TermsModal({ open, onClose, RED_POLICY_LINE }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Website &amp; Company Terms &amp; Conditions</h2>
        <p className="muted small" style={{ marginTop: 8 }}>
          These terms apply to general use of the KRINEDAL-R website and services (quotes, call-outs,
          bookings, communication).
        </p>
        <hr />

        <div className="k-block">
          <div className="k-title">Insurer-safe note</div>
          <p>
            Memberships and call-outs are a service agreement — <strong>not an insurance policy</strong>.
            Reports/photos can support claims where requested, but insurers decide outcomes.
          </p>
        </div>

        <div className="k-block">
          <div className="k-title">1) Quotes &amp; pricing</div>
          <ul className="k-list">
            <li>
              Website calculators are <strong>rough guides</strong> only and not binding quotations.
            </li>
            <li>Final prices are confirmed after inspection / scope agreement.</li>
            <li>Emergency call-out fees depend on distance, access and conditions.</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">2) Safety &amp; duty of care (RED policy)</div>
          <ul className="k-list">
            <li>
              <strong>Strict safety policy:</strong> KRINEDAL-R does not send
              employees/subcontractors during RED warnings.
            </li>
            <li>
              <strong>Reason:</strong> risk assessment, high hazards, duty of care to our staff and
              their families.
            </li>
            <li>
              <strong>Owner response:</strong> the company owner attends where access is possible.
            </li>
            <li>
              <strong>Safety note:</strong> {RED_POLICY_LINE}
            </li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">3) Delays outside our control</div>
          <ul className="k-list">
            <li>Delays may occur where access is blocked or unsafe.</li>
            <li>
              Examples: fallen trees, flooded roads, Garda/ambulance/emergency service road blocks,
              major incidents.
            </li>
            <li>We communicate the reason and next possible arrival window.</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">4) Materials &amp; staged payments</div>
          <ul className="k-list">
            <li>
              For most projects, customers pay materials up front (tiles, timber, membranes, fixings,
              skips, etc.).
            </li>
            <li>Labour is paid after completion unless staged payments are agreed in writing.</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">5) Cancellations (strict policy)</div>
          <ul className="k-list">
            <li>
              <strong>
                If a booked visit is cancelled after planning has been completed and a technician
                has already been dispatched (left base and is travelling), the full call-out/booking
                fee applies.
              </strong>
            </li>
            <li>This covers time, travel, fuel, scheduling, and resources already committed.</li>
            <li>
              Cancellations due to severe weather or safety risk, as determined by KRINEDAL-R, may
              be rescheduled without penalty.
            </li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">6) Photos, reports &amp; communication</div>
          <ul className="k-list">
            <li>Photos/reports are provided where agreed or where included in your membership level.</li>
            <li>We may use photos internally for quality and records (not public marketing without permission).</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">7) Privacy</div>
          <ul className="k-list">
            <li>Form submissions are used only to respond to your request and manage service delivery.</li>
            <li>We do not sell your data.</li>
          </ul>
        </div>

        <div className="k-block">
          <div className="k-title">8) General limitation</div>
          <ul className="k-list">
            <li>We are not responsible for hidden defects or pre-existing structural issues outside the visible scope.</li>
            <li>Any liability is limited to the work we carried out, subject to Irish law.</li>
          </ul>
        </div>

        <div className="close-row">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/** ✅ Community Support modal */
function CommunitySupportModal({ open, onClose, RED_POLICY_LINE }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>KRINEDAL-R — Community Support Policy</h2>
        <p className="muted">Why we offer emergency call-out discounts during storms</p>
        <hr />

        <div className="k-block">
          <div className="k-title">Discounts offered</div>
          <ul className="k-list">
            <li>
              <strong>50% OFF</strong> emergency call-out fee for <strong>elderly customers</strong>
            </li>
            <li>
              <strong>35% OFF</strong> emergency call-out fee for <strong>single parents</strong>
            </li>
            <li>
              <strong>35% OFF</strong> emergency call-out fee for{" "}
              <strong>families caring for children with severe disabilities</strong>
            </li>
          </ul>
          <p className="muted smallest" style={{ marginTop: 10 }}>
            <strong>Important:</strong> Discounts apply to the <strong>call-out fee only</strong> and are intended
            for genuine emergency make-safe visits. Materials, skips, scaffolding, specialist hire and
            additional works are charged separately.
          </p>
        </div>

        {/* ✅ YOUR TEXT — EXACT, NO EXTRA */}
        <div className="k-block">
          <div className="k-title">Why we do this</div>
          <p>
            Many elderly people built this country through decades of hard work and contribution.
            When severe weather hits, they are often the most vulnerable.
            We believe they deserve respect, safety, and fast help when their home is at risk.
          </p>
          <p>
            Single parents often carry full responsibility for their household alone.
            During emergencies there is no second person to share the pressure or cost.
            We reduce the call-out fee to help keep the home safe during difficult moments
          </p>
          <p>
            Families caring for children with severe disabilities often face constant pressure, emotional strain, and unexpected emergencies.
            During severe weather or urgent home safety issues, these families have little flexibility and fewer options to respond quickly.
            Parents cannot leave children unattended in dangerous conditions while also trying to make the home safe.
            We believe these families deserve understanding, dignity, and practical support when their home environment becomes unsafe.
          </p>
        </div>

        <div className="k-block">
          <div className="k-title">Safety note (strict)</div>
          <p className="muted smallest" style={{ marginTop: 6 }}>
            {RED_POLICY_LINE}
          </p>
        </div>

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
  const [termsOpen, setTermsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  // ✅ Mobile "More" dropdown
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // ✅ Savings collapse: open desktop, collapsed mobile
  const [savingsOpen, setSavingsOpen] = useState(true);
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 520;
    setSavingsOpen(!isMobile);
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target)) setMoreOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

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
  const roofRate = 70;

  const [tileArea, setTileArea] = useState("");
  const tileRate = 75;

  const [floorArea, setFloorArea] = useState("");
  const floorRate = 40;

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

  // ✅ Quarterly / Yearly (PLAN LOCKED)
  const PLAN_PRICING = {
    Bronze: { yearly: 199, quarterly: 59 },
    Silver: { yearly: 399, quarterly: 119 },
    Gold: { yearly: 549, quarterly: 165 },
    Diamond: { yearly: 799, quarterly: 239 },
  };

  const planPriceLabel = (plan) => {
    const p = PLAN_PRICING[plan];
    if (!p) return "";
    return `€${p.yearly} / year • €${p.quarterly} / quarter`;
  };

  function scrollToId(id) {
    setMoreOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function scrollToMembershipApplication(plan = "Diamond") {
    setSelectedPlan(plan);
    setSelectedBilling("Yearly");
    setMembershipMsg("");
    setMoreOpen(false);

    setTimeout(() => {
      const el = document.getElementById("membership-application");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function openTermsModal() {
    setTermsOpen(true);
    setMoreOpen(false);
  }

  function openCommunityModal() {
    setCommunityOpen(true);
    setMoreOpen(false);
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
        fd.set("PlanPriceQuarterly", `€${p.quarterly}`);
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

  const WIND_MAP_URL =
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=0.00,0.00,309";

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
              <IrelandFlag className="flag" /> PREMIUM PROPERTY CARE ACROSS IRELAND ☘️ — Built on
              standards • Run by systems • Powered by people
            </small>
          </div>

          {/* Desktop actions */}
          <div className="topbar-actions">
            <button className="btn btn-outline" onClick={() => setPcOpen(true)}>
              People &amp; Culture
            </button>
            <button className="btn btn-outline" onClick={openCommunityModal}>
              Community Support
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
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => scrollToMembershipApplication("Diamond")}
            >
              Memberships
            </button>
            <button type="button" className="btn btn-outline" onClick={openTermsModal}>
              Website Terms
            </button>
          </div>

          {/* Mobile actions */}
          <div className="topbar-actions-mobile">
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

            <div className="more-wrap" ref={moreRef}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
              >
                ☰ More
              </button>

              {moreOpen && (
                <div className="more-menu">
                  <button
                    className="more-item"
                    onClick={() => {
                      setPcOpen(true);
                      setMoreOpen(false);
                    }}
                  >
                    👥 People &amp; Culture
                  </button>

                  <button className="more-item" onClick={openCommunityModal}>
                    🤝 Community Support
                  </button>

                  <button className="more-item" onClick={() => scrollToId("live-weather")}>
                    🌦 Live Weather Status
                  </button>

                  <button className="more-item" onClick={() => scrollToId("wind-weather")}>
                    🌬️ Wind / Weather Reader
                  </button>

                  <a className="more-item" href="#estimate" onClick={() => setMoreOpen(false)}>
                    🧾 Get Quote
                  </a>

                  <button
                    className="more-item"
                    onClick={() => scrollToMembershipApplication(selectedPlan || "Diamond")}
                  >
                    💎 Memberships
                  </button>

                  <button className="more-item" onClick={openTermsModal}>
                    📄 Website Terms
                  </button>

                  <a
                    className="more-item"
                    href="https://www.instagram.com/krinedalr/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMoreOpen(false)}
                  >
                    📸 Instagram
                  </a>

                  <a
                    className="more-item"
                    href="https://m.me/61581354904730"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMoreOpen(false)}
                  >
                    📘 Messenger
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MODALS */}
      <PeopleCultureModal open={pcOpen} onClose={() => setPcOpen(false)} />
      <TermsModal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        RED_POLICY_LINE={RED_POLICY_LINE}
      />
      <CommunitySupportModal
        open={communityOpen}
        onClose={() => setCommunityOpen(false)}
        RED_POLICY_LINE={RED_POLICY_LINE}
      />

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

              <button type="button" className="btn btn-outline" onClick={() => scrollToId("live-weather")}>
                Live weather status
              </button>

              <a
                href="https://www.instagram.com/krinedalr/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => scrollToMembershipApplication("Diamond")}
              >
                View memberships
              </button>

              <button type="button" className="btn btn-outline" onClick={() => setTermsOpen(true)}>
                Website terms
              </button>
            </div>

            <ul className="hero-bullets">{SERVICES.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className="hero-note">*Response time depends on location &amp; weather conditions.</p>
          </div>

          <aside className="hero-side-card">
            <h2>Fast, respectful property care</h2>
            <p>
              From emergency leaks at midnight to full bathroom tiling that looks like a hotel – we
              keep your home safe, dry and beautifully finished.
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
                Designed for customers who want priority support and clear rules. Memberships are
                approved based on area coverage and current workload.
              </p>
              <p className="plans-sub smallest" style={{ marginTop: 6 }}>
                Note: Membership covers <strong>planning + priority + make-safe</strong> (fair use).
                Permanent repairs/materials are quoted separately.
              </p>
              <p className="plans-sub smallest" style={{ marginTop: 6 }}>
                <strong>Insurer-safe:</strong> Membership is a service agreement —{" "}
                <strong>not insurance</strong>.
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
              <div className="plan-kicker">
                <span className="plan-icon">🥉</span> BRONZE
              </div>
              <div className="plan-name">Bronze — planned support</div>
              <div className="plan-price">{planPriceLabel("Bronze")}</div>
              <ul>
                <li>
                  <strong>Priority booking</strong> for non-emergency jobs
                </li>
                <li>
                  <strong>Member schedule slot</strong> (faster than non-members)
                </li>
                <li>
                  <strong>Discounted inspection</strong> (1× per year, scheduled)
                </li>
                <li>
                  <strong>FREE call-out on GREEN</strong> warnings (make-safe / fair use)
                </li>
              </ul>
              <div className="plan-foot">Best for organised maintenance and reliable scheduling.</div>
              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Bronze")}
                >
                  Apply
                </button>
              </div>
            </div>

            {/* SILVER */}
            <div className="plan">
              <div className="plan-kicker">
                <span className="plan-icon">🥈</span> SILVER
              </div>
              <div className="plan-name">Silver — faster response</div>
              <div className="plan-price">{planPriceLabel("Silver")}</div>
              <ul>
                <li>
                  <strong>Higher priority queue</strong> than Bronze
                </li>
                <li>
                  <strong>Emergency make-safe support</strong> (fair use)
                </li>
                <li>
                  <strong>FREE call-out on GREEN</strong> warnings
                </li>
                <li>
                  <strong>Discounted call-out</strong> on YELLOW / ORANGE
                </li>
              </ul>
              <div className="plan-foot">Great for families &amp; rentals that need faster support.</div>
              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Silver")}
                >
                  Apply
                </button>
              </div>
            </div>

            {/* GOLD */}
            <div className="plan">
              <div className="plan-kicker">
                <span className="plan-icon">🥇</span> GOLD
              </div>
              <div className="plan-name">Gold — priority + reporting</div>
              <div className="plan-price">{planPriceLabel("Gold")}</div>
              <ul>
                <li>
                  <strong>Top priority queue</strong> (before Bronze/Silver)
                </li>
                <li>
                  <strong>FREE call-out on GREEN + YELLOW</strong> warnings
                </li>
                <li>
                  <strong>Discounted call-out</strong> on ORANGE
                </li>
                <li>
                  <strong>Annual inspection</strong> included (scheduled)
                </li>
              </ul>
              <div className="plan-foot">
                Ideal for landlords / multi-property owners who need documentation.
              </div>
              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Gold")}
                >
                  Apply
                </button>
              </div>
            </div>

            {/* DIAMOND */}
            <div className="plan plan-highlight">
              <div className="plan-kicker">
                <span className="plan-icon">💎</span> DIAMOND
              </div>
              <div className="plan-name">Diamond — owner priority cover</div>
              <div className="plan-price">{planPriceLabel("Diamond")}</div>
              <ul>
                <li>
                  <strong>€0 call-out fee</strong> on <strong>GREEN / YELLOW / ORANGE / RED</strong>
                </li>
                <li>
                  <strong>Owner priority contact</strong> + fastest scheduling
                </li>
                <li>
                  <strong>Emergency make-safe</strong> included (fair use)
                </li>
                <li>
                  <strong>Photos + written report</strong> included (insurance-ready)
                </li>
                <li>
                  <strong>Gutter cleaning 1× per year</strong> (scheduled, safe access rules apply)
                </li>
                <li>
                  <strong>Chimney cleaning 1× per year</strong> (scheduled, safe access rules apply)
                </li>
              </ul>
              <div className="plan-foot">
                ✅ Under Diamond, call-out fee is <strong>€0</strong> in all warning levels.
                <br />
                <span className="muted smallest" style={{ color: "#4b5563" }}>
                  {RED_POLICY_LINE}
                </span>
              </div>
              <div className="plan-actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Diamond")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* SAVINGS / EXTRA SERVICES — Collapsible */}
          <div className="member-savings" style={{ marginTop: 22 }}>
            <div className="member-savings-title">Extra savings with memberships</div>
            <p className="member-savings-sub">
              Many customers pay separate companies for these jobs. With KRINEDAL-R memberships, you
              can save money and keep everything under one trusted contact.
            </p>

            <button
              type="button"
              className="savings-toggle"
              onClick={() => setSavingsOpen((v) => !v)}
              aria-expanded={savingsOpen}
            >
              <span>{savingsOpen ? "Hide extra savings" : "Show extra savings"}</span>
              <span className="savings-caret">{savingsOpen ? "▾" : "▸"}</span>
            </button>

            {savingsOpen && (
              <>
                <div className="savings-grid">
                  <div className="savings-item">
                    <div className="savings-name">Chimney cleaning</div>
                    <div className="savings-row">
                      <span>Typical market</span>
                      <strong>€120–€220</strong>
                    </div>
                    <div className="savings-row">
                      <span>With Diamond</span>
                      <strong>Included 1× / year*</strong>
                    </div>
                  </div>

                  <div className="savings-item">
                    <div className="savings-name">Gutter cleaning</div>
                    <div className="savings-row">
                      <span>Typical market</span>
                      <strong>€90–€180</strong>
                    </div>
                    <div className="savings-row">
                      <span>With Diamond</span>
                      <strong>Included 1× / year*</strong>
                    </div>
                  </div>

                  <div className="savings-item">
                    <div className="savings-name">Drain / pipe cleaning (basic)</div>
                    <div className="savings-row">
                      <span>Typical market</span>
                      <strong>€120–€260</strong>
                    </div>
                    <div className="savings-row">
                      <span>Members</span>
                      <strong>Discounted / quoted</strong>
                    </div>
                  </div>

                  <div className="savings-item">
                    <div className="savings-name">Annual inspection report</div>
                    <div className="savings-row">
                      <span>Typical market</span>
                      <strong>€120–€250</strong>
                    </div>
                    <div className="savings-row">
                      <span>With Gold</span>
                      <strong>Included 1× / year*</strong>
                    </div>
                  </div>
                </div>

                <p className="muted smallest" style={{ marginTop: 10 }}>
                  *Included/discounted services depend on safe access and the specific property
                  setup. If scaffolding, MEWP, specialist access, heavy blockages, or extra labour
                  is required, that is quoted separately.
                </p>
              </>
            )}
          </div>

          {/* MEMBERSHIP APPLICATION */}
          <section id="membership-application" style={{ scrollMarginTop: 92 }}>
            <div className="form-card membership-form">
              <h2>Membership application</h2>
              <p className="form-sub">
                Apply in 60 seconds. We’ll confirm coverage &amp; availability by phone / email.
              </p>

              <form onSubmit={onMembershipSubmit}>
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex={-1}
                />

                <div className="form-grid two-col">
                  <div className="field">
                    <label htmlFor="m_name">Your name</label>
                    <input
                      id="m_name"
                      name="Name"
                      type="text"
                      placeholder="Full name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="m_phone">Phone number</label>
                    <input
                      id="m_phone"
                      name="Phone"
                      type="tel"
                      placeholder="+353"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="m_email">Email</label>
                    <input
                      id="m_email"
                      name="Email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                </div>

                <div className="form-grid two-col">
                  <div className="field">
                    <label htmlFor="m_eircode">Eircode</label>
                    <input
                      id="m_eircode"
                      name="Eircode"
                      type="text"
                      placeholder="e.g. C15 XXXX"
                      required
                      autoComplete="postal-code"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="m_town">Town / County</label>
                    <input
                      id="m_town"
                      name="Town/County"
                      type="text"
                      placeholder="e.g. Navan, Co. Meath"
                      required
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                <div className="form-grid two-col">
                  <div className="field">
                    <label htmlFor="m_plan">Plan</label>
                    <select
                      id="m_plan"
                      name="Plan"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      autoComplete="off"
                    >
                      <option>Bronze</option>
                      <option>Silver</option>
                      <option>Gold</option>
                      <option>Diamond</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="m_billing">Billing</label>
                    <select
                      id="m_billing"
                      name="Billing"
                      value={selectedBilling}
                      onChange={(e) => setSelectedBilling(e.target.value)}
                      autoComplete="off"
                    >
                      <option>Yearly</option>
                      <option>Quarterly</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="m_address">Address (optional)</label>
                    <input
                      id="m_address"
                      name="Address"
                      type="text"
                      placeholder="Street / Estate / House number"
                      autoComplete="street-address"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="m_notes">Anything we should know?</label>
                    <textarea
                      id="m_notes"
                      name="Member notes"
                      placeholder="Roof type, recurring leak, rental property, access, pets, etc."
                    />
                  </div>
                </div>

                {/* TERMS (summary) */}
                <div className="form-grid">
                  <div className="field" style={{ gap: 8 }}>
                    <label style={{ marginBottom: 0 }}>Important membership terms (summary)</label>

                    <div className="terms-box">
                      <p style={{ marginBottom: 10 }}>
                        <strong>Non-refundable:</strong> Membership payments are non-refundable once
                        activated, unless required by law.
                      </p>

                      <p style={{ marginBottom: 10 }}>
                        <strong>Fair use:</strong> Membership is for genuine property issues and
                        emergency make-safe. Repeated non-urgent call-outs, misuse, or abusive
                        behaviour may lead to suspension/cancellation without refund.
                      </p>

                      <p style={{ marginBottom: 10 }}>
                        <strong>Emergency scope:</strong> “Make-safe” includes temporary steps to
                        reduce immediate damage (e.g. tarping, temporary sealing, isolating hazards).{" "}
                        <strong>Materials, scaffolding, skips, specialist hire</strong> and
                        permanent repairs are quoted separately.
                      </p>

                      <p style={{ marginBottom: 10 }}>
                        <strong>RED warning safety policy (strict):</strong> {RED_POLICY_LINE}
                      </p>

                      <p style={{ marginBottom: 0 }}>
                        Full Website &amp; Company Terms are available via the{" "}
                        <strong>Website Terms</strong> button (top bar).
                      </p>
                    </div>

                    <label className="agree-row">
                      <input
                        type="checkbox"
                        checked={agreeMembership}
                        onChange={(e) => setAgreeMembership(e.target.checked)}
                        aria-label="Agree to membership terms"
                      />
                      I understand and agree to the membership terms above and the Website &amp;
                      Company Terms.
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn-emerald"
                    disabled={membershipSubmitting}
                  >
                    {membershipSubmitting ? "Sending…" : "Send membership application"}
                  </button>

                  <p className="submit-tip">
                    Once approved, we’ll confirm your plan and activation by phone/email. Emergency
                    line: <strong>083 176 2475</strong>.
                  </p>

                  {membershipMsg && <p className="membership-msg">{membershipMsg}</p>}
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>

      {/* STORM + WEATHER */}
      <section className="section section-alt" id="live-weather" style={{ scrollMarginTop: 92 }}>
        <div className="container grid-2">
          <div className="card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="muted">Red warning, heavy rain or leaking roof – we respond fast, day or night.</p>

            <a href="tel:0831762475" className="btn btn-storm">
              🚨 24/7 STORM EMERGENCY LINE
            </a>

            <div style={{ marginTop: 14 }}>
              <p className="muted small" style={{ fontWeight: 800, marginBottom: 6 }}>
                Community support discounts
              </p>

              <p className="muted small" style={{ lineHeight: 1.55 }}>
                We help where we can — especially during storms. If you are <strong>elderly</strong> or a{" "}
                <strong>single parent</strong> and you are dealing with an urgent emergency (leaks,
                storm damage, unsafe roof), we offer:
              </p>

              <ul className="list" style={{ marginTop: 10 }}>
                <li>
                  <strong>50% OFF</strong> emergency call-out fee for <strong>elderly customers</strong>
                </li>
                <li>
                  <strong>35% OFF</strong> emergency call-out fee for <strong>single parents</strong>
                </li>
                <li>
                  <strong>35% OFF</strong> emergency call-out fee for{" "}
                  <strong>families caring for children with severe disabilities</strong>
                </li>
              </ul>

              <p className="muted smallest" style={{ marginTop: 10 }}>
                <strong>Important:</strong> Discounts apply to the <strong>call-out fee only</strong> and
                are intended for genuine emergency make-safe visits. Materials, skips, scaffolding,
                specialist hire and additional works are charged separately. Availability depends on
                weather, travel distance and workload.
              </p>

              <p className="muted smallest" style={{ marginTop: 10 }}>
                <strong>Safety note:</strong> {RED_POLICY_LINE}
              </p>

              <div style={{ marginTop: 10 }}>
                <button type="button" className="btn btn-outline" onClick={openCommunityModal}>
                  Read Community Support policy
                </button>
              </div>
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

              <div className="callout-foot">
                Includes call-out + make-safe only. Final price confirmed before work.
              </div>
            </div>
          </div>

          <div className="card" id="wind-weather" style={{ scrollMarginTop: 92 }}>
            <h2>Ireland Weather Status</h2>
            <p className="muted small" style={{ marginTop: 8 }}>
              Current: <strong className={weatherUI.textClass}>{weatherStatus.toUpperCase()} warning</strong>
            </p>

            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-weather"
                onClick={() => loadWeather({ manual: true })}
                disabled={refreshingWeather}
              >
                {refreshingWeather ? "Refreshing…" : "↻ Refresh weather"}
              </button>

              <a className="btn btn-outline" href={WIND_MAP_URL} target="_blank" rel="noreferrer">
                🌬️ Live Wind Map
              </a>
            </div>

            {weatherError ? (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                ⚠️ {weatherError}
              </p>
            ) : (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                Auto-updated from Met Éireann warnings
                {fetchedAt && <span> • Last check: {new Date(fetchedAt).toLocaleString()}</span>}
              </p>
            )}

            {weatherWarnings.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <p className="muted small" style={{ fontWeight: 700, marginBottom: 6 }}>
                  Latest warnings:
                </p>
                <ul className="list" style={{ marginTop: 0 }}>
                  {weatherWarnings.slice(0, 3).map((w, idx) => (
                    <li key={w?.id || w?.headline || idx}>
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
                href="https://m.facebook.com/profile.php?id=61581354904730"
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
              “Krinedal-R did our full luxury bathroom tiling last week – Chris just phenomenal. Clean, fast and extremely professional. Couldn't be happier.”
            </p>
            <p className="review-author">— Aoife, Navan</p>
          </article>

          <article className="card review-card">
            <p className="review-text">
              “We had a roof leak in heavy rain, Chris arrived close to 3Am in the midnight, to make the house safe. Snow, rain and storm didn't stop him. Trust 100% saved number - completed, insurance claim report was issued within couple hours. Can’t imagine better service. Thank you Chris.”
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
              Premium luxury tiling often ranges <strong>€60–€85 per m²</strong>; this calculator uses <strong>€75 per m²</strong>.
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
              Flooring labour often ranges <strong>€40–€45</strong> per m². This calculator uses <strong>€40</strong> per m².
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
                  <input
                    id="phone"
                    name="Phone"
                    type="tel"
                    placeholder="+353"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>
              </div>

              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="eircode">Eircode</label>
                  <input
                    id="eircode"
                    name="Eircode"
                    type="text"
                    placeholder="e.g. C15 XXXX"
                    required
                    autoComplete="postal-code"
                  />
                </div>

                <div className="field">
                  <label htmlFor="town">Town / County</label>
                  <input
                    id="town"
                    name="Town/County"
                    type="text"
                    placeholder="e.g. Navan, Co. Meath"
                    required
                    autoComplete="address-level2"
                  />
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
                  <textarea id="details" name="Details" placeholder="Size of area, issues, photos available, access, etc." />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-storm" disabled={submitting}>
                  {submitting ? "Sending…" : "Send estimate request"}
                </button>

                <p className="submit-tip">
                  Thank you for contacting us — our team member will be in touch shortly. In case of emergency call{" "}
                  <strong>083 176 2475</strong>.
                </p>

                {submitMsg && (
                  <p className="membership-msg" style={{ marginTop: 10 }}>
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
              (tiles, flooring, timber, concrete, lighting, membranes, fixings, skips, etc.). Labour is paid after the job is completed.
              For larger jobs, staged payments may apply and will be agreed in writing before we start.
            </p>

            <p className="muted smallest" style={{ marginTop: 10 }}>
              <strong>Safety policy:</strong> {RED_POLICY_LINE}
            </p>
          </div>

          <footer className="footer">
            <div className="footer-brand">
              <span className="footer-name">
                KRINEDAL-<span className="hero-r">R</span>
              </span>
              <p className="muted footer-line">Premium property care, storm or sunshine – Ireland-wide.</p>
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
                <a href="https://www.krinedalr.ie/" target="_blank" rel="noreferrer">
                  www.krinedalr.ie
                </a>
              </p>
              <p>
                Facebook:{" "}
                <a href="https://m.facebook.com/profile.php?id=61581354904730" target="_blank" rel="noreferrer">
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
                <button className="btn footer-call" onClick={() => setTermsOpen(true)}>
                  Website Terms
                </button>
                <button className="btn footer-call" onClick={openCommunityModal}>
                  Community Support
                </button>
              </div>

              <div className="copyright-line">© KRINEDAL-R. All rights reserved.</div>
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
            <IconWhatsApp />
          </a>
          <a
            href="https://m.me/61581354904730"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-msgr"
            aria-label="Messenger"
            title="Messenger"
          >
            <IconMessenger />
          </a>
          <a
            href="https://www.instagram.com/krinedalr/"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-ig"
            aria-label="Instagram"
            title="Instagram"
          >
            <IconInstagram />
          </a>
          <a
            href="mailto:krinedalr@outlook.com"
            className="float-btn float-mail"
            aria-label="Email"
            title="Email"
          >
            <IconMail />
          </a>
        </div>
      </section>
    </main>
  );
}
